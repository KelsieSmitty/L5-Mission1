import { Request, Response } from "express";
import { convertHistory } from "../services/riskRatingCalculator";

export const getRiskRating = (req: Request, res: Response) => {
  if (req?.body?.claim_history == null) {
    res.status(400);
  }
  const { claim_history } = req.body;
  res.send(convertHistory(claim_history));
};
