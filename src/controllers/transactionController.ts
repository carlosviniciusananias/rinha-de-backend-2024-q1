import { Request, Response } from "express";
import { pool } from "../models/Client";

export const createTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { valor, tipo, descricao } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO transactions (client_id, value, type, description) VALUES ($1, $2, $3, $4) RETURNING *",
      [id, valor, tipo, descricao]
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao criar transação:", error);
    res.status(500).json({ message: "Erro ao criar transação" });
  }
};
