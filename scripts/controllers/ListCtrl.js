/**
 * Created by izabela on 24/11/15.
 */
angular.module("AddressBook").controller("ListCtrl",['$scope', 'Contacts', function($scope, Contacts){
    debugger;
    $scope.contacts = Contacts;

}]);