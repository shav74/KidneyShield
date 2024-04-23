const mongoose = require("mongoose")
require("dotenv").config()

const dbConnectionString = process.env.DB_CONNECTION_STRING
// connect to mongoDB
mongoose.connect(dbConnectionString)
