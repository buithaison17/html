let store = {};
let cart = [];
let choice;

const addToStore = (store) => {
    const nameOfPhoneInput = prompt('Nhập tên điện thoại:');
    const priceOfPhoneInput = +prompt('Nhập giá điện thoại:');
    const quantityOfPhoneInput = +prompt('Nhập số lượng điện thoại:');
    const brandOfPhoneInput = prompt('Nhập hãng điện thoại:').toLocaleLowerCase();
    const newPhone = {
        // id: Math.ceil(Math.random() * 1000000),
        id: 1,
        name: nameOfPhoneInput,
        price: priceOfPhoneInput,
        quantity: quantityOfPhoneInput,
    };

    if(!store[brandOfPhoneInput]){
        store[brandOfPhoneInput] = [];

    }
        store[brandOfPhoneInput].push(newPhone);

    return store;
}

const buyPhone = (store, cart) => {
    const idSearch = +prompt('Nhập ID điện thoại muốn mua:');
    let found, index;

    for (const brand in store) {
        index = store[brand].findIndex((item) => item.id === idSearch);
        if(index !== -1){
            found = brand;
            break;
        }    
    }

    if(index === -1){
        alert('ID sản phẩm không tồn tại');
        return;
    }

    if(store[found][index].quantity === 0){
        alert('Sản phẩm hiện đang hết hàng');
        return;
    }

    let quantityBuy = +prompt(`Số lượng hiện có: ${store[found][index].quantity}\nNhập số lượng sản phẩm muốn mua:`);

    if(quantityBuy <= 0 || isNaN(quantityBuy)){
        alert('Nhập không hợp lệ');
        return;
    }

    if(quantityBuy > store[found][index].quantity){
        alert('Số lượng sản phẩm hiện không đủ');
        return;
    }

    store[found][index].quantity -= quantityBuy;
    const buyPhone = {...store[found][index], quantity: quantityBuy};
    cart.push(buyPhone);
    return {store, cart};
}

do{
    choice = +prompt(`1. Hiển thị danh sách điện thoại theo hãng.
2. Thêm điện thoại mới vào cửa hàng.
3. Tìm kiếm điện thoại theo tên hoặc id
4. Mua điện thoại.
5. Thanh toán tất cả điện thoại trong giỏ hàng.
6. Sắp xếp điện thoại theo giá.
7. Hiển thị tổng số tiền của các điện thoại trong kho
8. Hiển thị tổng số lượng điện thoại theo từng hàng.
9. Thoát chương trình.
Nhập chức năng:`);

    if(choice === 2){
        addToStore(store);
    }
    else if(Object.keys(store).length === 0 && !isNaN(choice) && choice < 9 && choice !== 2){
        alert('Danh sách sản phẩm trống');
    }
    else{
        switch (choice) {
            case 1:
                console.log(store);
                break;
            case 3:
                
                break;
            case 4:
                buyPhone(store, cart);
                break;
            case 5:
                
                break;
            case 6:
                
                break;
            case 7:
                
                break;
            case 8:
                
                break;
            case 9:
                
                break;
            default:
                alert('Chức năng không hợp lệ');
                break;
        }
    }
}
while(choice !== 9);