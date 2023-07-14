# Node.js Command-Line Interface (CLI)

This project contains three Node.js scripts that implement a command-line interface (CLI) for performing various operations on a data file. The three scripts are:

- `app.js`: This script uses the `yargs` package to create a CLI that allows the user to add, delete, read, and list data from a JSON file. It imports functions from `task1.js` and `task2.js` to handle different tasks.
- `task1.js`: This script exports two functions to handle reading and writing data to a JSON file named "data.json". The `addDumyData` function adds dummy data to the file, while the `readFile` function reads the data from the file and logs it to the console.
- `task2.js`: This script exports several functions to handle different operations on a JSON file named "data2.json". The functions include adding a new person to the file, deleting a person by ID, deleting multiple persons by ID range, reading data for a specific ID, and listing specific data fields for all persons.

## Installation

To install the project, follow these steps:

1. Clone the repository to your local machine.
2. Open a terminal window and navigate to the project directory.
3. Run `npm install` or `npm i` to install the required dependencies.

## Usage

To use the CLI, follow these steps:

1. Open a terminal window and navigate to the project directory.
2. Run `node app.js` to start the CLI.
3. Use the available commands and options to perform different operations on the data file. For example, you can use the `add` command to add a new person to the file

```sh
node app.js add --id "your id" --fname "first name " --lname "last name " --age "age" --city "city name" 
```

the `deleteId` command to delete a person by ID

```sh
node app.js deleteId --id "number of id to delete"
```

the `deleteRange` command to delete multiple persons by ID range

```sh
node app.js deleteRange --range "selcted id to delete"
```

the `read` command to read data for a specific ID, and the 

```sh
node app.js read --id "id to read data from"
```

`list` command to list specific data fields for all persons.

```sh
node app.js list  --data "type here the data that you nead to display on the terminal"

```

`listWithRange` command to list specific data fields range start from id and end wtih another.

```sh
node app.js listWithRange --startId 2 --endId 10
```

- do not worry  i make function that append 10 persons or dumay data to `data2.json` file it called `addTenPeople` to use it type this command

```sh
node app.js addDumy
```

### caution

- i make this function beacuse some youtube totrial and some other comuntiy

## Dependencies

The project requires the following dependencies:

- `yargs`: This package is used to create the CLI interface.
- `fs`: This package is used to read and write data to a file.
