// Require mongoose
var mongoose = require("mongoose");
var Note = require("./Note");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var Articles = new Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  },
  notes: [{
     type: Schema.Types.ObjectId,
     ref: "Note"
  }]
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", Articles);

// Export the model
module.exports = Article;
