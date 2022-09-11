let $ = function (id) { return document.getElementById(id); };
let _ = function (name) { return document.getElementsByName(name); };

function validateFields(form) 
{
    getFormData('validateForm');
    window.location.href = 'confirm.html';
    return false;
}