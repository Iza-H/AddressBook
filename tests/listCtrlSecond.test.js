//Second verison of use provider:

describe('Testing ListCtrl Controller - second version [using $provide]', function() {
    var ctrl, scope;
    beforeEach(module('AddressBook'));

    beforeEach(module(function($provide) {
        var values = [{"name":"TestName"}];
        $provide.value('Contacts',values);
    }));

    beforeEach(inject(function($controller, $rootScope, _Contacts_){
        scope = $rootScope.$new();
        var contacts = _Contacts_;
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