let day  = +prompt('Nhập ngày sinh:');
let month = +prompt('Nhập tháng sinh:');

if(Number.isInteger(day) && Number.isInteger(month)){
    if(day > 0 && day < 31 && month > 0 && month < 31){
        if(month === 3 && day >= 21 || month === 4 && day <= 20){
            alert('Cung bạch dương');
        }
        else if(month === 4 && day >= 21 || month === 5 && day <= 20){
            alert('Cung kim ngưu');
        }
        else if(month === 5 && day >= 21 || month === 6 && day <= 21){
            alert('Cung song tử');
        }
        else if(month === 6 && day >=22 || month === 7 && day <= 22){
            alert('Cung cự giải');
        }
        else if(month === 7 && day >= 23 || month === 8 && day <= 22){
            alert('Cung sư tử');
        }
        else if(month === 8 && day >= 23 || month === 9 && day <= 22){
            alert('Cung xử nữ');
        }
        else if(month === 9 && day <= 23 || month === 10 && day <= 23){
            alert('Cung thiên bình');
        }
        else if(month === 10 && day >= 24 || month === 11 && day <= 22){
            alert('Cung bọ cạp');
        }
        else if(month === 11 && day >= 23 || month === 12 && day <= 19){
            alert('Cung nhân mã');
        }
        else if(month === 12 && day >= 22 || month == 1 && day <= 19){
            alert('Cung ma kết');
        }
        else if(month === 1 && day >= 20 || month === 2 && day <= 18){
            alert('Cung bảo bình');
        }
        else if(month === 2 && day >= 19 || month === 3 && day <= 20){
            alert('Cung song ngư');
        }
        else{
            alert('Ngày tháng không hợp lệ');
        }
    }
}
else{
    alert('Nhập không hợp lệ');
}