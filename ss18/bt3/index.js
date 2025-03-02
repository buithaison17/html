let str = prompt('Nhập tên:');
if(str.length == 0){
    alert('Cancelled')
}
else if(str == 'ADMIN'){
    str = prompt('Nhập mật khẩu:')
    if(str == 'TheMaster'){
        alert('Welcome');
    }
    else if(str.length == 0){
        alert('Cancelled')
    }
    else{
        alert('Wrong password');
    }
}
else{
    alert('I Don’t know you');
}