let password = 'sonbuidz';
let check = true;

do{
    let pass = prompt('Nhập mật khẩu');
    if(pass === password){
        alert('Nhập chính xác');
        check = false;
    }
    else{
        alert('Nhập không chính xác');
    }
}
while(check);