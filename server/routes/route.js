const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")

const {
  sayhello,
  signup,
  login,
  changePass,
  findUser,
} = require("../controllers/controller")

router.get("/", sayhello)

//routes for user login and signup
router.post("/signup", signup)
router.post("/login", login)

// middleware to get the user
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token")
  if (!token) {
    return res
      .status(401)
      .send({ errors: "Please login to validate : token not valid" })
  } else {
    try {
      const data = jwt.verify(token, "secret")
      req.user = data.user
      next()
    } catch (error) {
      res.status(401).send({ errors: "token not valid" })
    }
  }
}

router.get("/userinfo", fetchUser, findUser)

router.post("/changepass", fetchUser, changePass)

module.exports = router
