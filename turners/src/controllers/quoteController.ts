import { Request, Response } from "express";
import { convertToQuote } from "../services/quoteCalculator";

export const getCarValue = (req: Request, res: Response) => {
  if (req?.body?.model == null || req?.body?.year == null) {
    if (req?.body?.car_value == null || req?.body?.risk_rating == null) {
      res.status(400);
    }
    const { car_value, risk_rating } = req.body;
    res.send(convertToQuote(car_value, risk_rating));
  }
};
