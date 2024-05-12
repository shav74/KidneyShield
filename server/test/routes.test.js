const request = require("supertest")
const express = require("express")
const router = require("../routes/route")
const mongoose = require("mongoose")
require("dotenv").config()

const dbConnectionString = process.env.DB_CONNECTION_STRING

// set up express app
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

describe("API Endpoints", () => {
  beforeAll(async () => {
    await mongoose.connect(dbConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  describe("GET /", () => {
    it("should return hello message", async () => {
      const res = await request(app).get("/")
      expect(res.statusCode).toEqual(200)
      expect(res.text).toBe("hello there")
    })
  })

  describe("POST /signup", () => {
    it("should create a new user", async () => {
      Users.findOne.mockResolvedValue(null)
      Users.prototype.save = jest.fn().mockResolvedValueOnce({ _id: "1" })

      const res = await request(app).post("/signup").send({
        username: "testuser",
        email: "test@example.com",
        password: "password123",
      })

      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty("token")
    })

    it("should not create a new user with an existing email", async () => {
      Users.findOne.mockResolvedValue({ email: "test@example.com" })

      const res = await request(app).post("/signup").send({
        username: "testuser",
        email: "test@example.com",
        password: "password123",
      })

      expect(res.statusCode).toEqual(401)
      expect(res.body).toHaveProperty("error", "email already in use")
    })
  })

  describe("POST /login", () => {
    it("should login an existing user", async () => {
      Users.findOne.mockResolvedValue({
        email: "test@example.com",
        password: "password123",
      })

      const res = await request(app).post("/login").send({
        email: "test@example.com",
        password: "password123",
      })

      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty("token")
    })

    it("should not login with wrong password", async () => {
      Users.findOne.mockResolvedValue({
        email: "test@example.com",
        password: "password123",
      })

      const res = await request(app).post("/login").send({
        email: "test@example.com",
        password: "wrongpassword",
      })

      expect(res.statusCode).toEqual(400)
      expect(res.body).toHaveProperty("errors", "wrong password")
    })

    it("should not login with non-existing email", async () => {
      Users.findOne.mockResolvedValue(null)

      const res = await request(app).post("/login").send({
        email: "nonexistent@example.com",
        password: "password123",
      })

      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty("errors", "email not found")
    })
  })

  describe("Authenticated routes", () => {
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

    describe("GET /userinfo", () => {
      it("should return user info", async () => {
        const res = await request(app).get("/userinfo").set("auth-token", token)

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty("email", "test@example.com")
      })
    })

    describe("POST /changepass", () => {
      it("should change user password", async () => {
        Users.findOne.mockResolvedValue({
          _id: "1",
          email: "test@example.com",
          password: "password123",
        })

        const res = await request(app)
          .post("/changepass")
          .set("auth-token", token)
          .send({
            email: "test@example.com",
            oldpassword: "password123",
            newpassword: "newpassword123",
          })

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty("success", true)
      })
    })
  })
})
