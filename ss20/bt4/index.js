let str = prompt('Nhập chuỗi của bạn:');
let searchStr = prompt('Nhập chuỗi muốn tìm kiếm');

let found = false;

for(let i = 0; i < str.length - searchStr.length; i++){
    let match = true
    for(let j = 0; j < searchStr.length; j++){
        if(str[i + j] !== searchStr[j]){
            match = false;
            break;
        }
    }
    if(match){
        alert('Tìm thấy');
        found = true;
        break;
    }
}

if(!found){
    alert('Không tìm thấy');
}