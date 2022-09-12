const express = require('express')
const cors = require('cors')

const { response } = require('express')
const { getLivros } = require('./modules/livros')


const app = express();




app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST,PUT,DELETE, OPTIONS')
    app.use(cors())
    next()
})

//EndPoints

app.get('/livro/', cors(), async function (request, response, next) {


    //recebe a variavel nome por QueryString (indicada quando precisamos fazer filtros)
    let nomeLivro = request.query.nomeDoLivro
    console.log(nomeLivro)

    //chama a funcao e encaminha a palavra chave 
    let livro = getLivros(nomeLivro)
    if (livro) {
        response.status(200)
        response.json(livro)
    } else {
        response.status(404)
    }

})

app.listen(8080, function(){
    console.log('aguardando servidor')
})







