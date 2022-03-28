const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const createMail = (from, to, subject, body) => {
  transporter
    .sendMail({
      from,
      to,
      subject,
      html: `<h1>Hola que tal como estas ${body.nombre}?</h1>`,
      attachments: [
        {
          filename: "license.txt",
          path: "https://raw.github.com/nodemailer/nodemailer/master/LICENSE",
        },
      ],
    })
    .then((response) => console.log("sms enviado", response))
    .catch((err) => console.error("ocurrio un error", err));
};

exports.sendEmail = () => createMail();
