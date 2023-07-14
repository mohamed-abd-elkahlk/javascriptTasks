const fs = require("fs");

// @desc  add one person to data2.json file
const addPerson = (id, fname, lname, age, city) => {
  const allData = loadInfo();
  const dublecatedData = allData.filter((obj) => {
    return obj.id === id;
  });
  if (dublecatedData.length == 0) {
    allData.push({
      id,
      fname,
      lname,
      age,
      city,
    });
    saveAllData(allData);
  } else {
    throw new Error("dublcted id");
  }
};

// @desc  get all data from data2.json file

const loadInfo = () => {
  try {
    const dataJson = fs.readFileSync("data2.json").toString();
    return JSON.parse(dataJson);
  } catch {
    return [];
  }
};

// @desc  save all data to data2.json file

const saveAllData = (allData) => {
  const saveAllDataJson = JSON.stringify(allData);
  fs.writeFileSync("data2.json", saveAllDataJson);
};

// @desc  delete one person from data2.json file

const deletePersonWithId = (id) => {
  const allData = loadInfo();

  const dataToKeep = allData.filter((obj) => {
    return obj.id !== id;
  });
  saveAllData(dataToKeep);
  console.log(`person deletd with id:${id}`);
};
const deletePersonWithRangeId = (range) => {
  const allData = loadInfo();
  const dataToKeep = allData.filter((obj) => {
    return !range.includes(obj.id);
  });
  saveAllData(dataToKeep);
};

// @desc  delete one person from data2.json file

const getAllDataWithId = (id) => {
  const allData = loadInfo();

  const itemNeeded = allData.find((obj) => {
    return obj.id == id;
  });
  console.log(itemNeeded);
};

// @desc  delete one person from data2.json file

const listData = (dataToShow) => {
  const allData = loadInfo();
  allData.forEach((obj) => {
    const dataShow = dataToShow
      .map((data) => {
        return obj[data];
      })
      .join(" ");
    console.log(dataShow);
  });
  if (allData.length == 0) {
    return new Error("no data to list");
  }
};
const listDataWithRangeId = (startId, endId) => {
  const allData = loadInfo();
  const filteredData = allData.filter((obj) => {
    const id = parseInt(obj.id);
    return id >= startId && id <= endId;
  });
  if (filteredData.length === 0) {
    return new Error("No data found with the given ID range.");
  }
  filteredData.forEach((obj) => {
    console.log(`ID: ${obj.id}, Name: ${obj.name}, Age: ${obj.age}`);
  });
};

const occupations = [
  "Software Engineer",
  "Data Scientist",
  "Web Developer",
  "Product Manager",
  "Marketing Manager",
  "Sales Executive",
  "Human Resources Manager",
  "Financial Analyst",
  "Accountant",
  "Investment Banker",
];
const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Philadelphia",
  "Phoenix",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
];

const addTenPeople = () => {
  const allData = loadInfo();
  const newPeople = [];
  for (let i = 0; i < 10; i++) {
    const newPerson = {
      id: allData.length + i + 1,
      name: `Person ${allData.length + i + 1}`,
      age: Math.floor(Math.random() * 50) + 18,
      gender: Math.random() < 0.5 ? "Male" : "Female",
      occupation: occupations[Math.floor(Math.random() * occupations.length)],
      city: cities[Math.floor(Math.random() * cities.length)],
    };
    newPeople.push(newPerson);
  }
  allData.push(...newPeople);
  saveAllData(allData);
};
addTenPeople();

module.exports = {
  addPerson,
  deletePersonWithId,
  deletePersonWithRangeId,
  getAllDataWithId,
  listData,
  listDataWithRangeId,
  addTenPeople,
};
