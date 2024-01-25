import { all_names } from "..";

function hasDuplicateStrings(array) {
  const seen = {};

  for (let i = 0; i < array.length; i++) {
    const currentString = array[i];
    if (seen[currentString]) {
      return true;
    }
    seen[currentString] = true;
  }

  return false;
}

hasDuplicateStrings(all_names);
