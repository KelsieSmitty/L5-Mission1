// Import value and rating
import { resultCarValue } from "./api1.js";
import { resultRiskRating } from "./api2.js";
// Define the interfaces:

interface InputData {
  car_value: number;
  risk_rating: number;
}

interface OutputData {
  monthly_premium?: number;
  yearly_premium?: number;
  error?: string;
}

function convertToQuote(input: InputData): OutputData {
  if (input.car_value <= 0 || input.risk_rating < 1 || input.risk_rating > 5) {
    return { error: "Invalid input values" };
  }

  const yearlyPremium = (input.car_value * input.risk_rating) / 100;
  const monthlyPremium = yearlyPremium / 12;

  return {
    monthly_premium: monthlyPremium,
    yearly_premium: yearlyPremium,
  };
}

// Example usage
const input: InputData = {
  car_value: resultCarValue,
  risk_rating: resultRiskRating,
};

const output: OutputData = convertToQuote(input);
console.log(output);
