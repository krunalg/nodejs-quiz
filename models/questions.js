const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Question Model - Schema
 */
const QuestionSchema = new Schema(
  {
    question: {
      type: String,
      required: true
    },
    options: [
      {
        type: String,
        required: true
      }
    ],
    answer: {
      type: Number,
      required: true
    }
  },
  { collection: "questions" }
);

module.exports = mongoose.model("Question", QuestionSchema);
