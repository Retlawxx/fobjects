var app = angular.module("starter.datamanagementService", ['ionic']);

app.service("DataManagementService", function($http){

    var fobjects = angular.fromJson(localStorage.getItem('fobjects'));

    if(fobjects === null){
        $http.get("js/data.json").success(function (data) {
            localStorage.setItem('fobjects', angular.toJson(data));
        }); 
    }
    console.log(fobjects);
    
    this.nextId = function(){
        return fobjects.length;   
    }
    
    this.getFobjects = function() {
        return fobjects;
    }
    
    this.getFobject = function(id){
        for(var i=0; i<fobjects.length; i++){
            if(fobjects[i].id === parseInt(id)){
                return fobjects[i]
            }
        }
        return null;
    }
    
    this.addFobject = function(fobject){
        if(fobjects[fobject.id] === null){
            //Add
            fobjects.push(fobject);
        }else{
            //Edit
            fobjects[fobject.id] = fobject;
        }
        localStorage.setItem('fobjects', angular.toJson(fobjects));
    }

});
