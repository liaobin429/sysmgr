var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var SystemSchema = new Schema({
	label				:	String,
	app_name			:	String,
	db_inst_name		:	String,
	user_sys			:	String,
	user_sys_bak		:	String,
	user_app			:	String,
	user_app_bak		:	String,
	user_devloper		:	String,
	user_devloper_bak	: 	String,
	image_topo			:	String,
	image_arch			:	String,
	ha_desc				:	String,
	app_ha				:	String,
	db_ha				:	String,
	desc				:	String,
	attention			:   Array
});

var System = mongodb.mongoose.model("system",SystemSchema);

var SystemDAO = function(){};

SystemDAO.prototype.save = function(obj,callback){
	var instance = new System(obj);
	instance.save(function(err){
		callback(err);
	});	
};

SystemDAO.prototype.findByIdAndUpdate = function(obj,callback){
	var _id = obj._id;
	delete obj._id;
	System.findOneAndUpdate(_id,obj,function(err,obj){
		callback(err,obj);
	}); 
};

SystemDAO.prototype.findByName = function(name,callback){
	System.findOne({name:name},function(err,obj){
		callback(err,obj);	
	});
};


module.exports = new SystemDAO();