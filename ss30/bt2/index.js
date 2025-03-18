let book = {};
let choice;
let cart = [];

function addBook(book){
    const nameOfBookInput = prompt('Nhập tên sách:');
    const priceOfBookinpt = +prompt('Nhập giá sách:');
    const quantityOfBookInput = +prompt('Nhập số lượng sách:');
    const categoryInput = prompt('Nhập tên danh mục sách:').toLocaleLowerCase();
    const newBook = {
        id: Math.ceil(Math.random()*1000000),
        name: nameOfBookInput,
        price: priceOfBookinpt,
        quantity: quantityOfBookInput,
    }
    
    if(!book[categoryInput]){
        book[categoryInput] = [];
        book[categoryInput].push(newBook);
    }
    else{
        book[categoryInput].push(newBook);
    }   
    
    return book;
}

function searchById(book, cart){
    const idSearch = +prompt('Nhập ID muốn tìm kiếm:');
    let foundBook;

    for (const category in book) {
        foundBook = book[category].find((item) => item.id === idSearch);
        if(foundBook) break;
    }

    if(!foundBook){
        alert('Sản phẩm không tồn tại');
        return;
    }

    console.log(foundBook);
}

function buyBook(book){
    const idSearch = +prompt('Nhập ID muốn mua:');
    let foundCategory;
    let foundIndex;

    for (const category in book) {
        foundIndex = book[category].findIndex(item => item.id === idSearch);
        if(foundIndex !== -1){
            foundCategory = category;
            break;
        };
    }

    if(foundIndex === -1){
        alert('Sản phẩm không tồn tại');
        return;
    }

    if(book[foundCategory][foundIndex].quantity === 0){
        alert('Sản phẩm hiện đã hết hàng');
        return;
    }

    const quantityBuy = +prompt(` Số lượng sản phẩm hiện tại: ${book[foundCategory][foundIndex].quantity}\nNhập số lượng sản phẩm muốn mua:`)

    if(quantityBuy <= 0 || isNaN(quantityBuy)){
        alert('Nhập không hợp lệ');
        return;
    }

    if(quantityBuy > book[foundCategory][foundIndex].quantity){
        alert('Số lượng sản phẩm hiện không đủ');
        return;
    }

    book[foundCategory][foundIndex].quantity -= quantityBuy;
    const buyProduce = {...book[foundCategory][foundIndex], quantity: quantityBuy};
    cart.push(buyProduce);

    return {book, cart};    
}

function arrangeByPrice(book){
    let choice = prompt('1.Tăng dần\n2. Giảm dần');
    switch (choice) {
        case 'a':
            for (const category in book) {
                book[category].sort((x,y) => x.price - y.price);
            }
            break;
        case 'b':
            for (const category in book) {
                book[category].sort((x,y) => y.price - x.price);
            }
            break;
        default:
            break;
    }
    return book;
}

function totalBill(cart){
    const {totalBook, totalMoney} = cart.reduce((total, item) => {
        total.totalBook += item.quantity;
        total.totalMoney += item.quantity * item.price;
        return total;
    }, {totalBook: 0, totalMoney: 0});

    console.log(`Tổng số sách: ${totalBook}\nTổng số tiền: ${totalMoney.toLocaleString('vi', {style : 'currency', currency : 'VND'})}`);
    cart = [];
    return cart;
}

function totalBook(book){
    let total = 0;

    for (const category in book) {
        total += book[category].reduce((sum, item) => sum + item.quantity, 0);
    }

    console.log(`Tổng số sách hiện có trong kho là: ${total}`);
}

do{
    choice = +prompt(`1. Hiển thị danh sách sách theo thể loại.
2. Thêm sách mới vào kho
3. Tìm kiếm sách theo tên hoặc id.
4. Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
5. Sắp xếp sách theo giá:
6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
7. Hiển thị tổng số lượng sách trong kho.
8. Thoát chương trình.
Nhập chức năng:`);

    if(choice === 2){
        addBook(book);
    }
    else if(Object.keys(book).length === 0 && !isNaN(choice) && choice < 8 && choice !== 2){
        alert('Chưa thêm sách vào mảng');
    }
    else{
        switch (choice) {
            case 1:
                console.log(book);
                break;
            case 3:
                searchById(book);
                break;
            case 4:
                buyBook(book, cart);
                break;
            case 5:
                arrangeByPrice(book);
                break;
            case 6:
                totalBill(cart);
                break;
            case 7:
                totalBook(book);
                break;
            case 8:
                
                break;
            default:
                alert('Chức năng không hợp lệ');
                break;
        }
    }
}
while(choice !== 8);