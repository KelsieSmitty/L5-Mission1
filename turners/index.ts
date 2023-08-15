import * as express from "express";

const app = express();
const port = 4000;

app.use(express.json());

/* ---------------------Function 1--------------------------- */
function convertModel(letter: string) {
  letter = letter.toUpperCase();
  return letter.charCodeAt(0) - 64;
}

function calculateCarValue(model: string, year: number) {
  let carValue = 0;
  for (const letter of model) {
    carValue += convertModel(letter);
  }
  carValue = carValue * 100 + year;
  return { car_value: carValue };
}

/* ---------------------Function 1--------------------------- */

/* ---------------------Function 2--------------------------- */

function convertHistory(claim_history: string) {
  const keywordList = ["collide", "crash", "scratch", "bump", "smash"];
  let riskRating = 0;
  const cleanString = claim_history.toLowerCase();
  const words = cleanString.split(" ");

  for (const word of words) {
    for (const keyword of keywordList) {
      if (word.includes(keyword)) {
        console.log(`Matched keyword '${keyword}' in word '${word}'`);
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

function convertToQuote(car_value: number, risk_rating: number) {
  let result = (car_value * risk_rating) / 100;
  return {
    monthly_premium: Math.round((result / 12) * 100) / 100,
    yearly_premium: Math.round(result * 100) / 100,
  };
}
/* ---------------------Function 3--------------------------- */

/* ---------------------API 1--------------------------- */

app.post("/car", (req, res) => {
  if (req?.body?.model == null || req?.body?.year == null) {
    res.sendStatus(400);
  }
  const { model, year } = req.body;
  res.send(calculateCarValue(model, year));
});
/* ---------------------API 1--------------------------- */

/* ---------------------API 2--------------------------- */

app.post("/risk", (req, res) => {
  if (req?.body?.claim_history == null) {
    res.status(400);
  }
  const { claim_history } = req.body;
  res.send(convertHistory(claim_history));
});

/* ---------------------API 2--------------------------- */

/* ---------------------API 3--------------------------- */
app.post("/quote", (req, res) => {
  if (req?.body?.car_value == null || req?.body?.risk_rating == null) {
    res.status(400);
  }
  const { car_value, risk_rating } = req.body;
  res.send(convertToQuote(car_value, risk_rating));
});
/* ---------------------API 3--------------------------- */

app.listen(port, () => {
  console.log("Server is listening");
});
