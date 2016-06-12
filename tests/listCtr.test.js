/**
 * Created by izabela on 12/06/16.
 */


describe('Testing ListCtrl Controller', function() {
    var ctrl, scope;
    beforeEach(module('AddressBook'));

    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        var contacts = [{'name':'TestName'}];
        ctrl = $controller('ListCtrl', {$scope : scope, Contacts: contacts });
    }));

    it('should have a ListCtrl controlled', function(){
        expect(ctrl).toBeDefined();
    });

    it('should have a Contacts list with a length == 1', function(){
        expect(scope.contacts).toBeDefined();
        expect(scope.contacts.length).toEqual(1);
    });



});


