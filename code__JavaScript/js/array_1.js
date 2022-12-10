/*
Mảng trong javascript (Kiểu dữ liệu phức hợp)
- Mảng là tập hợp các kiểu dữ liệu khác nhau hoặc giống nhau trong 1 biến
- Mảng được hình thành mới các phần tử (element) và có địa chỉ truy cập (index)
*/

//Khai báo mảng

var customerArr = []; //khai báo mảng rỗng

// var customerArr = [
//     'Hoàng An',
//     'hoàng anh', 
//     'Anh tuấn'
// ];

//var customerArr = new Array();

// var customerArr = new Array(
//     'Hoàng An',
//     'hoàng anh', 
//     'Anh tuấn'
// )

//Thêm dữ liệu vào mảng

/*
customerArr[0] = 'Hoàng An';
customerArr[1] = 'Hoàng Anh';
customerArr[3] = 'Anh tuấn';
*/

//Thêm dữ liệu vào mảng tự động tính index
customerArr[customerArr.length] = 'Hoàng An';
customerArr[customerArr.length] = 'Hoàng Anh';
customerArr[customerArr.length] = 'Anh Tuấn';

//Lấy số lượng phần tủ trong mảng
var countCustomer = customerArr.length;

console.log(countCustomer);

console.log(customerArr);

//đọc phần tử của mảng
// console.log(customerArr[0]);
// console.log(customerArr[1]);
// console.log(customerArr[2]);

//Đọc tất cả phần tử của mảng
//Cách 1: Dùng vòng lặp for (Mảng tuần tự)
customerArr[4] = 'Văn Anh';

// for (var index = 0; index<customerArr.length; index++){
//     console.log('Phần tử thứ: '+index+': '+customerArr[index]);
// }

//cách 2: dùng vòng lặp for of
// for (var element of customerArr){
//     console.log(element);
// }

//Cách 3: dùng vòng lặp for in
// for (var index in customerArr){
//    // console.log(customerArr[index]);
//    console.log(index);
// }

//Cách 4: dùng forEach (Chuyên cho mảng)

// customerArr.forEach(function(item, index){
//     console.log(item+' : '+index);
// });

var customerArr = [];

customerArr[customerArr.length] = 'Hoàng An';
customerArr[customerArr.length] = 'Văn Anh';
customerArr[customerArr.length] = [
    30,
    10000000
];

customerArr.forEach(function(element, index){
    if (Array.isArray(element)){
       element.forEach(function(childElement, childIndex){
            console.log('Phần tử thứ: '+index+'.'+childIndex+': '+childElement);
       });
    }else{
        console.log('Phần tử thứ: '+index+': '+element);
    }
});