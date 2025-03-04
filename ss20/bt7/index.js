let n = parseInt(prompt('Nhập n:'));
let first = 1;
let second = 1;

// if(Number.isInteger(n) && n > 0){
//     let text = `Số fibonaci từ f(0) đến f(${n}) là: 1, 1, `
//     for(let i = 0; i < n-2; i++){
//         let next = first + second;
//         text += next;
//         if(i < n - 3){
//             text += ', ';
//         }
//         first = second;
//         second = next;
// }
//     alert(text);
// }
// else{
//     alert('Không hợp lệ')
// }

if(Number.isInteger(n) && n > 0){
    let text = `Số fibonaci từ f(0) đến f(${n}) là: 1, 1, `
    let count = 2;
    while(count < n){
        let next = first + second;
        count++;
        text += next;
        if(count < n){
            text += ', ';
        }
        first = second;
        second = next;
    }
    alert(text);
}