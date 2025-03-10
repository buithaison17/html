let n = 0;
let arr = [];
let choice = +null;
let sum = 0;
let value = +null;

do{
    choice = +prompt(`1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình`)

    if(choice === 1){
        do{
            n = +prompt('Nhập số phần tử có trong mảng:');

            if(isNaN(n) || n <= 0){
                alert('Nhập không hợp lệ');
            }
        }
        while(isNaN(n) || n <= 0);

        for(let i = 0; i < n; i++){
            do{
                arr[i] = +prompt(`Nhập phần tử arr[${i}]:`)
                if(isNaN(arr[i])){
                    alert('Nhập không hợp lệ');
                }
            }
            while(isNaN(arr[i]));
        }
    }
    else if(arr.length === 0 && Number.isInteger(choice) && choice != 7){
        alert('Chưa thêm phần tử vào trong mảng');
    }
    else{
        switch(choice){
            case 2:
                alert(`Các phần tử có trong mảng là: ${arr}`);
                break;
            case 3:
                let max = arr[0];
                let index= 0;

                for(let i = 1; i < arr.length; i++){
                    if(max < arr[i]){
                        max = arr[i];
                        index = i;
                    }
                }

                alert(`Phần tử lớn nhất trong mảng là: ${max}\nCó vị trí: ${index}`)
                break;
            case 4:
                sum = 0;
                let count = 0;

                for(let i = 0; i < arr.length; i++){
                    if(arr[i] > 0){
                        sum += arr[i];
                        count++;
                    }
                }

                alert(`Trung bình cộng các số lớn hơn 0 trong mảng là: ${sum / count}`);
                break;
            case 5:
                arr = arr.reverse();
                alert('Mảng đã được đảo ngược');
                break;
            case 6:
                let arrReverse = [...arr].reverse();
                arr.join() === arrReverse.join() ? alert('Mảng đối xứng') : alert('Mảng không đối xứng');
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
while(choice !== 7);