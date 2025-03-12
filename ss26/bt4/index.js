let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(value){
    if(value < 2) return false;
    for(let i = 2; i <= Math.sqrt(value); i++){
        if(value % i === 0){
            return false;
        }
    }
    return true;
}

if(arr.length === 0){
    alert('Mảng không có phần tử nào');
}
else if(Array.isArray(arr)){
    const arrPrime = arr.filter(isPrime);
    console.log(arrPrime);
    
}
else{
    alert('Dữ liệu không hợp lệ');
}