"use strict";

const fs = require("fs");

const redColor = "\x1b[31m";
const resetColor = "\x1b[0m";
const yellowColor = "\x1b[33m";

const female_names_path = "../female.json";
const male_names_path = "../male.json";
const inputFilePath2 = null;

try {
  //   console.log(inputFilePath1);
  const data1 = require(`./${male_names_path}`);
  // const females = require(`./${female_names_path}`);
  console.log(typeof data1, data1.slice(47, 59));

  let sortedData1 = sortData(data1);

  console.log(typeof data1, sortedData1.slice(47, 59));

  if (inputFilePath2) {
    const data2 = JSON.parse(fs.readFileSync(inputFilePath2, "utf8"));
    let sortedData2 = sortData(data2);
    fs.writeFileSync(
      inputFilePath2,
      JSON.stringify(sortedData2, null, 2),
      "utf8"
    );
  }

  const data11 = require(`./${male_names_path}`);
  // const females = require(`./${female_names_path}`);
  console.log(typeof data1, data11.slice(47, 59));

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
function sortData(data) {
  // Custom sorting function for Albanian alphabet
  const customSort = (a, b) => {
    const collator = new Intl.Collator("sq-AL", { sensitivity: "base" });
    return collator.compare(a, b);
  };

  data.sort(customSort);
  return data;
}
