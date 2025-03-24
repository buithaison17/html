const lessionGroupElement = document.querySelector('#lession-group tbody')
const addLessionElement = document.querySelector('#add-lesson');
const nameLessionElement = document.querySelector('#name-lession');
const dateElement = document.querySelector('#date');
const statusElement = document.querySelector('#status');
const usernameElement = document.querySelector('#username');
const btnSubmit = document.querySelector('button');
const courses = JSON.parse(localStorage.getItem('courses')) || [];

renderListLession();

function renderListLession(){
    const lessionGroupHTmls = courses.map((item, index) => {
        return `<tr>
                    <td>${item.id}</td>
                    <td>${item.content}</td>
                    <td>${item.dueDate}</td>
                    <td>${item.status}</td>
                    <td>${item.assignedTo}</td>
                    <td><button onclick = "editLession(${index})">Sửa</button></td>
                    <td><button onclick = "removeLession(${index})">Xóa</button></td>
                </tr>`
    })

    lessionGroupElement.innerHTML = lessionGroupHTmls.join('');
}

function removeLession(index){
    courses.splice(index, 1);
    renderListLession();
    localStorage.setItem('courses', JSON.stringify(courses));
}

function editLession(index){
    const nameLession = prompt('Nhập tên khóa học');
    const date = prompt('Nhập ngày tháng năm (YY--MM--DD): ');
    const status = +prompt(`Nhập trạng thái:\n1. Pending\n2. Succesful`);
    const username = prompt('Nhập tên người dạy');

    courses[index].content = nameLession;
    courses[index].dueDate = date;
    courses[index].status = status === 1 ? 'Pending' : 'Successful';
    courses[index].assignedTo = username;

    renderListLession();   
    
    localStorage.setItem('courses', JSON.stringify(courses));
}

btnSubmit.addEventListener('click', function(event){
    event.preventDefault();

    if(nameLessionElement.value === '' || dateElement.value === '' || statusElement.value === '' || usernameElement.value === ''){
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }

    const newCourse = {
        id: Math.ceil(Math.random() * 1000),
        content: nameLessionElement.value,
        dueDate: dateElement.value,
        status: statusElement.value,
        assignedTo: usernameElement.value,
    };
    
    courses.push(newCourse);
    localStorage.setItem('courses', JSON.stringify(courses));
    renderListLession();

    nameLessionElement.value = '';
    dateElement.value = '';
    statusElement.value = '';
    usernameElement.value = '';
})