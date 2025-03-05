let n = +prompt('Nhập n số nguyên tố đầu tiên:');
let text = `${n} số nguyên tố đầu tiên là: `;
let count = 0;
let i = 2;

while(count < n){
    let found = true;
    for(let j = 2; j <= Math.sqrt(i); j++){
        if(i % j === 0){
            found = false;
        }
    }
    if(found){
        count++;
        text += i;
        if(count < n){
            text += ', ';
        }
    }
    i++;
}
alert(text);