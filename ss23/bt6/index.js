let arr = ['', false, 0, 5, 10, 'Hello World!'];
let arrFalse = [false, 0, '', null, undefined, NaN];

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arrFalse.length; j++){
        if(arr[i] === arrFalse[j]){
            arr.splice(i, 1);
            i--;
            break;
        }
    }
}

alert(arr);