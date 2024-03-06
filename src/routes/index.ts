import express from "express";
import transactionRoutes from "./transactionRoutes";
import statementRoutes from "./statementRoutes";

const router = express.Router();

router.use(transactionRoutes);
router.use(statementRoutes);

module.exports = router;
