let num = +prompt('Nhập số nguyên bất kì:');
let text = `Tất cả các ước của ${num} là: `;

if(Number.isInteger(num) && num > 0){
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            text += i;
            if(i < num){
                text += ', ';
            }
        }
    }
    alert(text);
}
else{
    alert('Nhập không hợp lệ');
}