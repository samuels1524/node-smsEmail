const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

router.post("/", (req, res) => {
  const { from, to, subject, body } = req.body;
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
    .then((response) =>
      res.status(200).json({ msj: "email enviado", data: response })
    )
    .catch((err) =>
      res.status(500).json({ msj: "ocurrio un error", error: err })
    );
});

module.exports = router;
