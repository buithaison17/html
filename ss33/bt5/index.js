const products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        image: 'https://hungphatlaptop.com/wp-content/uploads/2022/03/DELL-XPS-15-9520-2022-H3.jpeg.webp',
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 32990000,
        image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain',
        description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image: 'https://didongmoi.com.vn/upload/images/product/samsung/samsung-galaxy-s24-ultra-gia-re-7.jpg',
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 7990000,
        image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljv36f0uj8xuaf',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.'
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3990000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLfMKhfyd7te1a0QHsb-R1ViqWytca3g7MQ&s',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
    }
];

const produceGroupElement = document.querySelector('.produce-group');
const searchElement  = document.querySelector('.search');
const btnSearchElement = document.querySelector('.btnSearch');

function renderProduces(products){
    return products.map(product => {
        return `
            <div class="item">
                <img src="${product.image}" alt="">
                <p class="nameOfProduce">${product.name}</p>
                <p class="description">${product.description}</p>
                <p class="priceOfItem">${product.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                <div class="btnBuy">Buy</div>
            </div>
        `
    }).join('');
}

produceGroupElement.innerHTML = renderProduces(products);

btnSearchElement.addEventListener('click', function(){
    const produceFilter = products.filter(product => product.name.toLocaleLowerCase().includes(searchElement.value.toLocaleLowerCase()));
    if(produceFilter.length === 0){
        alert('Sản phẩm không tìm thấy');
    }
    else{
        produceGroupElement.innerHTML = renderProduces(produceFilter);
    }
})

