/*
Date Time trong Javascript

- Thời gian trong Javascript sẽ lấy theo đồng hồ của máy tính đang chạy
- Xử lý thời gian trong Javascript có 2 phần:
+ get: lấy thời gian
+ set: đặt thời gian

- Để xử lý thời gian trong Javascript chúng ta cần khởi tạo object

milliseconds = (số giây từ 00:00:00 ngày 1/1/1970 đến thời điểm muốn lấy thời gian)*1000
*/

//Lấy thời gian hiện tại

dateOj = new Date(); 
console.log(dateOj);

//Lấy thời gian bất kỳ dựa vào date string

var timeObj = new Date('10-04-2021 20:55:59');

console.log(timeObj);

//Lấy thời gian bất kỳ dựa vào các tham số thứ tụ:
//năm, tháng, ngày, giờ, phút, giây, mili giây

/*
Nếu thiếu các tham số
- Tháng => Tự động lấy theo năm 1970
- ngày => Lấy ngày 01
- giờ => lấy 00 giờ
- phút => lấy 00 phút
- giây => lấy 00 giây
- mili giây => lấy 00 mili giây
*/

// var timeObj = new Date(2021);

// console.log(timeObj);

//Các hàm trong nhóm get

// var dateNowObject = new Date(); //Lấy thời gian hiện tại

// var dayNow = dateNowObject.getDay(); //Trả về thứ trong tuần (Bắt đầu từ 0 - chủ nhật)

// console.log(dayNow);

// var dateNow = dateNowObject.getDate(); //Trả về ngày trong tháng

// console.log(dateNow);

// var fullYearNow = dateNowObject.getFullYear();  //Lấy năm đầy đủ

// console.log(fullYearNow);

// console.log(dateNowObject.getYear());

// var hoursNow = dateNowObject.getHours(); //Lấy giờ hiện tại

// console.log(hoursNow);

// var millisecondsNow = dateNowObject.getMilliseconds();
// console.log(millisecondsNow);

// var minNow = dateNowObject.getMinutes();
// console.log(minNow);

// var monthNow = dateNowObject.getMonth();
// console.log(monthNow);

// var secondNow = dateNowObject.getSeconds();
// console.log(secondNow);

// var timeStamp = dateNowObject.getTime();

// console.log(timeStamp);

/*
Hiển thị ra dòng chữ thể hiện thời gian của ngày hôm nay

Thứ hai, ngày 04 tháng 10 năm 2021 - 21 giờ 10 phút 35 giây
*/

setInterval(function(){
    var dateNowObject = new Date(); //Lấy thời gian hiện tại

var dayArr = [
    'Chủ nhật',
    'Thứ hai',
    'Thứ ba',
    'Thứ tư',
    'Thứ năm',
    'Thứ sáu',
    'Thứ bảy'
];

var date = dateNowObject.getDate();
if (date<10){
    date = '0'+date;
}

var dateStr = dayArr[dateNowObject.getDay()] + ', '+'ngày '+date+' tháng '+(dateNowObject.getMonth()+1)+' năm '+dateNowObject.getFullYear()+' - '+dateNowObject.getHours()+' giờ '+dateNowObject.getMinutes()+' phút '+dateNowObject.getSeconds()+' giây';

document.querySelector('.clock').innerHTML = dateStr;
}, 1000);

/*
Xây dựng chức năng đếm ngược thời gian khuyến mãi. Thể hiện đầy đủ: ngày giờ phút giây

Input: Thời gian kết thúc khuyến mãi: 31/10/2021 09:00:00

Output: Đưa ra được thời gian còn lại hết khuyến mãi (tính theo thời điểm đang truy cập)
Ngày - Giờ - phút - giây

Chạy liên tục mà không cần load trang: setInteval()

Gợi ý: 
- Lấy số giây của thời gian kết thúc khuyến mãi (getTime()/1000)
- Lấy số giây của thời gian hiện tại (getTime())
- Tính khoảng cách giữa thời gian hết hạn và thời gian hiện tại (Phép trừ)

Quy đổi số giây thành ngày, giờ, phút, giây

Math.floor => Luôn luôn làm tròn xuống, chỉ lấy phần nguyên
*/

console.log('====Set datetime====');

var timeObject = new Date('2021-10-06');

console.log(timeObject);

// timeObject.setFullYear(2022);

timeObject.setMonth(11); //Thay đổi thành tháng 11

console.log(timeObject);

console.log('===Hiển thị ngày - tháng - năm sau khi Set');

console.log(timeObject.getDate()+' - '+(timeObject.getMonth()+1)+' - '+timeObject.getFullYear());