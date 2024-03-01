import { Request, Response } from "express";
import { pool } from "../models/Client";
import { Transaction } from "../typings/Transaction";

export const getStatement = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM clientes WHERE id = $1", [
      id,
    ]);

    const transactions = await pool.query(
      "SELECT valor, tipo, descricao, realizada_em FROM transacao WHERE cliente_id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const { limite, valor } = result.rows[0];

    return res.status(200).json({
      saldo: {
        total: valor,
        data_extrato: new Date().toISOString(),
        limite,
      },
      ultimas_transacoes: transactions.rows,
    });
  } catch (error) {
    console.error("Error obtaining transaction statement:", error);
    return res
      .status(500)
      .json({ message: "Error obtaining transaction statement" });
  }
};
