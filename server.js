const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

//database
DATABASE_URL=process.env.DATABASE_URL
mongoose.connect(DATABASE_URL,
  {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex: true,
  }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
  ).catch(err=>console.log(err));

//routes
const Index = require('./routes/index')
app.use(Index)
//express server
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server listen on port ${PORT} `)
})