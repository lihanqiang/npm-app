var myApp = angular.module('myapp',[]);

myApp.controller('myController', ['$scope', function($scope) {
	$scope.hideFlag = true;
    $scope.persons = [
    	{
    		id: 0,
    		name: 'Narco'

    	},
    	{
    		id: 1,
    		name: 'Bombasto',
    	},
    	{
    		id: 2,
    		name: 'Celeritas'
    	},
    	{
    		id: 3,
    		name: 'Magneta'
    	},
    	{
    		id: 4,
    		name: 'Mr Li'
    	}
    ];
    $scope.person2 = _.slice($scope.persons, 0, 4);
    
    this.showDiv1 = function() {
		$scope.hideFlag = true;
    };
    this.showDiv2 = function() {
		$scope.hideFlag = false;
    };
    this.remove = function(personId) {
        _.remove($scope.persons, function(item) {
            return item.id == personId;
        })
    }
    this.add = function() {
        if($scope.inputHero){
            $scope.persons.push({
                id: $scope.persons.length,
                name: $scope.inputHero
            })
        }
    }

    //搜索的
    this.search = function() {
        var searchPersons = [];
        var val = $scope.searchVal.toLowerCase();
        for(var i = 0, length = $scope.persons.length; i < length; i++){
            var eachItem = $scope.persons[i];
            if(eachItem.name.toLowerCase().indexOf(val) > -1){
                searchPersons.push(eachItem);
            } 
        } 
        val?$scope.searchPersons = searchPersons:$scope.searchPersons=[];
    }
}]);
