/*
Biểu thức chính quy trong Javascript
- Tên gọi: Regular Expressions
- Viết tắt: Regex
- Có hầu hết ở tất cả các ngôn ngữ lập trình
+ Các ký hiệu Regex ở các ngôn ngữ lập trình đều giống nhau
+ Nếu khác nhau thì chỉ khác về hàm gọi, modifer (Lá cờ)

Bản chất của biểu thức chính quy
- Sử dụng các ký hiệu của ngôn ngữ Perl
- Dùng để xử lý chuỗi:
+ So khớp: Kiểm tra chuỗi có thoả mãn điều kiện cho trước. Ví dụ: kiểm tra email, số điện thoại hợp lệ
+ Cắt chuỗi: Lấy ra chuỗi con từ 1 chuỗi cha sau khi đã thoả mãn so khớp
+ Thay thế: Thay thế các chuỗi con thành 1 chuỗi khác hoặc xoá đi sau khi đã so khớp. Ví dụ: Chuyển tất cả các số điện thoại trong đoạn văn bản thành ***

Công cụ test Regular Expressions: https://regex101.com/
*/

console.log('===So khớp====');

/*
Hai dấu gạch chéo (/) gọi dấu phân cách
Không được nằm trong dấu nháy chuỗi
*/

/*
Các ký hiệu của biểu thức chính quy
- Chuỗi bất kỳ: Giống như tìm kiếm chính xác 1 chuỗi con trong 1 chuỗi cha (giống indexOf())
- So khớp đầu chuỗi: Viết dấu ^ ngay phía sau dấu phân cách
- So khớp cuối chuỗi: Viết dấu $ ngay phía trước dấu phân cách kết thúc
- Nếu muốn so khớp cả đầu và cuối chuỗi: Kết hợp cả ^ và $
- Ký hiệu đại diện cho chữ Hoa: [A-Z] (Đặt trong dấu ngoặc vuông)
- Ký hiệu đại diện cho chữ thường: [a-z] (Đặt trong dấu ngoặc vuông)
- Ký hiệu đại diện cho số: [0-9] (Đặt trong dấu ngoặc vuông)
=> Tổng hợp ký hiệu đại diện: [min-maxchar_list]
+ min-max: chữ cái trong bảng chữa cái (tiếng anh) hoặc số từ 0 đến 9
+ char_list: Các ký tự muốn kiểm tra
+ Các ký hiệu viết trong 1 dấu ngoặc vuông sẽ quan hệ theo điều kiện hoặc (OR)
+ Các ký hiệu viết ở các dấu ngoặc vuông khác nhau hoặc không nằm trong ngoặc vuông sẽ quan hệ theo điều kiện và (AND), đúng theo thứ tự

Nguyên tắc khi chạy biểu chính quy
- Chạy các biểu thức có quan hệ AND trước 
- Cắt thành các chuỗi con phù hợp
- So khớp độ dài của từng biểu thức (Nếu không ghi rõ độ dài thì chỉ cần thoả mãn 1 ký tự)
- Kiểm tra điều kiện khớp đầu và cuối chuỗi (^ và $)

Ký hiệu độ dài của biểu thức chính quy (Đặt sau 1 biểu thức con)
- {min,max}: Độ dài từ min đến max
- {number}: Độ dài cố định number
- {min,}: Độ dài >=min. Ví dụ: {1,}, {0,}

Ký hiệu viết tắt của độ dài
- {0,} => *
- {1,} => +
- {0,1} => ?

Ký hiệu viết tắt đại diện cho tất cả các ký tự: . (Dấu chấm)

Để so khớp ký tự là ký tự đặc biệt thuộc biểu chính quy => Cần thêm ký tự escapa (\) vào trước ký tự đó

Các ký tự đặc biệt thuộc biểu thức chính quy:
- .
- +
- ?
- ^
- $
- *
- /
- [
- ]
- (
- )        

Dùng ký hiệu hoặc (|) để kiểm tra điều kiện hoặc của 1 biểu thức (độ dài khác nhau)

Ký hiệu ^ trong biểu thức: Phủ định biểu thức

*/

var str = 'https://unicode.vn'; //chuỗi cần so khớp

var pattern = /^https:\/\/[a-z0-9-]+\.[a-z]{2,}$/; //mẫu biểu thức chính quy

var check = pattern.test(str);
console.log('Kết quả so khớp: '+check);

/*
Ví dụ: Kiểm tra 1 số điện thoại Việt Nam hợp lệ
- Bắt đầu bằng số 0 hoặc +84
- Có 10 số
*/
var phoneNumber = '(0234)123456789';
var pattern = /^(0|\([0-9]{3,4}\))[0-9]{9}$/;
var checkPhone = pattern.test(phoneNumber);
console.log('Check phone number: '+checkPhone);

/*
Ví dụ: Kiểm tra email hợp lệ
- Cấu trúc của email: username@domain_name.ext
- username:
+ Chứa: chữ cái thường, -, _ số, dấu chấm (.)
+ Độ dài: >=3 ký tự
+ Chữ cái đầu tiên

-domain_name: c
+ Chứa: chữ cái thường, -, _ số, dấu chấm (.)
+ Độ dài: >=1 ký tự
+ Chữ cái đầu tiên

ext: 
+ Chứa: Chữ cái thường
+ Độ dài: >=2 ký tự
*/

var email = 'hoangan.web@gmail.com';
var pattern = /^[a-z][a-z0-9-_\.]{2,}@[a-z][a-z0-9-_\.]*\.[a-z]{2,}$/;

var checkEmail = pattern.test(email);
console.log('Kiểm tra email: '+checkEmail);

/*
Kiểm tra 1 URL hợp lệ
- Cấu trúc URL:
protocol + domain_name + . + ext + / + path
- Ví dụ URL
+ http://unicode.vn
+ https://unicode.vn
+ http://unicode.vn/
+ https://unicode.vn/
+ https://unicode.vn/khoa-hoc
+ https://unicode.vn/khoa-hoc/
+ https://unicode.vn/khoa-hoc/javascript
+ https://unicode.vn/khoa-hoc/javascript/
+ https://unicode.vn/khoa-hoc/javascript.html
+ https://unicode.vn/khoa-hoc/javascript.html#
+ https://unicode.vn/khoa-hoc/javascript.html#home 
+ https://unicode.vnkhoa-hoc => sai
+ https://unicode.vn/images/image.jpg
*/

var url = 'https://unicode.vn/images/image.jpg';

var pattern = /^(http|https):\/\/[a-z][a-z0-9-_.]*\.[a-z]{2,}(\/[a-z0-9-_\.\/#]+|\/*)$/;
var checkUrl =  pattern.test(url);

console.log('Kiểm tra url: '+checkUrl);

var str = 'hoangan.webgmail.com';

var pattern = /^[^@]+$/;

var check = pattern.test(str);

console.log(check);

console.log('===Lấy chuỗi sau khi so khớp====');

var str = 'Xin chào, tôi là https://unicode.vn. Tôi dạy lập trình Web. Tôi có website nữa: https://pveser.com. Website tiếp theo: https://vnexpress.net';

var pattern = /(http|https):\/\/[a-z][a-z0-9-_.]*\.[a-z]{2,}/g;

var website = str.match(pattern);

console.log(str.match(pattern));

// console.log('Website là: '+website[0]);
// console.log('Website là: '+website[1]);
// console.log('Website là: '+website[2]);

if (website!==null){
    for (var index = 0; index < website.length; index++){
        console.log(website[index]);
    }
}