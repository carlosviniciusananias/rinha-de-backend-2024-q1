import express from "express";
import { transactionController } from "../controllers/transactionController";

const router = express.Router();

router.post("/clientes/:id/transacoes", transactionController);

export default router;
