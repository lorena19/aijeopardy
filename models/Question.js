const mongoose = require("mongoose");
const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Question", QuestionSchema);