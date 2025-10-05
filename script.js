// login button functionality

document.getElementById('loginButton').addEventListener('click', function(e) {
    e.preventDefault();
    const mobileNumber = 12345678910;
    const pinNumber = 1234;
    const mobileNumberValue=document.getElementById('mobile-number').value;
    const mobileNumberValueConverted= parseInt(mobileNumberValue);
    const pinNumberValue=document.getElementById('pin-number').value;
    const pinNumberValueConverted=parseInt(pinNumberValue);
    if(mobileNumberValue.length!=11){
        alert('Mobile number must be 11 digit');
        return;
    }
    if(mobileNumber===mobileNumberValueConverted && pinNumber===pinNumberValueConverted){
        window.location.href='./home.html';
    }
    else{
        alert('Login Failed');
    }
});