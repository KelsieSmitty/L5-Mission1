import { Request, Response } from "express";
import { calculateCarValue } from "../services/carValueCalculator";

export const getCarValue = (req: Request, res: Response) => {
  if (req?.body?.model == null || req?.body?.year == null) {
    res.sendStatus(400);
  }
  const { model, year } = req.body;
  res.send(calculateCarValue(model, year));
};
