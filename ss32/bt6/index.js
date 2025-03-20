const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const text = document.querySelector('p');
let size = 35;

button1.addEventListener('click', function(){
    size += 10;
    text.style.fontSize = size + 'px';
});

button2.addEventListener('click', function(){
    size -= 10;
    text.style.fontSize = size + 'px';
})

