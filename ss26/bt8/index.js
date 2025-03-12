let arr = [];

for(let i = 0; i < 10; i++){
    arr.push(parseInt(prompt(`Nhập phần tử thứ ${i+1}:`)));
}

function isPrime(value){
    if(value < 2) return false;
    for(let i = 2; i <= Math.sqrt(value); i++){
        if(value % i === 0){
            return false;
        }
    }
    if(value % 2 !== 0) return value;
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