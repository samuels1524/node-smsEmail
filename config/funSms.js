const twilio = require("twilio");

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const sendNumber = process.env.TWILIO_NUMBER;

const client = new twilio(accountSid, authToken);

const createSMS = (msj, number) => {
  client.messages
    .create({
      body: msj,
      to: number,
      from: sendNumber,
    })
    .then((response) => console.log("sms enviado", response))
    .catch((err) => console.error("ocurrio un error", err));
};

exports.sendSMS = () => createSMS()
