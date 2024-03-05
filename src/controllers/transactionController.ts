import { Request, Response } from "express";
import { pool } from "../models/Client";
import { calculateNewBalance } from "../helpers/helpers";
import { TRANSACTION_TYPE } from "../helpers/constants";

export const createTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { valor, tipo, descricao } = req.body;

  try {
    const { rows } = await pool.query("SELECT * FROM clientes WHERE id = $1", [
      id,
    ]);

    if (!rows[0] || rows[0].id < 1 || rows[0].id > 5) {
      return res.status(404).json({
        message: "Error: user not identified in the system",
      });
    }

    const currentBalance = rows[0].valor;
    const newBalance = calculateNewBalance(currentBalance, valor, tipo);

    if (!Number.isInteger(valor)) {
      return res.status(400).json({
        message: "Error processing transaction: value is not an integer",
      });
    }

    if (tipo === TRANSACTION_TYPE.CREDIT && newBalance > rows[0].limite) {
      return res.status(400).json({
        message: "Error processing transaction: value cannot exceed limit",
      });
    }

    if (tipo === TRANSACTION_TYPE.DEBIT && newBalance < 0) {
      return res.status(422).json({
        message:
          "Error processing transaction: amount cannot be less than balance",
      });
    }

    await pool.query(
      "INSERT INTO transacao (cliente_id, tipo, valor, descricao) VALUES ($1, $2, $3, $4) RETURNING *",
      [id, tipo, valor, descricao]
    );

    const result = await pool.query(
      "UPDATE clientes SET valor = $1 WHERE id = $2 RETURNING *",
      [newBalance, id]
    );

    return res.status(200).json({
      limite: result.rows[0].limite,
      saldo: result.rows[0].valor,
    });
  } catch (error) {
    console.error("Error processing transaction:", error);
    return res.status(500).json({ message: "Error processing transaction" });
  }
};
