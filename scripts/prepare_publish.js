const fs = require("fs");
const path = require("path");

const sourceFolder = path.join(__dirname, "./../");
const destinationFolder = path.join(__dirname, "./../public/");

// List of JSON files to copy
const jsonFilesToCopy = [
  "female.json",
  "all_names.json",
  "male.json",
  "index.js",
  "README.md",
  "LICENSE",
];

// ANSI escape codes for console colors
const greenColor = "\x1b[32m";
const redColor = "\x1b[31m";
const resetColor = "\x1b[0m";

function copyJsonFiles() {
  console.log("\nCopying JSON files to public folder...");

  jsonFilesToCopy.forEach((file) => {
    const sourcePath = path.join(sourceFolder, file);
    const destinationPath = path.join(destinationFolder, file);

    try {
      fs.copyFileSync(sourcePath, destinationPath);
      console.log(`${greenColor}${file} copied successfully.${resetColor}`);
    } catch (error) {
      console.error(
        `${redColor}Error copying ${file}: ${error.message}${resetColor}`
      );
    }
  });

  console.log(`${greenColor}Copy process completed.${resetColor}`);
}

// Run the function
copyJsonFiles();
