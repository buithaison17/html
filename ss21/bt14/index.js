let chieuDai = +prompt('Nhập chiều dài:');
let chieuRong = +prompt('Nhập chiều rộng:');
let text = '';

if(Number.isInteger(chieuDai) && Number.isInteger(chieuRong) && chieuDai > 0 && chieuRong > 0){
    for(let i = 0; i < chieuDai; i++){
        for(let j = 0; j < chieuRong; j++){
            if(i === 0 || i === chieuDai - 1 || j === 0 || j === chieuRong - 1){
                text += '*';
            }
            else{
                text += ' ';
            }
        }
        text += '<br>';
    }
    document.write('<pre>' + text + '<pre>');
}
else{
    alert('Nhập không hợp lệ');
}