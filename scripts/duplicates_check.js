"use strict";

const fs = require("fs");
const all_names_path = "../all_names.json";
const male_names_path = "../female.json";
const female_names_path = "../male.json";

// ANSI escape code for red color
const redColor = "\x1b[31m";
// ANSI escape code to reset color
const resetColor = "\x1b[0m";
// ANSI escape code for green color
const greenColor = "\x1b[32m";
// ANSI escape code for yellow color
const yellowColor = "\x1b[33m";

try {
  // Check all names list duplicates
  const all_names = require(`./${all_names_path}`);
  hasDuplicateStrings(all_names, all_names_path);

  // Check male names list duplicates
  const male_names = require(`./${male_names_path}`);
  hasDuplicateStrings(male_names, male_names_path);

  // Check female names list duplicates
  const female_names = require(`./${female_names_path}`);
  hasDuplicateStrings(female_names, female_names_path);
} catch (error) {
  console.log(
    redColor + "Error reading JSON file:\n" + resetColor + error.message
  );
}

function hasDuplicateStrings(array, file_path) {
  const seen = {};
  let duplicates = [];

  for (let i = 0; i < array.length; i++) {
    const currentString = array[i];
    if (seen[currentString]) {
      duplicates.push(currentString);
    }
    seen[currentString] = true;
  }

  if (duplicates.length > 0) {
    for (let index = 0; index < duplicates.length; index++) {
      const duplicate = duplicates[index];
      console.error(
        redColor +
          "Duplicate Name found in file " +
          yellowColor +
          file_path +
          resetColor +
          " : " +
          duplicate
      );
    }

    process.exit(1);
  }

  console.log(
    greenColor +
      "✔ " +
      resetColor +
      "Finished scanning file: " +
      yellowColor +
      file_path +
      resetColor +
      ". No duplicates found"
  );
}
