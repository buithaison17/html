function isPalindrome(str){
    return str.split('').reverse().join('');
}

let str = prompt('Nhập chuỗi của bạn:');

str === isPalindrome(str) ? alert('Chuỗi đối xứng') : alert('Chuỗi không đối xứng');