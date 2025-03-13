let num1 = +prompt('Nhập số thứ nhất');
let num2 = +prompt('Nhập số thứ hai');
let choice = null;

function sum(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function division(num1, num2){
    return num1 / num2;
}

do{
    choice = +prompt(`1. Cộng hai số.
2. Trừ hai số.
3. Nhân hai số.
4. Chia hai số.
5. Thoát.`);
    switch(choice){
        case 1:
            alert(`Tổng là: ${sum(num1, num2)}`);
            break;
        case 2:
            alert(`Hiệu là: ${subtract(num1, num2)}`);
            break;
        case 3:
            alert(`Tích là: ${multiply(num1, num2)}`);
            break;
        case 4:
            alert(`Thương là: ${division(num1, num2)}`);
            break;
        case 5:
            break;
        default:
            break;
    }
}
while(choice != 5)