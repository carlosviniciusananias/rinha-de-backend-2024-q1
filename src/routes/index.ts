import express from "express";
const router = express.Router();

router.get("/example", (req, res) => {
  res.json({ message: "Exemplo de rota da API" });
});

router.post("/clientes/:id/transacoes", (req, res) => {
  res.status(200).json({ message: "POST de rota da API" });
});

module.exports = router;
