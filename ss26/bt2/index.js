let arr = ["apple", "banana", "cat", "elephant", "dog"];

if(arr.length === 0){
    alert('Chưa thêm phần tử vào mảng');
}
else if(Array.isArray(arr)){
    const arrFilter = arr.filter((value) => value.length > 5);
    alert(arrFilter);
}
else{
    alert('Dũ liệu nhập vào không hợp lệ');
}