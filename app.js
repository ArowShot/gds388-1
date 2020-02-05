const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/addtolist', (req, res) => {
    res.sendFile(__dirname + "/public/addtolist.html")
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/public/login.html")
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(3000)