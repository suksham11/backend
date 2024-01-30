require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github', (req, res) => {
    res.send('welcome to my github page')
})

app.get('/login', (req,res)=>{
    res.send('welcome to my login page')
})

app.get('/youtub', (req, res)=> {
    res.send('welcome to my yt channel')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})