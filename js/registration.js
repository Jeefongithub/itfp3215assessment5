window.onerror = function (message, url, line) 
{
    alert("Message : " + message );
    alert("File URL : " + url );
    alert("Line Number of Error: " + line );
}    
validate = function() 
{
    var userIDFormat = "^[a-zA-Z0-9]+$";
    var nameFormat = "^[a-z A-Z]+$";
    var isPhoneChar = /^[-.() \d]+$/;
    var phoneFormat = "^\([(. ]([0-9]{3})\)[). ] ([0-9]{3})[-. ]([0-9]{4})$";
    var emailFormat = /^(([^!#$%&'*+/=?<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var userID = document.getElementsByName('userID')[0].value;
    var password = document.getElementsByName('password')[0].value;
    var psswrdValidation = document.getElementsByName('psswrdValidation')[0].value;
    var firstName = document.getElementsByName('firstName')[0].value;
    var lastName = document.getElementsByName('lastName')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var phoneNumber = document.getElementsByName('phoneNumber')[0].value;
    var signUpNewsletter = document.getElementsByName('signUpNewsletter');
    if(!userID.match(userIDFormat)) 
    {
        document.getElementById('erroruserID').innerHTML = 'A User ID may only contain letters and numbers.' + '</br>';
        document.regform.userID.focus();
        return false;
    }
    document.getElementById('erroruserID').innerHTML = '';
    if(password.length <8 || password=="") 
    {
        document.getElementById('errorpassword').innerHTML = 'Password length should be at least 8 characters.' + '</br>';
        document.regform.password.focus();
        return false;
    }
    document.getElementById('errorpassword').innerHTML = '';
    if(psswrdValidation.length <8 || psswrdValidation=="") 
    {
        document.getElementById('errorpsswrdValidation').innerHTML = 'Confirm Password length is at least 8 characters.' + '</br>';
        document.regform.psswrdValidation.focus();
        return false;
    }
    document.getElementById('errorpsswrdValidation').innerHTML = '';
    if(psswrdValidation != password) 
    {
        document.getElementById('errorpsswrdValidation').innerHTML = 'Confirm password is the same as Password entered.' + '</br>';
        document.regform.psswrdValidation.focus();
        return false;
    }
    document.getElementById('errorpsswrdValidation').innerHTML = '';
    if(!firstName.match(nameFormat) ) 
    {
        document.getElementById('errorfirstName').innerHTML = 'First Name may only contain letters and spaces.' + '</br>';
        document.regform.firstName.focus();
        return false;
    }
    document.getElementById('errorfirstName').innerHTML = '';
    if(!lastName.match(nameFormat) ) 
    {
        document.getElementById('errorlastName').innerHTML = 'Last Name may only contain letters and spaces.' + '</br>';
        document.regform.lastName.focus(); 
        return false;
    }
    document.getElementById('errorlastName').innerHTML = '';
    if (email.indexOf("@", 0) < 0) 
    {
        document.getElementById('erroremail').innerHTML = 'The email address must contain a @ character using the xxx@xxx.xxx format.' + '</br>';
        return false;
    }
    document.getElementById('erroremail').innerHTML = '';
    if (email.indexOf(".", 0) < 0) 
    {
        document.getElementById('erroremail').innerHTML = 'The email address must contain a . character using the xxx@xxx.xxx format..' + '</br>';
        return false;
    }
    document.getElementById('erroremail').innerHTML = '';
    if(!email.match(emailFormat) ) 
    {
        document.getElementById('erroremail').innerHTML = 'Invalid email format.' + '</br>'; 
        document.regform.email.focus();
        return false;
    }
    document.getElementById('erroremail').innerHTML = '';
    if (!phoneNumber.match(isPhoneChar)) 
    {
        document.getElementById('errorphoneNumber').innerHTML = 'The phone number may not contain letters or special characters.' + '</br>';
        return false;
    }
    document.getElementById('errorphoneNumber').innerHTML = '';
    if(!phoneNumber.match(phoneFormat) ) 
    {
        document.getElementById('errorphoneNumber').innerHTML = 'The phone number may only contain numbers entered in the (123) 456-7890 format.' + '</br>';
        document.regform.phoneNumber.focus();
        return false;
    }
    document.getElementById('errorphoneNumber').innerHTML = '';
    if ((signUpNewsletter[0].checked == false) && (signUpNewsletter[1].checked == false)) 
    {
        document.getElementById('errorsignUpNewsletter').innerHTML = ' <<<<<Missing Newsletter Selection.';
        document.getElementById("signUpYes").focus();
        return false;
    }
    document.getElementById('errorsignUpNewsletter').innerHTML = '';
    if(document.getElementById('signUpYes').checked) 
    {
        var signUpNewsletter = "Yes";
    }
    if(document.getElementById('signUpNo').checked) 
    {
        var signUpNewsletter = "No";
    }
    if(userID.match(userIDFormat)) 
    {
        if(password.length >8 || !password=="") 
        {
            if(psswrdValidation.length >8 || !psswrdValidation=="") 
            {
                if(psswrdValidation == password) 
                {
                    if(firstName.match(nameFormat)) 
                    {
                        if(lastName.match(nameFormat)) 
                        {
                            if(email.match(emailFormat))
                            {
                                if(phoneNumber.match(phoneFormat)) 
                                {
                                    if ((signUpNewsletter = "Yes") || (signUpNewsletter = "No")) 
                                    {
                                        setCookie("userID",userID,1);
                                        setCookie("password",password,1);
                                        setCookie("psswrdValidation",psswrdValidation,1);
                                        setCookie("firstName",firstName,1);
                                        setCookie("lastName",lastName,1);
                                        setCookie("email",email,1);
                                        setCookie("phoneNumber",phoneNumber,1);
                                        setCookie("signUpNewsletter",signUpNewsletter,1);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    window.location.replace("interests.html");
    return false;
}
function setCookie(cname, cvalue, exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 1 * 3600 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    /* */
    alert("Cookie Path: " + ";/path=" + "\r\n" +
    "Cookie Name: " + cname + "\r\n" +
    "Cookie Value: " + cvalue + "\r\n" +
    "Cookie Expiration: " + exdays + ' hour.'
    );
    /**/
}
window.onload = validate;