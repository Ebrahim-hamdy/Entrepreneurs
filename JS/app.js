var myApp = angular.module('myApp', [
	'ngRoute',
	'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/list', {
		templateUrl: 'Partials/list.html',
		controller: 'ListController'
	}).
	when('/details/:itemId', {
		templateUrl: 'Partials/details.html',
		controller: 'DetailsController'
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);
