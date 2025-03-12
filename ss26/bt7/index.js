let arr = [ 2, 5, 10 ];

for(let i = 0; i < 10; i++){
    arr.push(parseInt(prompt(`Nhập phần tử thứ ${i+1}:`)));
}

if(arr.length === 0){
    alert('Mảng không có phần tử nào');
}
else if(Array.isArray(arr)){
    const arrConverse = arr.map((value) => value**2).filter((value) => value % 2 === 0);
    console.log(arrConverse);
}
else{
    alert('Dữ liệu không hợp lệ');
}