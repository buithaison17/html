let yearExpereince = +prompt('Nhập kinh nghiệm năm:').trim();

if(isNaN(yearExpereince)|| yearExpereince < 0){
    alert('Năm nhập không hợp lệ')
}
else if(yearExpereince <= 1){
    alert('Mới vào nghề')
}
else if(yearExpereince <= 3){
    alert('Nhân viên có kinh nghiệm')
}
else if(yearExpereince <= 6){
    alert('Chuyên viên')
}
else{
    alert('Quản lí')
}