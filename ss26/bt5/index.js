let arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(parseInt(prompt(`Nhập phần tử thứ ${i+1}:`)));
}

if(arr.length === 0){
    alert('Mảng không có phần tử nào');
}
else if(Array.isArray(arr)){
    const maxValue = arr.reduce((max, value) => {
        max = max < value ? value : max;
        return max;
    }, arr[0]);

    const position = arr.indexOf(maxValue);
    alert(`Phần tử lớn nhất: ${maxValue}\nvị trí: ${position}`)
    
}
else{
    alert('Dữ liệu không hợp lệ');
}