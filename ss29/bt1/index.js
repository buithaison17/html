let contact = [];
let choice;

function addContact(contact){
    const nameOfContactInput = prompt('Nhập tên liên hệ:');
    const emailOfContactInput = prompt('Nhập email liên hệ:');
    const phoneOfContactInput = prompt('Nhập số điện thoại liên hệ:');
    const newContact = {
        id: Math.ceil(Math.random()*1000000),
        fullName: nameOfContactInput,
        email: emailOfContactInput,
        phone: phoneOfContactInput,
    };
    contact.push(newContact);
    alert('Thêm liên hệ thành công');
}

function findByPhoneNumber(contact){
    const phoneOfContactInput = prompt('Nhập số điện thoại muốn tìm kiếm:');
    const indexOfPhoneNumber = contact.findIndex((contact) => contact.phone === phoneOfContactInput);
    
    if(indexOfPhoneNumber !== -1){
        console.table(contact[indexOfPhoneNumber]);
    }
    else{
        alert('Số điện thoại không tồn tại');
    }
}

function updateContact(contact){
    const idUpdateInput = +prompt('Nhập ID liên hệ muốn chỉnh sửa:');
    const indexOfContactUpdate = contact.findIndex((contact) => contact.id === idUpdateInput);
    let nameOfContactInput;
    let emailOfContactInput;
    let phoneOfContactInput;
    let confirmUpdate;

    if(indexOfContactUpdate !== -1){
        nameOfContactInput = prompt('Nhập tên nhân viên:');
        emailOfContactInput = prompt('Nhập email:');
        phoneOfContactInput = prompt('Nhập số điện thoại:');
        confirmUpdate = confirm('Bạn có xác nhận thay đổi thông tin của liên hệ này không');
    }

    if(confirmUpdate){
        contact[indexOfContactUpdate].fullName = nameOfContactInput;
        contact[indexOfContactUpdate].email = emailOfContactInput;
        contact[indexOfContactUpdate].phone = phoneOfContactInput;
        return contact;
    }
    alert('ID liên hệ không tồn tại');
   
}

function deleteContact(contact){
    const idDeleteContact = +prompt('Nhập ID liên hệ muốn xóa:');
    const indexOfContactDelete = contact.findIndex((contact) => contact.id === idDeleteContact);
    let confirmDelete;

    if(indexOfContactDelete !== -1){
        confirmDelete = confirm('Bạn có xác nhận xóa liên hệ này không?');
    }

    if(confirmDelete){
        alert('Xóa liên hệ thành công');
        return contact.splice(indexOfContactDelete, 1);
    }
    alert('ID liên hệ không tồn tại');
}

do{
    choice = +prompt(`1. Thêm đối tượng Contact vào danh sách liên hệ.
2. Hiển thị danh sách danh bạ.
3. Tìm kiếm thông tin Contact theo số điện thoại.
4. Cập nhật thông tin Contact(name, email, phone) theo id.
5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
6. Thoát.
Nhập chức năng:`);

    if(choice === 1){
        addContact(contact);
    }
    else if(contact.length === 0 && !isNaN(choice) && choice < 6){
        alert('Chưa thêm liên hệ');
    }
    else{
        switch (choice) {
            case 2:
                console.table(contact);
                break;
            case 3:
                findByPhoneNumber(contact);
                break;
            case 4:
                updateContact(contact);
                break;
            case 5:
                deleteContact(contact);
                break;
            case 6:
                alert('Thoát thành công');
                break;
            default:
                alert('Chức năng không hợp lệ');
                break;
        }
    }
}
while(choice !== 6);