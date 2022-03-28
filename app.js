require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const app = express();
const sms = require("./routes/sms");
const email = require("./routes/email");

app.use(express.json());
app.use(cors());

//Rutas
app.use("/sendsms", sms);
app.use("/sendemail", email);

app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
