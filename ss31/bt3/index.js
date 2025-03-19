const green = document.querySelector('.card:nth-child(1)');
const red = document.querySelector('.card:nth-child(2)');
const purple = document.querySelector('.card:nth-child(3)');
const container = document.querySelector('.container');

green.addEventListener('click', function(){
    container.style.backgroundColor = 'green'
})

red.addEventListener('click', function(){
    container.style.backgroundColor = 'red'
})

purple.addEventListener('click', function(){
    container.style.backgroundColor = 'blueviolet'
})