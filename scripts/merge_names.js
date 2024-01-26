"use strict";

const fs = require("fs");

const all_names_path = "all_names.json";
const male_names_path = "../female.json";
const female_names_path = "../male.json";

const redColor = "\x1b[31m";
const resetColor = "\x1b[0m";
const greenColor = "\x1b[32m";
const yellowColor = "\x1b[33m";

try {
  const male_names_list = require(`./${male_names_path}`);
  const female_names_list = require(`./${female_names_path}`);

  mergeLists(male_names_list, female_names_list, all_names_path);
} catch (error) {
  console.log(
    redColor + "Error reading JSON file:\n" + resetColor + error.message
  );
}

function mergeLists(list1, list2, mergeFilePath) {
  const firstList = list1;
  const secondList = list2;
  let newList = firstList.concat(secondList);

  // Custom sorting function
  const customSort = (a, b) => {
    const collator = new Intl.Collator("sq-AL", { sensitivity: "base" });
    return collator.compare(a, b);
  };

  newList.sort(customSort);

  try {
    console.log(newList);
    fs.writeFileSync(mergeFilePath, JSON.stringify(newList, null, 2), "utf8");

    // fs.writeFile(mergeFilePath, , (a) => {
    //   console.log("Added.", a);
    // });
  } catch (error) {
    console.log(
      redColor + "Error writing to JSON file:\n" + resetColor + error.message
    );
  }

  //   return newList;

  // process.exit(1);
}
