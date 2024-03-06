require("dotenv").config();
import { Pool } from "pg";

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432,
});

export const query = async (text: string, params: any[]): Promise<any> => {
  const client = await pool.connect();

  try {
    const result = await client.query(text, params);
    return result.rows;
  } finally {
    client.release();
  }
};
