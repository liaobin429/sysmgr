var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var UserSchema = new Schema({
	name			:	String,
	loginname		:	String,
	passwd			:	String,
	department		:	String
});

var User = mongodb.mongoose.model("user",UserSchema);


var UserDAO = function(){};

UserDAO.prototype.save = function(obj,callback){
	var instance = new User(obj);
	instance.save(function(err){
		callback(err);
	});	
};

UserDAO.prototype.findByIdAndUpdate = function(obj,callback){
	var _id = obj._id;
	delete obj._id;
	User.findOneAndUpdate(_id,obj,function(err,obj){
		callback(err,obj);
	}); 
};

UserDAO.prototype.findByName = function(name,callback){
	User.findOne({name:name},function(err,obj){
		callback(err,obj);	
	});
};

UserDAO.prototype.findByLoginName = function(loginname,callback){
	User.findOne({loginname:loginname},function(err,obj){
		callback(err,obj);	
	});
};

UserDAO.prototype.findByQuery = function(query,callback){
	User.findOne(query,function(err,obj){
		callback(err,obj);	
	});
};

module.exports = new UserDAO();