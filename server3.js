const express = require('express')
const app = express()
const port = 3000

app.get('/prueba', (req, res) => {
  res.status(200).sendFile(__dirname + '/server3-files/prueba.html')
})

app.get('/about', (req, res) => {
  res.status(200).sendFile(__dirname + '/server3-files/about.html')
})

app.use((req, res) => {
  res.status(404).send('<h1>No encontro nada...</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http//localhost:${port}`)
})