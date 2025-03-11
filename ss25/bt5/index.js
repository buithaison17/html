let arr = [-4,5.4,6,-2];

function countPositiveInteger(arr){
    let count = 0;
    if(Array.isArray(arr)){
        for (const element of arr) {
            if(Number.isInteger(element) && element > 0) count++;
        }
    }
    else{
        return 'Đây không phải mảng';
    }
    
    if(count > 0){
        return count;
    }
    else{
        return 'Không có số nguyên dương trong mảng';
    }
}

alert(countPositiveInteger(arr));