let money= +prompt('Nhập số tiền: ');

if(isNaN(money) || money <= 0 || money % 1000 !== 0){
    alert('Số tiền nhập không hợp lệ');
}
else{
    let text = '';

    let count500k = Math.floor(money / 500000);
    money -= count500k * 500000;

    let count200k = Math.floor(money / 200000);
    money -= count200k * 200000;

    let count100k = Math.floor(money / 100000);
    money -= count100k * 100000;

    let count50k = Math.floor(money / 50000);
    money -= count50k * 50000;

    let count20k = Math.floor(money / 20000);
    money -= count20k * 20000;

    let count10k = Math.floor(money / 10000);
    money -= count10k * 10000;

    let count5k = Math.floor(money / 5000);
    money -= count5k * 5000;

    let count2k = Math.floor(money / 2000);
    money -= count2k * 2000;

    let count1k = Math.floor(money / 1000);
    money -= count1k * 1000;

    if (count500k > 0) text += `500,000 VNĐ: ${count500k} tờ\n`;
    if (count200k > 0) text += `200,000 VNĐ: ${count200k} tờ\n`;
    if (count100k > 0) text += `100,000 VNĐ: ${count100k} tờ\n`;
    if (count50k > 0) text += `50,000 VNĐ: ${count50k} tờ\n`;
    if (count20k > 0) text += `20,000 VNĐ: ${count20k} tờ\n`;
    if (count10k > 0) text += `10,000 VNĐ: ${count10k} tờ\n`;
    if (count5k > 0) text += `5,000 VNĐ: ${count5k} tờ\n`;
    if (count2k > 0) text += `2,000 VNĐ: ${count2k} tờ\n`;
    if (count1k > 0) text += `1,000 VNĐ: ${count1k} tờ\n`;

    console.log(text);
}