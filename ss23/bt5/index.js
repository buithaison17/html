let n = +prompt('Nhập n phần tử:');
let arr= [];

if(Number.isInteger(n) && n > 0){
    let sum = 0;
    for(let i = 0; i < n; i++){
        arr[i] = +prompt(`Nhập phần tử arr[${i}]:`);
        if(!isNaN(arr[i])){
            sum += arr[i];
        }
    }

    if(sum !== 0){
        alert(sum);
    }
    else{
        alert('Không có phần tử là số');
    }
}
else if(n < 0){
    alert('Số lượng phần tử không được âm');
}
else{
    alert('Mảng không có phần tử');
}
