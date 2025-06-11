// define our application
angular.module("bandApp", ['ngRoute', 'bandAppControllers', 'bandAppDirectives'])
	.config(function ($routeProvider, $locationProvider) {
        // Enable html5Mode for clean URLs (works in production)
        $locationProvider.html5Mode(true);
		// route our application
		$routeProvider
			.when('/home', {
				templateUrl: "templates/home.html",
				controller: "HomeController"
			})
			.when('/meet-the-band', {
				templateUrl: "templates/meet-the-band.html",
				controller: "AudioController"
			})
			.when('/tour-info', {
				templateUrl: "templates/tour-info.html",
				controller: "TourController"
			})
			.when('/services', {
				templateUrl: "templates/services.html",
				controller: "ContactController"
			})
			.when('/searchiTunes', {
				templateUrl: "templates/search-itunes.html",
				controller: "ItunesController"
			})
			.otherwise({
				redirectTo: '/home'
			});
	});
