function sum(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return 'Dữ liệu không hợp lệ';
    }
    let total = a + b
    return total;
}
let a = +prompt("Nhập số thứ nhất");
let b = +prompt("Nhập số thứ hai");
console.log(sum(a,b));
