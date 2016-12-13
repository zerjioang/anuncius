$("#btn-suscribe-form").on("click", function(event) {
    event.preventDefault();
    
    var onError = function (){
        alert('error');
    };
    
    var onSuccess = function (){
        alert('success');
    };
    
    var payload = {
        'email': $("#subscription-form-email").val()
    };
    
    contactAPIviaPOST('/suscribe/user/', payload, onSuccess, onError);
});
