/*
Lưu ý về Object trong Javascript
- Đa số các kiểu dữ liệu trong Javascript đều được gọi là object trừ kiểu (undefined)
- Một số kiểu dữ liệu nguyên thuỷ trong Javascript không được gọi là object, nhưng cách sử dụng lại giống object: number, string, null
*/

var customerArr = [
    'Hoàng An',
    'Anh Tuấn'
];

console.log(customerArr.length);

console.log(typeof customerArr);

/*
parseInt($tenbien) => Hàm
tenbien.tenham() => Phương thức
tenbien.tenthuoctinh => Thuộc tính
*/

var number = 100;
console.log(number.toString());

//Tạo đối tượng mới

//var commentObject = new Object();

//var commentObject = {}; //Tạo object

//Thêm thuộc tính cho đối tượng
// commentObject.fullname = 'Hoàng An';
// commentObject.email = 'hoangan.web@gmail.com';

var commentObject = {
    fullname: 'Hoàng An',
    email: 'hoangan.web@gmail.com'
};

console.log(commentObject);

//gọi thuộc tính
console.log('Họ tên: '+commentObject.fullname);

/*
Lồng object trong mảng
*/

var customerArr = [
    {
        fullname: 'Hoàng An',
        email: 'hoangan.web@gmail.com'
    },

    {
        fullname: 'Văn Quân',
        email: 'vanquan@gmail.com'
    },

    {
        fullname: 'Anh Tuấn',
        email: 'anhtuan@gmail.com'
    }
];

// customerArr.forEach(function(item){
//     var fullName = item.fullname;
//     var email = item.email;
//     console.log('Name='+fullName+' - email: '+email);
// });

console.log('Object -- phần 2');
var Comment = {};

//Thêm thuộc tính cho object sau khi khởi tạo
Comment.fullname = 'Hoàng An';
Comment.phone = '0388875179';
Comment['subject'] = 'Khoá học này rất hay';

console.log(Comment);

var Product = []; //khai báo mảng
Product[0] = 'Sản phẩm 1';
Product['1last'] = 'Sản phẩm 2';
Product[1] = 'Sản phẩm 3';

Product.forEach(function(item, key){
    console.log(key+' - '+item);
});

for (var index in Product){
    var indexParse = Number(index);
    
    if (isNaN(indexParse)){
    
        console.log(Product[index]);
    }
}

/*
Lưu ý khi làm việc với thuộc tính của Object
- Có 2 cách để gán thuộc tính cho Object
+ Cách 1: Dùng dấu chấm (.). Ví dụ: Comment.fullname = 'Hoàng An'
+ Cách 2: Dùng dấu ngoặc vuông ([]) giống như mảng. Ví dụ: Comment['subject'] = 'Giá trị';

- Có 2 cách để gọi thuộc tính của Object
+ Cách 1: Dùng dấu chấm để gọi (Chỉ được gọi thuộc tính cố định)
+ Cách 2: Dùng dấu ngoặc vuông giống gọi mảng (Có thể gọi thuộc tính trong 1 biến)

Khi làm việc với mảng, nếu thêm 1 phần tử của mảng mà key là 1 chuỗi => Mảng sẽ tự động chuyển thành Object và Phần tử đó sẽ là thuộc tính của Object
*/

var Post = {
    title: 'Tin tức 1',
    content: 'Nội dung 1',
    author: 'Hoàng An',
    create_at: '12-12-2021'
};

// for (var property in Post){
//     console.log(Post[property]);
// }
var keys = Object.keys(Post);
keys.forEach(function(key){
    console.log(Post[key]);
});