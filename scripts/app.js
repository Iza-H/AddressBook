/**
 * Created by izabela on 23/11/15.
 */
var addressBook = angular.module("AddressBook", ['ngRoute']);


addressBook.config(['$routeProvider', function($routeProvider, ListServices){
    $routeProvider.
        //route to the part which presents all contacts:
        when('/list', {
            templateUrl : 'views/List.html',
            controller: 'ListCtrl',
            resolve: {
                Contacts : ['ListServices', function(ListServices){
                    return ListServices.getContacts();
                }]

            }

        }).
        //route to the part which presents a creation form:
        when('/create', {
            templateUrl : 'views/CreateForm.html',
            controller: 'CreateContactCtrl',
            resolve: {

            }
        }).
        //deafult site:
        otherwise({
            redirectTo:'/list',
        });




}]);


