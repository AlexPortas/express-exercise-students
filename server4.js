const express = require('express')
const { palindrome } = require("./utils/palindrome");
const app = express()
const port = 3000

app.get('/check/:palabra', (req, res) => {
  let msg = "NO es un palíndromo";

  if (palindrome(req.params.palabra)) {
    msg = "Es un palíndromo";
  }
  res.status(200).send(`<h1>${msg}</h1>`)
})

app.use((req, res) => {
  res.status(404).send('<h1>No encontro nada...</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http//localhost:${port}`)
})