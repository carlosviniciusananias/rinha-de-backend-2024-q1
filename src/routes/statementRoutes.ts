import express from "express";
import { getStatement } from "../controllers/statementController";

const router = express.Router();

router.get("/clientes/:id/extrato", getStatement);

export default router;

