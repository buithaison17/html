let a = parseFloat(prompt('Nhập độ dài cạnh thứ nhất:'));
let b = parseFloat(prompt('Nhập độ dài cạnh thứ hai:'));
let c = parseFloat(prompt('Nhập độ dài cạnh thứ ba:'));

// if(isNaN(a) || isNaN(b) || isNaN(c)){
//     alert('Nhập không hợp lệ');
// }
// else if(a <= 0 || b <= 0 || c <= 0){
//     alert('Ba cạnh không thể âm');
// }
// else if(a + b <= c || a + c <= b || b + c <= a){
//     alert('Đây không phải tam giác');
// }
// else if(a**2 + b**2 === c**2 || a**2 + c**2 === b**2 || b**2 + c**2 === a**2){
//     alert('Đây là tam giác vuông');
// }
// else if(a === b && b === c){
//     alert('Đây là tam giác cân');
// }
// else{
//     alert('Đây là tam giác đều');
// }

isNaN (a) || isNaN(b) || isNaN(c) ? alert('Nhập không hợp lệ') :
a <= 0 || b <= 0 || c <= 0 ? alert('Ba cạnh không thể âm') : 
a + b <= c || a + c <= b || b + c <= a ? alert('Đây không phải tam giác') :
a**2 + b**2 === c**2 || a**2 + c**2 === b**2 || b**2 + c**2 === a**2 ? alert('Đây là tam giác vuông') :
a === b && a === c && b === c ? alert('Đây là tam giác đều') :
a === b || b === c || a === c ? alert('Đây là tam giác cân') : alert('Đây là tam giác thường');