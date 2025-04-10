import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '@/config/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    await transporter.sendMail({
      ...mailOptions,
      subject: `Contato do Portfólio - ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
      html: `
        <h2>Novo contato do portfólio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar email. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
} 