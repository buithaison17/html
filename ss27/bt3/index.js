let choice = null;

function calcAreaCircle(){
    let radius;
    do{
        radius = +prompt('Nhập bán kính hình tròn:');
        if(isNaN(radius) && radius <= 0){
            alert('Bán kính không hợp lệ');
        }
    }
    while(isNaN(radius) && radius <= 0);

    const area = 2*Math.PI*radius**2;

    alert(`Diện tích hìn tròn là: ${area.toFixed(3)}`);

}

function calcPerimeterCircle(){
    let radius;
    do{
        radius = +prompt('Nhập bán kính hình tròn:');
        if(isNaN(radius) && radius <= 0){
            alert('Bán kính không hợp lệ');
        }
    }
    while(isNaN(radius) && radius <= 0);

    const perimeter = 2*Math.PI*radius;

    alert(`Chu vi hình tròn là: ${perimeter.toFixed(3)}`);
}

function calcAreaRectangle(){
    let length;
    let width;

    do{
        length = +prompt('Nhập chiều dài hình chữ nhật');
        if(isNaN(length) && length <= 0){
            alert('Chiều dài không hợp lệ');
        }
    }
    while(isNaN(length) && length <= 0);
    
    do{
        width = +prompt('Nhập chiều rộng hình chữ nhật');
        if(isNaN(width) && width <= 0){
            alert('Chiều rộng không hợp lệ');
        }
    }
    while(isNaN(width) && width <= 0);

    let area = length * width;

    alert(`Diện tích hình chữ nhật là: ${area}`);
}

function calcPerimeterRectangle(){
    let length;
    let width;

    do{
        length = +prompt('Nhập chiều dài hình chữ nhật');
        if(isNaN(length) && length <= 0){
            alert('Chiều dài không hợp lệ');
        }
    }
    while(isNaN(length) && length <= 0);
    
    do{
        width = +prompt('Nhập chiều rộng hình chữ nhật');
        if(isNaN(width) && width <= 0){
            alert('Chiều rộng không hợp lệ');
        }
    }
    while(isNaN(width) && width <= 0);

    let perimeter = (length + width)/2;

    alert(`Diện tích hình chữ nhật là: ${perimeter}`);
}

do{
    choice = +prompt(`1. Tính diện tích hình tròn.
2. Tính chu vi hình tròn.
3. Tính diện tích hình chữ nhật.
4. Tính chu vi hình chữ nhật.
5. Thoát.`);
    
    switch(choice){
        case 1:
            calcAreaCircle();
            break;
        case 2:
            calcPerimeterCircle();
            break;
        case 3:
            calcAreaRectangle();
            break;
        case 4:
            calcPerimeterRectangle();
            break;
        case 5:
            break;
        default:
            break;
    }
}
while(choice != 5);