// Define the interfaces:

interface InputData {
  claim_history: string;
}

interface OutputData {
  risk_rating?: number;
  error?: string;
}
// As they are optional properties I'm using ?

function convertHistory(input: InputData): OutputData {
  const keywordList = ["collide", "crash", "scratch", "bump", "smash"];
  const claimHistory = input.claim_history.toLowerCase(); // change all of the input string to lowercase & store as claimHistory

  let riskRating = 1; // Default risk rating is 1 - let so it can be updated

  for (const keyword of keywordList) {
    //if the input data includes a flagged keyword
    if (claimHistory.includes(keyword)) {
      riskRating++; //increase risk rating by 1 per keyword count.
    }
  }

  // Cap risk rating at 5
  if (riskRating > 5) {
    riskRating = 5;
  }

  return { risk_rating: riskRating };
}

// Test data:
const input: InputData = {
  claim_history:
    "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes.",
};

const output: OutputData = convertHistory(input);
console.log(output);
