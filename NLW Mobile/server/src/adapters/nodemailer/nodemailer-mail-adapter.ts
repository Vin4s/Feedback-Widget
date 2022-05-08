import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "659faaa8cfa4a6",
    pass: "7323ff27ba51de"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
  await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com',
      to: 'Vinícius Oliveira <vinicius.hayato@hotmail.com>',
      subject,
      html: body,
  });

  };
}