import { Response } from "express";
import { TRANSACTION_TYPE } from "./constants";

export const calculateNewBalance = (
  currentBalance: number,
  transactionAmount: number,
  transactionType: string
) => {
  if (transactionType === TRANSACTION_TYPE.CREDIT) {
    return Number(currentBalance) + transactionAmount;
  } else {
    return Number(currentBalance) - transactionAmount;
  }
};

export const handleError = (
  res: Response,
  statusCode: number,
  message: string
) => {
  return res.status(statusCode).json({ message });
};
