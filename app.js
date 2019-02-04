const express = require('express')
const app = express()
const https = require('https')
const fs = require('fs')
const port = 3000

app.get('/', (req, res) => {
  res.send('WORKING!')
})

var httpsOptions = { 
    key: fs.readFileSync('server-key.pem'), 
    cert: fs.readFileSync('server-crt.pem'), 
    ca: fs.readFileSync('ca-crt.pem'), 
}; 
const server = https.createServer(httpsOptions, app).listen(port, () => {
  console.log('server running at ' + port)
})