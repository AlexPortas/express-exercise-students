const express = require('express')
const app = express()
const port = 3000

app.get('/mensaje', (req, res) => {
  res.status(200).send('<h1>Esto es un mensaje</h1>')
})

app.use((req, res) => {

  res.status(404).send('<h1>No encontro nada...</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http//localhost:${port}`)
})