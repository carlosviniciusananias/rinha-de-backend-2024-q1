import { Request, Response } from "express";
import { pool } from "../models/Client";

export const getStatement = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "SELECT * FROM transactions WHERE client_id = $1",
      [id]
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Erro ao obter extrato de transações:", error);
    res.status(500).json({ message: "Erro ao obter extrato de transações" });
  }
};
