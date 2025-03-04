let num = +prompt('Nhập một số nguyên:');
let textNum = "";
let originNum = num;

if(Number.isInteger(num) && num > 0){
    while(num > 0){
        textNum += (num % 10);
        num = Math.floor(num / 10);
    }
}
else{
    alert('Nhập không hợp lệ');
}

if(+textNum === originNum){
    alert('Đối xứng');
}
else{
    alert('Không đối xứng');
}