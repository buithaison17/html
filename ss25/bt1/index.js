let arr = [1,2,3,4];

function findMinElement(arr) {
    if(arr.lenght === 0){
        return 'Chưa thêm phần tử vào mảng';
    }

    if(Array.isArray(arr)){
        return 'Đây không phải mảng';
    }

    let minElement = arr[0];

    for (let element of arr) {
        if(element > minElement){
            minElement = element;
        }
    }

    return minElement;
}

console.log(findMinElement(arr));
