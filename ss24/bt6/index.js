let str = '';
let choice = +null;
do{
    choice = +prompt(`1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
7. Thoát chương trình`);

    if(choice === 1){
        str = prompt('Nhập chuỗi của bạn:').trim();
        str = str.split(/\s+/).join(' ');
    }
    else if(str.length === 0 && Number.isInteger(choice) && choice !== 7){
        alert('Bạn chưa nhập chuỗi');
    }
    else{
        switch(choice){
            case 2:
                alert(`Chuỗi của bạn là: ${str}`);
                break;
            case 3:
                alert(`Độ dài chuỗi của bạn là: ${str.length}`)
                break;
            case 4:
                let letter = prompt('Nhập kí tự muốn tìm kiếm:');

                let count = str.split(letter).length - 1;

                alert(`Kí tự ${letter} xuất hiện ${count} lần`);
                break;
            case 5:
                strReverse = str.split('').reverse().join('');
                str === strReverse ? alert('Chuỗi đối xứng') : alert('Chuỗi không đối xứng');
                break;
            case 6:
                str = str.split(' ');

                for(let i = 0; i < str.length; i++){
                    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
                }

                str = str.join(' ');
                alert(str);
                break;
            case 7:
                alert('Thoát chương trình thành công');
                break;
            default:
                alert('Chức năng không hợp lệ');
                break;
        }
    }
}
while(choice != 7)