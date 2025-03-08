let n = +prompt('Nhập n phần tử:');
let arr = [];
let count = 0;

if(Number.isInteger(n) && n > 0){
    for(let i = 0; i < n; i++){
        let value = +prompt(`Nhập phần tử arr[${i}]:`);
        arr.push(value);
        if(Number.isInteger(value) && value < 0){
            count++;
        }
    }
    if(count !== 0){
        alert(count);
    }
    else{
        alert('Không có phần tử nhỏ hơn 0');
    }
}
else if(n === 0){
    alert('Không có kí tự số');
}
else{
    alert('Số lượng phần tử không hợp lệ');
}    