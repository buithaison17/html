let user = ['sonbui@gmail.com'];

function checkEmail(email){
    if (!(email.endsWith('.com') || email.endsWith('.vn')) || email.length <= 8){
        return 'Email không hợp lệ';
    }

    if(user.includes(email)){
        return 'Email đã tồn tại';
    }

    return 'Email hợp lệ';
}

let email = prompt('Nhập email đăng kí:');

alert(checkEmail(email));
