let num = 2941;

function maxNum(num){
    if(!Number.isInteger(num)){
        return 'Dữ liệu không hợp lệ'
    }

    num = num.toString().split('');

    for(let i = 0; i < num.length - 1; i++){
        for(let j = 0; j < num.length - i - 1; j++){
            if(num[j] < num[j+1]){
                let temp = num[j];
                num[j] = num[j+1];
                num[j+1] = temp;
            }
        }
    }


    return num = parseInt(num.join(''));
}

console.log(maxNum(num));
