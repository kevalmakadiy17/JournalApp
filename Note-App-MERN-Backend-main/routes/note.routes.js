// Import necessary modules and middlewares
const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { authenticator } = require("../middlewares/authenticator.js");
const NoteModel = require("../models/NoteModel.js");

// Create an instance of Express router
const noteRouter = express.Router();

// Apply authentication middleware to all routes in this router
noteRouter.use(authenticator);

// Route to get all notes of a specific user
noteRouter.get("/", async (req, res) => {
    let token = req.headers.authorization;
    jwt.verify(token, "saurabh", async (err, decode) => {
        try {
            let data = await NoteModel.find({ user: decode.userId });
            res.send({
                data: data,
                message: "Success",
                status: 1
            });
        } catch (error) {
            res.send({
                message: error.message,
                status: 0
            });
        }
    });
});

// Route to create a new note
noteRouter.post("/create", async (req, res) => {
    try {
        let note = new NoteModel(req.body);
        await note.save();
        res.send({
            message: "Note created",
            status: 1
        });
    } catch (error) {        
        res.send({
            message: error.message,
            status: 0
        });
    }
});

// Route to update a note by its ID
noteRouter.patch("/", async (req, res) => {
    let { id } = req.headers;
    try {
        await NoteModel.findByIdAndUpdate({ _id: id }, req.body);
        res.send({
            message: "Note updated",
            status: 1
        });
    } catch (error) {
        res.send({
            message: error.message,
            status: 0
        });
    }
});

// Route to delete a note by its ID
noteRouter.delete("/", async (req, res) => {
    let { id } = req.headers;
    try {
        await NoteModel.findByIdAndDelete({ _id: id });
        res.send({
            message: "Note deleted",
            status: 1
        });
    } catch (error) {
        res.send({
            message: error.message,
            status: 0
        });
    }
});

// Export the noteRouter for use in other files
module.exports = {
    noteRouter
};
