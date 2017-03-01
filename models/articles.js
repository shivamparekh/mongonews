// packages

var mongoose = require("mongoose");

// schema

var Schema = mongoose.Schema;

// article schema

var ArticleSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// model has the article schema

var Article = mongoose.model("Article", ArticleSchema);

// export the model

module.exports = Article;