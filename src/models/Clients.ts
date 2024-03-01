import { PoolClient, QueryResult } from "pg";
import { pool } from "./Client";
import { Client } from "../typings/Client";

export const createClient = async (
  cliente_id: number,
  limite: number,
  valor: string
): Promise<QueryResult<Client>> => {
  const client: PoolClient = await pool.connect();
  try {
    const result = await client.query<Client>(
      "INSERT INTO saldos (cliente_id, limite, valor) VALUES ($1, $2, $3) RETURNING *",
      [cliente_id, limite, valor]
    );
    return result;
  } finally {
    client.release();
  }
};
