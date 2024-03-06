import { QueryResult } from "pg";
import { Client } from "../typings/Client";
import { query } from "../config/dbConfig";

export const createClient = async (
  cliente_id: number,
  limite: number,
  saldo: string
): Promise<QueryResult<Client>> => {
  const result = query(
    "INSERT INTO clientes (cliente_id, limite, saldo) VALUES ($1, $2, $3) RETURNING *",
    [cliente_id, limite, saldo]
  );

  return result;
};

export const getClient = async (id: number) => {
  const result = await query("SELECT * FROM clientes WHERE id = $1", [id]);

  return result;
};

export const updateClient = async (saldo: number, id: number) => {
  const result = await query(
    "UPDATE clientes SET saldo = $1 WHERE id = $2 RETURNING *",
    [saldo, id]
  );

  return result;
};
