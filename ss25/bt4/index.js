function isPrime(num){
    if(isNaN(num) && num < 0){
        return 'Số không hợp lệ';
    }

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            return 'Đây không phải số nguyên tố';
        }
    }

    return 'Đây là số nguyên tố';
}

alert(isPrime(4));