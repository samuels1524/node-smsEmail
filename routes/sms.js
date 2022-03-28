const express = require("express");
const router = express.Router();
const twilio = require("twilio");

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const sendNumber = process.env.TWILIO_NUMBER;

const client = new twilio(accountSid, authToken);

router.post("/",(req, res)=>{
    const { msj, number } = req.body;
    client.messages
      .create({
        body: msj,
        to: number,
        from: sendNumber,
      })
      .then((response) =>
        res.status(200).json({ msj: "sms enviado", data: response })
      )
      .catch((err) =>
        res.status(500).json({ msj: "ocurrio un error", error: err })
      );
});

module.exports = router;