// Lấy các phần tử có trong phần đăng nhập
const cardSigninElement = document.querySelector('#card-signin');
const usernameSigninInputElement = document.querySelector("#username-signin");
const passwordSigninInputElement = document.querySelector('#password-signin');
const remberSigninElement = document.querySelector("#rememberSignIn");
const btnSigninElement = document.querySelector("#btn-signin");
const nextToSignupElement = document.querySelector("#next-to-signup");

// Lấy các phần tử có trong phần đăng kí
const cardSignupElement = document.querySelector("#card-signup");
const usernameSignupInputElement = document.querySelector("#username-signup");
const passwordSignupInputElement = document.querySelector('#password-signup');
const btnSignupElement = document.querySelector("#btn-signup");
const backToSigninElement = document.querySelector("#back-to-signin");

// Lấy các phần tử có ở trang chủ
const homeElement = document.querySelector('#home');
const btnLogoutElement = document.querySelector('#btn-logout');

// Lưu các tài khoản đã đăng kí
const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

// Thông tin lưu nếu bấm ghi nhớ tài
let rememberSignin = localStorage.getItem('rememberSignin') || false;
let rememberUsername = localStorage.getItem('rememberUsername') || '';
let rememberPassword = localStorage.getItem('rememberPassword') === 'true' ? true : false;

// Kiểm tra nếu đã bấm ghi nhớ tôi
if(rememberSignin){
    loginSuccessful(rememberUsername);
}

// Chuyển sang trang đăng kí
nextToSignupElement.addEventListener('click', function(){
    cardSigninElement.style.display = 'none'; 
    cardSignupElement.style.display = 'block'; 
    usernameSignupInputElement.value = '';
    passwordSignupInputElement.value = '';
})

// Chuyển sang trang đăng nhập
backToSigninElement.addEventListener('click', function(){
    cardSignupElement.style.display = 'none'; 
    cardSigninElement.style.display = 'block'; 
    usernameSigninInputElement.value = '';
    passwordSigninInputElement.value = '';
})

// Tiến hành đăng kí tài khoản
btnSignupElement.addEventListener('click', function(event){
    event.preventDefault();

    if(usernameSignupInputElement.value !== '' && passwordSignupInputElement.value !== '' && !accounts.some((accounts) => accounts.username === usernameSignupInputElement.value)){
        const newAccount = {
            username: usernameSignupInputElement.value,
            password: passwordSignupInputElement.value,
        }
        usernameSignupInputElement.value = '';
        passwordSignupInputElement.value = '';
        accounts.push(newAccount);
        localStorage.setItem('accounts', JSON.stringify(accounts));
        cardSignupElement.style.display = 'none'; 
        cardSigninElement.style.display = 'block'; 
    }
})

// Tiến hành đăng nhập
btnSigninElement.addEventListener('click', function(event){
    event.preventDefault();

    if (accounts.some(account => 
        account.username === usernameSigninInputElement.value &&
        account.password === passwordSigninInputElement.value
    )) {

        if(remberSigninElement.checked){
            rememberSignin = true;
            rememberUsername = usernameSigninInputElement.value;
            rememberPassword = passwordSigninInputElement.value;            
            localStorage.setItem('rememberSignin', rememberSignin);
            localStorage.setItem('rememberUsername', rememberUsername);
            localStorage.setItem('rememberPassword', rememberPassword);
        }
        loginSuccessful(usernameSigninInputElement);
        usernameSigninInputElement.value = '';
        passwordSigninInputElement.value = '';
    }
})


//Đăng nhập thành công
function loginSuccessful(username){
    cardSigninElement.style.display = 'none';
    cardSignupElement.style.display = 'none';
    homeElement.style.display = 'block';
}

//Đăng xuất
btnLogoutElement.addEventListener('click', function(event){
    event.preventDefault();
    localStorage.removeItem('rememberSignin');
    localStorage.removeItem('rememberUsername');
    localStorage.removeItem('rememberPassword');
    cardSigninElement.style.display = 'block';
    cardSignupElement.style.display = 'none';
    homeElement.style.display = 'none';
})