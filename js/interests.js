function getFormData(formName) {
    let formEl = document.forms[formName];
    const formData = new FormData(formEl);

    console.log('starting');

    for (let key of formData.keys()) 
    {
        document.cookie = `${key}=${formData.get(key)}`;
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) 
    {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function displayFormDataInterests(id)
{
    document.getElementById(id).innerText += `Interests = ${getCookie('Interests')} \n`;
    document.getElementById(id).innerText += `Comments = ${getCookie('Comments')} \n`;
    document.getElementById(id).innerText += `ReferredBy = ${getCookie('ReferredBy')} \n`;
}
