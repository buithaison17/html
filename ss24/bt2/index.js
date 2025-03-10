let n = 0;
let arr = [];
let choice = +null;
let sum = 0;
let value = +null;

do{
    choice = +prompt(`1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
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
                let arrEven = [];
                let arrOdd = [];

                for(let i = 0; i < arr.length; i++){
                    if(arr[i] % 2 == 0){
                        arrEven.push(arr[i]);
                    }
                    else{
                        arrOdd.push(arr[i]);
                    }
                }

                alert(`Các phần tử chẵn trong mảng là: ${arrEven}\nCác phần tử lẻ có trong mảng là: ${arrOdd}`);
                break;
            case 4:
                sum = 0;

                for(let i = 0; i < arr.length; i++){
                    sum += arr[i];
                }

                alert(`Trung bình cộng các phần tử trong mảng là: ${sum / arr.length}`);
                break;
            case 5:
                let index = +null;
                do{
                    index = +prompt(`Nhập vị trí muốn xóa (0 -- > ${arr.length - 1}):`);
                    if(isNaN(index) || index < 0 || index > arr.length - 1){
                        alert('Vị trí xóa không hợp lệ');
                    }
                }
                while(isNaN(index) || index < 0 || index > arr.length - 1);

                arr.splice(index, 1);
                alert('Xóa hoàn tất');
                break;
            case 6:
                let max = arr[0];
                let second = 0;

                for(let i = 0; i < arr.length; i++){
                    if(max < arr[i]){
                        second = max;
                        max = arr[i];
                    }
                    else if(second < arr[i] && arr[i] < max){
                        second = arr[i];
                    }
                }
                
                alert(`Phần tử lớn thứ 2 trong mảng là: ${second}`);
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