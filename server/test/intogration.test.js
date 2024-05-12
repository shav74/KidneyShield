const request = require("supertest")
const express = require("express")
const router = require("../routes/router")
const mongoose = require("mongoose")
require("dotenv").config()

const dbConnectionString = process.env.DB_CONNECTION_STRING

// Set up Express app
const app = express()
app.use(express.json())
app.use("/", router)

// Mock Mongoose models
jest.mock("../models/User")
jest.mock("../models/Waitlist")
jest.mock("../models/Article")

const { Users } = require("../models/User")
const { Waitlist } = require("../models/Waitlist")
const { Articles } = require("../models/Article")

describe("Integration Tests", () => {
  beforeAll(async () => {
    await mongoose.connect(dbConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  describe("User Signup and Login", () => {
    it("should sign up and log in a user", async () => {
      Users.findOne.mockResolvedValue(null)
      Users.prototype.save = jest.fn().mockResolvedValueOnce({ _id: "1" })

      // Sign up the user
      const signupRes = await request(app).post("/signup").send({
        username: "testuser",
        email: "test@example.com",
        password: "password123",
      })

      expect(signupRes.statusCode).toEqual(200)
      expect(signupRes.body).toHaveProperty("token")

      // Log in the user
      Users.findOne.mockResolvedValue({
        _id: "1",
        email: "test@example.com",
        password: "password123",
      })
      const loginRes = await request(app).post("/login").send({
        email: "test@example.com",
        password: "password123",
      })

      expect(loginRes.statusCode).toEqual(200)
      expect(loginRes.body).toHaveProperty("token")
    })
  })

  describe("Articles Endpoints", () => {
    let token

    beforeAll(async () => {
      Users.findOne.mockResolvedValue({
        _id: "1",
        email: "test@example.com",
        password: "password123",
      })
      const res = await request(app).post("/login").send({
        email: "test@example.com",
        password: "password123",
      })
      token = res.body.token
    })

    it("should add and retrieve articles", async () => {
      Articles.find.mockResolvedValue([])
      Articles.prototype.save = jest.fn().mockResolvedValueOnce({ id: 1 })

      // Add a new article
      const addArticleRes = await request(app)
        .post("/addarticle")
        .set("auth-token", token)
        .send({
          title: "Test Article",
          content: "This is a test article.",
          image: "testimage.jpg",
          summary: "Test summary",
          category: "Test category",
        })

      expect(addArticleRes.statusCode).toEqual(200)
      expect(addArticleRes.body).toHaveProperty("success", true)

      // Retrieve all articles
      Articles.find.mockResolvedValue([
        { id: 1, title: "Test Article", content: "This is a test article." },
      ])

      const getArticlesRes = await request(app)
        .get("/articles")
        .set("auth-token", token)

      expect(getArticlesRes.statusCode).toEqual(200)
      expect(getArticlesRes.body.length).toBe(1)
      expect(getArticlesRes.body[0]).toHaveProperty("title", "Test Article")
    })
  })

  describe("Waitlist Endpoints", () => {
    let token

    beforeAll(async () => {
      Users.findOne.mockResolvedValue({
        _id: "1",
        email: "test@example.com",
        password: "password123",
      })
      const res = await request(app).post("/login").send({
        email: "test@example.com",
        password: "password123",
      })
      token = res.body.token
    })

    it("should add and retrieve waitlist items", async () => {
      Waitlist.find.mockResolvedValue([])
      Waitlist.prototype.save = jest.fn().mockResolvedValueOnce({ id: 1 })

      // Add a new waitlist item
      const addProductRes = await request(app)
        .post("/addproduct")
        .set("auth-token", token)
        .send({
          listingName: "Test Listing",
          name: "John Doe",
          age: 30,
          gender: "Male",
          description: "Test description",
          image: "testimage.jpg",
          bloodType: "O+",
          bodyWeight: 70,
          height: 175,
          specialConditions: "None",
          urgency: "High",
          compatibility: "Universal",
          contact: "test@example.com",
        })

      expect(addProductRes.statusCode).toEqual(200)
      expect(addProductRes.body).toHaveProperty("success", true)

      // Retrieve all waitlist items
      Waitlist.find.mockResolvedValue([
        { id: 1, name: "John Doe", description: "Test description" },
      ])

      const getProductsRes = await request(app)
        .get("/waitlist")
        .set("auth-token", token)

      expect(getProductsRes.statusCode).toEqual(200)
      expect(getProductsRes.body.length).toBe(1)
      expect(getProductsRes.body[0]).toHaveProperty("name", "John Doe")
    })
  })
})
