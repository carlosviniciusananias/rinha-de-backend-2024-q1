import { pool } from "../models/Client";

export const query = async (text: string, params: any[]): Promise<any> => {
  const start = Date.now();
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    const duration = Date.now() - start;
    console.log("Executou query:", { text, duration, rows: result.rowCount });
    return result.rows;
  } finally {
    client.release();
  }
};
