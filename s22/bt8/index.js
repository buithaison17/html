let arr = [4,8,7,8,1,9,6,9,15,3];
let minElement = +null;
let maxCount = +null;

for(let i = 0; i < arr.length; i++){
    let count = 0;
    for(let j = 0; j < arr.length; j++){
        if(arr[i] === arr[j]){
            count++;
        }
    }
    if(count > maxCount){
        maxCount = count;
        minElement = arr[i];
    }
    else if(count === maxCount && minElement > arr[i]){
        minElement = arr[i];
    }
}

console.log(minElement);