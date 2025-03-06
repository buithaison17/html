let input = prompt();
let arr = input.split('').map(Number);
let max = arr[0]; 
for(let i = 1; i < arr.length; i++){
    if(isNaN(arr[i])){
        alert('Dãy số không hợp lệ');
        break;
    }
    else if(arr[i] > max){
        max = arr[i]
    }
}
alert(`Số lớn nhất là trong mảng là: ${max}`);