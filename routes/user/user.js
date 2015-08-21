var User = require('../../models/user');
exports.getUser = function(req,res){
	// res.render('index',{title:'aaa'});
};

exports.loginsubmit = function (req, res) {
    var data = req.body;
    User.findByQuery({'loginname':data.loginname,'passwd':data.passwd},function(err,one){
    	if(one){
    		req.session.user = one;
			res.redirect('/');
    	}else{
    		res.redirect('/login');
    	}
    });
};

exports.logout = function(req,res){
    req.session.user = null;
    res.redirect('/');
};

exports.addOne = function(req,res){
	var obj = {name:'liaobin',name_en:'liaobin',department:'系统室'};
	User.save(obj,function(err){
		console.log('addOne success!');
	});
};


