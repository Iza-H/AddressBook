/**
 * Created by izabela on 24/11/15.
 */
angular.module("AddressBook").directive("contactElement",['ContactServices', function(ContactServices){
   return{
       restrict : "EA",
       templateUrl: "views/contactElement.html",

       scope : {
           contact : "=",
       },
       link:function(scope){
           scope.delete = function(value){
               alert("DELETE");
               ContactServices.deleteValueFromStorage(value);
           },
            scope.update = function(contact){
                ContactServices.updateValueInStorage(contact);
            }

       }



   }
}]);