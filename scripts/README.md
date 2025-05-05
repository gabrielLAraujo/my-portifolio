# Script de Migração: PostgreSQL para SQL Server

Este script permite migrar dados de um banco de dados PostgreSQL para um banco de dados SQL Server.

## Pré-requisitos

- Node.js instalado
- Acesso ao banco de dados PostgreSQL de origem
- Acesso ao banco de dados SQL Server de destino
- Pacotes npm necessários

## Instalação

1. Instale as dependências necessárias:

```bash
npm install pg mssql dotenv
```

2. Copie o arquivo `.env.example` para `.env` e preencha com suas credenciais:

```bash
cp .env.example .env
```

3. Edite o arquivo `.env` com suas informações de conexão:

```
# Configurações do PostgreSQL
PG_USER=seu_usuario_postgres
PG_HOST=localhost
PG_DATABASE=nome_do_banco_postgres
PG_PASSWORD=sua_senha_postgres
PG_PORT=5432

# Configurações do SQL Server
SQL_USER=seu_usuario_sqlserver
SQL_PASSWORD=sua_senha_sqlserver
SQL_SERVER=seu_servidor_sqlserver
SQL_DATABASE=nome_do_banco_sqlserver
```

## Como usar

Execute o script com o comando:

```bash
node migrate-to-sqlserver.js
```

O script irá:
1. Conectar ao banco de dados PostgreSQL
2. Obter a lista de tabelas
3. Para cada tabela:
   - Obter a estrutura da tabela
   - Criar a tabela correspondente no SQL Server
   - Migrar os dados
4. Exibir o progresso no console

## Observações importantes

- O script mapeia tipos de dados do PostgreSQL para o SQL Server da melhor forma possível
- Tabelas vazias serão puladas
- Se uma tabela já existir no SQL Server, os dados serão adicionados a ela
- O script não migra chaves primárias, chaves estrangeiras ou índices
- Para tabelas grandes, considere usar o modo de lote (batch) para melhorar o desempenho

## Solução de problemas

Se encontrar erros durante a migração:

1. Verifique se as credenciais estão corretas
2. Certifique-se de que o usuário do SQL Server tem permissões para criar tabelas
3. Verifique se há tipos de dados incompatíveis
4. Para erros de timeout, aumente o tempo limite de conexão nas configurações 