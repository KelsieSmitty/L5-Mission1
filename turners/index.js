"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 4000;
app.use(express.json());
/* ---------------------Function 1--------------------------- */
function convertModel(letter) {
    letter = letter.toUpperCase();
    return letter.charCodeAt(0) - 64;
}
function calculateCarValue(model, year) {
    var carValue = 0;
    for (var _i = 0, model_1 = model; _i < model_1.length; _i++) {
        var letter = model_1[_i];
        carValue += convertModel(letter);
    }
    carValue = carValue * 100 + year;
    return { car_value: carValue };
}
/* ---------------------Function 1--------------------------- */
/* ---------------------Function 2--------------------------- */
function convertHistory(claim_history) {
    var keywordList = ["collide", "crash", "scratch", "bump", "smash"];
    var riskRating = 0;
    var cleanString = claim_history.toLowerCase();
    var words = cleanString.split(" ");
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        for (var _a = 0, keywordList_1 = keywordList; _a < keywordList_1.length; _a++) {
            var keyword = keywordList_1[_a];
            if (word.includes(keyword)) {
                console.log("Matched keyword '".concat(keyword, "' in word '").concat(word, "'"));
                riskRating++;
                break; // If one keyword is found in a word, no need to check the rest
            }
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
    var result = (car_value * risk_rating) / 100;
    var monthly_premium = result / 12;
    var yearly_premium = result;
    return {
        monthly_premium: +monthly_premium.toFixed(2),
        yearly_premium: +yearly_premium.toFixed(2),
    };
}
/* ---------------------Function 3--------------------------- */
/* ---------------------API 1--------------------------- */
app.post("/car", function (req, res) {
    var _a, _b;
    if (((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.model) == null || ((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.year) == null) {
        res.sendStatus(400);
    }
    var _c = req.body, model = _c.model, year = _c.year;
    res.send(calculateCarValue(model, year));
});
/* ---------------------API 1--------------------------- */
/* ---------------------API 2--------------------------- */
app.post("/risk", function (req, res) {
    var _a;
    if (((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.claim_history) == null) {
        res.status(400);
    }
    var claim_history = req.body.claim_history;
    res.send(convertHistory(claim_history));
});
/* ---------------------API 2--------------------------- */
/* ---------------------API 3--------------------------- */
app.post("/quote", function (req, res) {
    var _a, _b;
    if (((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.car_value) == null || ((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.risk_rating) == null) {
        res.status(400);
    }
    var _c = req.body, car_value = _c.car_value, risk_rating = _c.risk_rating;
    res.send(convertToQuote(car_value, risk_rating));
});
/* ---------------------API 3--------------------------- */
app.listen(port, function () {
    console.log("Server is listening");
});
/* ---------------------TEST DATA--------------------------- */
// Inside Function 3, call Function 1 and Function 2 to get their results
function testFunction3() {
    var model = "Civic";
    var year = 2014;
    var claimHistory = "My only claim was a crash into my house's garage door that left a scratch on my car.  There are no other crashes.";
    var carValueResult = calculateCarValue(model, year);
    console.log("Function 1 Result:", carValueResult);
    var riskRatingResult = convertHistory(claimHistory);
    console.log("Function 2 Result:", riskRatingResult);
    // Use the results from Function 1 and Function 2
    var carValue = carValueResult.car_value;
    var riskRating = riskRatingResult.risk_rating;
    var quoteResult = convertToQuote(carValue, riskRating);
    console.log("Function 3 Result:", quoteResult);
}
// Call the test function
testFunction3();
/* ---------------------TEST DATA--------------------------- */
