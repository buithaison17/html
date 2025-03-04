let num = +prompt('Nhập số nguyên bất kì:');
let sum = 0;

if(Number.isInteger(num) && num > 0){
    for(let i = 0; i <= num; i++){
        sum += i;
    }
    alert(sum);
}
else{
    alert('Nhập không hợp lệ');
}