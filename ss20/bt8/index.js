let n = +prompt('Nhập n số nguyên tố đầu tiên');

if(Number.isInteger(n) && n > 0){
    let text = `Các số nguyên tố từ 1 đến ${n} là: `;
    let i = 2;
    let count = 0;
    while(count < n){
    let found = true;
        for(let j = 2; j <= Math.sqrt(i); j++){
            if(i % j === 0){
                found = false;
            }
        }
        if(found){
            text += i;
            if(count < n - 1){
                text += ', ';
            }
            count++;
        }
        i++;
    }
    alert(text);
}
else{
    alert('Nhập không hợp lệ');
}