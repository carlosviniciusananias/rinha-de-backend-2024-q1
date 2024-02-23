import { PoolClient, QueryResult } from "pg";
import { pool } from "./Client";

export interface Transaction {
  id: number;
  client_id: number;
  value: number;
  type: string;
  description: string;
}

export const createTransaction = async (
  clientId: number,
  value: number,
  type: string,
  description: string
): Promise<QueryResult<Transaction>> => {
  const client: PoolClient = await pool.connect();
  try {
    const result = await client.query<Transaction>(
      "INSERT INTO transactions (client_id, value, type, description) VALUES ($1, $2, $3, $4) RETURNING *",
      [clientId, value, type, description]
    );
    return result;
  } finally {
    client.release();
  }
};
