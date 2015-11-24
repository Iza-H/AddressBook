/**
 * Created by izabela on 24/11/15.
 */
angular.module("AddressBook").service("ListServices",'Properties', function(Properties){

    this.getContacts = function(){
        if (typeof (Storage)!=='undefined'){
            var contacts = new Array();
            for(var i = 0; i < localStorage.length; i++){

                contacts.push(localStorage.getItem( Properties.prefix + localStorage.key(i)));
            }
            debugger;
            return contacts;
        }else{
            console.log("Local Storage undefined");
        }
    }
})
