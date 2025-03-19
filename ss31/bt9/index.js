let todoList = [
    {id: 1, task: "Hit the gym", completed: false},
    {id: 2, task: "Pay bills", completed: true},
    {id: 3, task: "Meet George", completed: false},
    {id: 4, task: "Buy eggs", completed: false},
    {id: 5, task: "Read a book", completed: false},
    {id: 6, task: "Organize office", completed: false},
]

const mainElement = document.querySelector('main');
let itemInput = document.querySelector('input');
const button = document.querySelector('.button');
let addItem;

for(let i = 0; i < todoList.length; i++){
    const item = document.createElement('div');
    item.classList.add('item')
    mainElement.appendChild(item);
    const title = document.createElement('p');
    const exit = document.createElement('div');
    exit.classList.add('exit');
    item.appendChild(exit)
    item.appendChild(title)
    title.innerText = todoList[i].task;
    exit.innerText = 'x'
    exit.addEventListener('click', function(){
        item.remove();
    })
}

itemInput.addEventListener('input', function(event){
    addItem = event.target.value;
})

button.addEventListener('click', function(){
    const item = document.createElement('div');
    item.classList.add('item')
    mainElement.appendChild(item);
    const title = document.createElement('p');
    const exit = document.createElement('div');
    exit.classList.add('exit');
    item.appendChild(exit)
    item.appendChild(title)
    title.innerText = addItem
    exit.innerText = 'x'
    exit.addEventListener('click', function(){
        item.remove();
    })
})    

