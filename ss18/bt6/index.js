let year = +prompt('Nhập năm cần kiểm tra:');

if(isNaN(year) || year <=0){
    alert('Năm nhập không hợp lệ')
}
else if(year % 400 === 0 || year % 4 == 0 && year % 100 !== 0){
    alert('Đây là năm nhuận')
}
else{
    alert('Đây là năm không nhuận')
}