//constantes
const { urlencoded } = require("body-parser")
const express = require("express")
const { redirect } = require("express/lib/response")
const app = express()
const path = require("path")
const port = process.env.PORT || 3000
// configuracoes ejs e express
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded())
// objeto
const form_dado = [{
id: 1,
imagem: "https://br.web.img2.acsta.net/medias/nmedia/18/89/56/94/20055685.jpg",
lancamento: "16/01/1998",
nome: "titanic",
descricao: "É uma história de ficção do naufrágio real do RMS Titanic, estrelando Leonardo DiCaprio como Jack Dawson, e Kate Winslet como Rose DeWitt Bukater, membros de diferentes classes sociais que se apaixonam durante a fatídica viagem inaugural no navio saindo de Southampton para Nova York em 15 de abril de 1912."
}]
// roteamento
app.get("/catalogo", (req, res) => {
res.render("catalogo", {form_dado})
})

app.post("/see", (req, res) => {
const nov = req.body
nov.id = form_dado.length + 1
form_dado.push(nov)
})

app.get("/delete/:id", (req, res) => {
    const id = +req.params.id - 1; 
    delete form_dado[id];
    res.redirect("/");
  });

app.get("/", (req, res) => {
res.render("index", {form_dado})
})

app.post("/create", (req, res) => {
const film = req.body
film.id = form_dado.length + 1
form_dado.push(film)
res.redirect('/')
})
//server on
app.listen(port)