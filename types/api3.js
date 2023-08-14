// Import value and rating
// import resultCarValue from "./api1.js";
// import resultRiskRating from "./api2.js";
// Define the interfaces:
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
    car_value: 3456,
    risk_rating: 3,
};
var output = convertToQuote(input);
console.log(output);
