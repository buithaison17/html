let num = +prompt('Nhập số cần kiểm tra:');
let found = true;

if(Number.isInteger(num) && num > 0){
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            found = false;
        }
    }
    if(found){
        alert(`${num} là số nguyên tố`);
    }
}
else{
    alert(`${num} không phải số nguyên tố`)
}