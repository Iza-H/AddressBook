/**
 * Created by izabela on 24/11/15.
 */

angular.module('AddressBook').directive('contactElement',['ContactServices', function(ContactServices){
    return{
        restrict : 'EA',
        templateUrl: 'views/contactElement.html',
        scope : {
            contact : '='
        },
        link:function(scope, el){

            scope.delete = function(value){
                console.log('DELETE contact' + value);
                ContactServices.deleteValueFromStorage(value, el);
                scope.contact.$removed=true;
            };

            scope.update = function(contact){
                console.log('SAVE contact' + contact);
                ContactServices.updateValueInStorage(contact);
            };

            scope.edit=function(value){
                scope.copy = angular.copy(value);
            };

            scope.cancel = function(){
                scope.contact=scope.copy;
                scope.contact.$edit=false;

            };


        }

    };
}]);