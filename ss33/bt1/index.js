const passwordElement = document.querySelector('#password');
const iconElement = document.querySelector('.icon');

iconElement.addEventListener('click', function(){
    if(passwordElement.type === 'password' && passwordElement.value !== ''){
        passwordElement.type = 'text'
        iconElement.name = 'eye-off-outline'
    }
    else{
        passwordElement.type = 'password';
        iconElement.name = 'eye-outline'
    }
})