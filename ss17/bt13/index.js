let money = +prompt('Nhập số tiền cần gửi:').trim();

let month = +prompt('Nhập số tháng muốn gửi:');

let interestMoney = Math.floor(money * (4.3 / 100) * (month / 12));

console.log(interestMoney);