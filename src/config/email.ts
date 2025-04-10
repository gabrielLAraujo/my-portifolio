import nodemailer from 'nodemailer';

/*
Para configurar o Gmail para usar com Nodemailer:

1. Acesse sua conta do Google
2. Vá para Configurações > Segurança
3. Ative a "Verificação em duas etapas" se ainda não estiver ativa
4. Clique em "Senhas de app"
5. Selecione "Email" como app e "Outro" como dispositivo
6. Digite um nome para identificar (ex: "Portfolio Contact Form")
7. Clique em "Gerar"
8. Copie a senha gerada e cole no .env.local:

EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app-gerada
*/

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER, // Você receberá os emails no mesmo endereço
}; 