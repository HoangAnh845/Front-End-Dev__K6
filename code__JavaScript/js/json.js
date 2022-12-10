/*
Khái niệm về Json
- Định dạng chuỗi => Kiểu dữ liệu chuỗi
- Viết tắt JavaScript Object Notation

Json dùng để làm gì?
- Giúp giao tiếp dữ liệu giữa các nền tảng khác nhau
+ giao diện giữa back-end và front-end qua API (kiểu dữ liệu json)
+ giao tiếp guữa app và web qua API (Kiểu dữ liệu json)
*/

var Province = `{
    'name': 'Hà Nội',
    'code': 'hn',
    'id': 1
}`;



//Chuyển Object thành JSON

var Province = {
    'name': 'Hà Nội',
    'code': 'hn',
    'id': 1
};

console.log(Province);

var ProvinceJson = JSON.stringify(Province);

console.log(ProvinceJson);

//Chuyển JSON thành Object

Province = JSON.parse(ProvinceJson);

Province.prefix = 'Thành phố';

//console.log(Province);

ProvinceJson = JSON.stringify(Province);

console.log(ProvinceJson);

var customerArr = [
    'Hoàng An',
    'Hoàng Anh',
    'Văn Quân'
];

var customerJson = JSON.stringify(customerArr);

console.log(customerJson);

customerArr = JSON.parse(customerJson);

console.log(customerArr);