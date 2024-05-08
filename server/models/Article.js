const mongoose = require("mongoose")

const ArticleSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  summary: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

const Articles = mongoose.model("articles", ArticleSchema)

module.exports = { Articles }
