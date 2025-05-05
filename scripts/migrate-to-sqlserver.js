// Script para migrar dados do PostgreSQL para o SQL Server
const { Pool } = require('pg');
const sql = require('mssql');

// Configurações do PostgreSQL
const pgConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT || 5432,
};

// Configurações do SQL Server
const sqlConfig = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  server: process.env.SQL_SERVER,
  database: process.env.SQL_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

async function migrateData() {
  // Conectar ao PostgreSQL
  const pgPool = new Pool(pgConfig);
  
  try {
    // Conectar ao SQL Server
    await sql.connect(sqlConfig);
    console.log('Conectado ao SQL Server');
    
    // Obter lista de tabelas do PostgreSQL
    const tablesResult = await pgPool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
    
    const tables = tablesResult.rows.map(row => row.table_name);
    console.log(`Tabelas encontradas: ${tables.join(', ')}`);
    
    // Para cada tabela, migrar os dados
    for (const tableName of tables) {
      console.log(`Migrando tabela: ${tableName}`);
      
      // Obter estrutura da tabela
      const columnsResult = await pgPool.query(`
        SELECT column_name, data_type, character_maximum_length
        FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = $1
      `, [tableName]);
      
      // Obter dados da tabela
      const dataResult = await pgPool.query(`SELECT * FROM "${tableName}"`);
      
      if (dataResult.rows.length === 0) {
        console.log(`Tabela ${tableName} está vazia, pulando...`);
        continue;
      }
      
      // Criar tabela no SQL Server se não existir
      const createTableSQL = generateCreateTableSQL(tableName, columnsResult.rows);
      await sql.query(createTableSQL);
      
      // Inserir dados
      for (const row of dataResult.rows) {
        const insertSQL = generateInsertSQL(tableName, row);
        await sql.query(insertSQL);
      }
      
      console.log(`Tabela ${tableName} migrada com sucesso: ${dataResult.rows.length} registros`);
    }
    
    console.log('Migração concluída com sucesso!');
  } catch (err) {
    console.error('Erro durante a migração:', err);
  } finally {
    // Fechar conexões
    await pgPool.end();
    await sql.close();
  }
}

function generateCreateTableSQL(tableName, columns) {
  const columnDefinitions = columns.map(col => {
    let sqlType = mapPostgresToSQLServerType(col.data_type, col.character_maximum_length);
    return `[${col.column_name}] ${sqlType}`;
  }).join(', ');
  
  return `
    IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = '${tableName}')
    BEGIN
      CREATE TABLE [${tableName}] (
        ${columnDefinitions}
      )
    END
  `;
}

function mapPostgresToSQLServerType(pgType, maxLength) {
  switch (pgType) {
    case 'character varying':
    case 'varchar':
      return maxLength ? `VARCHAR(${maxLength})` : 'VARCHAR(MAX)';
    case 'character':
    case 'char':
      return maxLength ? `CHAR(${maxLength})` : 'CHAR(1)';
    case 'text':
      return 'TEXT';
    case 'integer':
    case 'int':
      return 'INT';
    case 'bigint':
      return 'BIGINT';
    case 'smallint':
      return 'SMALLINT';
    case 'numeric':
    case 'decimal':
      return 'DECIMAL(18, 0)';
    case 'real':
      return 'REAL';
    case 'double precision':
      return 'FLOAT';
    case 'boolean':
      return 'BIT';
    case 'date':
      return 'DATE';
    case 'time':
      return 'TIME';
    case 'timestamp':
    case 'timestamp without time zone':
      return 'DATETIME';
    case 'timestamp with time zone':
      return 'DATETIMEOFFSET';
    case 'bytea':
      return 'VARBINARY(MAX)';
    case 'json':
    case 'jsonb':
      return 'NVARCHAR(MAX)';
    default:
      return 'NVARCHAR(MAX)';
  }
}

function generateInsertSQL(tableName, row) {
  const columns = Object.keys(row);
  const values = columns.map(col => {
    const val = row[col];
    if (val === null) return 'NULL';
    if (typeof val === 'string') return `'${val.replace(/'/g, "''")}'`;
    if (typeof val === 'boolean') return val ? '1' : '0';
    if (val instanceof Date) return `'${val.toISOString()}'`;
    return val;
  });
  
  return `
    INSERT INTO [${tableName}] ([${columns.join('], [')}])
    VALUES (${values.join(', ')})
  `;
}

// Executar a migração
migrateData(); 