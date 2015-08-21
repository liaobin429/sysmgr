'use strict';

define(['jquery','../app','i18n!app/resources/nls/res','all_tools'], function ($,app,res) {

    return app.controller('formController', function ($scope, $http) {
        $scope.formData = {};
        $scope.submitForm = function(isValid) {
            // check to make sure the form is completely valid
            if (isValid) {
                console.log($scope.formData);
                $http({
                    method  : 'POST',
                    url     : '/manager/machineSubmit',
                    data    : $.param($scope.formData),  // pass in data as strings
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
                })
                    .success(function(result) {
                        console.log(result);
             
                        if (!result.success) {
                            // if not successful, bind errors to error variables
                            $scope.errorName = result.errors.name;
                            $scope.errorSuperhero = result.errors.superheroAlias;
                        } else {
                            // if successful, bind success message to message
                            $scope.message = result.message;
                        }
                    });
            }
        }
    });

});