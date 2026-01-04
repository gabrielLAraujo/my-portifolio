import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '@/config/email';
import { validateContactForm } from '@/lib/validators/contact.validator';
import { errorLogger } from '@/lib/errors/ErrorLogger';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input data
    const validation = validateContactForm(body);

    if (!validation.success) {
      const errors = validation.error.issues.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      }));

      return NextResponse.json(
        {
          success: false,
          error: 'Dados inválidos',
          errors,
        },
        { status: 400 }
      );
    }

    const { name, email, message, honeypot } = validation.data;

    // Check honeypot (anti-bot)
    if (honeypot) {
      errorLogger.warn('Honeypot field filled - potential bot', { email });
      return NextResponse.json({ success: false, error: 'Requisição inválida' }, { status: 400 });
    }

    // Send email
    await transporter.sendMail({
      ...mailOptions,
      subject: `Contato do Portfólio - ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Novo contato do portfólio
          </h2>
          <div style="margin: 20px 0;">
            <p><strong style="color: #1e40af;">Nome:</strong> ${name}</p>
            <p><strong style="color: #1e40af;">Email:</strong> ${email}</p>
            <div style="margin-top: 20px;">
              <strong style="color: #1e40af;">Mensagem:</strong>
              <div style="background: #f3f4f6; padding: 15px; border-radius: 5px; margin-top: 10px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            <p>Este email foi enviado através do formulário de contato do portfólio.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Email enviado com sucesso!',
    });
  } catch (error) {
    errorLogger.log(error as Error, { context: 'contact-api' });

    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao enviar email. Tente novamente mais tarde.',
      },
      { status: 500 }
    );
  }
}
