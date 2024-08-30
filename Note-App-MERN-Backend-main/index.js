const express = require("express")
const cors = require("cors")
const { connection } = require("./db")
const { userRouter } = require("./routes/user.routes")
const { noteRouter } = require("./routes/note.routes")

require("dotenv").config()
const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use("/user", userRouter)
app.use("/note",noteRouter)

 //This is basicly whats going to be a new channel,
 //We can aslo pass in data to this channel if needed through an html text that the website does

 app.get("/",(req,res)=>
 {
    res.send({
        message: "api is working now"
    })
 })

 app.listen(port,async()=>
 {
    try{
        await connection
        console.log("database is connected")
    }
    catch (error)
    {
        console.log(error)
    }

    console.log("server is running on port number", port)
 })