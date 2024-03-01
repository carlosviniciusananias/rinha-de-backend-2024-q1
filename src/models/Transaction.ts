import { PoolClient, QueryResult } from "pg";
import { pool } from "./Client";
import { Transaction } from "../typings/Transaction";

export const createTransaction = async (
  cliente_id: number,
  valor: number,
  tipo: string,
  descricao: string,
  realizada_em: Date
): Promise<QueryResult<Transaction>> => {
  const client: PoolClient = await pool.connect();
  try {
    const result = await client.query<Transaction>(
      "INSERT INTO transacao (cliente_id, valor, tipo, descricao, realizada_em) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [cliente_id, valor, tipo, descricao, realizada_em]
    );
    return result;
  } finally {
    client.release();
  }
};
