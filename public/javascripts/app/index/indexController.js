'use strict';

define(['jquery','../app','i18n!app/resources/nls/res','all_tools'], function ($,app,res) {

    // var  IndexController=['$scope',function($scope) {
    //     $scope.title = res.title;
    //     console.log('IndexController');
    // }];
    // return IndexController;
    return app.controller('IndexController', function ($scope, $http) {
        console.log('cc');
        $scope.title = res.title;
        // $http.get('/resetLogin').success(function (user) {
        //     console.log('aaa');
        //     $scope.resetLogin(user);
        // });
        // $scope.txt = {
        //     home:res.welcome
        // };
        // $scope.nextimg = function () {
        //     alert('next');
        //    console.log('nextimg');
        // };
        // $scope.resetLogin = function (user) {
        //     if (user.name) {
        //         $scope.login = {
        //             url:'logout',
        //             name:res.logout
        //         };

        //         $scope.signup = {
        //             url:'',
        //             name:'welcome:' + user.name
        //         };
        //     } else {
        //         $scope.login = {
        //             url:'login',
        //             name:res.login
        //         };
        //         $scope.signup = {
        //             url:'signup',
        //             name:res.signup
        //         };
        //     }
        // };

        $('.index-slider-ul').bxSlider({
            mode: 'horizontal',
            captions: true,
            width: '700px',
            auto: true,
            speed: 1000,
            autoDelay: 8000
        });

        console.log('end')
        
    });

});