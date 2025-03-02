let hours = parseInt(prompt('Nhập số giờ:'));
let minutes = parseInt(prompt('Nhập số giây'));
let seconds = parseInt(prompt('Nhập số giây'));

if(isNaN(hours) || isNaN(minutes) || isNaN(seconds) || 
hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59){
    alert('Nhập không hợp lệ');
}
else{
    let period = hours >= 12 ? 'PM' : 'AM';
    let hours12 = hours % 12;
    alert(`Giờ chuyển đổi là: ${hours12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${period}`);
}