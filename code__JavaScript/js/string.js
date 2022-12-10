var welcome = 'Học lập trình tại \'Unicode\'';
/*
Thêm ký tự escape (\) nếu dấu nháy bị trùng với dấu nháy chuỗi
*/

var text = 'Unicode';

var linkHtml = '<a href="https://unicode.vn" onclick="alert(\'Unicode\'); return false;">'+text+'</a>';
//document.querySelector('.result').innerHTML = linkHtml;
//console.log(linkHtml);

/*
- khi nối chuỗi, hãy dùng dấu +
- Mở chuỗi bằng dấu nháy nào => đóng chuỗi bằng dấu nháy đó trước khi nối
- Nếu muốn gán chuỗi nhiều dòng => dùng dấu nháy `   ` (nằm dưới phím esc trên bàn phím)
*/


var text = 'Unicode';

var linkHtml = `<p><a href="https://unicode.vn" onclick="alert(\'Unicode\'); return false;">${text}</a></p>
<h3>Học lập trình Front-End</h3>`;
console.log(linkHtml);

/*
Cách nối biến khi sử dụng dấu nháy nhiều dòng (``)
ví dụ: 
var course = 'Front-End';
var html = `Học lập trình ${course} tại Unicode`;
*/

var number = 1234;

console.log(typeof number);

number = number.toString();

console.log(typeof number);

var fullName = 'Hoàng An Unicode';

var length = fullName.length; //lấy độ dài của chuỗi

//Đọc từng ký tự của chuỗi
// for (var index = 0; index < length; index++){
//     console.log(fullName[index]);
// }

// //lấy ký tự bất kỳ
// console.log(fullName[0]);

//Hàm indexOf() => Tìm chuỗi con trong 1 chuỗi cha

var fullName = 'Hoàng An Unicode';

var searchKeyword = fullName.indexOf('Unicode');

//console.log(searchKeyword);

var searchKeywordLast = fullName.lastIndexOf('Unicode');
//console.log(searchKeywordLast);

//Hàm slice (Lấy chuỗi con từ chuỗi cha)

//var subStr = fullName.slice(4, 5); //lấy chuỗi con từ vị trí bắt đầu đến kết thúc

//var subStr = fullName.slice(5); //Cắt từ vị trí đến hết chuỗi (không có vị trí kết thúc)

var subStr = fullName.slice(-10, 2);

/*
với tham số là số âm
- Nếu tham số thứ nhất là số dương, tham số thứ hai là số âm => Tính từ vị trí của tham số thứ nhất đến vị trí của tham số 2 (tính từ đuôi)
Ví dụ:
slice(2, -1) => Tính từ vị trí thứ 3 đến vị trí thứ hai (Từ đuôi)

- Nếu tham số thứ nhất và tham số thứ 2 đều là âm => Tính từ vị của tham số thứ nhất (từ đuôi) đến vị trí của tham số thứ 2 (từ đuôi)
Điều kiện: tham số nhất < tham số thứ 2

- Không có trường hợp tham số thứ nhất là âm và tham số thứ 2 là dương

*/

//console.log(subStr);

/*
Ví dụ: Cho 1 chuỗi cố định: str = 'Tạ Hoàng An';
Yêu cầu: lấy ra 4 ký tự cuối chuỗi
*/
var fullName = 'Tạ Hoàng An';

var lastStr = fullName.slice(-4);
console.log(lastStr);

//Hàm substr: Lấy 1 chuỗi con từ chuỗi chuỗi cha (tính theo độ dài)

var subStr = fullName.substr(5, 5);

console.log(subStr);