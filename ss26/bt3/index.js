let email = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", " @out.com"];

if(email.length === 0){
    alert('Chưa thêm phần tử vào mảng');
}
else if(Array.isArray(email)){
    const emailTrue = email.filter((email) => {
        return email.includes('@') && !email.includes(' ');
    });
    console.log(emailTrue);
}
else{
    alert('Dũ liệu nhập vào không hợp lệ');
}