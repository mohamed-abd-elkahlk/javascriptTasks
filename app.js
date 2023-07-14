//? to acess to file click on ctrl and clcik it with mouce cursour
const { addDumyData, readFile } = require("./task1");
//# task one
// addDumyData(); //to creates dummy data and adds it to a file

// // to change it

// addDumyData({
//   fname: "adel",
//   lname: "ahmed",
//   age: 40,
//   city: "cairo",
// });

// // to read the file

// readFile();
//# task one

///////////////////////////////////////////////////////////////////////////////////

const yargs = require("yargs");
const {
  addPerson,
  deletePersonWithId,
  getAllDataWithId,
  listData,
  deletePersonWithRangeId,
  listDataWithRangeId,
  addTenPeople,
} = require("./task2");
yargs.command({
  command: "add",
  describe: "to add an item",
  builder: {
    id: {
      describe: "add id ",
      demandOption: true,
      type: "String",
    },
    fname: {
      describe: "add first name ",
      demandOption: true,
      type: "String",
    },
    lname: {
      describe: "add last name ",
      demandOption: true,
      type: "String",
    },
    age: {
      describe: "add age ",
      demandOption: true,
      type: "String",
    },
    city: {
      describe: "add city name ",
      demandOption: true,
      type: "String",
    },
  },
  handler: (x) => {
    addPerson(x.id, x.fname, x.lname, x.age, x.city);
  },
});
yargs.command({
  command: "deleteId",
  describe: "delete one person",
  builder: {
    id: {
      describe: "id to delete",
      demandOption: false,
      type: "Number",
    },
  },
  handler: (x) => {
    deletePersonWithId(x.id);
  },
});
yargs.command({
  command: "deleteRange",
  describe: "delete many persons",
  builder: {
    range: {
      describe: "add range of IDs",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    const range = x.range.split(",").map(Number);
    deletePersonWithRangeId(range);
  },
});

yargs.command({
  command: "read",
  describe: "to read data",
  builder: {
    id: {
      describe: "read data",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    getAllDataWithId(x.id);
  },
});

yargs.command({
  command: "list",
  describe: "list data",
  builder: {
    data: {
      describe: "show data ",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    const showData = x.data.split(",");
    listData(showData);
  },
});
yargs.command({
  command: "listWithRange",
  describe: "list data",
  builder: {
    startId: {
      describe: "start id ",
      demandOption: true,
    },
    endId: {
      describe: "end id ",
      demandOption: true,
    },
  },
  handler: (x) => {
    listDataWithRangeId(x.startId, x.endId);
  },
});
yargs.command({
  command: "addDumy",
  describe: "add ten person or dumy data",
  handler: () => {
    console.log("data added");
    addTenPeople();
  },
});
console.log(yargs.argv);
