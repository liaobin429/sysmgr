var routes = require('./routes/index');
var auth = require('./midderwares/auth');

module.exports = function(app) {
	app.get('/',routes.main.index);
	app.get('/resetLogin',routes.main.index);
	app.get('/search',routes.main.search);

	//user
	app.get('/login', function(req, res) {res.render('user/login');});
	app.post('/loginsubmit',routes.user.loginsubmit);
	app.get('/logout',routes.user.logout);

	//manager
	app.get('/manager/system',auth.userRequired,function(req, res) {res.render('manager/system');});
	app.get('/manager/machine?',auth.userRequired,routes.machine.getMachine);
	app.get('/manager/system/:_id',auth.userRequired,routes.system.edit);
	app.get('/manager/machine/:_id',auth.userRequired,routes.machine.edit);
	app.post('/manager/machineSubmit',auth.userRequired,routes.machine.editSubmit);

	//search  system,machine

	app.get('/system?',routes.system.show);

	//machine

	//import data
	//app.get('/import/machine',routes.machine.importdata)
};