
requirejs.config({
	'baseUrl': '/javascripts',
	'paths': {
		'jquery': 'libs/jquery-1.9.1.min',
		'underscore': 'libs/underscore-min',
		'bootstrap' : 'libs/bootstrap/js/bootstrap.min',
		'alertify': 'libs/alertify',
		'angular': 'libs/angular/angular',
		'Console': 'libs/console/console',
		// 'scrollfollow': 'libs/jquery.scrollfollow',
		'i18n':'libs/i18n',
		'all_tools':'libs/all_tools.min'
	},
	'shim': {
		'underscore': {
			'exports': '_'
		},
		'angular' : {'exports' : 'angular'},
		'bootstrap':{deps: ['jquery']},
		'scrollfollow':{deps: ['jquery']},
		'alertify': ['jquery'],
	}
	/*,
    i18n: {
        locale: 'ja-jp'
    },*/
});

require(['jquery','angular','Console','app/app','app/index/indexController'],function($,angular,Console){
	angular.bootstrap(document, ['app']);
	// $( document ).ready( function ()  
 //    {
 //      console.log($('#left-menu'));
 //      $('#left-menu').scrollFollow();  
 //    }  
 //  );  
});