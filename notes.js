console.log("Starting notes.js");
const fs = require("fs");

const addNote = (title, body) => {
  console.log("Adding Note", title, body);

  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var storedString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(storedString);
  } catch (error) {
    console.log("error", error);
  }

  var duplicates = notes.filter(note => note.title === title);
  console.log(duplicates);

  if (duplicates.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
  }
};

module.exports = {
  addNote
};

// module.exports.addNote = () => {
//   console.log("Adding Note");
//   return "New Note";
// };

// module.exports.addition = (a, b) => {
//   return a + b;
// };

// module.exports.age = 21;
