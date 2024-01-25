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

// Example usage:
const names1 = ["John", "Adam", "John"];
const names2 = ["Alice", "Bob", "Charlie"];

console.log(hasDuplicateStrings(names1)); // Output: true
