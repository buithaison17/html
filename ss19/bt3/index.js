let moneyConvert = prompt('Nhập số tiền muốn chuyển đổi:').trim();

moneyConvert = moneyConvert.split(' ');

switch(moneyConvert[1]){
    case 'VND':
        alert(`VND --> USD: ${parseFloat(moneyConvert[0]) / 23000} USD`);
        break;
    case 'USD':
        alert(`USD --> VND: ${parseFloat(moneyConvert[0]) * 23000} VND`)
        break;
    default:
        alert('Nhập không hợp lệ');
        break;
}