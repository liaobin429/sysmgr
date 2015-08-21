exports.index = function(req,res){
	//console.log('aa');
	res.render('index',{title:'hitman',layout:"layout.html"});
};

exports.search = function(req,res){
	//...条件查询
	res.render('search/search',{title:'hitman',layout:"layout.html"});
};

