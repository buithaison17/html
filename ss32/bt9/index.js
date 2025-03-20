const btnUp = document.querySelector('.button1');
const btnDown = document.querySelector('.button2');
const progressCurrent = document.querySelector('.progressCurrent');
let progress = 0;
let baseR = 162;
let baseG = 213;
let baseB = 174;

btnUp.addEventListener('click', function () {
    progress += 10;
    progress = Math.min(progress + 10, 100);
    if (progress > 100) progress = 100;
    progressCurrent.style.width = progress + '%';
    progressCurrent.style.filter = `saturate(${1 + progress / 20})`;
});

btnDown.addEventListener('click', function () {
    progress -= 10;
    progress = Math.max(progress - 10, 0);
    if (progress < 0) progress = 0;
    progressCurrent.style.width = progress + '%';
    progressCurrent.style.filter = `saturate(${1 + progress / 20})`;
});