let month = +prompt("Nhập tháng:");

if (isNaN(month) || !Number.isInteger(month) || month < 1 || month > 12) {
    alert("Nhập không hợp lệ");
} else{
    if(month >= 1 && month <= 3){
        alert('Mùa xuân');
    }
    else if(month <= 6){
        alert('Mùa hạ');
    }
    else if(month <= 9){
        alert('Mùa thu');
    }
    else{
        alert('Mùa đông');
    };
}
