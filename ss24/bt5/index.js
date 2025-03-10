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
4. Tính tổng đường chéo chính
5. Tính tổng đường chéo phụ
6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)
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

            console.log(arr.length);
    }
    else if(arr.length === 0 && Number.isInteger(choice) && choice != 7){
        alert('Bạn chưa thêm phần tử vào mảng');
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
                sum = 0;

                if(rows = cols){
                    arr.forEach((rows, i) => {
                        sum += rows[i];
                    })
                }
                else{
                    alert('Không phải ma trận vuông nên không có đường chéo chính');
                }
                
                alert(`Tổng đường chéo chính là: ${sum}`);
                break;
            case 5:
                sum = 0;

                if(rows = cols){
                    arr.forEach((rows, i) => {
                        sum += rows[arr.length - i- 1];
                    })
                }
                else{
                    alert('Không phải ma trận vuông nên không có đường chéo phụ');
                }
                
                alert(`Tổng đường chéo phụ là: ${sum}`);
                break;
            case 6:
                do{
                    let choiceCase6 = +prompt(`1. Tính trung bình cộng hàng \n2. Tính trung bình cộng cột\n3. Thoát`);
                    switch(choiceCase6){
                        case 1:
                            sum = 0;
                            let rowIndex = +null;

                            do{
                                rowIndex = +prompt(`Nhập số hàng muốn tính trung bình cộng (0 -> ${rows - 1}):`);
                                if(isNaN(rowIndex) || rowIndex < 0 || rowIndex > rows - 1){
                                    alert('Nhập không hợp lệ');
                                }
                            }
                            while(isNaN(rowIndex) || rowIndex < 0 || rowIndex > rows - 1);

                            let selectedRow = arr[rowIndex];

                            selectedRow.forEach(value => {
                                sum += value;
                            })

                            alert(`Trung bình cộng hàng ${rowIndex} là: ${sum / selectedRow.length}`);
                            break;
                        case 2:
                            sum = 0;
                            let colIndex = +null;

                            do{
                                colIndex = +prompt(`Nhập số cột cần tính trung bình cộng: `);
                                if(isNaN(colIndex) || colIndex < 0 || colIndex > cols - 1){
                                    alert('Nhập không hợp lệ');
                                }
                            }
                            while(isNaN(colIndex) || colIndex < 0 || colIndex > cols - 1);

                            for(let i = 0; i < rows; i++){
                                    sum += arr[i][colIndex]
                            }

                            alert(`Trung bình cộng của cột ${colIndex} là: ${sum / rows}`);
                            break;
                        case 3:
                            break;
                        default:
                            alert('Chức năng nhập không hợp lệ');
                            break;
                    }
                }
                while(choiceCase6 !== 3)
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