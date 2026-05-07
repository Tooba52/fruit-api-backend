const express = require(`express`)
const app = express()
const fruits = require(`./routes/fruits`)


app.get(`/`, (req, res) => {
    res.send(`Hello`)
})

// when we dont pass a route, the function will execite on every function
app.use(express.json()) // when we recieve a body in  a request it will convert to json
app.use(`/fruits`, fruits) //every request that hits the fruits endpoint we want to print the fruits
module.exports = app