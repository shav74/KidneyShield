const { Users } = require("../models/User")
const jwt = require("jsonwebtoken")

const sayhello = (req, res) => {
  res.send("hello there")
}

const signup = async (req, res) => {
  let check = await Users.findOne({ email: req.body.email })
  if (check) {
    return res
      .status(401)
      .json({ success: false, error: "email already in use" })
  }

  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })

  await user.save()

  const data = {
    user: {
      id: user.id,
    },
  }

  const token = jwt.sign(data, "secret")
  res.json({ success: true, token })
}

const login = async (req, res) => {
  let user = await Users.findOne({ email: req.body.email })
  if (user) {
    const conf_pass = req.body.password === user.password
    if (conf_pass) {
      const data = {
        user: {
          id: user.id,
        },
      }
      const token = jwt.sign(data, "secret")
      res.status(200).json({ success: true, token })
    } else {
      res.status(400).json({ success: false, errors: "wrong password" })
    }
  } else {
    res.json({ success: false, errors: "email not found" })
  }
}

const changePass = async (req, res) => {
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
}

const findUser = async (req, res) => {
  const userData = await Users.findOne({ _id: req.body.id })
  const useremail = userData.email
  res.status(200).send(useremail)
}

module.exports = {
  sayhello,
  signup,
  login,
  changePass,
  findUser,
}
