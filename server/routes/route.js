const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")

const { sayhello, signup, login } = require("../controllers/controller")
const { Users } = require("../models/User")

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

router.get("/userinfo", fetchUser, async (req, res) => {
  const userData = await Users.findOne({ _id: req.body.id })
  const useremail = userData.email
  res.status(200).send(useremail)
})

router.post("/changepass", fetchUser, async (req, res) => {
  console.log("change pass called")
  let user = await Users.findOne({ email: req.body.email })
  if (user) {
    const conf_pass = req.body.oldpassword === user.password
    if (conf_pass) {
      //change password
      await Users.findOneAndUpdate(
        { email: req.body.email },
        { password: req.body.newpassword }
      )
      res.status(200).send({ success: true })
    } else {
      res.status(400).send({ success: false, errors: "wrong old password" })
      console.log("wrong old pass")
    }
  } else {
    res.status(200).send({ success: false, errors: "user not found" })
  }
})

module.exports = router
