let a = prompt("Nhập a:");
let b = prompt("Nhập b:");
let c = prompt("Nhập c:");

let delta = (+b)**2 - 4*(+a)*(+c);

let x1 = (-b + Math.sqrt(delta)) / 2*a;
let x2 = (-b - Math.sqrt(delta)) / 2*a;

console.log(x1, x2);
