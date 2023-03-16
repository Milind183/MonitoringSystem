const mongoose = require('mongoose');
const noticeSchema = new mongoose.Schema({
	title:String,
	date:Date,
	content:String,

});
module.exports = mongoose.model("notice" , noticeSchema);
