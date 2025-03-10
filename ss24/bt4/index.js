let rows = +null;
let cols = +null;
let choice = +null;
let sum = 0;
let value = +null;
let arr = [];

do{
    choice = +prompt(`1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình`);

    if(choice === 1){
            do{
                rows = +prompt('Nhập số hàng:')
                if(isNaN(rows) || rows <= 0){
                    alert('Nhập không hợp lệ');
                }
            }
            while(isNaN(rows) || rows <= 0)

            do{
                cols = +prompt('Nhập số cột:')
                if(isNaN(cols) || cols <= 0){
                    alert('Nhập không hợp lệ');
                }
            }
            while(isNaN(cols) || cols <= 0);

            arr = new Array(rows);

            for(let i = 0; i < rows; i++){
                arr[i] = new Array(cols);
            }

            for(let i = 0; i < rows; i++){
                for(let j = 0; j < cols; j++){
                    do{
                        arr[i][j] = +prompt(` Nhập phần tử arr[${i}][${j}]:`);
                        if(isNaN(arr[i][j])){
                            alert('Nhập không hợp lệ');
                        }
                    }
                    while(isNaN(arr[i][j]));
                }
            }
    }
    else if(arr.length === 0 && Number.isInteger(choice) && choice != 7){
        alert('Nhập không hợp lệ')
    }
    else{
        switch(choice){
            case 2:
                let text = '';
                for(let i = 0; i < rows; i++){
                    for(let j = 0; j < cols; j++){
                        text += arr[i][j] + ' ';
                    }
                    text += `\n`;
                }

                alert(text);
                break;
            case 3:
                sum = 0;
                
                arr.forEach(rows => {
                    rows.forEach(cols => {
                        sum += cols;
                    })
                })

                alert(` Tổng các phần tử có trong mảng là: ${sum}`);
                break;
            case 4:
                let max = arr[0][0];
                let index = '';

                arr.forEach((rows, i) => {
                    rows.forEach((cols, j) => {
                        if(cols > max){
                            max = cols;
                            index = `[${i}][${j}]`;
                        }
                    })
                })

                alert(`Phần tử lớn nhất là: ${max}\nCó vị trí là: ${index}`);
                break;
            case 5:
                let rowIndex = +null;
                sum = 0;
                let selectedRow = arr[rowIndex];

                do{
                    rowIndex = +prompt(`Nhập số hàng muốn tính trung bình cộng (0 -> ${rows - 1}):`);
                    if(isNaN(rowIndex) || rowIndex < 0 || rowIndex > rows - 1){
                        alert('Nhập không hợp lệ');
                    }
                }
                while(isNaN(rowIndex) || rowIndex < 0 || rowIndex > rows - 1);

                selectedRow.forEach(value => {
                    sum += value;
                })

                alert(`Trung bình cộng của hàng ${rowIndex} là: ${sum / rows}`);
                break;
            case 6:
                // arr = arr.map(row => row.reverse());
                let start = 0;
                let end = cols - 1;
                for(let i = 0; i < rows; i++){
                    while(start < end){
                        let temp = arr[i][start];
                        arr[i][start] = arr[i][end];
                        arr[i][end] = temp;
                        start++;
                        end--;
                    }
                }
                alert('Đảo ngược thành công');
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