let arr = [1,2,3,4];
const evenElement = (arr) => {
    let count = 0;
    let evenArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0){
            evenArr.push(arr[i])
        }else{
            count++;
        }
        if (!Array.isArray(arr)) {
            return 'Dữ liệu không hợp lệ';
        }
    }
    if(count == arr.length){
        return 'Mảng không chứa số chẵn';
    }
    return `${evenArr}`;
};
console.log(evenElement(arr));
