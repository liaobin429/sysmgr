var System = require('../../models/system');


//read
exports.show = function(req,res){
	// res.render('index',{title:'aaa'});
};



//manager
/**
edit
*/
exports.edit = function(req,res){
	var obj = {name:'liaobin',name_en:'liaobin',department:'系统室'};
	System.save(obj,function(err){
		console.log('addOne success!');
	});
};


