let arr = [1,2,3,4,5,6,7,8, 'abc'];
let size = 2;

function arraySplit(arr, size){
    let childrenArray = [];
    if(!Array.isArray(arr) || size <= 0 || arr.some(((value) => isNaN(value)))){
        return 'Dữ liệu không hợp lệ';
    }
    else{
        for(let i = 0; i < arr.length; i += size){
            childrenArray.push(arr.slice(i, i + size));
        }
        return childrenArray;
    }
}

console.log(arraySplit(arr, size));