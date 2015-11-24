/**
 * Created by izabela on 23/11/15.
 */

angular.module("AddressBook").controller("CreateContactCtrl",['$scope', 'ContactServices', function($scope, ContactServices){
    $scope.contact = {};


    $scope.createContact= function(){
        if (ContactServices.getValueFromStorage($scope.contact.email)===null){
            ContactServices.saveValueInStorage ($scope.contact);
        }else{
            alert("YA tengo");
        }
    };



}]);