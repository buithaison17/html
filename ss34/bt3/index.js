const accounts = JSON.parse(localStorage.getItem('accounts'));
const emailElement = document.querySelector('#email');
const passwordElement = document.querySelector('#password');
const btnLoginElement = document.querySelector('button');

btnLoginElement.addEventListener('click', function(event){
    const checkLogin = accounts.some(user => 
        user.email === emailElement.value && user.password === passwordElement.value
    );

    if(checkLogin){
        alert('Đăng nhập thành công');
    }
    else{
        alert('Email hoặc mật khẩu không đúng');
    }
})