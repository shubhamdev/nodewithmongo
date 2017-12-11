var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var User = new Schema({
 	userName: String,
	firstName: String,
	lastName: String,
	ipAddress: String,
	email:String,
	phoneNumber: Number,
	dob: String,
	password: String
});

mongoose.model('User', User);