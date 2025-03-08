let arr = [1,22,12,8,7,9];
let text = '';

for(let i = 0; i < arr.length; i++){
    if(arr[i] >= 10){
        text += arr[i] + ' ';
    }
}

if(text !== ''){
    alert(text);
}
else{
    alert('Không có số nào lớn hơn 10');
}