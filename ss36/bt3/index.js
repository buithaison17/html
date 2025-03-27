const colorList = [
    {
    name: 'Đỏ',
    color: 'red'
    },
    {
        name: 'Xanh',
        color: 'blue',
    },
    {
        name: 'Vàng',
        color: 'yellow'
    },
    {
        name: 'Tím',
        color: 'purple'
    },
];

const containerElement = document.querySelector('.container');
const bodyElement = document.querySelector('body');
let colorCurrent = localStorage.getItem('colorCurrent');

bodyElement.style.backgroundColor = colorCurrent;

function renderButton(){
    const containerHtmls = colorList.map((item, index) => {
        return `<button onclick = "changeColor(${index})")>${item.name}</button>`
    })
    containerElement.innerHTML = containerHtmls.join('');
}

renderButton();

function changeColor(index){
    bodyElement.style.backgroundColor = colorList[index].color;
    colorCurrent = colorList[index].color;
    localStorage.setItem('colorCurrent', colorCurrent);
}