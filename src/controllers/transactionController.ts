import { Request, Response } from "express";
import { TRANSACTION_TYPE } from "../helpers/constants";
import { createTransaction } from "../queries/Transaction";
import { getClient, updateClient } from "../queries/Clients";
import { calculateNewBalance, handleError } from "../helpers/helpers";

export const transactionController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { valor, tipo, descricao } = req.body;
  const Id = Number(id);

  try {
    if (Id > 5)
      return handleError(res, 404, "Error: user not identified in the system");

    if (valor < 0 || !Number.isInteger(valor))
      return handleError(
        res,
        422,
        "Error processing transaction: value is not an integer"
      );

    if (tipo !== "c" && tipo !== "d")
      return handleError(res, 422, "Error invalid type");

    if (!Boolean(descricao) || descricao.length > 10)
      return handleError(res, 422, "Error invalid type");

    const user = await getClient(Id);

    const currentBalance = user[0].saldo;
    const newBalance = calculateNewBalance(currentBalance, valor, tipo);

    if (tipo === TRANSACTION_TYPE.CREDIT && newBalance > user[0].limite)
      return handleError(
        res,
        400,
        "Error processing transaction: value cannot exceed limit"
      );

    if (tipo === TRANSACTION_TYPE.DEBIT && newBalance < 0)
      return handleError(
        res,
        422,
        "Error processing transaction: amount cannot be less than balance"
      );

    await createTransaction(Id, valor, tipo, descricao);
    const result = await updateClient(newBalance, Id);

    return res.status(200).json({
      limite: result[0].limite,
      saldo: result[0].saldo,
    });
  } catch (error) {
    return handleError(res, 500, "Error processing transaction");
  }
};
