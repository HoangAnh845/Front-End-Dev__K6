/*
Phương thức (Hàm) của Object
*/

var Comment = {
    fullname: 'Hoàng An',
    phone: '0388875179',
    subject: 'Khoá học rất hay',
    content: 'Nội dung bình luận',
    addComment: function(){
        var fullName = this.fullname; //Lấy giá trị thuộc tính trong Object hiện tại
        var dataComment = 'Họ và tên: '+fullName;

        return 'Thêm comment thành công: '+dataComment;
    }
};

Comment.updateComment = function(commentId){

    var addStatus = this.addComment(); //Gọi phương thức bên trong Object hiện tại

    var deleteStatus = this.deleteComment(1);

    return `Update comment có id ${commentId} thành công: `+addStatus+deleteStatus;
}

Comment.deleteComment = function(commentId){
    return `Delete comment có id ${commentId} thành công`;
}

function pinComment(commentId){
    return `Pin comment có id ${commentId} thành công`;
}

Comment.pinComment = pinComment;

Comment.setContact = function(){
    this.fullname = 'Unicode';
    this.phone = '0123456789';
    this.subject = 'Tiêu đề thứ 2';
    this.content = 'Tiêu đề thứ 3';
}

//Ghi đè phương thức
Comment.pinComment = function(){
    return 'Pin mới';
}

// Comment.pinComment = function(){
//     return 'Test pin';
// }

//Gọi phương thức

var addStatus = Comment.addComment();

console.log(addStatus);

var updateStatus = Comment.updateComment(2);

console.log(updateStatus);

var deleteStatus = Comment.deleteComment(1);

console.log(deleteStatus);

var pinStatus = Comment.pinComment(10);

console.log(pinStatus);

//Set giá trị mới cho thuộc tính
Comment.setContact();

//var propertyArr = Object.keys(Comment); //lấy tất cả thuộc tính và phương thức
var dataShow = '';
for (var key in Comment){

    if (typeof Comment[key]!=='function'){
        dataShow+='- '+Comment[key]
    }
   
}

console.log(dataShow);

//Khởi tạo object từ class cho trước => Học ở phần sau

//ví dụ Object Product

// var Product = {
//     pinComment: function(commentId){
//         return `Test phương thức của Product với ${commentId}`;
//     }
// };

// console.log(Product.pinComment(1));

//Biến dưới dạng function

var fullName = 'Hoàng An';
console.log(fullName);

var getFullname = function(){
    return fullName;
}

getFullname = function(){
    return 'Thử ghi đè function lần 1'
}

console.log(getFullname());

function getFullname2(){
    return fullName;
}

function getFullname2(){
    return 'Thử ghi đè function lần 2';
}

console.log(getFullname2());

//1 function là 1 object

var Unicode = function(fullname='', phone = ''){
    this.fullname = fullname;
    this.phone = phone;
    
    this.postNew = function(){
        return 'Đăng bài thành công';
    }
}

var unicodeObject = new Unicode(); //Khởi tạo đối tượng từ function

//unicodeObject.fullname = 'Hoàng An';

console.log(unicodeObject.fullname);
console.log(unicodeObject.postNew());

var unicodeObject2 = new Unicode('Văn Quân', '0123456789');

console.log(unicodeObject2.fullname);
console.log(unicodeObject2.postNew());

console.log(new Unicode().postNew()); //Cách gọi khác

/*
Lưu ý: 
Nếu có từ khoá this bên trong hàm (hàm từ biến, hàm từ từ khoá function), thì function đó sẽ hiểu là 1 lớp (Class)
Nếu muốn sử dụng lớp này, bạn cần khởi tạo đối tượng theo cú pháp sau:
tendoituong = new TenLop()

Nếu không có từ khoá this trong function => Chỉ là 1 function bình thường
*/

var currentTime = new Date();

//console.log(currentTime.getDate());

//console.log(new Date().getDate());

//Đối tượng trong đối tượng

var Post = {
    title: 'Bài viết 1',
    content: 'Nội dung 1',
    gallery: [
        {
            imageLink: 'https://unicode.vn/images/anh1.jpg',
            imageName: 'Ảnh 1',
        },

        {
            imageLink: 'https://unicode.vn/images/anh2.jpg',
            imageName: 'Ảnh 2',
        },

        {
            imageLink: 'https://unicode.vn/images/anh3.jpg',
            imageName: 'Ảnh 3',

        }
    ]
};

console.log(Post);
console.log(Post.gallery[0].imageLink);