function convertModel(letter: string) {
  letter = letter.toUpperCase();
  if (letter >= "A" && letter <= "Z") {
    return letter.charCodeAt(0) - 64;
  } else if (letter >= "0" && letter <= "9") {
    return parseInt(letter);
  } else {
    return 0;
  }
}

export function calculateCarValue(model: string, year: number) {
  if (model == null || model.trim() === "") {
    throw new Error("Model name is required.");
  }
  if (isNaN(year) || !Number.isInteger(year) || year < 1500 || year > 2050) {
    throw new Error("Invalid year provided.");
  }
  const cleanedModel = model.replace(/[^a-zA-Z0-9]/g, "");

  let carValue = 0;
  for (const letter of cleanedModel) {
    carValue += convertModel(letter);
  }
  carValue = carValue * 100 + year;
  return { car_value: carValue };
}
