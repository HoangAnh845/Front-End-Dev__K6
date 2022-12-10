/*
Prototypes trong Javascript
*/

Object.prototype.title = 'Tiêu đề 1';

var Comment = {
    fullname: 'Hoàng An',
    phone: '0388875179'
}

// console.log(Comment);

// console.log('===truy cập tới Prototypes===');

// console.log(Comment.title);

var Post = new Object(); //Object giống như 1 class hoặc function

Post.title = 'Bài viết 1';
Post.content = 'Nội dung bài viết 1';

//console.log(Post);


//ví dụ khi kế thừa phương thức

Object.prototype.addComment = function(){
    return 'Thêm bình luận thành công';
}

Comment.addComment = function(){
    var CommentObject = {};
    var currentAddComment = CommentObject.addComment();
    return currentAddComment+ ' - Thêm bình luận lần 2';
}

console.log(Comment.addComment());

var Product = {};

Product.title = 'Tên sản phẩm';

console.log(Product);

var Brand = Object.create(null); //Object không có Prototypes (Không chịu tác động kế thừa từ Class Object)

Brand.title = 'Tên thương hiệu';

console.log(Brand);

//so sánh 2 object

var Product = {};

var Brand = {};

console.log(Product==Brand);

console.log(Product.toString()==Brand.toString());

//Tự định nghĩa Prototypes cho function object riêng

var Unicode = function(){
    this.fullname = 'Hoàng An';
    this.phone = '0388875179';

    this.addComment = function(){
        return 'Thêm comment thành công: '+this.fullname;
    }
}

Unicode.prototype.updateComment = function(){
    return 'Cập nhật comment thành công';
}

var unicodeObject = new Unicode();

console.log(unicodeObject.updateComment());

console.log(unicodeObject.addComment());

//Viết thêm phương thức cho function object có sẵn

Date.prototype.getDayVn = function(){
    var dayArr = [
        'Chủ nhật',
        'Thứ hai',
        'Thứ ba',
        'Thứ tư',
        'Thứ năm',
        'Thứ sáu',
        'Thứ bảy'
    ];

    return dayArr[this.getDay()];
}

var dateObject = new Date();

console.log(dateObject.getDayVn());