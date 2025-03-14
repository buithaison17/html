let arr = [5,8,6,3,4,2,7];

function checkArray(arr){
    if(!Array.isArray(arr) || arr.some(((value) => isNaN(value)))){
        return 'Dữ liệu không hợp lệ';
    }
    let evenNumbers = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);
    let evenIndex = 0;
    arr = arr.map(num => (num % 2 === 0 ? evenNumbers[evenIndex++] : num));
    return arr;
}

console.log(checkArray(arr));
