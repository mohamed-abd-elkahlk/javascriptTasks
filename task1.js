const fs = require("fs");

// @desc  make dumy data and add it to file

const addDumyData = (person) => {
  if (person) {
    fs.writeFileSync("data.json", JSON.stringify(person));
  } else {
    person = {
      fname: "ahmed",
      lname: "hossam",
      age: 20,
      city: "mohamed",
    };
    fs.writeFileSync("data.json", JSON.stringify(person));
  }
};

// @desc read file "data.json" as object

const readFile = () => {
  const dataInFile = fs.readFileSync("data.json");
  console.log(JSON.parse(dataInFile.toString()));
};

// @desc  make some changes in dumy data and add it to file

module.exports = {
  readFile,
  addDumyData,
};
