
var enteredName, enteredRR, enteredContact;
var showName = document.getElementById('name');
var showRN = document.getElementById('RN');
var showContact = document.getElementById('Con');
var showRes = document.getElementById('Res');

var dataDiv = document.querySelector('.data');

// Dataset
var Data = [
    { name: 'Hasnain', rollNumber: '268797', contact: 'a@gmail.com', result: 'Passed' },
    { name: 'Abby', rollNumber: '264877', contact: 'ab@gmail.com', result: 'Failed' },
    { name: 'Tom', rollNumber: '262717', contact: 'tm@gmail.com', result: 'Passed' },
    { name: 'Ross', rollNumber: '265794', contact: 'rs@gmail.com', result: 'Passed' }
];

function blurInp(e, checkInp) {
    var nameError = document.getElementsByClassName('name-error')[0];
    var passError = document.getElementsByClassName('pass-error')[0];
    var mailError = document.getElementsByClassName('email-error')[0];

    if (checkInp === 'name') {
        if (e.target.value.length < 3) {
            nameError.innerText = 'Name should be at least 3 characters';
            nameError.style.display = 'block';
            return;
        }
        nameError.style.display = 'none';
        enteredName = e.target.value;
    }

    if (checkInp === 'RN') {
        if (e.target.value.length < 6) {
            passError.innerText = 'Roll Number should be at least 6 characters';
            passError.style.display = 'block';
            return;
        }
        passError.style.display = 'none';
        enteredRR = e.target.value;
    }

    if (checkInp === 'mail') {
        if (e.target.value.indexOf('@') === -1) {
            mailError.innerText = 'Incorrect Email';
            mailError.style.display = 'block';
            return;
        }
        mailError.style.display = 'none';
        enteredContact = e.target.value;
    }
}

function showData() {
    var match = null;
    for (var i = 0; i < Data.length; i++) {
        if (
            Data[i].name === enteredName &&
            Data[i].rollNumber === enteredRR &&
            Data[i].contact === enteredContact
        ) {
            match = Data[i];
            break;
        }
    }

    if (match) {
        showName.innerText = match.name;
        showRN.innerText = match.rollNumber;
        showContact.innerText = match.contact;
        showRes.innerText = match.result;
        dataDiv.style.display = 'block';
    } else {
        alert('No matching record found!');
        dataDiv.style.display = 'none';
    }
}
