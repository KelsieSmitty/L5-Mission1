// Define the interfaces:

interface InputData {
  model: string;
  year: number;
}

interface OutputData {
  car_value: number;
}

interface ErrorOutput {
  error: string;
}

// Define the function:

function calculateCarValue(input: InputData): OutputData | ErrorOutput {
  //takes the argument "input" of type "InputData", so it expects as object with properties model of type string and year of number.
  // Will return an object of OutputData if successful or ErrorOutput if error.
  const { model, year } = input; //destructuring to extract model & year properties from input object and store them as separate variables.
  const sanitizedModel = model.replace(/[^A-Za-z]/g, "").toUpperCase();
  // clean up the model using the replace method with a regular expression which matches any char that is not an upper or lower case a-z and replaces it with an empty string(removing them essentially)
  //then converts the sanitizedmodel to all upper case so we're only working with uppercase
  if (!sanitizedModel || isNaN(year)) {
    // check if sanitized model is empty(no valid letters) or if year is not a valid number.
    return { error: "There is an error!" }; // if either is true - return error message
  }

  const sum = sanitizedModel
    .split("") // Convert the string to an array of characters
    .reduce((total, char) => total + char.charCodeAt(0) - 64, 0); // Calculate the sum of character positions - A=1 B=2 etc
  //reduce method accumulates the total sum of character positions and initializes it to 0.

  const carValue = sum * 100 + year; // calculate final carValue by multiplying the sum by 100 + year.
  return { car_value: carValue }; //Finally, if everything is successful, we return an object containing the calculated carValue as car_value.
}

// Use the function with provided input data:

//inputData object with a car model "Ghost" and year 2022.
const inputData: InputData = {
  model: "Civic",
  year: 2014,
};
//It calls the calculateCarValue function with inputData as an argument, and the result is stored in the result variable.
const resultCarValue = calculateCarValue(inputData);
console.log(resultCarValue);
