let listItem = [];
const inputElement = document.querySelector('#task-input');
const buttonAddElement = document.querySelector('button');
const taskListElement = document.querySelector('#taskList');
let itemInput = '';

inputElement.addEventListener('input', function(event){
    itemInput = event.target.value;
})

buttonAddElement.addEventListener('click', function(){
    if(itemInput !== ''){
        listItem.push(itemInput);
        taskListElement.innerHTML = generateItem();
        inputElement.value = '';
        itemInput = '';
    }
    else{
        alert('Vui lòng nhập công việc');
    }
})

function generateItem(){
    return listItem.map((value, index) => {
        return `<li class = 'taskItem'>
                    <span>${value}</span>
                    <div>
                        <button onclick='edit(${index})'>Sửa</button>
                        <button onclick='deleteItem(${index})'>Xóa</button>
                    </div>
                </li>`
    }).join('');   
}

function edit(index){
    itemInput = prompt('Chỉnh sửa công việc:');
    listItem[index] = itemInput;
    taskListElement.innerHTML = generateItem();
    itemInput = '';
}

function deleteItem(index){
    let confirmDelete;
    confirmDelete = confirm('Bạn có chắc chắn xóa phần tử này không?');
    if(confirmDelete){
        listItem.splice(index, 1);
        taskListElement.innerHTML = generateItem();
    }
}