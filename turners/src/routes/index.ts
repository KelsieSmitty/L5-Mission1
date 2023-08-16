import express, { Router } from "express";
import { getCarValue } from "../controllers/carValueController";
import { getRiskRating } from "../controllers/riskRatingController";
import { getQuote } from "../controllers/quoteController";

const router = express.Router();

router.post("/value", getCarValue);

router.post("/risk", getRiskRating);

router.post("/quote", getQuote);

export default router;
