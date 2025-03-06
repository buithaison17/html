let arr = [1, 3, 2, 2, 3 ,1, 4, 3, 5, 7];
let checkCharacter = []
let text = '';
let index = 0;

for(let  i = 0; i < arr.length; i++){
    let found = true;
    for(let j = 0; j < checkCharacter.length; j++){
        if(arr[i] === checkCharacter[j]){
            found = false;
            break;
        }
    }
    if(found){
        let count = 0;
        checkCharacter[index++] = arr[i]
        text += `Phần tử ${arr[i]} xuất hiện `;
        for(let k = 0; k < arr.length; k++){
            if(arr[i] === arr[k]){
                count++
            }
        }
        text += `${count} lần\n`;
    }
}

console.log(text);