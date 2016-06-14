/**
 * Created by izabela on 14/06/16.
 */
'use strict';

describe('Testing ListService service', function(){
    var Properties, ListServices;
    var store = {};

    beforeEach(module('AddressBook'));


    beforeEach(inject(function ( _ListServices_) {
        ListServices= _ListServices_;

        // LocalStorage mock.
        spyOn(localStorage, 'getItem').and.callFake(function(key) {
            return store[key];
        });
        spyOn(localStorage, 'setItem').and.callFake(function(key, value) {
            store[key] = value;
        });
        spyOn(localStorage, 'clear').and.callFake(function() {
            store = {};
        });



    }));

    afterEach(function () {
        store = {};
    });

    it ('should have ListService service be difined', function(){
       expect(ListServices).toBeDefined();
    });

    it ('should have a function getContacts', function(){
        expect(angular.isFunction(ListServices.getContacts)).toBe(true);
    });


    it ('should return list with two contacts when the storage is defined', function(){
        expect(Storage).toBeDefined();
        localStorage.clear();
        localStorage.setItem("AB_1", '{"name": "item_correct_1"}');
        localStorage.setItem("AB_2", '{"name": "item_correct_2"}');
        localStorage.setItem("CC_2", '{"name": "item_with_incorrect_prefix"}');
        var result = ListServices.getContacts();
        expect(result.length).toBe(2);
        expect(result[0].name).toBe("item_correct_2");
        expect(result[1].name).toBe("item_correct_1");
        expect(result[1].name).not.toBe("item_with_incorrect_prefix");
        expect(result[0].name).not.toBe("item_with_incorrect_prefix");


    });

    it ('should return null and present log if type of Storage is undefinded', function(){
        Storage = undefined;
        spyOn(console, 'log');
        var result = ListServices.getContacts(Storage);
        expect(console.log).toHaveBeenCalledWith('Local Storage undefined');
        expect(result).toBeNull();
    });



});
