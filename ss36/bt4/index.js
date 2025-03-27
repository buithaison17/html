const btnChange = document.querySelector('#mode-icon');
const bodyElement = document.querySelector('body');
const mode = localStorage.getItem('mode');

if(mode === 'dark-mode'){
    bodyElement.classList.add('dark-mode');
}

btnChange.addEventListener('click', function(){
    bodyElement.classList.toggle('dark-mode');
    localStorage.setItem('mode', bodyElement.classList.contains('dark-mode') ? 'dark-mode' : '');
})