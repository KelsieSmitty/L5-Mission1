// Define the interfaces:
// As they are optional properties I'm using ?
function convertHistory(input) {
    var keywordList = ["collide", "crash", "scratch", "bump", "smash"];
    var claimHistory = input.claim_history.toLowerCase(); // change all of the input string to lowercase & store as claimHistory
    var riskRating = 1; // Default risk rating is 1 - let so it can be updated
    for (var _i = 0, keywordList_1 = keywordList; _i < keywordList_1.length; _i++) {
        var keyword = keywordList_1[_i];
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
var input = {
    claim_history: "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes.",
};
var output = convertHistory(input);
console.log(output);
