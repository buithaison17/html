let arr = [1,2,3,4,5,6];
let max = arr[0];
let text = ''

for(let i = 1; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i]
        text = `Số lớn nhất: ${max}\n Vị trí: ${i}`;
    }
}

if(text !== ''){
    alert(text);
}
else{
    alert('Không có số lớn nhất');
}