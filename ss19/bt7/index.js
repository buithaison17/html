let a = +prompt('Nhập a:');
let b = +prompt('Nhập b:');
let c =+prompt('Nhập c:');

a > b && a > c ? alert(`${a} là số lớn nhất`) :
b > a && b > c ? alert(`${b} là số lớn nhất`) :
alert(`${c} là số lớn nhất`)