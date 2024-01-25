"use strict";

const fs = require("fs");
const all_names_path = "../all_names.json";
const male_names_path = "../female.json";
const female_names_path = "../male.json";

// ANSI escape code for red color
const redColor = "\x1b[31m";
// ANSI escape code to reset color
const resetColor = "\x1b[0m";

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

  for (let i = 0; i < array.length; i++) {
    const currentString = array[i];
    if (seen[currentString]) {
      console.error(
        redColor +
          "Duplicate Name Found: " +
          resetColor +
          currentString +
          "\nFile: " +
          file_path
      );
      process.exit(1);
    }
    seen[currentString] = true;
  }
}
