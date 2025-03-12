let arr = [1, 22, 10, 9, 8]

if(arr.length === 0){
    alert('Chưa thêm phần tử vào mảng');
}
else if(Array.isArray(arr)){
    const arrFilter = arr.filter((value) => value >= 10);
    alert(arrFilter);
}
else{
    alert('Dũ liệu nhập vào không hợp lệ');
}