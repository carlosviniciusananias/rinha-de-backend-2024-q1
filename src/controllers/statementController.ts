import { Request, Response } from "express";
import { handleError } from "../helpers/helpers";
import { getClient } from "../queries/Clients";
import { getTransactions } from "../queries/Transaction";

export const getStatement = async (req: Request, res: Response) => {
  const { id } = req.params;
  const Id = Number(id);

  try {
    if (Id > 5)
      return handleError(res, 404, "Error: user not identified in the system");

    const user = await getClient(Id);
    const transactions = await getTransactions(Id);

    return res.status(200).json({
      saldo: {
        total: user[0].saldo,
        data_extrato: new Date().toISOString(),
        limite: user[0].limite,
      },
      ultimas_transacoes: transactions,
    });
  } catch (error) {
    return handleError(res, 500, "Error: obtaining transaction statement");
  }
};
