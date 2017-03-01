// packages

var mongoose = require("mongoose");

// schema

var Schema = mongoose.Schema;

// note schema

var NoteSchema = new Schema({

  body: {

    type: String
    
  }
  
});

// model with the note schema

var Note = mongoose.model("Note", NoteSchema);

// export the model

module.exports = Note;
