const express = require("express")
const cors = require("cors")
const multer = require("multer")
const path = require("path")

const app = express()
const PORT = 4000

//to parse response body to json
app.use(express.json())
app.use(cors())

// connect to mongoDB
require("./utils/connection")

//store images

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

const upload = multer({ storage: storage })
app.use("/images", express.static("upload/images"))
//route for uploading
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  })
})

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
