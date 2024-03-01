import { Request, Response } from "express";
import { pool } from "../models/Client";

export const createClient = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { cliente_id, limite, valor } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO clientes (id, cliente_id, limite, valor) VALUES ($1, $2, $3, $4) RETURNING *",
      [id, cliente_id, limite, valor]
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Error creating client" });
  }
};
