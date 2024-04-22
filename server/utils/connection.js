const mongoose = require("mongoose");
require("dotenv").config();

const dbConnectionString =
  process.env.DB_CONNECTION_STRING ||
  "mongodb+srv://shavinda:shavinda@cluster0.chyp2hq.mongodb.net/kidneyShield";

// connect to mongoDB
mongoose.connect(dbConnectionString);
