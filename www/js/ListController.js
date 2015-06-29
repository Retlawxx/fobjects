var app = angular.module('starter.listController', ['ionic']);

app.controller("ListController", function($scope, DataManagementService) {
    $scope.fobjects = DataManagementService.getFobjects();
});
