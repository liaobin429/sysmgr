'use strict';

define(['jquery','../app','i18n!app/resources/nls/res','all_tools'], function ($,app,res) {

    return app.controller('pageController', function ($scope, $http) {
       console.log('pageController');

       console.log($scope.currPage);
       var options = {
                size:"small",
                bootstrapMajorVersion:3,
                currentPage: $scope.currPage,
                numberOfPages: 5,
                totalPages:11,
                onhover:true,
                onPageClicked: function (e, originalEvent, type, page) {  
                    // alert("type:" + type + ",Page:" + page); 
                    var curLocation = window.location.href;
                    var baseLocation = curLocation.substr(0,curLocation.indexOf('?'));
                    var search = '';
                    if(curLocation.indexOf('search=')!=-1)
                        search = curLocation.substr(curLocation.indexOf('search=')+7);

                    window.location.href = baseLocation+"?page="+page+"&search="+search;
                }
            };

        $('.pagination').bootstrapPaginator(options);

    });

});