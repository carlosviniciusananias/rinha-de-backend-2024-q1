import express from "express";
import { createTransaction } from "../controllers/transactionController";

const router = express.Router();

router.post("/clientes/:id/transacoes", createTransaction);

export default router;
