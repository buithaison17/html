let sum = 0;

for(let i = 0; i < 5; i++){
    let num = +prompt('Nhập một số nguyên bất kì:');
    if(num % 2 !== 0){
        sum += num;
    } 
}
alert(`Tổng các chữ số lẻ là: ${sum}`);