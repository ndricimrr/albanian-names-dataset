"use strict";

const fs = require("fs");

const redColor = "\x1b[31m";
const resetColor = "\x1b[0m";
const greenColor = "\x1b[32m";

const femaleNamesPath = "./female.json";
const maleNamesPath = "./male.json";

try {
  const males = require(`./../${maleNamesPath}`);
  const females = require(`./../${femaleNamesPath}`);

  checkSorting(males, maleNamesPath);
  checkSorting(females, femaleNamesPath);

  console.log(`${greenColor}Files are sorted properly.${resetColor}`);
} catch (error) {
  console.log(
    redColor +
      "Error reading JSON files or checking sorting:\n" +
      resetColor +
      error.message
  );
  process.exit(1); // Exit with a non-zero status to indicate failure
}

/**
 * Function to check if data is sorted using custom sorting function
 * @param {Array} data Array to be checked
 * @param {string} inputFilePath Path to the input file
 */
function checkSorting(data, inputFilePath) {
  // Custom sorting function for Albanian alphabet
  const customSort = (a, b) => {
    const collator = new Intl.Collator("sq-AL", { sensitivity: "base" });
    return collator.compare(a, b);
  };

  for (let i = 1; i < data.length; i++) {
    if (customSort(data[i - 1], data[i]) > 0) {
      console.error(
        redColor +
          `File ${inputFilePath} is not sorted at index ${i - 1}.\n` +
          resetColor
      );
      console.error(
        redColor +
          `\nRun 'npm run build' and commit the result again.\n` +
          resetColor
      );
      process.exit(1); // Exit with a non-zero status to indicate failure
    }
  }
}
