const { urlencoded } = require("body-parser")
const express = require("express")
const app = express()
const path = require("path")
const port = 3000


app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded())


app.get("/", (req, res) => {
    res.send("ola mundo")
})

app.get("/index", (req, res) => {
    res.render("index")
})

app.listen(port)