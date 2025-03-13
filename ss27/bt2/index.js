let students = [];
let choice = +null;

function isValidStudentName(name) {
    const regex = /^[A-Za-zÀ-Ỹà-ỹ]+(?:\s[A-Za-zÀ-Ỹà-ỹ]+)*$/;
    return regex.test(name.trim());
}

function addStudents(students){
    let n = +prompt('Nhập số lượng sinh viên:');
    if(n <= 0 || isNaN(n)){
        return 'Nhập không hợp lệ';
    }

    for(let i = 0; i < n; i++){
        let name = '';
        do{
            name = prompt('Nhập tên sinh viên:');
            if(!isValidStudentName(name)){
                alert('Tên không hợp lệ');
            }
            else{
                students.push(name);
            }
        }
        while(!isValidStudentName(name));
    }
    return 'Thêm sinh viên hoàn tất';
}

function displayStudents(students){
    let text = `Danh sách sinh viên:\n`
    for(let i = 0; i < students.length; i++){
        text += `${i+1}. ${students[i]}\n`;
    }
    alert(text);
}

function findStudents(students){
    let name;
    do{
        name = prompt('Nhập tên sinh viên muốn tìm kiếm');
        if(!isValidStudentName(name)){
            alert('Tên sinh viên khoogn hợp lệ');
        }
    }
    while(!isValidStudentName(name))

    let found = students.find((students) => name.toLocaleLowerCase() === students.toLocaleLowerCase());
    
    if (found) {
        alert(`Sinh viên tìm thấy: ${found}`);
    } else {
        alert("Sinh viên không có trong danh sách.");
    }
}

function removeStudents(students){
    let name;
    do{
        name = prompt('Nhập tên sinh viên muốn xóa:');
        if(!isValidStudentName(name)){
            alert('Tên sinh viên nhập không hợp lệ');
        }
    }
    while(!isValidStudentName(name));

    let index = students.indexOf((name));

    if(index !== -1){
        students.splice(index, 1);
        alert('Xóa hoàn tất');
    }
    else{
        alert('Sinh viên không tồn tại');
    }

}

do{
    choice = +prompt(`1. Nhập danh sách sinh viên.
2. Hiển thị danh sách sinh viên.
3. Tìm sinh viên theo tên.
4. Xóa sinh viên khỏi danh sách.
5. Thoát.`);

    if(choice === 1){
        alert(addStudents(students));
    }
    else if(students.length === 0 && !isNaN(choice) && choice != 5){
        alert('Chưa thêm sinh viên');
    }
    else{
        switch(choice){
            case 2:
                displayStudents(students);
                break;
            case 3:
                findStudents(students);
                break;
            case 4:
                removeStudents(students);
                break;
            case 5:
                break;
            default:
                break;
        }
    }
}
while(choice != 5)