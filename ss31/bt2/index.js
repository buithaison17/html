const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    if(container.style.backgroundColor === 'black'){
        container.style.backgroundColor = 'white';
        container.style.color = 'black';
    }
    else{
        container.style.backgroundColor = 'black';
        container.style.color = 'white';
    }
})
