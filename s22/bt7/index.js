// let arr = [2, 5, 7, 4, 1, 8, 6, 2, 6, 7];

// for(let i = 0; i < arr.length - 1; i++){
//     for(let j = 0 ; j < arr.length - i - 1; j++){
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1]= temp;
//         }
//     }
// }

// console.log(arr);

// let arr = [2, 5, 7, 4, 1, 8, 6, 2, 6, 7];

// for(let i = 0; i < arr.length - 1; i++){
//     let minIndex = i;
//     for(let j = i; j < arr.length; j++){
//         if(arr[minIndex] > arr[j]){
//             minIndex = j;
//         }
//     }
//     if(minIndex != i){
//         let temp = arr[minIndex];
//         arr[minIndex] = arr[i];
//         arr[i] = temp;
//     }
// }

// console.log(arr);

let arr = [2, 5, 7, 4, 1, 8, 6, 2, 6, 7];

for(let i = 0; i < arr.length; i++){
    let j = i - 1;
    let key = arr[i];
    while(j >= 0 && key < arr[j]){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = key;
}

console.log(arr);