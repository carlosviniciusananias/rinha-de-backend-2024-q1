import express from "express";
import { Request, Response } from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Bem-vindo ao servidor Express com PostgreSQL!");
});

app.use("/api", require("./routes"));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
