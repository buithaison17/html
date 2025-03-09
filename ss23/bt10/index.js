let choice = +null;
let n = null;
let arr = [];
let sum = 0;
let value = +null;
let index = 0;
let text = '';

do{
    choice = +prompt(`1. Nhập số phần tử cần nhập và giá trị các phần tử 
2. In ra giá trị các phần tử đang quản lý 
3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần
4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng 
5. In ra các số nguyên tố trong mảng và tính tổng 
6. Nhập một số và đếm số lần xuất hiện trong mảng 
7. Thêm một phần tử vào vị trí chỉ định 
8. Xóa một phần tử theo giá trị 
9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần 
0. Thoát `)
        if(choice === 1){
            do{
                n = prompt('Nhập số phần tử cần thêm (Nhập quit để thoát):');

                if(n === 'quit'){
                    break;
                }

                if(isNaN(n)){
                    alert('Nhập không hợp lệ')
                }
            }
            while(isNaN(n));

            for(let i = 0; i < n; i++){
                arr[i] = prompt(`Nhập phần tử arr[${i}]:`);
            }
        
            alert('Thêm hoàn tất');
        }
        else if(arr.length === 0){
            alert('Chưa thêm phần tử vào mảng');
        }
        else{
            switch(choice){
                case 2:
                    alert(`Các phần tử có trong mảng là: ${arr}`);
                    break;
                case 3:
                    let arrEven = [];
                    index = 0;

                    for(let i = 0; i < arr.length; i++){
                        if(arr[i] % 2 === 0){
                            sum += 0;
                            arrEven[index++] = arr[i]; 
                        }
                    }

                    for(let i = 0; i < arrEven.length - 1; i++){
                        for(let j = 0; j < arrEven.length - i - 1; j++){
                            if(arrEven[j] > arrEven[j+1]){
                                let temp = arrEven[j];
                                arrEven[j] = arrEven[j+1];
                                arrEven[j+1] = temp;
                            }
                        }
                    }

                    text = 'Các phần tử chẵn có trong mảng là: ';
                    
                    for(let i = 0; i < arrEven.length; i++){
                        text += arrEven[i];
                        sum += +arr[i];

                        if(i < arrEven.length - 1){
                            text += ',';
                        }
                    }

                    text += `\nTổng của chúng là: ${sum}` 
                    
                    alert(text)
                    break;
                case 4:
                    let max = arr[0];
                    let min = arr[0];
                    let indexMax = 0;
                    let indexMin = 0;

                    for(let i = 1; i < arr.length; i++){
                        if(max < arr[i]){
                            max = arr[i];
                            indexMax = i;
                        }
                        if(min < arr[i]){
                            min = arr[i];
                            indexMin = i;
                        }
                    }

                    
                    break;
                default:
                    alert('Chức năng nhập không hợp lệ');
                    break;
            }
        }

}
while(choice !== 0);