let choice = -1;
let arrLength = 0;
let arr = [];
let index = 0;
let value = 0;

do{
    choice = +prompt(`1. Nhập vào mảng \n2. Hiển thị mảng \n3. Thêm phần tử \n4. Sửa phần tử \n5. Xóa phần tử \n6. Thoát \nNhập chức năng`);
    if(choice === 1){
        value = +prompt('Nhập phần tử');
        if(isNaN(value)){
            alert('Nhập không hợp lệ');
            break;
        }
        arr.push(value);
    }
    else if(arr.length === 0){
        alert('Chưa thêm phần tử vào mảng');
    }
    else{
        switch(choice){
            case 2:
                alert(arr);
                break;
            case 3:
                value = +prompt('Nhập phần tử:');
                if(isNaN(value)){
                    alert('Nhập không hợp lệ');
                    break;
                }
                arr.push(value)
                break;
            case 4:
                index = +prompt('Nhập vị trí muốn sửa:');
                value = +prompt('Nhập giá trị sau khi sửa:');
                if(isNaN(index) || isNaN(value) || index < 0 || index > arr.length - 1){
                    alert('Nhập không hợp lệ');
                    break;
                }
                arr.splice(index, 1, value);
                break;
            case 5:
                index = +prompt('Nhập vị trí muốn xóa:');
                if(isNaN(index) || index < 0 || index > arr.length - 1){
                    alert('Nhập không hợp lệ');
                    break;
                }
                arr.splice(index, 1);
                break;
            case 6:
                alert('Thoát thành công');
                break;
            default:
                alert('Chức năng không hợp lệ');
                break;
        }
    }
}
while(choice != 6);