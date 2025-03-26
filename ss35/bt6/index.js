const tableElement = document.querySelector('.table tbody');
const statusSearchElement = document.querySelector('#statusSearch');
const listCategory = JSON.parse(localStorage.getItem('listCategory')) || [];
const searchCategoryElement = document.querySelector('#searchCategory');

function renderListCategory(list){
    const tableHtmls = list.map((value, index) => {
        return `<tr>
                        <td>${value.id}</td>
                        <td>${value.name}</td>
                        <td>
                           <div class="${value.status === true ? 'active' : 'inactive'}">
                            <span><i class="bi bi-dot"></i></span>
                            <span>${value.status === true ? 'Đang hoạt động' : 'Không hoạt động'}</span>
                           </div> 
                        </td>
                        <td>
                            <div class="d-flex gap-3">
                            <i style="color: #e63946;" class="bi bi-ban"></i>
                                <i style="color: #ffa500;" class="bi bi-pencil-square"></i>
                            </div>
                        </td>
                    </tr>`
    });

    tableElement.innerHTML = tableHtmls.join('');
    localStorage.setItem('listCategory', JSON.stringify(listCategory));
}

renderListCategory(listCategory);

statusSearchElement.addEventListener('click', function(){
    if(statusSearchElement.value === ''){
        renderListCategory(listCategory);
        return;
    };

    if(statusSearchElement.value === 'Đang hoạt động'){
        const listCategoryFilter = listCategory.filter(value => value.status === true);
        renderListCategory(listCategoryFilter);
        return;
    }

    if(statusSearchElement.value === 'Không hoạt động'){
        const listCategoryFilter = listCategory.filter(value => value.status === false);
        renderListCategory(listCategoryFilter);
        return;
    }
})

const addIDCategoryInputElement = document.querySelector('#idCategory');
const addNameCategoryInputElement = document.querySelector("#nameCategory");
const btnAddCategoryElement = document.querySelector('#btn-add');

btnAddCategoryElement.addEventListener('click', function(event){
    const addStatusCategoryInputElement = document.querySelector('input[name="statusCategory"]:checked');
    const alertID = document.querySelector('.modal-body p:nth-of-type(1)');
    const alertName = document.querySelector('.modal-body p:nth-of-type(2)');
    
    if(addIDCategoryInputElement.value === '' || addNameCategoryInputElement.value === '' || addStatusCategoryInputElement.value === undefined){
        alertID.textContent = 'Mã danh mục không được để trống';
        alertName.textContent = 'Tên danh mục không được để trống';
        return;
    }
        alertName.textContent = '';
        alertID.textContent = '';
        
        const myModal = bootstrap.Modal.getInstance(document.getElementById("exampleModal"));
        myModal.hide();
        const newCategory = {
            id: addIDCategoryInputElement.value,
            name: addNameCategoryInputElement.value,
            status: addStatusCategoryInputElement.value === 'true' ? true : false,
        }
        listCategory.push(newCategory);
        renderListCategory(listCategory);

    addIDCategoryInputElement.value = '';
    addNameCategoryInputElement.value = '';
})

searchCategoryElement.addEventListener('input', function(){
    const searchValue = listCategory.filter(item => {
        return item.name.toLowerCase().includes(searchCategoryElement.value.toLowerCase());
    });    

    renderListCategory(searchValue);
})