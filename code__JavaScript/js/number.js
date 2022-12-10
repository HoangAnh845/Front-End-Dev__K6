//Xử lý number trong Javascript

var number = 123; //kiểu số

console.log(typeof number);

number = number.toString(16); //Chuyển sang kiểu chuỗi

// console.log(typeof number);

// console.log(number);

//Số Infinity: Số đã vượt quá giới hạn lưu trữ cho phép

var number = 1000;
//var numberNew = 0;
// console.log(typeof number);
// console.log(number);

var index = 0;
while (number!=Infinity){
    number = number*number;
    index++;
}

console.log('Number: '+number);
console.log('Số lần lặp: '+index);

//NaN
var number1 = 10;
var number2 = "U";

//var total = number1+number2;
//var total = number1*number2;
var total = number1+true;

console.log(total);

if (isNaN(total)){
    console.log('Kết quả không hợp lệ');
}else{
    console.log(total);
}

//kiểm tra 1 biến là kiểu số
if (!isNaN(total)){
    console.log('Là kiểu số');
}else{
    console.log('Không phải kiểu số');
}

//kiểm tra 1 biến mảng xem có phải kiểu số hay không
var customerArr = [
    'Item 1',
    'Item 2'
];
//customerArr = parseInt(customerArr);
console.log(customerArr);
if (!isNaN(customerArr)){
    console.log('Là kiểu số');
}else{
    console.log('Không là kiểu số');
}

var str = '';
//console.log(parseInt(str));
if (!isNaN(str)){
    console.log('Là kiểu số');
}else{
    console.log('Không là kiểu số');
}

var check = [1,2];


if (check!==null && typeof check!=='boolean' && (typeof check=='string' || Array.isArray(check) && check.length>0)){
    if (!isNaN(check)){
        console.log('Check Là kiểu số');
    }else{
        console.log('Check Không là kiểu số');
    }
}else{
    console.log('Không thoả mãn điều kiện check');
}

console.log(typeof check);


/*
Mảng rỗng
chuỗi rỗng
true, false => kiểu boolean
null 
=> hàm isNaN sẽ kiểu tra và trả về giá trị false (Có nghĩa nhận biết là số)

Sử dụng typeof để kiểm tra kiểu dữ liệu của biến (trừ mảng, object, null)
*/

//Đối tượng number

var number = 1; //typeof number
var numberOj = new Number(1); //typeof object

console.log(typeof number);
console.log(typeof numberOj);
console.log(numberOj);

/*
Tác dụng của việc khởi tạo object number để quá trình can thiệp, xử lý number được dễ dàng hơn thông qua các thuộc tính và phương thức có sẵn trong đối tượng. Hoặc có thể viết thêm phương thức, thuộc tính cho đối tượng Number đã khởi tạo (Sẽ học kỹ với phần Object)
*/

//Hàm Number: Chuyển các kiểu dữ liệu khác về Number

var booleanTrue = true;
console.log('Chuyển boolean true thành Number: '+Number(booleanTrue));

var booleanFalse = false;
console.log('Chuyển boolean false thành Number: '+Number(booleanFalse));

var stringStr = 'Unicode'; //Chỉ cần trong chuỗi có ký tự không phải là số, sẽ chuyển thành NaN
console.log('Chuyển string thành Number: '+Number(stringStr));

var stringStr = '123'; //Chuỗi số
console.log('Chuyển chuỗi số thành Number: '+Number(stringStr));

var date = new Date();
console.log(date);
console.log('Chuyển date thành Number: '+Number(date));

//Hàm parseInt(): Chuyển kiểu string thành number (số nguyên)

var numberStr = "123.5unicode12";

var number = parseInt(numberStr);

console.log(typeof number);
console.log(number);

var numberStr = "123.5unicode12";

var number = parseFloat(numberStr);

console.log(typeof number);
console.log(number);

//ví dụ ép kiểu sử dụng parseInt hoặc parseFloat

document.querySelector('#form-calc').addEventListener('submit', function(e){
    e.preventDefault();
    var number1 = this.querySelector('#number_1').value;
    var number2 = this.querySelector('#number_2').value;

    var total = parseInt(number1)+parseInt(number2);

    alert(total);
});

var index = 1;

console.log('Thứ tự: '+(parseInt(index)+1));

//Hàm toFixed()

var number = 5.656;

// console.log(number.toFixed(0));
// console.log(number.toFixed(1));
// console.log(number.toFixed(2));
// console.log(number.toFixed(3));
// console.log(number.toFixed(4));
// console.log(number.toFixed(5));

/*
Hàm này sẽ cho phép hiển thị bao nhiêu chữ số ở phần thập phân và có làm tròn

làm tròn dựa trên nguyên tắc làm tròn (>=5)

Hàm này sẽ làm tròn phần thập phân
Chỉ làm tròn phần nguyên khi toFixed(0) => Không có phần thập phân
*/

//Hàm toPrecision()

var number = 5.656;
console.log(number.toPrecision()); //Không có tham số = 0

// console.log(number.toPrecision(1));

// console.log(number.toPrecision(2));

// console.log(number.toPrecision(3));

// console.log(number.toPrecision(4));

// console.log(number.toPrecision(5));

// console.log(number.toPrecision(6));

//Bài tập xử lý Number

var price = 12000000000; //12 triệu

//cần in ra định dạng: 12,000,000

//Cách 1: Sử dụng vòng lặp để xử lý
//price = price.toString();
// var count = 0;

// for (var index = price.length-1; index >= 0; index--){
//     count++;
//     if (count%3==0){
//         var subStr = price.slice(0, index);
//         var lastStr = price.slice(index);
//         var item = subStr+','+lastStr;
//         console.log(item);
//         price = item;
//     }
// }

// price = price+' đ';
// console.log(price); 

function formatNumber(number, $operator=','){

    var number =  parseFloat(number).toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

    var index = number.indexOf('.'); //tìm vị trí có dấu chấm phần thập phân

    number = number.slice(0, index);

    return number;
}

console.log(formatNumber(12000000000123));

