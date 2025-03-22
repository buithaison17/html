const products = [
    {
        name: 'Điện thoại Samsung Galaxy A54',
        image: 'https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg',
        price: 7490000
    },
    {
        name: 'Laptop Dell Inspiron 15',
        image: 'https://bizweb.dktcdn.net/100/446/400/products/laptop-dell-vostro-3490-1-gia-loc.jpg?v=1699258008053',
        price: 15990000
    },
    {
        name: 'Tai nghe AirPods Pro',
        image: 'https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg',
        price: 7490000
    },
    {
        name: 'Đồng hồ thông minh Apple Watch',
        image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzR2eDMxaWg4TFhITTVrUW41Z084dENpYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNL3gwYlE3R0w4Z1RCbG9qQTd1MjYyL1owaE5aVCt2Ri82aDRacTg0bXlaZA',
        price: 8990000
    },
    {
        name: 'Máy ảnh Canon EOS M50',
        image: 'https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r50/black-18-45/canon-eos-r50-lens-18-45mm-500x500.jpg',
        price: 12490000
    },
    {
        name: 'Loa Bluetooth JBL Flip 5',
        image: 'https://bizweb.dktcdn.net/100/445/498/products/jbl-go-4-3-4-left-black-48178-x1.jpg?v=1732646465910',
        price: 2190000
    },
    {
        name: 'Bàn phím cơ Logitech G Pro',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MvD76Mt-Ne0IC2DPMMsTZpG05xDxJOzkqw&s',
        price: 2490000
    },
    {
        name: 'Chuột không dây Logitech MX Master',
        image: 'https://product.hstatic.net/200000722513/product/h_mx_master_3_wireless__graphite_.jpg_1e5491e35f754dcc90b90582a9c3be95_ca0c63ca59de4ed1b4d46fcc5c81c1ed.png',
        price: 1890000
    },
]

const cart = [];

const productsElement = document.querySelector('.products-grid');
const cartTotalElement = document.querySelector('.cart-total');
const checkoutElement = document.querySelector('.checkout-btn');
const cartItemsElement = document.querySelector('.cart-items');

function renderProducts() {
    return products.map((item, index) => {
        return `<div class="product-cart">
                    <img src="${item.image}" class="product-image" alt="">
                    <div class="product-title">${item.name}</div>
                    <div class="product-price">${item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                    <div class="add-to-cart-btn" onclick="addToCart(${index})">Thêm vào giỏ hàng</div>
                </div>`;
    }).join("");
}

productsElement.innerHTML = renderProducts();

const addToCartBtn = document.querySelectorAll('.add-to-cart-btn');

function addToCart(index){
    const indexCart = cart.findIndex(item => item.name === products[index].name);

    if(indexCart !== -1){
        cart[indexCart].quantity += 1;
    }
    else{
        const newCart = {
            name: products[index].name,
            price: products[index].price,
            quantity: 1
        }
        cart.push(newCart);
    }
    
    cartItemsElement.innerHTML = renderCart();

    TotalPriceCart()
}

function TotalPriceCart(){
    const totalCartPrice = cart.reduce((total, item) => {
        return total += item.price * item.quantity;
    }, 0)

    return cartTotalElement.innerText = 'Tổng: ' + totalCartPrice.toLocaleString('vi', {style : 'currency', currency : 'VND'});
}

function renderCart(){
    return cart.map((item, index) => {
        return `<div class="cart-item">
                <div class="card-item-infor">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})} x ${item.quantity}</div>
                </div>
                <div class="quantity-controls">
                    <div class="decrease-btn" onclick = 'decreaseQuantity(${index})'>-</div>
                    <span>${item.quantity}</span>
                    <div class="increase-btn" onclick = 'increaseQuantity(${index})'>+</div>
                    <div class="remove" onclick = 'removeItem(${index})'>X</div>
                </div>
            </div>`
    }).join('');
}

function decreaseQuantity(index){
    if(cart[index].quantity > 1){
        cart[index].quantity -= 1;   
    }
    else{
        cart.splice(index, 1);
    }

    if(cart.length === 0){
        cartItemsElement.innerHTML = `<div class="empty-cart">Giỏ hàng trống</div>`
    }
    cartItemsElement.innerHTML = renderCart();
    TotalPriceCart();
}

function increaseQuantity(index){
    cart[index].quantity += 1;
    cartItemsElement.innerHTML = renderCart();
    TotalPriceCart();
}

function removeItem(index){
    cart.splice(index, 1);
    if(cart.length === 0){
        cartItemsElement.innerHTML = `<div class="empty-cart">Giỏ hàng trống</div>`
    }
    else{
        cartItemsElement.innerHTML = renderCart();
    }
    TotalPriceCart();
}

checkoutElement.addEventListener('click', function(){
    if(cart.length === 0){
        alert('Giỏ hàng của bạn đang trống');
    }
    else{
        alert(`Cảm ơn bạn đã mua hàng`);
        cart.splice(0, cart.length-1);
        cartItemsElement.innerHTML = `<div class="empty-cart">Giỏ hàng trống</div>`
        cartTotalElement.innerHTML = `<div class="cart-total">Tổng: 0đ</div>`;
    }
})