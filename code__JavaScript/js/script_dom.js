/*
Giải thích về Dom
1. Server sẽ trả về dạng HTML (Kiểm tra bằng cách Ctrl + U hoặc View Page Source)
2. Trình duyệt sẽ tạo ra 1 đối tượng tài liệu HTML để hiển thị ra cho người dùng (Dựa vào các quy tắc, do W3C quy định) => DOM
3. Hiển thị giao diện đã biên dịch cho người dùng

=> DOM ở bước 2 có thể được thay đổi (thêm, sửa, xoá,...) trước khi hiển thị ra ở bước 3 (Thay đổi bằng Javascript)
=> Chính vì sẽ có sự khác nhau về HTML giữa cách kiểm tra bằng View Page Source và F12
+ View Page Source: HTML gốc, chưa được tạo DOM, chưa được chạy qua JS
+ F12 (Dev Tools): Đã được tạo DOM và có sự can thiệp của JS
*/

//document.querySelector('p').style.color='red';

/*
Hệ thống phân cấp tài liệu HTML
- Cấp cao nhất là document: Đại diện cho tất cả tài liệu của 1 trang HTML
- Các thẻ HTML (Element) bao gồm:
+ Text: Nội dung của thẻ HTML (Nếu là thẻ đủ)
+ Attribute: Thuộc tính của thẻ HTML

Thao tác với DOM là gì?
- Thêm thuộc tính cho Element
- Sửa nội dung thuộc tính cho Element
- Xoá thuộc tính của Element
- Thêm, sửa, xoá nội dung của Element
- Xóa Element (Xoá cả thẻ HTML)

Các bước để làm việc với DOM
- Bước 1: Tạo object từ thẻ HTML (Sử dụng Selector)
- Bước 2: Thao tác sử dụng các phương thức, thuộc tính có sẵn của object (Trong bước 1)

Một số tên gọi:
- Tên hàm trong object => Gọi là phương thức (method)
- Tên biến trong object => Gọi là thuộc tính (Property)
*/

var buttonObject = document.getElementById('button');
/*
getElementById() sẽ trả về 1 object đầu tiên
Trong Javascript, sẽ chỉ lấy id đầu tiên (Nếu trùng nhau) tính từ trên xuống
*/

// if (buttonObject!==null){
//     console.log(buttonObject.innerHTML);
// }else{
//     console.log('Object không tồn tại');
// }

var buttonObject = document.getElementsByTagName('button');

// var htmlContent = buttonObject[0].innerHTML;

var buttonObject = document.getElementsByClassName('btn');

var buttonObject = document.querySelectorAll('button');

console.log(buttonObject);

//Lấy số lượng các phần từ tìm được
// if (buttonObject!==null){
//     var buttonObjectLength = buttonObject.length;
//     for (var index = 0; index<buttonObjectLength; index++){
//         console.log(buttonObject[index].innerHTML);
//     }
// }

//Thay đổi nội dung html

/*
Click vào button có class "button--action" => Thay đổi nội dung thẻ html có class "result"
*/

//button--action object
var buttonActionObject = document.querySelector('.button--action');

//result object
var resultObject = document.querySelector('.result');

//Variable html content
var htmlContent;

//console.log([resultObject]);

//button confirm object
var buttonConfirmObject = document.querySelector('.button-confirm');

if (buttonActionObject!==null){
    buttonActionObject.onclick = function(){
       //Xử lý hành động click vào nút
       if (resultObject!==null){
        htmlContent = "<h3>Học lập trình Front-End</h3>";    
        //resultObject.innerHTML+= htmlContent;
        //resultObject.innerHTML = htmlContent + resultObject.innerHTML;
        //resultObject.innerText = htmlContent;
        //resultObject.innerHTML = '';
        //Nếu gán thuộc tính bằng 1 giá trị mới => Thay thế giá trị của thuộc tính đó (set)
        //Nếu chỉ gọi thuộc tính => Lấy dữ liệu của thuộc tính (get) 

        //Thuộc tính thật của thẻ HTML
        var idResult = resultObject.id;
        //console.log(idResult);

        //resultObject.id = 'unicode';

        //resultObject.style='color: red; background: green; text-decoration: line-through;';

        //console.log(resultObject.href); 

        //Thuộc tính không có thật
        //var hrefResult = resultObject.getAttribute('href');
        //console.log(hrefResult);
        //resultObject.setAttribute('href', 'https://google.com');

        //var currentCount = resultObject.getAttribute('data-count');
        var currentCount = resultObject.dataset.count;
        
        currentCount++;
        // resultObject.setAttribute('data-count', currentCount);

        resultObject.dataset.count = currentCount;

        //Tự tạo thuộc tính data dựa vào dataset
        resultObject.dataset.column = 5; //data-column = "5"

        console.log(resultObject.dataset.column);

        // if (currentCount>5){
        //     //buttonConfirmObject.setAttribute('disabled', 'disabled');
        //     buttonConfirmObject.disabled = 'disabled';
        // }

        //console.log(currentCount);
       }
    }

    
    if (buttonConfirmObject!==null){
        buttonConfirmObject.onclick = function(){
            var count = resultObject.getAttribute('data-count');
            if (count>=5){
                alert('Bạn đã vượt quá số lần cho phép');
            }
        }
    }
}

//Dom CSS
var blockObject = document.querySelector('.block');
var changeStyleObject = document.querySelector('.change-style');

// if (changeStyleObject!==null){
//     changeStyleObject.addEventListener('click', function(){
//         if (blockObject!==null){
//             blockObject.style.color = "red";
//             blockObject.style.backgroundColor = "green";
//             blockObject.style.fontSize = "1.3em";
//             setTimeout(function(){
//                 blockObject.style.color = "#fff"; 
//             }, 1000);
            
//             var currentBackground = blockObject.style.backgroundColor;
//             console.log("Màu nền hiện tại: " + currentBackground);
//             console.log("Màu chữ hiện tại là: " + blockObject.style.color);
//         }
//     });
// }

//Remove HTML
// if (changeStyleObject!==null){
//     changeStyleObject.addEventListener('click', function(){
//         blockObject.remove();
//     });
// }

//classList
if (changeStyleObject!==null){
    changeStyleObject.addEventListener('click', function(){
        var classList = blockObject.classList;
        //console.log(classList);
        //Lấy từng class
        //Kiểm tra xem trong thẻ html có class block1 hay không?
        var checkClass = false;
        
        // if (classList.length>0){
        //     for (var index = 0; index<classList.length; index++){
        //         if (classList[index]==='block1'){
        //             checkClass = true;
        //             break;
        //         }
        //     }
        // }


        //Thông báo kiểm tra class
        //if (checkClass){
        // if (classList.contains('block1') && classList.contains('block2')){
        //     console.log('Đã tìm thấy class block 1');
        // }else{
        //     console.log('Không có class block 1');
        // }

        //Thêm class
        //classList.value+=' content';
        // classList.add('content');
        // classList.add('container');
        classList.remove('block3');
    });
}

//Thực hành code chức năng ẩn hiện
var actionShowObject = document.querySelector('.action-show');

var contentObject = document.querySelector('.content');

if (actionShowObject!==null){
    actionShowObject.onclick = function(){
        if (contentObject!==null){
            if (!contentObject.classList.contains('hide')){
                contentObject.classList.add('hide');
                //actionShowObject.innerText = 'Hiện';
                this.innerText = 'Hiện';
                // setTimeout(function(){
                //     contentObject.style.height = '0';
                // }, 400);
            }else{
                contentObject.classList.remove('hide');
                //actionShowObject.innerText = 'Ẩn';
                this.innerText = 'Ẩn';
                // setTimeout(function(){
                //     contentObject.style.height = 'auto';
                // }, 400);
            }
            
        }
    }
}