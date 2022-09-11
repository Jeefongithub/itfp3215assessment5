// Error reporting to assist with troubleshooting.
window.onerror = function (message, url, line) {
    alert("Message : " + message );
    alert("File URL : " + url );
    alert("Line Number of Error: " + line );
    }
    // This function is called once HTML has loaded completely.
    // Registration Page.
    getData = function() {
    // Get cookies from registration.html
    var userID = getCookie("userID"); // Fill variable from userID cookie.
    var password = getCookie("password"); // Fill variable from password cookie.
    var psswrdValidation = getCookie("psswrdValidation"); // Fill variable from
    var firstName = getCookie("firstName"); // Fill variable from firstName
    var lastName = getCookie("lastName"); // Fill variable from lastName cookie.
    var email = getCookie("email"); // Fill variable from email cookie.
    var phoneNumber = getCookie("phoneNumber"); // Fill variable from email
    var signUpNewsletter = getCookie("signUpNewsletter"); // Fill variable from
    var interests = getCookie('interests'); // Fill variable from interests
    var comments = getCookie('comments'); // Fill variable from comments cookie.
    var Newsletter = getCookie('Newsletter'); // Fill variable from Newsletter
var referred = getCookie('referred'); // Fill variable from referred cookie.
// Display Input from All Pages
// Reset the invitation letters on each click.
document.getElementById("regCon").innerHTML = "";
// Displays the combined validated or corrected input from the
document.getElementById("regCon").innerHTML +='<section id="pageForm">'+
//'<article id="placeholderContent">' +
'The following information has been saved in cookies: <br>' +
'<br/> User ID: ' + '<span id="userID">' + userID + '</span>' + // Displays
'<br/> User Password: ' + '<span id="psswrdValidation">' + password +
'</span>' + // Displays the password variable from the registration.html page.
'<br/> Verified Password: ' + '<span id="psswrdValidation">' +
psswrdValidation + '</span>' + // Displays the psswrdValidation variable from
'<br/> First Name: ' + '<span id="firstName">' + firstName + '</span>' + //
'<br/> Last Name: ' + '<span id="lastName">' + lastName + '</span>' + //
'<br/> Email Address: ' + '<span id="email">' + email + '</span>' + //
'<br/> Phone Number: ' + '<span id="phoneNumber">' + phoneNumber + '</span>'
+ // Displays the phoneNumber variable from the registration.html page.
'<br/> News Letter Selection: ' + '<span id="signUpNewsletter">' +
signUpNewsletter + '</span>' + // Displays the signUpNewsletter variable from
'<br/> Interests Selection: ' + '<span id="interests">' + interests +
'</span>' + // Displays the interests variable from the interests.html page.
'<br/> Comments: ' + '<span id="comments">' + comments + '</span>' + //
'<br/> Send Sports News Letter: ' + '<span id="Newsletter">' + Newsletter +
'</span>' + // Displays the Newsletter variable from the interests.html page.
'<br/> Referral: ' + '<span id="referred">' + referred + '</span>' + //
'<br/>' +
'</article> <br/><br/><br/>';
return false;
}
function getCookie(cname) { // Retrieves cookie by name.
var name = cname + "="; // Cookie name assigned to a function variable for
var decodedCookie = decodeURIComponent(document.cookie); // Decodes the URI
var ca = decodedCookie.split(';'); // Divides string into an ordered list of
for(var i = 0; i <ca.length; i++) { // Defines the array.
var c = ca[i];
while (c.charAt(0) == ' ') {
c = c.substring(1);
}
if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
    }
    }
    return "";
    }
    // Load the getData() function on page load.
    window.onload = getData;