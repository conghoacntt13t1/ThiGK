﻿
app.controller('CustomersController', function ($scope, customersService) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.customers = customersService.getCustomers();
    }

    $scope.insertCustomer = function () {
        var firstName=$scope.newCustomer.firstName;
        var lastName=$scope.newCustomer.lastName;
        var city=$scope.newCustomer.city;
        customersService.insertCustomer(firstName,lastName,city);
    };

    $scope.deleteCustomer = function (id) {
       customersService.deleteCustomer(id);
    };
    //
    // $scope.searchCustomer=function () {
    //     var nameToSearch=$scope.customerSearch;
    //     $scope.customers=customersService.searchCustomer(nameToSearch);
    // }
});