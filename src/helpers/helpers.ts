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
