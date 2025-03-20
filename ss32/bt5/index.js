const list = [];

const inputElement = document.querySelector('input');
const buttonAdd = document.querySelector('.button');
const listItem = document.querySelector('#list');
let item = '';

inputElement.addEventListener('input', function(event){
    item = event.target.value;
})

buttonAdd.addEventListener('click', function(){
    if(item !== ''){
        list.push(item);
        listItem.innerHTML = generateList();
        inputElement.value = '';
        item = '';
    }
})

function generateList(){
    const htmls = list.map((value, index) => {
        return `
            <div class="listItem">
                <li>${value}</li>
                <ion-icon class="deleteItem" name="close-outline" onclick="deleteItemList(${index})"></ion-icon>
                </div>
            <hr>
        `
    });
    return htmls.join('');
}

function deleteItemList(index){
    list.splice(index, 1);
    listItem.innerHTML = generateList();
}

