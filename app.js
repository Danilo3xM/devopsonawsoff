const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello Danilo 336641! com passo manual')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
