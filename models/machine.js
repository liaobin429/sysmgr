var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var ObjectId = Schema.ObjectId;
var OID = mongodb.mongoose.Types.ObjectId;

var MachineSchema = new Schema({
	hostname			:	String,
	app_id				:	Array,
	app_name			:   String,
	desc				: 	String,
	m_provide			:	String,
	m_address			:	String,  //机器位置 A01-2(16-17)
	m_label				:	String,  //机器编号  YZPC-DXMANAGE
	m_type				:	String,  //机器类型  IBM X3650 M3
	m_type_num			:	String,  //机器型号-序列号7945IUR-99D7766
	m_config			:	String,
	os					:	String,
	ip					:	String,
	bus_area			:	String,
	buy_date			:	Date,
	orig_serv_date		:	Date,
	third_serv_date		: 	Date,
	memory				:	Number,
	cpu					:	Number,
	net_label			:	String,
	fiber_label			: 	String
	
	
});

var Machine = mongodb.mongoose.model("Machine",MachineSchema);

var MachineDAO = function(){};

MachineDAO.prototype.findById = function(_id,callback){
	Machine.findById(_id, callback);
};

MachineDAO.prototype.save = function(obj,callback){
	var instance = new Machine(obj);
	instance.save(function(err){
		callback(err);
	});	
};

MachineDAO.prototype.findByIdAndUpdate = function(obj,callback){
	// var _id = OID(obj._id+'');
	var _id = obj._id;
	delete obj._id;
	console.log(obj);
	Machine.findByIdAndUpdate(_id,obj,function(err,obj){
		console.log(obj)
		callback(err,obj);
	}); 
};

MachineDAO.prototype.findByName = function(name,callback){
	Machine.findOne({name:name},function(err,obj){
		callback(err,obj);	
	});
};

MachineDAO.prototype.find = function(query,sort,skip,pageLimit,callback){
	Machine.find({}, null, {sort: sort,skip:skip, limit:pageLimit},callback);
};


MachineDAO.prototype.count = function(query,callback){
	Machine.count(query,callback);
};



module.exports = new MachineDAO();