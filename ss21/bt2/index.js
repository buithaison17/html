let count = 0;

for(let i = 0; i < 5; i++){
    let num = +prompt('Nhập một số nguyên bất kì:');
    if(num % 2 == 0){
        count++;
    }
}

alert(`Số lượng số chẵn đã nhập là: ${count}`);
alert(`Số lượng số lẻ đã nhập là: ${5 - count}`);