let mathScore = +prompt('Nhập điểm Toán:');
let literatureScore = +prompt('Nhập điểm môn Ngữ Văn:');
let engScore = +prompt('Nhập điểm môn Tiếng Anh:')

if(isNaN(mathScore) || isNaN(literatureScore) || isNaN(engScore)){
    alert('Vui lòng nhập điểm');
}
else if(mathScore < 0 || literatureScore < 0 || engScore < 0){
    alert('Điểm số không được thấp hơn 0');
}
else{
    let average = ((mathScore + literatureScore + engScore) / 3)
    if(average >= 8){
        alert('Học lực loại giỏi');
    }
    else if(6.5 < average < 7.9){
        alert('Học lực loại khá');
    }
    else if(5.0 < average < 6.4){
        alert('Học lực loại trung bình');
    }
    else{
        alert('Học lực loại yếu');
    }
}