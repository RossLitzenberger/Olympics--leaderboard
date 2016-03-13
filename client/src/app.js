import angular from 'angular';
angular.module('olympics', [])
.controller('sportsController', function(){
  var vm = this;
  vm.sports = ["Weightlifting", "Cycling"];
})
