let n = +prompt('Nhập n phần tử:');

if(Number.isInteger(n) && n > 0){
    let arr = [];

    for(let  i = 0; i < n; i ++){
        arr[i] = Number(prompt(`Nhập phần tử arr[${i}]:`));
    }

    let found = true;

    if(n > 2){
        for(let i = 2; i < arr.length; i++){
            if(arr[i] !== arr[i-1] + arr[i-2]){
                found = false;
                break;
            }
        }
    }
    else{
        found = false;
    }

    if(found){
        alert('Đây là dãy fibonacci');
    }
    else{
        alert('Đây không phải dãy fibonacci');
    }
}
else if( n === 0){
    alert('Mảng không có phần tử nào');
}
else if(n < 0){
    alert('Số lượng phần tử không được nhỏ hơn 0');
}
else{
    alert('Nhập không hợp lệ')
}
