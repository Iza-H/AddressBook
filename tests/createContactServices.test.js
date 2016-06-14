/**
 * Created by izabela on 14/06/16.
 */
'use strict';
describe('Testing CreateContectServices service', function(){
    var ContactServices;
    var store = {};

    beforeEach(module('AddressBook'));

    beforeEach(inject(function ( _ContactServices_) {
        ContactServices= _ContactServices_;

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
        spyOn(localStorage, 'removeItem').and.callFake(function(key) {
            var prop = key;
            delete store[prop];
        });

        localStorage.clear();
        localStorage.setItem("AB_element1", '{"email": "element1", "name": "item_correct_1"}');
        localStorage.setItem("AB_element2", '{"email": "element2", "name": "item_correct_2"}');
        localStorage.setItem("CC_element3", '{"email": "element3", "name": "item_with_incorrect_prefix"}');

    }));

    afterEach(function () {
        store = {};
    });

    it ('should have CreateContractService service be difined', function(){
        expect(ContactServices).toBeDefined();
    });

    it('should have defined getValueFromStorage', function(){
        expect(angular.isFunction(ContactServices.getValueFromStorage)).toBe(true);
    });

    it('should have defined saveValueInStorage', function(){
        expect(angular.isFunction(ContactServices.saveValueInStorage)).toBe(true);
    });

    it('should have defined updateValueInStorage', function(){
        expect(angular.isFunction(ContactServices.updateValueInStorage)).toBe(true);
    });

    it('should have defined deleteValueFromStorage', function(){
        expect(angular.isFunction(ContactServices.deleteValueFromStorage)).toBe(true);
    });

    it ('should return correct value for getValueFromStorage', function(){

        expect(ContactServices.getValueFromStorage("element1")).toBe('{"email": "element1", "name": "item_correct_1"}');
        expect(ContactServices.getValueFromStorage("element2")).toBe('{"email": "element2", "name": "item_correct_2"}');
        expect(ContactServices.getValueFromStorage("ELEMENT2")).toBe('{"email": "element2", "name": "item_correct_2"}');
        expect(ContactServices.getValueFromStorage("element3")).not.toBe('{"email": "element3", "name": "item_with_incorrect_prefix"}');
        expect(ContactServices.getValueFromStorage("element3")).not.toBeDefined();

    });

    it ('should updateValueInStorage return an updated value', function(){
        ContactServices.updateValueInStorage({"email": "element1", "name": "new_item_correct_1"});
        expect(ContactServices.getValueFromStorage("element1")).toBe('{"email":"element1","name":"new_item_correct_1"}');

        ContactServices.updateValueInStorage({"email": "element2", "name": "new_item_correct_2"});
        expect(ContactServices.getValueFromStorage("element2")).toBe('{"email":"element2","name":"new_item_correct_2"}');

    });

    it ('should deleteValueInStorage return data which inform about success', function(){
        var res = ContactServices.deleteValueFromStorage({"email": "element2"});
        expect(res.ok).toBe('true');
        expect(res.result).toBe('success');
        expect(ContactServices.getValueFromStorage("element2")).not.toBe('{"email":"element2","name":"item_correct_2"}');
        expect(ContactServices.getValueFromStorage("element2")).not.toBeDefined();

    });





});
