var Machine = require('../../models/machine');
var data = require('../../data/machine_aix');
var EventProxy = require('eventproxy');
exports.getMachine = function(req,res){
	// res.render('index',{title:'aaa'});
	var query = {};
	var sort = [['m_address', 'asc']];
	var page = req.query.page==undefined?global.page:req.query.page;
    var pageNum = req.query.pageNum==undefined?global.pageNum:req.query.pageNum;
	var skip = (page-1)*pageNum;
	var pageLimit = pageNum;
	//console.log(skip+' '+pageLimit);
	Machine.find(query,sort,skip,pageLimit,function(err,ones){
		if(err)
			res.render('404');
		else{

			Machine.count(query,function(err,totalPage){
				// var totalPage = ones.length/pageNum + ones%pageNum==0?0:1;
				console.log(totalPage);
				res.render('manager/machine',{'ones':ones,'currPage':page,'pageNum':pageNum});
				//res.send(ones);
			});
			
		}
	});
};

exports.edit = function(req,res){
	Machine.findById(req.params._id,function(err,one){
		if(err)
			res.render('404');
		else{
			res.render('manager/machine_edit',{'one':one});
			//res.send(one);
		}
	});
};

exports.editSubmit = function(req,res){
	var data = req.body;
	Machine.findByIdAndUpdate(data,function(err,one){
		if(err){
			res.send({err:err,success:false});
		}else{
			res.send({success:true,one:one});
		}
	});
};

exports.addOne = function(req,res){
	var obj = {name:'liaobin',name_en:'liaobin',department:'系统室'};
	Machine.save(obj,function(err){
		console.log('addOne success!');
	});
};

var saveOne = function(one,callback){
	Machine.save(one,callback);
};



















exports.importdata = function(req,res){
	console.log('廖斌');
	var machine_aix = data.machine_aix;
	
	 	var proxy = new EventProxy();
		proxy.after('save',machine_aix.length,function(list){
			res.send('ok',list);
		});
		proxy.fail(function(err){
			proxy.unbind();
			res.send('fail');
		});
		var needToInsert = [];

		for (var i=0;i<machine_aix.length;i++) {
			var one = machine_aix[i];
			insertOne(one,proxy.done('save'));
		}
	//res.send(machine_aix);
};

var insertOne = function(one,callback){
	Machine.save(one,callback);
};

