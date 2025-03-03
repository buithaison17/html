let letter = prompt("Nhập một ký tự:");

if(letter >= 'A' && letter <= 'z' && letter.length < 1) {
    alert(`Ký tự ${letter} là chữ cái`);
}
else{
    alert(`Ký tự ${letter} không phải là chữ cái`);
}