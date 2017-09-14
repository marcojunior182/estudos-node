import express from "express";
import consign from "consign";
const PORT = 3001;

const app = express();
app.set("port", PORT)

consign()
.include("models")
.then ("routes")
.then("libs/boot.js")
.into(app);

app.listen(PORT, () => console.log(`NTask API - porta ${PORT}`));
