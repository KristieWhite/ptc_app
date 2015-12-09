$(document).ready(function($){

//api key for hello sign
//7456ca56e56b02148aa11e4a100bfc6c1c271682f2bdb277e3893a736dea65c9

    HelloSign.init("{CLIENT_ID}");
    HelloSign.open({
        url: "SIGN_URL",     
        allowCancel: true,
        messageListener: function(eventData) {
            alert("HelloSign event received");
        }    
    });
    
});
