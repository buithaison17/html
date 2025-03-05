let money = +prompt('Nhập số tiền muốn gửi');
let month = +prompt('Nhập số tháng muốn gửi:');
let interest = +prompt('Nhập lãi suất:');
let originMoney = money;
if(isNaN(money) || isNaN(month) || isNaN(interest)){
    alert('Nhập không hợp lệ');
}
else{
    for(let i = 0; i < month; i++){
        money += money*(interest / 100);
    }
    let interestMoney = money - originMoney;
    alert(`Số tiền lãi là: ${interestMoney.toLocaleString()}`);
    alert(`Số tiền nhận được là: ${money}`);
}
