let a = parseFloat(prompt('Nhập a'));
let b = parseFloat(prompt('Nhập b'));
let c = parseFloat(prompt('Nhập c'));

if(isNaN(a) || isNaN(b) || isNaN(c)){
    alert('Nhập không hợp lệ');
}
else if(a === 0){
    if(b === 0 && c === 0){
        alert('Phương trình có vô số nghiệm');
    }
    else if(b === 0){
        alert('Phương trình vô nghiệm');
    }
    else{
        alert(`Phương trình có nghiệm ${-c / b}`);
    }
}
else{
    let delta = b**2 - 4*a*c;
    if(delta < 0){
        alert('Phương trình vô nghiệm');
    }
    else if(delta === 0){
        alert(`Phương trình có nghiệm kép x1=x2=${-b / 2*a}`);
    }
    else{
        let x1 = (-b + Math.sqrt(delta)) / 2*a;
        let x2 = (-b - Math.sqrt(delta)) / 2*a;
        alert(`Phương trình có 2 nghiệm phân biệt x1=${x1}; x2=${x2}`);
    }
}