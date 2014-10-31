({
    createExpense : function(component, event, helper) {
        var expnameField = component.find('expname');
        var expname = expnameField.get('v.value');
        console.log(expname);
    },
    checkGlobalIds : function(component, event, helper) {
        var globalId = component.getGlobalId();
        console.log(globalId);
        var comp = $A.getCmp(globalId);
        console.log(comp);
        var compVal = $A.getValue(globalId);
        console.log(compVal);
    }
})