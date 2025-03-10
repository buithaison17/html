let n = 0;
let arr = [];
let choice = +null;
let sum = 0;
let value = +null;

do{
    choice = +prompt(`1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của một phần tử trong mảng
6. Sắp xếp mảng tăng dần
7. Thoát chương trình`)
    if(choice == 1){
        do{
            n = +prompt('Nhập số lượng phần tử trong mảng:');
            if(isNaN(n) || n <= 0){
                alert('Nhập không hợp lệ')
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
    else if(arr.length === 0 && Number.isInteger(choice) && choice !== 7){
        alert('Chưa thêm phần tử vào mảng');
    }
    else{
        switch(choice){
            case 2:
                alert(`Các phần tử có trong mảng là: ${arr}`);
                break;
            case 3:
                let max = arr[0];
                let min = arr[0];

                for(let i = 1; i < arr.length; i++){
                    if(max < arr[i]){
                        max  = arr[i];
                    }
                    if(min > arr[i]){
                        min = arr[i];
                    }
                }

                alert(` Phần tử lớn nhất trong mảng là: ${max}\nPhần tử nhỏ nhất trong mảng là: ${min}`)
                break;
            case 4:
                sum = 0;

                for(let i = 0; i < arr.length; i++){
                    sum += arr[i];
                }

                alert(`Tổng các phần tử có trong mảng là: ${sum}`);
                break;
            case 5:
                value = +prompt('Nhập phần tử cần kiểm tra: ');
                let count = 0;

                for(let i = 0; i < arr.length; i++){
                    if(value === arr[i]){
                        count++;
                    }
                }

                if(count !== 0){
                    alert(`Phần tử ${value} xuất hiện ${count} lần`);
                }
                else{
                    alert(`Phần tử ${value} không tồn tại`);
                }
                break;
            case 6:
                for(let i = 0; i < arr.length - 1; i++){
                    for(let j = 0; j < arr.length - i - 1; j++){
                        if(arr[j] > arr[j+1]){
                            let temp = arr[j];
                            arr[j] = arr[j+1];
                            arr[j+1] = temp;
                        }
                    }
                }
                alert('Sắp xếp hoàn tất');
                break;
            case 7:
                alert('Thoát chương trình thành công');
                break;
            default:
                alert('Chức năng không hợp lệ')
                break;
        }
    }
}
while(choice !== 7)