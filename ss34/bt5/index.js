const employees = JSON.parse(localStorage.getItem('employees')) || [];
const nameInputElement = document.querySelector('#name-input');
const positionInputElement = document.querySelector('#position-input');
const tableElement = document.querySelector('#list-employees tbody');
const btnAddEmployeeElement = document.querySelector('button');

function renderListEmployees(){
    const tableHtmls = employees.map((item, index) => {
        return `<tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.position}</td>
                </tr>`
    });
    tableElement.innerHTML = tableHtmls.join('');
}

renderListEmployees();

btnAddEmployeeElement.addEventListener('click', function(event){
    event.preventDefault();

    if(nameInputElement.value !== '' && positionInputElement.value !== ''){
        const newEmployee = {
            name: nameInputElement.value,
            position: positionInputElement.value,
        }
    
        employees.push(newEmployee);
    
        renderListEmployees();

        localStorage.setItem('employees', JSON.stringify(employees));

        nameInputElement.value = '';
        positionInputElement.value = '';
    }
})