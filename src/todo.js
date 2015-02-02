angular.module('todoList', [])
	.controller('TodoCtrl', function ($scope) {
		$scope.todoList = [];

		$scope.add = function (itemText) {
			$scope.todoList.push({
				text: itemText,
				done: false
			});

			// red test
			// uncomment to make them green
			//$scope.newTodo = '';
		};

		$scope.done = function (item) {
			item.done = true;
		};
	});