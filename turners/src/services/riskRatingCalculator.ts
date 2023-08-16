export function convertHistory(claim_history: string) {
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
