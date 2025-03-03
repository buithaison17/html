let num = +prompt('Nhập số cần kiểm tra');

isNaN(num) ? alert('Nhập không hợp lệ') :
num % 3 === 0 && num % 5 === 0 ? alert(`${num} là số chia hết cho 3 và 5`) :
alert(`${num} là số không chia hết cho 3 và 5`);