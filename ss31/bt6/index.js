const username = document.querySelector('#username');
const password = document.querySelector('#password');
const btnSubmit = document.querySelector('#btn-submit');
const usernameLogin = 'huanrose@gmail.com';
const passwordLogin = "123456";

let usernameInput;
let passwordInput;

username.addEventListener('input', function(event){
    usernameInput = event.target.value
})

password.addEventListener('input', function(event){
    passwordInput = event.target.value
})

btnSubmit.addEventListener('click', function(){
    event.preventDefault();
    if(usernameInput === usernameLogin && passwordInput === passwordLogin){
        alert('Đăng nhập thành công')
    }
    else{
        alert('Đăng nhập thất bại')
    }
})