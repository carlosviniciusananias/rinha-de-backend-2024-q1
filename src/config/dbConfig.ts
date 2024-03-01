import { pool } from "../models/Client";

export const query = async (text: string, params: any[]): Promise<any> => {
  const client = await pool.connect();

  try {
    const result = await client.query(text, params);
    return result.rows;
  } finally {
    client.release();
  }
};
