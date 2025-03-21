const textInput = document.querySelector('textarea');
const buttonElement = document.querySelector('button');
const textGroupElement = document.querySelector('.text-group');
const textCheck = document.createElement('p');

buttonElement.addEventListener('click', function(){
    textGroupElement.appendChild(textCheck);
    textCheck.style.display = 'block';
    textCheck.innerText = textInput.value.length + ' Kí tự';
})