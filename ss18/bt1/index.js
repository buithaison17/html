let numCheck = +prompt('Nhập số cần kiểm tra:').trim();

if(isNaN(numCheck)){
    alert('Nhập không phải là số');
}
else if(numCheck < 0){
    alert(`${numCheck} là số âm`);
}
else if(Number.isInteger(numCheck) == false){
    alert(`${numCheck} là số thập phân`);
}
else if(numCheck % 2 == 0){
    alert(`${numCheck} là số chẵn`);
}
else{
    alert(`${numCheck} là số lẻ`);
}