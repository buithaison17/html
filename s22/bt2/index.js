let numbers = [2, 5, 7, 4, 1, 8, 6];
let num = +prompt('Nhập số:');

if(!isNaN(num)){
    let check = false;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] === num){
            alert('Bingo');
            check = true;
            break;
        }
    }
    if(check === false){
        alert('Chúc bạn may mắn lần sau');
    }
}
else{
    alert('Nhập không hợp lệ');
}