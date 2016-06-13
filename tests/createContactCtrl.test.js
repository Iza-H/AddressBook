
describe('Testing CreateContactCtrl Controller', function(){
    var ctrl, scope;
    beforeEach(module('AddressBook'));

    beforeEach(module(function($provide) {
        var values = {
            getValueFromStorage : function(returnedValue){
                return returnedValue;
            },
            saveValueInStorage : function(){
                return {ok:'true'};
            }
            
        }
        $provide.value('ContactServices',values);
    }));

    beforeEach(inject(function($controller, $rootScope, _ContactServices_){
        scope = $rootScope.$new();
        var contractService = _ContactServices_;
        ctrl = $controller('CreateContactCtrl', {$scope :scope, ContactServices:contractService});

    }));

    it('should have a CreateContactCtrl controlled', function(){
        expect(ctrl).toBeDefined();
    });

    it ('initial value of the scope.contact should be empty', function(){
        expect(scope.contact).toBeDefined();
        expect(Object.keys(scope.contact).length).toBe(0);
    });

    it ('should return an alert with a massage that this email exists when we have this value in storage', function(){
        scope.contact.email='someEmail';
        spyOn(window, 'alert');
        scope.createContact();
        expect(window.alert).toHaveBeenCalledWith('Contact with this email already exists');
        expect(window.alert).not.toHaveBeenCalledWith('saved correctly');
    });

    it ('should call setPristine method after saving Contact', function(){
        scope.contact.email=null;
        var form = {
            $setPristine: function() {}
        };
        spyOn(form, '$setPristine');
        scope.createContact(form);
        expect(form.$setPristine).toHaveBeenCalled();


    });

   it ('should return an alert with a massage that the contact was saved correctly after receiving ok:true', function(){
        scope.contact.email=null;
        spyOn(window, 'alert');
        var form = {
            $valid: true,
            $setPristine: function() {}
        };
        scope.createContact(form);
        expect(window.alert).toHaveBeenCalledWith('saved correctly');
        expect(window.alert).not.toHaveBeenCalledWith('Contact with this email already exists');

    });




});