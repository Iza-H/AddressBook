/**
 * Created by izabela on 24/11/15.
 */
"use strict";

angular.module("AddressBook").service("ListServices", function(Properties){

    this.getContacts = function(){
        if (typeof (Storage)!=='undefined'){
            //debugger;
            var contacts = new Array();
            for(var i = 0; i < localStorage.length; i++){
                if (localStorage.key(i).slice(0, 3) === Properties.prefix){
                    var storageElemnt = localStorage.getItem(localStorage.key(i));
                    if (storageElemnt!==null){
                        contacts.push( JSON.parse(storageElemnt));
                    }
                }

            }
            //localStorage.clear();
            return contacts;
        }else{
            console.log("Local Storage undefined");
            return null;
        }
    }
});
