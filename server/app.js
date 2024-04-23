const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
const cors = require("cors")
// const multer = require("multer")
// const path = require("path")
const PORT = 4000

//to parse response body to json
app.use(express.json())
app.use(cors())

// connect to mongoDB
require("./utils/connection")

//get all the routes from route.js and use them
const routes = require("./routes/route")
app.use("", routes)

app.listen(PORT, (e) => {
  if (!e) {
    console.log("surver running on port 4000")
  } else {
    console.log(e)
  }
})

module.exports = app
