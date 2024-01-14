const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const { connect } = require('mongoose')
const connectDB = require('./config/connectDB')

// config dot env file
dotenv.config()

// database call
connectDB()

// rest objects 
const app = express()


// middlewares

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

//routes

app.get('/',(req,res)=>{
    res.send("<h1> Hello bro </h1>")
})

const PORT =8080 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})