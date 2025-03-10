let str = '';
let choice = +null;
let checkStr = '';

do{
    choice = +prompt(`1. Nhập chuỗi ký tự
2. Hiển thị chuỗi ký tự
3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện
4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi
5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi
6. Chuyển đổi chuỗi ký tự thành dạng snake_case
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
                break;
            case 4:
                checkStr = str.split(' ');
                strMaxLength = checkStr[0];
                strMinLength = checkStr[0];

                for(let i = 0; i < checkStr.length; i++){
                    if(strMaxLength.length < checkStr[i].length){
                        strMaxLength = checkStr[i];
                    }
                    if(strMinLength.length > checkStr[i].length){
                        strMinLength = checkStr[i];
                    }
                }

                alert(`Từ có độ dài lớn nhất là: ${strMaxLength}\nTừ có độ dài ngắn nhất là: ${strMinLength}`);
                break;
            case 5:
                let maxCount = 0;

                for(let i = 0; i < str.length; i++){
                    let count = 0;
                    for(let j = 0; j < str.length; j++){
                        if(str[i] === str[j]){
                            count++;
                        }
                    }
                    if(count > maxCount){
                        maxCount = count;
                    }
                }

                alert(`Số lần xuất hiện nhiều nhất là: ${maxCount}`);
                break;
            case 6:
                str = str.split(' ').join('_');
                alert('Chuyển đổi hoàn tất');
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