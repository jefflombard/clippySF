({
    handleError: function (component, event, helper) {
        var error = event.getParams();
        console.log(error);
    },
    play : function(cmp, event) {
        var params = event.getParam('arguments');
        if (params) {
            var action = params.action;
            var message = {
                name: "PLAY",
                value: action
            };
            component.find("clippySF").message(message);
        }
        
    },
    animate  : function(cmp, event) {
        var message = {
            name: "ANIMATE"
        };
        component.find("clippySF").message(message);
    },
    speak  : function(cmp, event) {
        var params = event.getParam('arguments');
        if (params) {
            var messageText = params.message;
            var message = {
                name: "SPEAK",
                value: messageText
            };
            component.find("clippySF").message(message);
        }
    },
    stop  : function(cmp, event) {
        var message = {
            name: "STOP"
        };
        component.find("clippySF").message(message);
    }
})
