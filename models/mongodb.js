var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/sysmgr');global.db
mongoose.connect(global.dburl);
exports.mongoose = mongoose;