//alert('Học lập trình tại Unicode');

//Khai báo biến
var customerName; //Lưu tên khách hàng
var customerId; //Lưu id khách hàng
var ctName; //Cách đặt sai
var _customerName; 

var productId, productName; //Khai báo nhiều biến trên 1 dòng

var brandId; var brandName; //Khai báo nhiều biến trên 1 dòng

/*
Nên đặt tên biến theo quy tắc camelCase
- chữ đầu tiên viết thường
- Từ chữ thứ 2 trở đi => Viết hoa ký tự đầu

Quy trình để đặt tên miền
- Bước 1: Xác định tên cần đặt
- Bước 2: Xác định số chữ trong tên cần đặt
- Bước 3: Viết hoa, viết thường theo quy tắc
*/

//Gán giá trị cho biến
/*
- Sử dụng các tên biến đã được khai báo trước
- Nếu chưa khai báo, có thể khai báo và gán luôn
*/
customerName = 'Hoàng An'; //Gán giá trị cho biến
customerId = 12; //Gán giá trị cho biến

var customerAge = 30; //Khai báo biến và gán

//Hiển thị giá trị của biến ra màn hình
document.write(customerName);
document.write('<br/>');
document.write(customerAge);
document.write('<br/>');
document.write("Học lập trình Front-End");

//Hàm debug và kiểm tra

console.log("Đây là hàm debug code javascript");

//console.log(customerName);

//console.log(customerAge);

//Hàm alert(): Hiển thị hộp thoại thông báo

//alert('Học lập trình tại Unicode');
//alert(customerName);

//Hàm confirm(): Trả về xác nhận của người dùng

//var checkConfirm; //Lưu giá trị của hàm confirm();

// checkConfirm = confirm('Bạn có chắc chắn?');

// console.log(checkConfirm);

//Hàm prompt(): Hàm này sẽ lấy dữ liệu người dùng nhập vào

// var userAge = prompt('Vui lòng cho biết tuổi của bạn');

// console.log(userAge);

//Toán tử

var numberA, numberB, result;

numberA = 5; //Kiểu số
numberB = "2"; //Kiểu chuỗi (Chuỗi số)

//result = numberA + numberB; //Phép cộng

/*
Khi cộng 1 số với 1 chuỗi => kiểu số sẽ tự động ép kiểu sang chuỗi và thực hiện nối chuỗi (Dấu + trong Javascript dùng để nối chuỗi)

Nếu muốn xử lý tính toán số học => Cần ép kiểu chuỗi thành số trước khi thực hiện phép cộng
*/

//result = numberA - numberB; //Phép trừ

//result = numberA * numberB; //Phép nhân

//result = numberA / numberB; //Phép chia

//result = numberA % numberB; //Chia lấy số dư

//console.log(result);

//Phép tăng
var count = 0, result;
// count = count+1; //=1
// count = count+1; //=2

//count++; //Tương đương: count = count+1
//count++; //Tương đương: count = count+1

//++count; //Tương đương: count = count+1
//++count; //Tương đương: count = count+1

//result = count++;
/*
result = count;
count = count+1;
=> Gán trước, tăng sau
*/
//result = ++count;
/*
count = count+1;
result = count 
=> Tăng trước, gán sau
*/

// var count = 10; result;
// result = --count;

// console.log("Count = "+count);
// console.log("Result = "+result);

//Toán tử gán
//var number = 10; //Gán đơn thuần
//var number = 5;
//number+=10; //Gán với phép cộng. Tương đương: number = number+10

//console.log(number);

// var message = "Học lập trình";
// message+=" Front-End";
// console.log(message);

//Toán tử quan hệ

var check, numberA, numberB;

numberA = 5;
numberB = "10"; //Chuỗi số

check = numberB != 10;

//console.log(check);

//Toán tử lý luận
var numberA, numberB, check, userStatus;
numberA = 9;
numberB = 10;
userStatus = false;

//check = numberA>4 && numberA<10;

//check = numberA<0 || numberA>5;

// check = !userStatus;

// console.log(check);

//Câu lệnh rẽ nhánh if

//1. Câu lệnh rẽ nhánh (1 nhánh)

// var customerAge = 20;

// if (customerAge>=25){
//     console.log('Tuổi của bạn đáp ứng yêu cầu');
//     console.log('Trong câu lệnh if có 2 câu lệnh console.log');
// }

//2. Câu lệnh rẽ nhánh (2 nhánh: đúng và sai)
// var customerAge = 20;

// if (customerAge>=25){
//     console.log("Tuổi của bạn đáp ứng yêu cầu");
// }else{
//     console.log("Tuổi của bạn không đáp ứng yêu cầu");
// }

//3. Nhiều if else kết hợp với nhau

/*
number = 10
Yêu cầu:
Hiển thị thông báo nếu number thoả mãn theo điều kiện sau:
- number < 0 => Số âm
- number >=0 và number <5 => Số nhỏ
- number >=5 và number <10 => Số trung bình
- number >=10 và number <15 => Số lớn
- number >=15 => Số siêu lớn
*/

var number = 15;
if (number<0){
    console.log(number+' là số âm');
}else if (number>=0 && number<5){
    console.log(number+' là số nhỏ');
}else if (number>=5 && number<10){
    console.log(number+' là số trung bình');
}else if (number>=10 && number<15){
    console.log(number+' là số lớn');
}else{
    console.log(number+' là số siêu lớn');
}

//4. if else lồng nhau

var username, password;

username = 'hoangan.web';
password = '';

if (username=='' || password==''){
    if (username==''){
        console.log('Vui lòng nhập username');
    }else{
        console.log('Vui lòng nhập password');
    }
}else{
    console.log('Xác thực thành công');
}

//5. Toán tử 3 ngôi

/*
var username="hoangan.web";
var message;
Nếu username có dữ liệu => gán vào biến message
*/
var username, message;
username = 'hoangan.web';
// if (username!=''){
//     message = "Tên người dùng: " + username;
// }

//console.log(message);

message = username!=''?"Tên người dùng: " + username:'';
console.log(message);
/*
Cú pháp toán tử 3 ngôi
- Toán tử 3 ngôi sẽ thực hiện như 1 biểu thức (gán, tính toán, hiển thị ra màn hình, ..)
- tenbien = bieu_thuc_quan_he?ket_qua_dung:ket_qua_sai;
*/

var email = 'hoangan.web@gmail.com';
//message = email!=''?'Email đã tồn tại':'Email không tồn tại';
//console.log(message);

console.log(email!=''?'Email đã tồn tại':'Email không tồn tại');

var numberA = 10, numberB = 20, result;

/*
Thực hiện phép cộng numberA + numberB nếu numberA >= 10
*/

result = (numberA>=10)?(numberA + numberB):0;

console.log('Kết quả phép cộng: ' + result);

//6. Câu lệnh rẽ nhánh switch case

/*
- Kém linh hoạt
- Chỉ chấp nhận so sánh bằng (tuyệt đối)
- Áp dụng trong trường hợp có rất nhiều nhánh và nhiều điều kiện hoặc
*/

var number = 4;

switch (number){
    case 1: 
    case 4:
    case 5:    
        console.log('Trường hợp thứ nhất');
    break;

    case 2:
    case 6:
    case 7:        
        console.log('Trường hợp thứ hai'); 
    break;

    case 3: 
        console.log('Trường hợp thứ ba'); 
    break;

    default:
        console.log('Trường hợp còn lại'); 
    break;
}

/*
Ví dụ:
- Đưa vào 1 tháng trong năm (Giả sử: month = 5)
- Hiển thị thông báo tháng đó có bao nhiêu ngày

Cách giải quyết:
List ra danh sách các tháng với số ngày tương ứng
- 29, 28 ngày: Tháng 2
- 31 ngày: 1, 3, 5, 7, 8, 10, 12
- 30 ngày: 4, 6, 9, 11
*/

var month = 12, message = '';

if (month>0 && month<=12){
    switch(month){
        case 2:
            message='Tháng '+month+' có 29 hoặc 28 ngày';
        break;    
        case 4:
        case 6:
        case 9:
        case 11:
            message='Tháng '+month+' có 30 ngày';
        break;       
        
        default:
            message='Tháng '+month+' có 31 ngày';
        break;
    }
}else{
    message = 'Tháng '+month+' không hợp lệ';
}


console.log(message);