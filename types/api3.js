"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import value and rating
var api1_js_1 = require("./api1.js");
var api2_js_1 = require("./api2.js");
function convertToQuote(input) {
    if (input.car_value <= 0 || input.risk_rating < 1 || input.risk_rating > 5) {
        return { error: "Invalid input values" };
    }
    var yearlyPremium = (input.car_value * input.risk_rating) / 100;
    var monthlyPremium = yearlyPremium / 12;
    return {
        monthly_premium: monthlyPremium,
        yearly_premium: yearlyPremium,
    };
}
// Example usage
var input = {
    car_value: api1_js_1.resultCarValue,
    risk_rating: api2_js_1.resultRiskRating,
};
var output = convertToQuote(input);
console.log(output);
