"use strict";

const fs = require("fs");

const redColor = "\x1b[31m";
const resetColor = "\x1b[0m";
const yellowColor = "\x1b[33m";

const female_names_path = "./female.json";
const male_names_path = "./male.json";

try {
  const males = require(`./../${male_names_path}`);
  const females = require(`./../${female_names_path}`);

  sortData(males, male_names_path);
  sortData(females, female_names_path);

  console.log(`${yellowColor}Successfully sorted and saved${resetColor}`);
} catch (error) {
  console.log(
    redColor +
      "Error reading or writing JSON files:\n" +
      resetColor +
      error.message
  );
}

/**
 * Function to sort data using custom sorting function
 * @param {Array} data Array to be sorted
 * @returns {Array} Sorted array
 */
function sortData(data, inputFilePath) {
  // Custom sorting function for Albanian alphabet
  const customSort = (a, b) => {
    const collator = new Intl.Collator("sq-AL", { sensitivity: "base" });
    return collator.compare(a, b);
  };

  data.sort(customSort);
  try {
    fs.writeFileSync(inputFilePath, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("Error", error);
  }
}
