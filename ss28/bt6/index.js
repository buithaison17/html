const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }

];

const totalPrice = (cart) => {
    return cart.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0);
}

console.log(totalPrice(cart));
