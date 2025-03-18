let product = [
    {
        id: 1,
        name: 'mèn mén',
        price: 20000,
        quantity: 20,
        category: 'món ăn dân tộc Mông',
    },
    {
        id: 2,
        name: 'mứt',
        price: 80000,
        quantity: 21,
        category: 'món ăn dân tộc Kinh',
    },
    {
        id: 3,
        name: 'cơm lam',
        price: 40000,
        quantity: 15,
        category: 'món ăn dân tộc Mông',
    },
    {
        id: 4,
        name: 'bánh đậu xanh',
        price: 60000,
        quantity: 30,
        category: 'món ăn dân tộc Kinh',
    },
];
let choice;
let cart = [];

function displayCart(product){
    const groupCart = product.reduce((acc, product) => {
        if(!acc[product.category]){
            acc[product.category] = [];
        }

        acc[product.category].push(product);

        return acc;
    }, {});

    console.log(groupCart);
}

function buyProduce(product, cart){
    const idSearch = +prompt  ('Nhập ID sản phẩm bạn muốn mua:');
    const indexProduce = product.findIndex((product) => product.id === idSearch);
         
    if(indexProduce === -1){
        alert('ID món ăn không tồn tại');
        return;
    };

    if(product[indexProduce].quantity <= 0){
        alert('Đã hết hàng');
        return;
    };
    
    const quantityBuy = +prompt('Nhập số lượng hàng muốn mua:');

    if(isNaN(quantityBuy) || quantityBuy > product[indexProduce].quantity || quantityBuy <= 0){
        alert('Nhập không hợp lệ');
        return;
    }

    product[indexProduce].quantity -= quantityBuy;
    const buyProduce = {...product[indexProduce], quantity: quantityBuy};
    cart.push(buyProduce);
    alert('Đặt hàng thành công');
    return {cart, product};
}

function sortByPrice(product){
    const choice = prompt(`a. Tăng dần\nb. Giảm dần`);
    switch(choice){
        case 'a':
            product.sort((x,y) => x.price - y.price);
            console.log(product);
            
            break;
        case 'b':
            product.sort((x,y) => y.price - x.price);
            break;
        default:
            alert('Chức năng nhập không hợp lệ');
            break;
    }
}

function totalBill(cart){
    if(cart.length === 0){
        alert('Danh sách mua hàng trống');
        return;
    }

    const totalBill = cart.reduce((total, cart) => total += cart.quantity * cart.price, 0);
    console.log(`Tổng số tiền bạn phải thành toán là: ${totalBill.toLocaleString('vi', {style : 'currency', currency : 'VND'})}`);
    
}

do{
    choice = +prompt(`1. Hiển thị các sản phẩm theo tên danh mục.
2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
3. Sắp xếp các sản phẩm trong cửa hàng theo giá:
4. Tính số tiền thanh toán trong giỏ hàng.
5. Thoát.
Nhập chức năng:`);

    if(choice === 1){
        displayCart(product);
    }
    else if(product.length === 0 && !isNaN(choice) && choice < 5){
        alert('Danh sách món ăn trống');
    }
    else{
        switch (choice) {
            case 2:
                buyProduce(product, cart);
                break;
            case 3:
                sortByPrice(product);
                break;
            case 4:
                totalBill(cart);
                break;
            case 5:
                alert('Thoát thành công');
                break;
            default:
                alert('Chức năng không hợp lệ');
                break;
        }
    }
}
while(choice !== 5);