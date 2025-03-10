let str = "";
let choice = +null;
let checkStr = "";
let text = "";

do {
  choice = +prompt(`1. Nhập chuỗi ký tự
2. Hiển thị chuỗi ký tự
3. Đếm số lượng các ký tự là chuỗi và số trong chuỗi ký tự nhập vào
4. Chuyển đổi các ký tự viết hoa → viết thường, viết thường → viết hoa trong chuỗi.
5. Trộn lẫn các ký tự của chuỗi gốc với chuỗi thứ 2 người dũng nhập vào.
6. Tách chuỗi thành các từ, sắp xếp chúng theo độ dài của từ, từ ngắn nhất đến dài nhất.
7. Thoát chương trình`);

  if (choice === 1) {
    str = prompt("Nhập chuỗi của bạn:").trim();
    str = str.split(/\s+/).join(" ");
  } else if (str.length === 0 && Number.isInteger(choice) && choice !== 7) {
    alert("Bạn chưa nhập chuỗi");
  } else {
    switch (choice) {
      case 2:
        alert(`Chuỗi của bạn là: ${str}`);
        break;
      case 3:
        let countLetter = 0;
        let countDigit = 0;

        for (let char of str) {
          if (char >= "0" && char <= "9") {
            countDigit++;
          } else if (
            (char >= "A" && char <= "Z") ||
            (char >= "a" && char <= "z")
          ) {
            countLetter++;
          }
        }

        alert(
          `Số lượng chữ cái: ${countLetter}\nSố lượng chữ số: ${countDigit}`
        );

        break;
      case 4:
        text = "";

        for (let char of str) {
          if (char >= "A" && char <= "Z") {
            text += char.toLowerCase();
          } else if (char >= "a" && char <= "z") {
            text += char.toUpperCase();
          } else {
            text += char;
          }
        }

        alert(text);
        break;
      case 5:
        let strCase5 = prompt("Nhập chuỗi thứ 2 muốn trộn:");
        let maxLength = Math.max(str.length, strCase5.length);
        text = "";

        for (let i = 0; i < maxLength; i++) {
          if (i < str.length) text += str[i];
          if (i < strCase5.length) text += strCase5[i];
        }

        alert(text);
        break;
      case 6:
        let strArray = str.split(' ');

        for(let i = 0; i < strArray.length - 1; i++){
            for(let j = 0; j < strArray.length - i - 1; j++){
                if(strArray[j].length > strArray[j+1].length){
                    let temp = strArray[j];
                    strArray[j] = strArray[j+1];
                    strArray[j+1] = temp;
                }
            }
        }

        alert(strArray);
        break;
      case 7:
        alert("Thoát chương trình thành công");
        break;
      default:
        alert("Chức năng không hợp lệ");
        break;
    }
  }
} while (choice != 7);
