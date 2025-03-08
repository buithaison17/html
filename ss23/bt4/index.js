let n = +prompt('Nhập n phần tử:');
let arr = [];
let text = ''

if(Number.isInteger(n) && n > 0){
    for(let i = 0; i < n; i++){
        let value = +prompt(`Nhập phần tử arr[${i}]:`);
        arr.push(value);
        if(!isNaN(value)){
            text += value + ' ';
        }
    }
    if(text !== ''){
        alert(text);
    }
    else{
        alert('Không có kí tự số');
    }
}
else if(n === 0){
    alert('Không có kí tự số');
}
else{
    alert('Số lượng phần tử không hợp lệ');
}    