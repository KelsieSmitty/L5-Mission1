export function convertToQuote(car_value: number, risk_rating: number) {
  let result = (car_value * risk_rating) / 100;
  const monthly_premium = result / 12;
  const yearly_premium = result;
  return {
    monthly_premium: +monthly_premium.toFixed(1),
    yearly_premium: +yearly_premium.toFixed(1),
  };
}
