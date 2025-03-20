const inputElement = document.querySelector('input');
const buttonAddElement = document.querySelector('button');
const notificationElement = document.querySelector('p');
let email;

inputElement.addEventListener('input', function(event){
    email = event.target.value;
})

buttonAddElement.addEventListener('click', function(){
    if(email.length >=6 && email.includes('@') && email.endsWith('.com')){
        notificationElement.innerText = 'Email hợp lệ';
    }
    else{
        notificationElement.innerText = 'Email không hợp lệ';
    }
    inputElement.value ='';
})