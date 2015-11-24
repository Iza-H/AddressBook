/**
 * Created by izabela on 24/11/15.
 */


angular.module("AddressBook").service("ContactServices", ['$filter', 'Properties', function($filter, Properties){

    this.getValueFromStorage = function(valor){
        debugger;
        if (typeof (Storage)!=='undefined'){
            return localStorage.getItem(Properties.prefix + $filter('lowercase')(valor));
        }else{
            console.log("Local Storage undefined");
        }
    }

    this.saveValueInStorage = function(valor){
        if (typeof (Storage)!=='undefined'){
            //set values in the localStorege, in a lowercase way:
            return localStorage.setItem(Properties.prefix + $filter('lowercase')(valor.email), JSON.stringify(valor));
        }else{
            console.log("Local Storage undefined");
        }
    }


}]);