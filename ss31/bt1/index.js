const text = document.querySelector('.heading1');
const btnHide = document.querySelector('.btn-hide');
const btnShow = document.querySelector('.btn-show');

btnHide.addEventListener('click', function(){
    text.style.opacity = '0'; 
});

btnShow.addEventListener('click', function(){
    text.style.opacity = '1'; 
});