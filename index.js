const { response } = require('express');
const express = require('express') // esta importando  a biblioteca express para variavel express
const app = express();
const users = [
    { nome: 'igor', idade: 21, signo: 'gemeos', filhos: 0, codinome: 'none' },
    { nome: 'rafael', idade: 22, signo: 'virgem', filhos: 33, codinome: 'vulgoCatra' }
]

app.get('/', (request, response) => {
    return response.send('ola mundo')
})

app.get('/users', (request, response) => {
    return response.send(users)
})

//
app.get('/users/:email', (request, response) => {
    const user = users.find((user) => { return user.email === request.params.email })
    if (user) {
        return response.send(user);
    }
    else {
        return response.send('nao encontrado');
    }
})



// etsa ouvindo o comando e dando para retornar um console.log com a porta
app.listen(8888, () => console.log(`Sever rodando http://localhost:${8888}`)) //



