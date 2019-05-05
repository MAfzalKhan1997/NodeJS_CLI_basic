console.log("Starting App.js");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
console.log("Process", process.argv);
console.log("Yargs", argv);

let command = process.argv[2];

if (command === "add") {
  notes.addNote(argv.title, argv.body);
} else if (command === "list") {
  console.log("Listing all Notes");
} else {
  console.log("Command not Recognized");
}

// var filteredArray = _.uniq(["Afzal", 1, "Afzal", 1, 2, 3]);
// console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString("Muhammad Afzal"));

// var res = notes.addNote();
// console.log(res);

// console.log("Result:", notes.addition(2, 6));

// var user = os.userInfo();

// fs.appendFile(
//   "greetings.txt",
//   `Hello ${user.username}, You are of ${notes.age} !`,
//   error => {
//     if (error) {
//       console.log("unable to write file");
//     }
//   }
// );
