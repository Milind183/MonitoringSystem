const mongoose = require('mongoose')

// connection to mongodb using mongoose 
const connection = (url) => { 
	mongoose.connect(url)
		.then(()=>{
			console.log("connected to MongoDB")
		})
		.catch((err)=>{
			console.log(err)
		})
}

module.exports = connection
