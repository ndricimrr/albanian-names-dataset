# albanian-names-dataset

A curated dataset of albanian first names.

There is plenty of data on the web, plenty of lists, databases, datasets, some public some not.
However we need a unified dataset that should be free to use for everyone.
Instead of scavenging the web for a list of names, developers can instead just use a curated list that is maintained and added to over time.

# Simplicity over everything

This repo only contains only JSON file of names to not make matters complicated.
To easily support importing in JS based projects, a simple index.js file is provided.
Additionally a npm pacakge is created out of it.

# Source

Web. All the web will be searched to find and curate an ultimate list of albanian names. A big bonus would be if we were also able to somehow also explain their origins.

# Structure

Work in progress:
Currently we have 3 files:

- [male.json](/male.json)
- [female.json](/female.json)
- [all_names.json](/all_names.json)

Might think for a different strategy as we move on.

# How to use

1. Install the package through npm:

```
    npm i albanian-names-dataset --save
```

2. Import the package in your project

**Method 1:** Import all dataset including list of all names and separate male/female lists

```
const albanianDataset = require("albanian-names-dataset");

console.log(albanianDataset.all_names);
console.log(albanianDataset.female_names);
console.log(albanianDataset.male_names);

```

**Method 2:** Import only list of all names in the dataset

```
const all_names = require("albanian-names-dataset/all_names.json");

console.log(all_names);
```

**Method 3:** Import list of all female names in the dataset

```
const female_names = require("albanian-names-dataset/female_names.json");

console.log(female_names);
```

**Method 4:** Import list of all male names in the dataset

```
const male_names = require("albanian-names-dataset/male_names.json");

console.log(male_names);
```
