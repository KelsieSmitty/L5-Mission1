"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 4000;
app.use(express_1.default.json());
/* ---------------------Function 1--------------------------- */
function convertModel(letter) {
    letter = letter.toUpperCase();
    return letter.charCodeAt(0) - 64;
}
function calculateCarValue(model, year) {
    let carValue = 0;
    for (const letter of model) {
        carValue += convertModel(letter);
    }
    carValue = carValue * 100 + year;
    return { car_value: carValue };
}
/* ---------------------Function 1--------------------------- */
/* ---------------------Function 2--------------------------- */
function convertHistory(claim_history) {
    const keywordList = ["collide", "crash", "scratch", "bump", "smash"];
    let riskRating = 1;
    const claimHistory = claim_history.toLowerCase().split(" ");
    for (const keyword of keywordList) {
        if (claimHistory.includes(keyword)) {
            riskRating++;
        }
    }
    if (riskRating > 5) {
        riskRating = 5;
    }
    return { risk_rating: riskRating };
}
/* ---------------------Function 2--------------------------- */
/* ---------------------Function 3--------------------------- */
function convertToQuote(car_value, risk_rating) {
    let result = (car_value * risk_rating) / 100;
    return {
        monthly_premium: Math.round((result / 12) * 100) / 100,
        yearly_premium: Math.round(result * 100) / 100,
    };
}
/* ---------------------Function 3--------------------------- */
/* ---------------------API 1--------------------------- */
app.post("/car", (req, res) => {
    var _a, _b;
    if (((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.model) == null || ((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.year) == null) {
        res.sendStatus(400);
    }
    const { model, year } = req.body;
    res.send(calculateCarValue(model, year));
});
/* ---------------------API 1--------------------------- */
/* ---------------------API 2--------------------------- */
app.post("/risk", (req, res) => {
    var _a;
    if (((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.claim_history) == null) {
        res.status(400);
    }
    const { claim_history } = req.body;
    res.send(convertHistory(claim_history));
});
/* ---------------------API 2--------------------------- */
/* ---------------------API 3--------------------------- */
app.post("/quote", (req, res) => {
    var _a, _b;
    if (((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.car_value) == null || ((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.risk_rating) == null) {
        res.status(400);
    }
    const { car_value, risk_rating } = req.body;
    res.send(convertToQuote(car_value, risk_rating));
});
/* ---------------------API 3--------------------------- */
app.listen(port, () => {
    console.log("Server is listening");
});
