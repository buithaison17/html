let listItem = JSON.parse(localStorage.getItem('listItem')) || [];
const inputElement = document.querySelector('#task-input');
const buttonAddElement = document.querySelector('button');
const taskListElement = document.querySelector('#taskList');

generateItem();

buttonAddElement.addEventListener('click', function(){
    if(inputElement.value !== ''){
        listItem.push(inputElement.value);
        inputElement.value = '';
    }
    else{
        alert('Vui lòng nhập công việc');
    }

    generateItem();
})

function generateItem(){
    const taskListHtmls = listItem.map((value, index) => {
        return `<li class = 'taskItem'>
                    <span>${value}</span>
                    <div>
                        <button onclick='edit(${index})'>Sửa</button>
                        <button onclick='deleteItem(${index})'>Xóa</button>
                    </div>
                </li>`
    })
    
    taskListElement.innerHTML = taskListHtmls.join(''); 
    localStorage.setItem('listItem', JSON.stringify(listItem));
}

function edit(index){
    itemInput = prompt('Chỉnh sửa công việc:');
    listItem[index] = itemInput;
    generateItem();
}

function deleteItem(index){
    let confirmDelete;
    confirmDelete = confirm('Bạn có chắc chắn xóa phần tử này không?');
    if(confirmDelete){
        listItem.splice(index, 1);
        generateItem();
    }
}