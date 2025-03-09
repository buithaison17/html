let choice = +null;
let n = null;
let arr = [];
let sum = 0;
let value = +null;
let index = +null;

do{
    choice = +prompt(`1. Nhập vào số phần tử cần nhập và các giá trị
2. In ra các giá trị đang quản lí
3. In ra giá trị các phần tử chẵn và tính tổng
4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
7. Thêm một phần từ vào vị trí chỉ định
8. Thoát
Nhập chức năng:`)

        if(choice === 1){
            n = +prompt('Nhập số phần tử trong mảng:');
            if(!isNaN(n) && n > 0){
                for(let i = 0; i < n; i++){
                    arr[i] = +prompt(`Nhập phần tử arr[${i}]:`)
                }

                alert('Thêm phân tử hoàn tất');
            }
            else{
                alert('Nhập không hợp lệ');
            }
        }
        else if(n === 0){
            alert('Chưa thêm phần tử vào mảng');
        }
        else{
            switch(choice){
                case 2:
                    alert(`Các phần tử có trong mảng là : ${arr}`);
                    break;
                case 3:
                    sum = 0;
                    
                    for(let i = 0; i < n; i++){
                        if(arr[i] % 2 === 0){
                            sum =+ arr[i];
                        }
                    }

                    alert(sum);
                    break;
                case 4:
                    let max = arr[0];
                    let min = arr[0];

                    for(let i = 0; i < arr.length; i++){
                        if(max < arr[i]){
                            max = arr[i];
                        }
                        if(min > arr[i]){
                            min = arr[i]
                        }
                    }

                    alert(` Phần tử lớn nhất trong mảng là: ${max}\n Phần tử nhỏ nhất trong mảng là: ${min}`);
                    break;
                case 5:
                    let text = 'Các số nguyên tố có trong mảng là: ';
                    sum = 0;

                    for(let i = 0; i < arr.length; i++){
                        let found = true;
                        for(let j = 2; j <= Math.sqrt(arr[i]); j++){
                            if(arr[i] % 2 === 0 || arr[i] === 1){
                                found = false;
                                break;
                            }
                        }

                        if(found){
                            sum += arr[i];
                            text += arr[i] + ' ';
                        }
                    }

                    if(sum !== 0){
                        text += `\nTổng của chúng là: ${sum}`;
                        alert(text);
                    }
                    else{
                        alert();
                    }
                    break;
                case 6:
                    value = +prompt('Nhập giá trị cần kiểm tra');

                    if(!isNaN(value)){
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
                    }
                    else{
                        alert('Nhập không hợp lệ');
                    }
                    break;
                case 7:
                    index = prompt(`Nhập vị trí muốn thêm (0 --> ${arr.length}):`);

                    if(0<= index <= n){
                        value = +prompt('Nhập phần tử muốn thêm:');
                        arr.splice(index, 0, value);
                    }
                    else{
                        alert('Vị trí không hợp lệ');
                    }
                    break;
                case 8:
                    alert('Thoát hoàn tất');
                    break;
                default:
                    alert('Chức năng không hợp lệ');
                    break;
            }
        }
}
while(choice !== 8);