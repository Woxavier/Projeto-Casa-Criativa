//usei o express pra criar e configurar meu servuidor

const express = require("express")
const server = express()


const ideas = [
    {
        img: "/coding.png",
        title: "Cursos de Programação",
        categoria: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        url:"https://rocketseat.com.br"
    },

    {
        img: "/online.png",
        title: "Conectividade",
        categoria: "Comunicação",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        url:"https://rocketseat.com.br"
    },

    {
        img: "/at-home.png",
        title: "Exercícios",
        categoria: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        url:"https://rocketseat.com.br"
    },

    {
        img: "/indoors.png",
        title: "Karaokê",
        categoria: "família",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        url:"https://rocketseat.com.br"
    }
   
]

//configurar arquivos estáticos(css, scripts, imagens)
server.use(express.static("public"))

//configuração do nunjucks

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,  
    noCache: true, // boolean
})

// criei uma rota /
// e capturo o pedidpo do cliente para responder
server.get("/", function(req, res){

    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for (let idea of reversedIdeas){
        if(lastIdeas.length < 2){
            lastIdeas.push(idea)

            
        }
    }


    return res.render("index.html", {ideas: lastIdeas})
})

   

server.get("/idea", function(req, res){

    const reversedIdeas = [...ideas].reverse()

    return res.render("ideia.html", {ideas: reversedIdeas} )
})

//liguei meu servidor na porta 3000
server.listen(3000)
