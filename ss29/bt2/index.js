let product = [];
let choice;

function addProduct(product){
    const nameOfProduct = prompt('Nhập tên sản phẩm:');
    const price = +prompt('Nhập giá của sản phẩm:');
    const category = prompt('Nhập danh mục sản phẩm:');
    const quantity = +prompt('Nhập số lượng sản phẩm:');
    const newProduct = {
        id: Math.ceil(Math.random()*1000000),
        nameOfProduct,
        price,
        category,
        quantity,
    };
    product.push(newProduct);
    alert('Thêm sản phẩm thành công');
}

function findById(product){
    const idSearch = +prompt('Nhập ID sản phẩm muốn tìm kiếm:');
    const indexOfProduct = product.findIndex((product) => product.id === idSearch);

    if(indexOfProduct !== 1){
        console.table(product[indexOfProduct]);
    }
    else{
        alert('ID sản phẩm không tồn tại');
    }
}

function updateProduct(product){
    const idUpdate = +prompt('Nhập ID muốn cập nhật thông tin:');
    const indexOfProduct = product.findIndex((product) => product.id === idUpdate);
    let nameOfProductInput;
    let priceOfProductInput;
    let categoryOfProductInput;
    let quantityOfProductInput;
    let confirmUpdate;

    if(indexOfProduct !== -1){
        confirmUpdate = confirm('Bạn có chắc chắn muốn cập nhật thông tin cho sản phẩm này không?');
    }
    else{
        alert('ID sản phẩm không tồn tại');
    }

    if(confirmUpdate){
        nameOfProductInput = prompt('Nhập tên sản phẩm:');
        priceOfProductInput = +prompt('Nhập giá sản phẩm:');
        categoryOfProductInput = prompt('Nhập danh mục của sản phẩm:');
        quantityOfProductInput = +prompt('Nhập số lượng sản phẩm:');
        product[indexOfProduct].nameOfProduct = nameOfProductInput;
        product[indexOfProduct].price = priceOfProductInput;
        product[indexOfProduct].category = categoryOfProductInput;
        product[indexOfProduct].quantity = quantityOfProductInput;
        alert('Cập nhật thông tin thành công');
        return product;
    }
}

function deleteProduct(product){
    const idDelete = +prompt('Nhập ID sản phẩm muốn xóa:');
    const indexOfProduct = product.findIndex((product) => product.id === idDelete);
    let confirmDelete;

    if(indexOfProduct !== -1){
        confirmDelete = confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
    }
    else{
        alert('ID sản phẩm không tồn tại');
    }

    if(confirmDelete){
        alert('Xóa sản phẩm thành công');
        return product.splice(indexOfProduct, 1);
    }
}

function filterByPrice(product){
    const minPrice = +prompt('Nhập giá thấp nhất:');
    const maxPrice = +prompt('Nhập giá cao nhất:');

    if(minPrice > maxPrice || isNaN(minPrice) || isNaN(maxPrice) || minPrice < 0){
        alert('Nhập không hợp lệ');
        return;
    }

    productFilterByPrice  = product.filter((product) => product.price >= minPrice && product.price <= maxPrice);
    
    console.table(productFilterByPrice);
}

do{
    choice = +prompt(`1. Thêm sản phẩm vào danh sách sản phẩm.
2. Hiển thị tất cả sản phẩm.
3. Hiển thị chi tiết sản phẩm theo id.
4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
5. Xóa sản phẩm theo id.
6. Lọc sản phẩm theo khoảng giá.
7. Thoát.
Nhập chức năng:`);

    if(choice === 1){
        addProduct(product);
    }
    else if(product.length === 0 && !isNaN(choice) && choice < 7){
        alert('Chưa thêm sản phẩm');
    }
    else{
        switch (choice) {
            case 2:
                console.table(product);
                break;
            case 3:
                findById(product);
                break;
            case 4:
                updateProduct(product);
                break;
            case 5:
                deleteProduct(product);
                break;
            case 6:
                filterByPrice(product);
                break;
            case 7:
                alert('Thoát thành công');
                break;
            default:
                alert('Chức năng không hợp lệ');
                break;
        }
    }
}
while(choice !== 7);