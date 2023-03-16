// app
const express = require('express')
const app = express()

// routes for different section 
const basic = require('./router/basicRoutes')
const connectDB = require('./database/connection')
const notice = require('./router/notice')

// passwords and other hidden variables 
require('dotenv').config()

//body parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// middleware
app.use('/',basic)
app.use('/notice',notice)

// start server connection to mongodb and port 
function start(URL,PORT){
	connectDB(URL)
	app.listen(PORT,()=>{
		console.log(`connected to port :${PORT}`)
	})
}

start(process.env.URL,process.env.PORT)
