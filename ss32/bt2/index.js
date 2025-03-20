const button = document.querySelector('button');
const text = document.querySelector('.count');
let count = 0;

button.addEventListener('click', function(){
    count++;
    text.innerHTML = `Số lần bấm: ${count}`;
})