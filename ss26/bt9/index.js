let arr = [];

for(let i = 0; i < 10; i++){
    arr.push(parseInt(prompt(`Nhập phần tử thứ ${i+1}:`)));
}

if(arr.length === 0){
    alert('Mảng không có phần tử nào');
}
else if(Array.isArray(arr)){
    const {totalEven, totalOdd} = arr.reduce((sum, value) => {
        if(value % 2 === 0) sum.totalEven += value;
        else sum.totalOdd += value;
        return sum;
    }, {totalEven: 0, totalOdd: 0});
    console.log(`totalEven: ${totalEven}\ntotal: ${totalOdd}`);
}
else{
    alert('Dữ liệu không hợp lệ');
}