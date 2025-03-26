const tableElement = document.querySelector('.table tbody');
const statusSearchElement = document.querySelector('#statusSearch');

const listCategory = [
    { id: "DM001", name: "Thể thao", status: true },
    { id: "DM002", name: "Công nghệ", status: false },
    { id: "DM003", name: "Giải trí", status: true },
    { id: "DM004", name: "Ẩm thực", status: false },
    { id: "DM005", name: "Khoa học", status: true },
    { id: "DM006", name: "Lịch sử", status: false },
    { id: "DM007", name: "Du lịch", status: true },
    { id: "DM008", name: "Thời trang", status: false },
    { id: "DM009", name: "Sức khỏe", status: true },
    { id: "DM0010", name: "Kinh doanh", status: false },
    { id: "DM0011", name: "Giáo dục", status: true }
];

function renderListCategory(listCategory){
    const tableHtmls = listCategory.map((value, index) => {
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