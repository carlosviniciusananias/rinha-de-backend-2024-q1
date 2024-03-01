import express from "express";
import { createClient } from "../controllers/clientController";

const router = express.Router();

router.post("/clientes/:id/", createClient);

export default router;
