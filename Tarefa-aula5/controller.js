var fessmodule = angular.module('myModule', []);

fessmodule.controller('fessCntrl', function ($scope) {
    $scope.expenses = [{
  Palindrome: ""
 }];
 
 $scope.submitExpense = function (expenseInfo) {
    //$scope.palicheck = str === str.split('').reverse().join('');
 		//ng-if="palicheck"
    $scope.expenses.push(expenseInfo);
 }
    
});

fessmodule.$inject = ['$scope'];

