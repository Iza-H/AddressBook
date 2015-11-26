/**
 * Created by izabela on 23/11/15.
 */

angular.module("AddressBook").controller("CreateContactCtrl",['$scope', 'ContactServices', function($scope, ContactServices){
    $scope.contact = {};


    $scope.createContact= function(form){
        if (ContactServices.getValueFromStorage($scope.contact.email)===null){
            var result = ContactServices.saveValueInStorage ($scope.contact);
            if (result.ok ==='true'){
                alert("saved correctly");

                //clear form:
                $scope.contact=null;

                //clear errors from form:
                form.$setPristine();
            }

        }else{
            alert("Cantact with this email already exists");

        }
    };



}]);