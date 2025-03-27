const waitProcessing = JSON.parse(localStorage.getItem('waitProcessing')) || [];
const processing = JSON.parse(localStorage.getItem('processing')) || [];
const successfull = JSON.parse(localStorage.getItem('successfull')) || [];
const nameInputElement = document.querySelector('#name-input');
const btnAddElement = document.querySelector('#btn-add');
const waitProcessingListElement = document.querySelector('#wait-processing .card-body');
const processingListElement = document.querySelector('#processing .card-body');
const successfullListElement = document.querySelector('#successfull .card-body');

btnAddElement.addEventListener('click', function(event){
    event.preventDefault();
    if(nameInputElement.value !== ''){
        waitProcessing.push(nameInputElement.value);
        nameInputElement.value = '';
        renderList();
    }
});

renderList();

function renderList(){
    waitProcessingListElement.innerHTML = waitProcessing.map((item, index) => {
        return `<div class="item d-flex gap-2">
                        <p>${item}</p>
                        <button onclick = "changeStatus(${index}, ${1})" class="btn btn-success p-0" style="height: fit-content;">chuyển tiếp</button>
                    </div>`
    }).join('');

    processingListElement.innerHTML = processing.map((item, index) => {
        return `<div class="item d-flex gap-2">
                        <p>${item}</p>
                        <button onclick = "changeStatus(${index}, ${2})" class="btn btn-success p-0" style="height: fit-content;">chuyển tiếp</button>
                    </div>`
    }).join('');

    successfullListElement.innerHTML = successfull.map((item, index) => {
        return `<div class="item d-flex gap-2">
                        <p>${item}</p>
                    </div>`
    }).join('');

    localStorage.setItem('waitProcessing', JSON.stringify(waitProcessing));
    localStorage.setItem('processing', JSON.stringify(processing));
    localStorage.setItem('successfull', JSON.stringify(successfull));
}

function changeStatus(index, setting){
    switch(setting){
        case 1:
            processing.push(waitProcessing[index]);
            waitProcessing.splice(index, 1);
            break;
        case 2:
            successfull.push(processing[index]);
            processing.splice(index, 1);
            break;
    }
    renderList();
}