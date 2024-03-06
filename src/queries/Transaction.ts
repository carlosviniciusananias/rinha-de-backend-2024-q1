import { query } from "../config/dbConfig";

export const createTransaction = async (
  cliente_id: number,
  valor: number,
  tipo: string,
  descricao: string
) => {
  const result = await query(
    "INSERT INTO transacao (cliente_id, valor, tipo, descricao) VALUES ($1, $2, $3, $4) RETURNING *",
    [cliente_id, valor, tipo, descricao]
  );
  return result;
};

export const getTransactions = async (id: number) => {
  const result = await query(
    "SELECT valor, tipo, descricao, realizada_em FROM transacao WHERE cliente_id = $1",
    [id]
  );
  return result;
};
