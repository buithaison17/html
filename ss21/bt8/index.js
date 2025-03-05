let text = 'Các số Amstrong có 3 chữ số là: ';

for(let num = 100; num <= 999; num++){
    let sum = 0;
    let originNum = num;
    for(let  i = 0; i < 3; i++){
        sum += (originNum % 10)**3;
        originNum = Math.floor(originNum / 10);
    }
    if(sum === num){
        text += num + ' ';
    }
}

alert(text);