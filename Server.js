// Zungo Net Backend - Node.js + Express

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
  res.json({ message: "Zungo Net Backend Online 💙" });
});

// Porta automática para Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Zungo Net rodando na porta ${PORT}`);
});
