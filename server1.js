const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).send('<h1>El servidor funciona correctamente</h1><p>Aquí iría el contenido del mensaje</p>')
})

app.listen(port, () => {
  console.log(`Example app listening at http//localhost:${port}`)
})