// steps to set up express


import express from 'express'

const app = express()

// by default, no one is allowed in express. Have to specify what is allowed.
app.get('/test', (request, response) => {
    response.send({message: "It's all good, man!"})
})

app.get('/', (request, response) => response.send({message: 'Welcome to our first API'}))


app.get('/error', (request, response) => {
    response
    .status(500)
    .send({message: 'Something went wrong', success: false})
})

app.listen(3030, () => console.log('Listening on http://localhost:3030...'))
