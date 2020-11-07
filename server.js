const express = require('express')
const app = express()
const DataJson = require('./data.json')
require('dotenv').config()

app.get('/',(req,res)=>{
    res.send('hello')
})
app.get('/data',(req,res)=>{
    res.json(DataJson)
})
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server listen on port ${PORT} `)
})