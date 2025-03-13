let arr = [1,2,4,5];

function checkArray(arr){
    if(!Array.isArray(arr) || arr.some(((value) => isNaN(value)))){
        return 'Dữ liệu không hợp lệ';
    }
    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== arr[i-1]+1){
            return arr[i-1] + 1;
        }
    }
}

console.log(checkArray(arr));
