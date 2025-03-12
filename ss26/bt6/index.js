let date = ["2025-03-10", "2024-12-25", "2023-07-01"];

if(date.length === 0){
    alert('Mảng không có phần tử nào');
}
else if(Array.isArray(date)){
    const dateConverse = date.map((date) => {
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
    });

    console.log(dateConverse);
}
else{
    alert('Dữ liệu không hợp lệ');
}