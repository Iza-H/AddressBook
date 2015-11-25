/**
 * Created by izabela on 24/11/15.
 */
angular.module("AddressBook").directive("contactElement",['ContactServices', function(ContactServices, Contacts){
   return{
       restrict : "EA",
       templateUrl: "views/contactElement.html",
       scope : {
           contact : "=",
       },
       link:function(scope, el, atrr){

           scope.delete = function(value){
               alert("DELETE");
               ContactServices.deleteValueFromStorage(value, el);
               scope.contact.$removed=true;


           },

            scope.update = function(contact){
                ContactServices.updateValueInStorage(contact);
            }

            scope.edit=function(value){
                scope.copy = angular.copy(value);
            }

            scope.cancel = function(){
                scope.contact=scope.copy;
                scope.contact.$edit=false;

            }

       }



   }
}]);