const express = require('express')  // đi vào node module tải lưu vào biến express
const app = express()
const port = 3000

app.get('/thesun', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})