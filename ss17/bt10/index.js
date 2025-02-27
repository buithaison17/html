let num = prompt('Nhập số cần kiểm tra:').trim();

if(isNaN(num)){
    console.log('Nhập không phải là số');
}
else if(num <= 0){
    console.log(`${num} không phải số chính phương`);
}
else{
    let numSqrt = Math.sqrt(+num);
    console.log(Math.ceil(numSqrt) == Math.floor(numSqrt) ? `${num} là số chính phương` : `${num} không là số chính phương`);
}
