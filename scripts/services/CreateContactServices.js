/**
 * Created by izabela on 24/11/15.
 */


angular.module("AddressBook").service("ContactServices", ['$filter','Properties', function($filter, Properties){

    this.getValueFromStorage = function(value){
        if (typeof (Storage)!=='undefined'){
            return localStorage.getItem(Properties.prefix + $filter('lowercase')(value));
        }else{
            return {ok:"error", result:"StorageUndifined"}
        }
    }

    this.saveValueInStorage = function(value){
        if (typeof (Storage)!=='undefined'){
            //set values in the localStorege, in a lowercase way:
            return localStorage.setItem(Properties.prefix + $filter('lowercase')(value.email), JSON.stringify(value));
        }else{
            return {ok:"error", result:"StorageUndifined"}
        }
    }

    this.updateValueInStorage = function(value){
        if (typeof (Storage)!=='undefined'){
            //set values in the localStorege, in a lowercase way:
            var oldValue = localStorage.getItem(Properties.prefix + $filter('lowercase')(value.email));
            if (oldValue!==null){
                localStorage.removeItem(Properties.prefix + $filter('lowercase')(value.email));
            }
            return localStorage.setItem(Properties.prefix + $filter('lowercase')(value.email), JSON.stringify(value));
        }else{
            return {ok:"error", result:"StorageUndifined"}
        }
    }

    this.deleteValueFromStorage = function(value){
        if (typeof (Storage)!=='undefined'){
            //set values in the localStorege, in a lowercase way:
            var oldValue = localStorage.getItem(Properties.prefix + $filter('lowercase')(value.email));
            if (oldValue!==null){
                localStorage.removeItem(Properties.prefix + $filter('lowercase')(value.email));
                return {ok:"true", result:"success"}
            }
            return {ok:"true", result:"noValueInStorage"}
        }
        return {ok:"error", result:"StorageUndifined"}
    }


}]);