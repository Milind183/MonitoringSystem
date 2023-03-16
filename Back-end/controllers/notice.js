const note = require('../model/notice')

const newNotice = (req,res) => {
	res.send("helo")
}
const getData = async (req,res) => {
	const notice = await note.create({title:req.body.title})
	console.log(req.body.title)
	res.json(`Welcome ${notice}`)
}

module.exports = {newNotice , getData}
