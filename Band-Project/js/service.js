angular.module('bandAppServices', []).factory('bandAppService', function ($http) {
	// returns the getList
	return {
		getList: getList
	};

	// returns the url
	function getList(url) {
		return $http.get(url);
	}
});
