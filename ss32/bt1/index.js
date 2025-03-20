const background = document.querySelector('body');
const button = document.querySelector('button');

button.addEventListener('click', function(){
    let r = Math.round(Math.random() * 255)
    let g = Math.round(Math.random() * 255)
    let b = Math.round(Math.random() * 255)
    background.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})