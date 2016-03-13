import angular from 'angular';
angular.module('olympics', [])
.controller('sportsController', function($http){
  var vm = this;
  // vm.sports = ["Weightlifting", "Cycling"];
  $http.get('/sports').then((response) => {
    vm.sports = response.data;
  });
})
