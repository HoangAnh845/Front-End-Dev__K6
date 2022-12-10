//Các hàm xử lý mảng

//1. Chuyển chuỗi thành mảng

var fullName = 'tạ hoàng an';
//Muốn chuyển chuỗi thành mảng phải xác định được ký tự phân cách

var fullNameArr = fullName.split(' ');

if (fullNameArr!==null){
    fullNameArr.forEach(function(value, index){
        //value = value.toUpperCase();
        value = value.replace(value[0], value[0].toUpperCase());
        
        fullNameArr[index] =  value;
    });
}

console.log(fullNameArr);

//2. Chuyển mảng thành chuỗi

fullName = fullNameArr.join(' ');

console.log(fullName);

//3. Nối các phần tử với nhau bởi dấu phẩy 
//Lưu ý: Không hoạt động khi gọi bằng console.log()

fullName = fullNameArr.valueOf();

//alert(fullName);

// console.log(fullName);

//4. Thêm phần tử vào cuối mảng (push())
/*
- Giá trị của hàm push() sẽ trả về tổng số lượng phần tử của mảng sau khi thêm
- Mảng ban đầu sẽ được thêm giá trị mới vào cuối mảng sau khi chạy qua hàm push()
*/

console.log('==mảng trước khi thêm===');
console.log(fullNameArr);
console.log('==mảng sau khi thêm===');
//fullNameArr = fullNameArr.push('Hoàng An'); => sai
var countArr = fullNameArr.push('Hoàng');
console.log(fullNameArr);
//console.log(countArr);

//5. Xoá phần tử cuối cùng của mảng (pop())
/*
- Xoá đi phần tử cuối cùng của mảng ban đầu
- giá trị trả về của hàm pop() là phần tử mảng vừa xoá
*/

var lastElementDelete = fullNameArr.pop();

console.log(fullNameArr);
//console.log(lastElementDelete);

//6. Xóa phần tử mảng đầu tiên

var lastElementDelete = fullNameArr.shift();

console.log(fullNameArr);
//console.log(lastElementDelete);

//7. Thêm phần tử vào đầu mảng (unshift)

var countArr = fullNameArr.unshift('Tạ');
var countArr = fullNameArr.unshift('Hoàng');

console.log(fullNameArr);
console.log(countArr);

//8. hàm xoá và chèn phần tử vào mảng (splice)

//fullNameArr.splice(1, 0, "Nguyễn", "Văn", "Thức");

console.log(fullNameArr);

//9. Sắp xếp mảng tăng dần

fullNameArr.sort();

console.log(fullNameArr);

var numberArr = [
    4,
    5, 
    100,
    6
]; 

numberArr.sort(function(a, b){
    return a-b;

    /*
    Lưu ý: Nếu return giá trị <0 => sắp xếp tăng
    return giá trị >0 => sắp xếp giảm
    Chỉ áp dụng với số
    */
});

console.log(numberArr);

//10. Đảo ngược mảng
fullNameArr.reverse();
console.log(fullNameArr);

/*
Thuật toán sắp xếp nổi bọt
Ví dụ: Cho 1 mảng bao gồm họ và tên của từng học viên => yêu cầu sắp xếp thứ tự các học viên tăng dần theo tên
*/

console.log('==Thuật toán sắp xếp nổi bọt==');

var studentArr = [
    'Tạ Hoàng An',
    'Nguyễn Văn Hoàng',
    'Trần Văn Anh',
    'Trần Anh Tuấn'
];

for (var i = 0; i<studentArr.length-1; i++){

    //chuyển chuỗi thành mảng để lấy ra tên của từng học viên
    var sdudentItemArrI = studentArr[i].split(' ');

    //lấy ra tên của từng học viên (lấy phần tử mảng cuối cùng)
    var studentNameI = sdudentItemArrI[sdudentItemArrI.length-1];

    for (var j = i+1; j<studentArr.length; j++){
        
        //chuyển chuỗi thành mảng để lấy ra tên của từng học viên
        var sdudentItemArrJ = studentArr[j].split(' ');

        //lấy ra tên của từng học viên
        var studentNameJ = sdudentItemArrJ[sdudentItemArrJ.length-1];

        //So sánh theo tên và đổi chỗ cả họ và tên
        if (studentNameI>studentNameJ){
            /*
            var tmp = studentArr[i];
            studentArr[i] = studentArr[j];
            studentArr[j] = tmp;
            */
           [studentArr[i], studentArr[j]] = [studentArr[j], studentArr[i]];
        }
        
    }
}

console.log(studentArr);

var customerArr = [
    'Hoàng an',
    'Hoàng anh'
];

var studentArr = [
    'Nguyễn Quân',
    'Văn Đức'
];

var totalArr = customerArr.concat(studentArr);

console.log(totalArr);

//var subArr = totalArr.slice(0, 2);

var subArr = totalArr.slice(1);

console.log(subArr);

/*
Ví dụ: cho trước 1 mảng là thông tin của từng học viên bao gồm:
- Họ và tên
- Email
- Số điện thoại

=> Hiển thị tất cả thông tin lên 1 table bao gồm 5 cột:
- STT
- Họ và tên
- Email
- Số điện thoại
*/

var studentArr = [
    [
        'Tạ Hoàng An',
        'hoangan.web@gmail.com',
        '0388875179'
    ],
    [
        'Nguyễn Văn A',
        'nguyenvana@gmail.com',
        '0388875178'
    ],
    [
        'Nguyễn Văn B',
        'nguyenvanb@gmail.com',
        '0388875177'
    ],
    [
        'Nguyễn Văn C',
        'nguyenvanc@gmail.com',
        '0388875176'
    ]
];

//console.log(studentArr);

var itemTable='';

if (studentArr!==null){
    studentArr.forEach(function(item, index){
        itemTable+= `<tr>`;
            itemTable+=`<td>${index+1}</td>`;
            itemTable+=`<td>${item[0]}</td>`;
            itemTable+=`<td>${item[1]}</td>`;
            itemTable+=`<td>${item[2]}</td>`;
        itemTable+=`</tr>`;
    });
}


var tableHtml = `<input type="search" id="search" placeholder="Từ khoá tìm kiếm..." /><table border="1">
<thead>
<tr>
<th width="5%">STT</th>
<th>Họ tên</th>
<th>Email</th>
<th>Số điện thoại</th>
</tr>
</thead>
<tbody>
${itemTable}
</tbody>
</table>`;

document.querySelector('.result').innerHTML = tableHtml;

//Tìm kiếm
var searchObject;

searchObject = document.querySelector('#search');

if (searchObject!==null){
    searchObject.addEventListener('keyup', function(){
        var keyword = this.value;
        keyword = keyword.trim();
        
        var itemTable='';
        
        if (keyword.length>=3){
            studentArr.forEach(function(item, index){
                var fullName = item[0];
                var email = item[1];
                var phone = item[2];
                var pattern = new RegExp(keyword, 'ui');
                //console.log(patternFullName);
                
                if (pattern.test(fullName) || pattern.test(email) || pattern.test(phone)){
               
                    itemTable+= `<tr>`;
                    itemTable+=`<td>${index+1}</td>`;
                    itemTable+=`<td>${studentArr[index][0]}</td>`;
                    itemTable+=`<td>${studentArr[index][1]}</td>`;
                    itemTable+=`<td>${studentArr[index][2]}</td>`;
                itemTable+=`</tr>`;
                
                 }
            });

            
        }else{
            //Hiển thị đầy đủ kết quả
        
            if (studentArr!==null){
                studentArr.forEach(function(item, index){
                    itemTable+= `<tr>`;
                        itemTable+=`<td>${index+1}</td>`;
                        itemTable+=`<td>${item[0]}</td>`;
                        itemTable+=`<td>${item[1]}</td>`;
                        itemTable+=`<td>${item[2]}</td>`;
                    itemTable+=`</tr>`;
                });
            }
        }

        //Thay thế giá trị tìm được vào table
        document.querySelector('.result table tbody').innerHTML = itemTable;
    });
}

/*
Phân trang
- Tổng số dòng = 20
- Số dòng trên 1 trang = 6
=> Tính số trang = 20/6 = 3.33 = 4 trang
*/

var totalRows =  25;
var perPage = 6;

alert(Math.ceil(totalRows/perPage));