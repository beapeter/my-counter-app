const express = require('express')
const app = express()

app.get('/rand', (req, res) => {
  const MIN = 0, MAX = 100
  const rand = Math.round(MIN - 0.5 + Math.random() * (MAX - MIN + 1))
  
  res.json({rand})
})

app.listen(3000, () => `server is listening on port 3000.`)
