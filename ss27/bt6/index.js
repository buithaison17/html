let arr = [3,6,9,12,15];
let step = arr[1] - arr[0];

function checkArray(arr, step){
    if(!Array.isArray(arr) || arr.some(((value) => isNaN(value)))){
        return 'Dữ liệu không hợp lệ';
    }
    let found = true;
    for(let i = 2; i < arr.length; i++){
        if(arr[i] !== arr[i-1] + step){
            found = false;
        }
    }
    if(found){
        return true;
    }
    else{
        return false;
    }
}

console.log(checkArray(arr, step));
