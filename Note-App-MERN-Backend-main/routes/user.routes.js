// Import necessary modules
const express = require("express");
const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Create an instance of Express router
const userRouter = express.Router();

// Route to get all users
userRouter.get("/", (req, res) => {
  res.send("All the users");
});

// Route to register a new user
userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  
  // Hash the password before saving it in the database
  bcrypt.hash(password, 5, async function (err, hash) {
    if (err) return res.send({ message: "Something went wrong", status: 0 });
    try {
      let user = new UserModel({ name, email, password: hash });
      await user.save();
      res.send({
        message: "User created",
        status: 1,
      });
    } catch (error) {
      res.send({
        message: error.message,
        status: 0,
      });
    }
  });
});

// Route to log in a user
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let option = {
    expiresIn: "10m"
  };

  try {
    let data = await UserModel.find({ email });
    if (data.length > 0) {
      // Generate a JSON Web Token (JWT) for authentication
      let token = jwt.sign({ userId: data[0]._id }, "saurabh", option);
      
      // Compare the provided password with the hashed password in the database
      bcrypt.compare(password, data[0].password, function (err, result) {
        if (err)
          return res.send({ message: "Something went wrong:" + err, status: 0 });
        if (result) {
          res.send({
            message: "User logged in successfully",
            token: token,
            status: 1,
          });
        } else {
          res.send({
            message: "Incorrect password",
            status: 0,
          });
        }
      });
    } else {
      res.send({
        message: "User does not exist",
        status: 0,
      });
    }
  } catch (error) {
    res.send({
      message: error.message,
      status: 0,
    });
  }
});

// Export the userRouter for use in other files
module.exports = { userRouter };
