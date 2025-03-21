let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' },
];

const selectElement = document.querySelector('select');
const button = document.querySelector('button');
const optionDishElement = document.querySelectorAll('option');
const listDish = document.querySelector('.listDish');

function renderCategoryList() {
    return [...new Set(dish.map(item => item.category))]
        .map(category => `<option value="${category}">${category}</option>`)
        .join('');
}

selectElement.innerHTML = renderCategoryList();

function renderList(dish){
    return dish.map(item => `
        <li>
            <span><b>Tên đồ ăn</b>: ${item.name}</span>
            <span>- <b>Danh mục</b>: ${item.category}</span>
        </li>
    `).join('');
}

listDish.innerHTML = renderList(dish);

button.addEventListener('click', function(){
    const filterDish = dish.filter(item => item.category === selectElement.value);
    listDish.innerHTML = renderList(filterDish);
})

