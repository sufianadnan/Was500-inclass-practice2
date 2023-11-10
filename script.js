const firstName = document.getElementsByClassName('firstname')[0];
const middleName = document.getElementsByClassName('middlename')[0];
const lastName = document.getElementsByClassName('lastname')[0];
const leftAnswer = document.getElementById('leftanswer');
const calcthis = document.getElementsByClassName('dividing')[0];
const rightAnswer = document.getElementById('rightanswer');

function fml() {
    console.log(firstName.value);
    console.log(middleName.value);
    console.log(lastName.value);
    let answer = firstName.value + ' ' + middleName.value + ' ' + lastName.value;
    leftAnswer.textContent = answer; 
}
function lmf() {
    console.log(firstName.value);
    console.log(middleName.value);
    console.log(lastName.value);
    let answer = lastName.value + ' ' + middleName.value + ' ' + firstName.value;
    leftAnswer.textContent = answer; 
}



function dividerby(){
    let calculate_this = parseInt(calcthis.value);
    rightAnswer.textContent = calculate_this/5
}