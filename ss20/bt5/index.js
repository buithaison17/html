let num = +prompt('Nhập số:');
let exponential = +prompt('Nhập số mũ:');
let numExponential = num;

if(Number.isInteger(num) && !isNaN(exponential)){
    for(let i = 0; i < exponential - 1; i++){
        numExponential *= num;    

    }
    alert(numExponential);
}
else{
    alert('Không hợp lệ');
}