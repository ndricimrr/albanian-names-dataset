"use strict";

const fs = require("fs");
const jsonFilePath = "../all_names.json";

try {
  const all_names = require(`./${jsonFilePath}`);
  hasDuplicateStrings(all_names);
} catch (error) {
  console.error("Error reading JSON file:", error.message);
}

function hasDuplicateStrings(array) {
  const seen = {};

  for (let i = 0; i < array.length; i++) {
    const currentString = array[i];
    if (seen[currentString]) {
      console.error("Duplicate Name Found: " + currentString);
      process.exit(1);
    }
    seen[currentString] = true;
  }
}
