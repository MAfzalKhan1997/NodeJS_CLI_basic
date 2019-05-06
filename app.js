// console.log("Starting App.js");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

// console.log("Process", process.argv);
// console.log("Yargs", argv);
const argv = yargs
  .command("add", "Add a new note", {
    title: {
      describe: "Title of note",
      demand: true,
      alias: "t"
    },
    body: {
      describe: "Body of note",
      demand: true,
      alias: "b"
    }
  })
  .help().argv;

let command = argv._[0];

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note Created!");
  }
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
