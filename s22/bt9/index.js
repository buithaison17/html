let arr = [2, 1, 7, 1, 1, 8, 6, 2, 2, 7];

for(let i = 0; i < arr.length - 1; i++){
    for(let j = 0; j < arr.length - i- 1; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

for (let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] === arr[j]){
            arr.splice(j, 1);
            i--;
        }
    }
}

console.log(arr);