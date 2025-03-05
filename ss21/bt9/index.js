let num = +prompt('Nhập số nguyên bất kì:');

if(Number.isInteger(num) && num > 0){
    let found = true;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            found = false;
        }
    }
    if(found){
        alert(`${num} là số nguyên tố`);
    }
    else{
        alert(`${num} không là số nguyên tố`);
    }
}
else{
    alert('Nhập không hợp lệ');
}