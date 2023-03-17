const todo = require('../model/todo')

const newTask = async (req,res) => {
	const task = await todo.create({
		task:req.body.task
	})
	console.log(task)
	res.json(task)
}

module.exports = {newTask}

