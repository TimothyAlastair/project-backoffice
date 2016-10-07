var app = angular.module('appModule',[]);

app.controller('appController', function( $scope ) {

	$scope.cases = [
		{
			"id": 1,
			"name": "Leanne Graham",
			"status": "open"
		},
		{
			"id": 2,
			"name": "Ervin Howell",
			"status": "pending"
		},
		{
			"id": 3,
			"name": "Clementine Bauch",
			"status": "pending"
		}
	];
	
})