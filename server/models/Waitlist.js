const mongoose = require("mongoose")

const waitlistSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  listingName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  bloodType: {
    type: String,
    required: true,
  },
  bodyWeight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  specialConditions: {
    type: String,
    required: false,
  },
  urgency: {
    type: String,
    required: true,
  },
  compatibility: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
})

const Waitlist = mongoose.model("waitlists", waitlistSchema)

module.exports = { Waitlist }
