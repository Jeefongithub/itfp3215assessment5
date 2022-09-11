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
    // New variables collected by user input on interests.html
    var interests = document.getElementById('interests'); // Variable to store
    var comments = document.getElementById('comments').value; // Variable to
    var Newsletter = document.getElementById('Newsletter'); // Variable to store
    var referred = document.getElementById('referred').value; // Variable to
    // Interests Options
    // Collect the radio button choice.
    // Action taken if hiking is checked.
    if(document.getElementById('hiking').checked) {
    var interests = "hiking"; // Stores user selection.
    }
    // Action taken if swimming is checked.
    else if (document.getElementById('swimming').checked) {
    var interests = "swimming";
    }
    else if (document.getElementById('kayaking').checked) {
        var interests = "kayaking"; // Stores user selection.
        }
        // Action taken if nothing was selected for the Interests radio buttons.
        else {
        interests = "No Selection Made."; // Documents that users didn't select
        }
        //Newsletter Option
        // Collect the Newsletter radio button choice.
        // Action taken if Yes is checked.
        if(document.getElementById('signUpYes').checked) {
        var Newsletter = "Yes";
        }
        // Action taken if No is checked.
        else if(document.getElementById('signUpNo').checked) {
        var Newsletter = "No";
        }
        // Action taken if nothing was selected for the Newsletter radio buttons.
        else {
        Newsletter = "No Selection Made.";
        }
        // Action taken if user doesn't enter a comment in the Comments field.
        if(!comments) {
        var comments = "No comment made.";
        }
        // Action taken if nothing is entered in the referred field.
        if(!referred) {
        var referred = "No referral entered.";
        }
        // Cookie Creation
        // Sends variables to be stored as new cookies.
        setCookie("userID", userID, 1); // Sends cname, cvalue, and exdays variables
        setCookie("password", password, 1); // Sends cname, cvalue, and exdays
        setCookie("psswrdValidation", psswrdValidation, 1); // Sends cname, cvalue,
        setCookie("firstName", firstName, 1); // Sends cname, cvalue, and exdays
        setCookie("lastName", lastName, 1); // Sends cname, cvalue, and exdays
        setCookie("email", email, 1); // Sends cname, cvalue, and exdays variables
        setCookie("phoneNumber", phoneNumber, 1); // Sends cname, cvalue, and exdays
        setCookie("signUpNewsletter", signUpNewsletter, 1); // Sends cname, cvalue,
        setCookie("interests", interests, 1); // Sends cname, cvalue, and exdays
        setCookie("comments", comments, 1); // Sends cname, cvalue, and exdays
        setCookie("Newsletter", Newsletter, 1); // Sends cname, cvalue, and exdays
        setCookie("referred", referred, 1); // Sends cname, cvalue, and exdays
        // Redirects the browser to the confirm.html page.
        window.location.replace("confirm.html");
        return false;
        }
        // Save cookie information with expiration date and time.
        function setCookie(cname, cvalue, exdays) { // Recieves parameters as function
        var d = new Date(); // Sets a variable with the current date information.
        d.setTime(d.getTime() + (exdays * 1 * 3600 * 1000)); // Sets a time limit
        var expires = "expires=" + d.toUTCString(); // Assigns an expiration time
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; //
        }
        function getCookie(cname) { // Retrieves cookie by name.
        var name = cname + "="; // Cookie name assigned to a function variable for
        var decodedCookie = decodeURIComponent(document.cookie); // Decodes the URI
        var ca = decodedCookie.split(';'); // Divides string into an ordered list of
        for(var i = 0; i <ca.length; i++) { // Parses the array.
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