const { urlencoded } = require("body-parser")
const express = require("express")
const { redirect } = require("express/lib/response")
const app = express()
const path = require("path")
const port = 3000


app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded())

const form_dado = 
[{
    id: 1,
    imagem: "imagem",
    lancamento: "lancamento",
    nome: "nome",
    descricao: "descricao"

}]

let film = undefined

app.get("/", (req, res) => {
    res.send("ola mundo")
})

app.get("/index", (req, res) => {
    res.render("index")
})

app.post("/create", (req, res) => {
    const film = req.body
    film.id = form_dado.length + 1
    form_dado.push(film)
   res.redirect('/#prc')
})


app.listen(port)