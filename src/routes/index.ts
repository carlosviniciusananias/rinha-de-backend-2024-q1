import express from "express";
import clientRoutes from "./clientRoutes";
import transactionRoutes from "./transactionRoutes";
import statementRoutes from "./statementRoutes";

const router = express.Router();

router.use(clientRoutes);
router.use(transactionRoutes);
router.use(statementRoutes);

module.exports = router;
