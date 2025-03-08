let n = +prompt('Nhập n phần tử:');

if(Number.isInteger(n) && n > 0){
    let arr = [];

    for(let i = 0; i < n; i++){
        arr[i] = prompt(`Nhập phần tử arr[${i}]:`);
    }

    let max = arr[0];
    let second = +null;

    for(let i = 1; i < arr.length; i++){
        if(max < arr[i]){
            second = max;
            max = arr[i];
        }
        else if(arr[i] > second && arr[i] < max){
            second = arr[i];
        }
    }

    alert(second);
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