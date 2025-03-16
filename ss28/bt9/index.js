let library = [];
let choice;

function addBook(library){
    const titleOfBookInput = prompt('Nhập tên của sách: ');
    const authorOfBookInput = prompt('Nhập tên tác giả của sách: ');
    const priceOfBookInput = +prompt('Nhập giá sách: ');
    const yearOfBookInput = +prompt('Nhập năm xuất bản sách: ');
    const isValiableInput = prompt('Trạng thái mượn sách (true / false): ');
    const newBook = {
        id: Math.ceil(Math.random()*1000000),
        title: titleOfBookInput,
        author: authorOfBookInput,
        price: priceOfBookInput,
        year: yearOfBookInput,
        isValiable: isValiableInput === 'true' ? true : false, 
    }
    library.push(newBook);
    alert('Thêm sách thành công');
}

function deleteBook(library){
    const idDeleteBook = +prompt('Nhập ID sách muốn xóa: ');
    const indexDeleteBook = library.findIndex((library) => library.id === idDeleteBook);
    let confirmDelete;

    if(indexDeleteBook !== -1){
        confirmDelete = confirm('Xác nhận xóa sách: ');
    }
    else{
        alert('Sách không tồn tại');
    }

    if(confirmDelete){
        alert('Xóa sách thành công');
        return library.splice(indexDeleteBook, 1);
    }

}

do{
    choice = +prompt(`1. Thêm sách mới.
2. Hiển thị danh sách sách.
3. Tìm kiếm sách theo tiêu đề.
4. Cập nhật trạng thái mượn/trả sách theo id sách.
5. Xóa sách theo id sách ra khỏi danh sách.
6. Sắp xếp sách theo giá tăng dần.
7. Thoát.`);

    if(choice === 1){
        addBook(library);
    }
    else if(library.length === 0 && !isNaN(choice) && choice !== 7){
        alert('Chưa thêm sách');
    }
    else{
        switch (choice) {
            case 2:
                console.table(library);
                break;
            case 3:
                
                break;
            case 4:
                
                break;
            case 5:
                deleteBook(library);
                break;
            case 6:
                
                break;
            case 7:
                
                break;
            default:
                break;
        }
    }
}
while(choice !== 7)