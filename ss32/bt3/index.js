const inputSubjectElement = document.querySelector('input');
const buttonAddSubject = document.querySelector('button');
const listSubject = document.querySelector("#listSubject");
let subject;

inputSubjectElement.addEventListener('input', function(event){
    subject = event.target.value;
});

buttonAddSubject.addEventListener('click', function(event){
    event.preventDefault()
    const item = document.createElement('li');
    item.innerText = subject;
    listSubject.appendChild(item);
    inputSubjectElement.value = '';
})