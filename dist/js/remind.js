angular的directive的指令：
1.var app = angular.module("myApp", []);
app.controller("myController", ['$scope', function($scope) {
	.........              这里写业务逻辑；
}])
app.directive("myDirective", function() { //组件名称和回调函数
	return {                            //返回一个指令对象
		restrict: 'ECMA'，              //指定该指令的类型
		template: '<span>{{xx}}</span>' //可以是一个字符串，也可以是一个函数
	//  template: function() {
	//		return '<span>{{xx}}</span>'
	//	},
		templateUrl: '../app/template.html',//当拼接的字符串较多时，templateUrl会指向一个模板文件
		priority: [number], //一个dom上有多个指令时，需要用到
		replace: true/false //是否替换掉生成的指令标签，true的话，会替换
		link: function(scope, element, attrs) { //link函数主要用于添加对DOM事件的监听，监视模型的属性变化，以及更新DOM的
			scope: 若没有定义scope，则代表父controller scope.
		}

	}
})