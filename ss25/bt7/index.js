let str = prompt('Nhập chuỗi của bạn').trim();

function upperFirstCharacter(str){
    str = str.split(/\s+/);
    
    for(let i = 0; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
    }

    return str.join(' ');
}

alert(upperFirstCharacter(str));
