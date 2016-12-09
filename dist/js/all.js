var myApp = angular.module('myapp',[]);

//创建自己的一个服务
// myApp.factory('myFactory', [function() {
// 	var countId = 5,
// 		hideFlag = true,
// 		inputHero,
// 		searchVal
	
// 	var data = [
//     	{
//     		id: 0,
//     		name: 'Narco'

//     	},
//     	{
//     		id: 1,
//     		name: 'Bombasto',
//     	},
//     	{
//     		id: 2,
//     		name: 'Celeritas'
//     	},
//     	{
//     		id: 3,
//     		name: 'Magneta'
//     	},
//     	{
//     		id: 4,
//     		name: 'Mr Li'
//     	}
//     ];

//     var getPerson = function() {
//     	return data;
//     }
//     var setData = function(hideFlag,inputHero,searchVal) {
//     	hideFlag = hideFlag;
//     	inputHero = inputHero;
//     	searchVal = searchVal;
//     	return {
//     		hideFlag: hideFlag,
//     		inputHero: inputHero,
//     		searchVal: searchVal
//     	}
//     }

// 	//显示前四个
// 	var showFirstFour = function() {
// 	    var data2 = _.slice(data, 0, 4); 
// 	    return data2;   
// 	}

// 	//显示隐藏
// 	var showDiv1 = function() {
// 		hideFlag = true;
// 	}
//     var showDiv2 = function() {
// 		hideFlag = false;
//     };

//      //删除的
//     var remove = function(personId) {
//         _.remove(data, function(item) {
//             return item.id == personId;
//         })
//     }
//     //增加的
//     var add = function() {
//         if(inputHero){
//             data.push({
//                 id: countId++,
//                 name: inputHero
//             })
//         }
//     }

//     //搜索的
//     var search = function() {
//         var searchPersons = [];
//         var val = searchVal.toLowerCase();
//         if(val){
//         	 for(var i = 0, length = data.length; i < length; i++){
// 	            var eachItem = data[i];
// 	            if(eachItem.name.toLowerCase().indexOf(val) > -1){
// 	                searchPersons.push(eachItem);
// 	            } 
// 	        }
//         }
//     }

//     return {
//     	setData: setData,
//     	getPerson: getPerson,
//     	showFirstFour: showFirstFour,
//     	showDiv1: showDiv1,
//     	showDiv2: showDiv2,
//     	remove: remove,
//     	add: add,
//     	search: search
//     }
// }])
myApp.controller('myController', ['$scope', function($scope) {
	// myFactory.setData($scope.hideFlag, $scope.inputHero, $scope.searchVal);
	// console.log(hideFlag)
	// console.log(inputHero)
	// $scope.persons = myFactory.getPerson();
	// $scope.person2 = myFactory.showFirstFour();
	// this.showDiv1 = myFactory.showDiv1;
	// this.showDiv2 = myFactory.showDiv2;
	// this.remove = myFactory.remove;
	// this.add = myFactory.add;
	// this.search = myFactory.search;
	var countId = 5;
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

    //显示前四个
    $scope.person2 = _.slice($scope.persons, 0, 4);
    
    //显示与隐藏
    this.showDiv1 = function() {
		$scope.hideFlag = true;
    };
    this.showDiv2 = function() {
		$scope.hideFlag = false;
    };

    //删除的
    this.remove = function(personId) {
        _.remove($scope.persons, function(item) {
            return item.id == personId;
        })
    }

    //增加的
    this.add = function() {
        if($scope.inputHero){
            $scope.persons.push({
                id: countId++,
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
}
]);
