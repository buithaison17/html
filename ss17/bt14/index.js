let radius = +prompt('Nhập bán kình hinh trụ');
let height = +prompt('Nhập chiều cao của hình trụ:');

let surroundingArea = 2 * Math.PI * radius * height;

let totalArea = surroundingArea + 2 * Math.PI * radius;

let volume = 2 * Math.PI * radius * height**2;

console.log(`Diện tích xung quanh của hình trụ là: ${surroundingArea}`);
console.log(`Diện tích toàn phần của hình trụ là: ${totalArea}`);
console.log(`Thể tích của hình trụ là: ${volume}`);
