/**
 * @param {*} password: Mật khẩu người dùng nhập
 * Lọc qua các phần tử của mảng và đếm các kí tự
 * countCharacterLowerCase: Đếm kí tự là chữ cái thường
 * countCharacterUpperCase: Đếm kí tự là chũ cái in hoa
 * countDigit: Đếm kí tự là số
 * countSpecialCharacter: Đếm kí tự đặc biệt
 * Nếu độ dài password lớn hơn 8 và các biến đếm lớn hơn bằng 1 thì mật khẩu mạnh
 */

function isStrongPassword(password){
    let countCharacterLowerCase = 0;
    let countCharacterUpperCase = 0;
    let countDigit = 0;

    for (const char of password) {
        if('a' <= char && char <= 'z'){
            countCharacterLowerCase++;
        }
        else if('A' <= char && char <= 'Z'){
            countCharacterUpperCase++;
        }
        else if('1' <= char && char <= '9'){
            countDigit++;
        }
    }

    if(password.length >= 8 && countCharacterLowerCase >= 1 && 
        countCharacterUpperCase >= 1 && countDigit >= 1 && 
        countSpecialCharacter >= 1){
            alert('Mật khẩu mạnh')
    }
    else{
        alert('Mật khẩu yếu')
    }
}

let password = prompt('Nhập mật khẩu của bạn:');
isStrongPassword(password);