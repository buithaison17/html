let num = +prompt('Nhập một số nguyên bất kì:');
let text = `Các số chia hết cho 5 từ 1 đến ${num} là: `;
if(Number.isInteger(num) && num >0){
    for(let i = 1; i <= num; i++){
        if(i % 5 === 0){
            text += i;
            if(i < num){
                text += ', ';
            }
        }
    }
    console.log(text);
}