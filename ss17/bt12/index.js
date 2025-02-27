let num = prompt('Nhập số:').trim();

let bianryNumber = "";

if(isNaN(num) || num < 0){
    console.log('Số không hợp lệ');
}
else{
    while(num > 0){
        bianryNumber = (num % 2) + bianryNumber
        num = Math.floor(num / 2);
    }
    console.log(bianryNumber);
}