for(let i = 0; i < 10; i++){
    let r = Math.floor(Math.random() *255);
    let g = Math.floor(Math.random() *255);
    let b = Math.floor(Math.random() *255);
    let outputColor = `color:rgb(${r}, ${g}, ${b}); font-size:20px;`;
    console.log('%cMàu sắc đã được thay đổi', outputColor);
}
