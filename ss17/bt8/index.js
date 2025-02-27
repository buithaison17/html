let date1 = new Date(prompt('Nhập ngày tháng năm (YYYY-MM-DD):').trim());
let date2 = new Date(prompt('Nhập ngày tháng năm (YYYY-MM-DD):').trim());

let differenceMiliSecond = Math.abs(date1 - date2);

let differenceDays = differenceMiliSecond / (1000 * 24 * 60 * 60);

console.log(differenceDays);