let a = +prompt('Nhập số đầu:')
let b = +prompt('Nhập số thứ hai:')
let operator = prompt('Nhập phép tính (+, -, *, /):')

switch(operator){
    case '+':
        alert(`Kết quả của phép tính ${a} ${operator} ${b} là: ${a + b}`);
        break;
    case '-':
        alert(`Kết quả của phép tính ${a} ${operator} ${b} là: ${a - b}`);
        break;
    case '*':
        alert(`Kết quả của phép tính ${a} ${operator} ${b} là: ${a * b}`);
        break;
    case '/':
        if(b === 0){
            alert('Không thể chia một số cho 0')
        }
        else{
        alert(`Kết quả của phép tính ${a} ${operator} ${b} là: ${a / b}`);
        }
        break;
    default:
        alert('Nhập không hợp lệ')
        break;
}