var app = angular.module("starter.addFobjectController", ['ionic']);

app.controller("AddFobjectController", function($scope, $stateParams, DataManagementService) {
    $scope.form = {};
    var id = -1;
    
    if($stateParams.fobjectId == ""){
        //Add Mode
        $scope.form.name = "Objekt Name";
        $scope.form.location = "Ort";
        id =  DataManagementService.nextId();
    }else{
        //Edit Mode
        var fobject = DataManagementService.getFobject($stateParams.fobjectId);
        
        id = fobject.id;
        $scope.form.name = fobject.name;
        $scope.form.location = fobject.location;
    }
    
    $scope.save = function() { 
        var fobject = {
            "id" : id,
            "name" : $scope.form.name,
            "location": $scope.form.location
        };

        DataManagementService.addFobject(fobject);
    };
});
