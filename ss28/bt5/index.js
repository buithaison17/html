const company = {
    name: "RikkeiSoft",
    location: "Hà Nội",
    employees: [
        { name: "Nguyễn Văn Luận", position: "Developer" },
        { name: "Nguyễn Văn Hoàng", position: "Tester" },
        { name: "Hoàng Nam Cao", position: "Manager" },
    ]
};

console.log('Công ty: ' + company.name);
console.log('Vị trí: ' + company.location);
console.log('Nhân viên 1: ' + company.employees[0].name);
console.log('Vị trí: ' + company.employees[0].position);
console.log('Nhân viên 2: ' + company.employees[1].name);
console.log('Vị trí: ' + company.employees[1].position);
console.log('Nhân viên 3: ' + company.employees[2].name);
console.log('Vị trí: ' + company.employees[2].position);