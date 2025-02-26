let min = prompt('Nhập số nhỏ nhất:');
let max = prompt('Nhập số lớn nhất:')
let randonNum = Math.floor(Math.random() * (+max - +min) + +min)
console.log(randonNum);