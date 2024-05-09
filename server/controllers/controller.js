const { Users } = require("../models/User")
const { Waitlist } = require("../models/Waitlist")
const { Articles } = require("../models/Article")
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

const allproducts = async (req, res) => {
  let waitlist = await Waitlist.find({})
  console.log(waitlist)
  res.send(waitlist)
}

const allArticles = async (req, res) => {
  let waitlist = await Articles.find({})
  console.log(waitlist)
  res.send(waitlist)
}

const addproduct = async (req, res) => {
  let waitlist = await Waitlist.find({})
  let id
  if (waitlist.length > 0) {
    let latest_item = waitlist.slice(-1)[0]
    id = latest_item.id + 1
  } else {
    id = 1
  }

  const {
    name,
    listingName,
    age,
    gender,
    image,
    bloodType,
    bodyWeight,
    height,
    specialConditions,
    urgency,
    compatibility,
    contact,
    description,
  } = req.body
  const listing = new Waitlist({
    id: id,
    listingName: listingName,
    name: name,
    age: age,
    gender: gender,
    description: description,
    image: image,
    bloodType: bloodType,
    bodyWeight: bodyWeight,
    height: height,
    specialConditions: specialConditions,
    urgency: urgency,
    compatibility: compatibility,
    contact: contact,
  })
  console.log(listing)
  await listing.save()
  console.log("saved new listing")

  res.status(200).json({ success: true, name: name })
}

const addArticle = async (req, res) => {
  let articles = await Articles.find({})
  let articleId
  if (articles.length > 0) {
    let latest_item = articles.slice(-1)[0]
    articleId = latest_item.id + 1
  } else {
    articleId = 1
  }

  const { title, content, image, summary, category } = req.body

  const article = new Articles({
    id: articleId,
    title: title,
    content: content,
    image: image,
    summary: summary,
    category: category,
  })
  console.log(article)
  await article.save()
  console.log("saved new article")

  res.status(200).json({ success: true, name: title })
}

const removeproduct = async (req, res) => {
  await Waitlist.findOneAndDelete({ id: req.body.id })
  console.log("product deleted")
  res.status(200).json({ success: true, name: req.body.name })
}

const removeArticle = async (req, res) => {
  await Articles.findOneAndDelete({ id: req.body.id })
  console.log("article deleted")
  res.status(200).json({ success: true, name: req.body.name })
}

module.exports = {
  sayhello,
  signup,
  login,
  changePass,
  findUser,
  allproducts,
  addproduct,
  removeproduct,
  allArticles,
  addArticle,
  removeArticle,
}
