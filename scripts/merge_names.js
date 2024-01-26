"use strict";

const fs = require("fs");

const all_names_path = "all_names.json";
const female_names_path = "../female.json";
const male_names_path = "../male.json";

const redColor = "\x1b[31m";
const resetColor = "\x1b[0m";
const greenColor = "\x1b[32m";
const yellowColor = "\x1b[33m";

try {
  const males = require(`./${male_names_path}`);
  const females = require(`./${female_names_path}`);
  const mergedList = mergeLists(males, females, all_names_path);

  console.log(
    `${greenColor}Finished merging  ${male_names_path} [${
      males.length
    }] + ${female_names_path}[${
      females.length
    }] into =>${resetColor} ${yellowColor}${all_names_path} [${
      mergedList.length
    }]=[${males.length + females.length}] ${resetColor}`
  );
} catch (error) {
  console.log(
    redColor + "Error reading JSON file:\n" + resetColor + error.message
  );
}

/**
 * Function that takes two lists and merges them
 * @param {Array} list1 first list
 * @param {Array} list2 second list
 * @param {string} mergeFilePath filepath of file to merge into
 * @returns merged array sorted
 */
function mergeLists(list1, list2, mergeFilePath) {
  const firstList = list1;
  const secondList = list2;
  let newList = firstList.concat(secondList);

  const duplicatesCount = newList.length - new Set(newList).size;

  if (duplicatesCount > 0) {
    console.warn(
      "Found duplicate names between the lists : " +
        yellowColor +
        duplicatesCount +
        resetColor
    );
    console.warn("Removing duplicates before merging...");
    // Remove duplicates
    newList = Array.from(new Set(newList));
  }

  // Custom sorting function for albanian alphabet
  const customSort = (a, b) => {
    const collator = new Intl.Collator("sq-AL", { sensitivity: "base" });
    return collator.compare(a, b);
  };

  newList.sort(customSort);

  try {
    fs.writeFileSync(mergeFilePath, JSON.stringify(newList, null, 2), "utf8");
    return newList;
  } catch (error) {
    console.log(
      redColor + "Error writing to JSON file:\n" + resetColor + error.message
    );
  }
}
