// console.log("Starting notes.js");
const fs = require("fs");

const fetchNote = () => {
  try {
    var storedString = fs.readFileSync("notes-data.json");
    return JSON.parse(storedString);
  } catch (error) {
    return [];
  }
};

const saveNote = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

const addNote = (title, body) => {
  console.log("Adding Note", title, body);

  var notes = fetchNote();
  var note = {
    title,
    body
  };

  var duplicates = notes.filter(note => note.title === title);
  console.log(duplicates);

  if (duplicates.length === 0) {
    notes.push(note);
    saveNote(notes);
    return note;
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
