const express = require('express')
const fs = require('fs')
const app = express()

const history = require('connect-history-api-fallback')

app.use(history())


const cart = require('./cartRouter') //обработчик всех запросов

app.use(express.json())
app.use('/', express.static('./dist'))
app.use('/api/cart', cart)

app.get('/api/products', (req, res) => {

  fs.readFile('server/db/catalog.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }))
    } else {
      res.send(data)
    }
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`http://localhost:${port}`))
