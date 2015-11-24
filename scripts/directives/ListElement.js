/**
 * Created by izabela on 24/11/15.
 */
angular.module("AddressBook").directive("contactElement", function(){
   return{
       restrict : "E",
       templateUrl: "views/contactElement.html",

       scope : {
           contact : "=",
       },



   }
});