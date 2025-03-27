const formElement = document.querySelector('#add-name');
const nameInputElement = document.querySelector('#name-input');
nameInputElement.value = localStorage.getItem('name') || '';
const btnSaveNameElement = document.querySelector('#btn-save-name');
const sayNameElement = document.querySelector('#say-name');
const btnRenameElement = document.querySelector('#btn-rename');
const name = document.querySelector('#say-name h1');

sayName();

btnSaveNameElement.addEventListener('click', function(event){
    event.preventDefault();
    sayName(nameInputElement.value);
})

function sayName(){
    if(nameInputElement.value === ''){
        formElement.style.display = 'flex';
        sayNameElement.style.display = 'none';
        return;
    }
        sayNameElement.style.display = 'flex';
        formElement.style.display = 'none';
        name.textContent = `👋 Chào bạn, ${nameInputElement.value}`
        localStorage.setItem('name', nameInputElement.value);
}

btnRenameElement.addEventListener('click', function(){
    nameInputElement.value = '';
    localStorage.setItem('name', nameInputElement.value);
    sayName();
})