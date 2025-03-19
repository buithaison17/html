const container = document.querySelector('.container');
const modalTest = document.querySelector('.modal-test');
const btn = document.querySelector('.btn-open');
const exitbtn = document.querySelector('.exit');

btn.addEventListener('click', function(){
    modalTest.style.display = 'flex';
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
})

exitbtn.addEventListener('click', function(){
    closeModal();
})

function closeModal(){
    modalTest.style.display = 'none';
     container.style.backgroundColor = '';
}