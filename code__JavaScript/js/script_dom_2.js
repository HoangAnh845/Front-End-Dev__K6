var pObject;

pObject = document.querySelector('.block p');

// pObject.onclick = function(){
//     console.log('Thông báo 1');
// }

// pObject.onclick = function(){
//     console.log('Thông báo 2');
// }

/*
Nếu thêm sự kiện vào html bằng cách sử dụng object.ten_su_kien
+ Nếu sự kiện trùng nhau => Chỉ sự kiện sau hoạt động
+ Nếu muốn cả 2 sự kiện cùng hoạt động => Dùng addEventListener
*/

// pObject.addEventListener('click', function(){
//     console.log('Thông báo 1');
// });


// pObject.addEventListener('click', function(){
//     console.log('Thông báo 2');
// });


pObject = document.querySelectorAll('.block p');
console.log(pObject);
//console.log(pObject.length); //index cuối cùng chỉ chạy đến 2 (Vì index<pObject.length)
if (pObject!==null){
    for (var index = 0; index<pObject.length; index++){
        pObject[index].onclick = function(){
            // console.log(index);
            // console.log(pObject[index]);
            // var currentClicked = this; //Lấy ra object mà sự kiện vừa tác động
            // var currentValue = currentClicked.innerHTML;
            // console.log(currentValue);
        }
    }
}

//console.log(pObject[3]); //không tìm chỉ số pObject[3] => undefined

// pObject[2].onclick = function(){
//     console.log(pObject[2]);
// }


/*
Giải thích nguyên nhân không lấy được object của từng item khi click
- Vòng lặp sẽ chạy trước, sự kiện chỉ có tác dụng khi chúng ta tác động html (click)
- Khi chúng ta tác động sự kiện lên html => Vòng lặp đã chạy xong 
=> index mang giá trị = length
*/

var buttonObject = document.querySelector('.button');
buttonObject.onclick = function(e){
    //console.log(buttonObject);
    //console.log(this);
    // buttonObject.innerHTML = '<b>Unicode</b>';
    // console.log(buttonObject);
    // console.log(this);
    // console.log(e.target.innerHTML);
    // console.log([this]);
}

var blockObject = document.querySelector('.block');
//var pObject = blockObject.querySelectorAll('p'); //Thay document thành tên biến Object parent

// var pObject = blockObject.children;

// console.log(pObject);

// if (pObject!==null){
//     for (index = 0; index<pObject.length; index++){
//         var spanObject = pObject[index].children;
//         console.log(spanObject);
//     }
// }

var spanObjectList = document.querySelectorAll('.span');
for (var index = 0; index<spanObjectList.length; index++){
    spanObjectList[index].onclick = function(){
        console.log(this.parentElement.parentElement); //Tìm object parent (Trên 1 cấp)
    }
}


//Ví dụ

function parentElement(selector, currentObject){
   var objectParent = currentObject.parentElement;

   if (objectParent!==null){
       var classParent = '.'+objectParent.classList.value;
        //console.log(classParent);
       if (classParent!=selector){
            objectParent = parentElement(selector, objectParent); //Gọi đệ quy
       } 
   }

   return objectParent;
}

/*
Giải thuật đệ quy
- Trong khi định nghĩa hàm => Gọi chính hàm đang định nghĩa
- Các tham số khi dùng giải thuật đệ quy => Cần thay đổi để có được yếu tố lặp => Nếu không giải thuật đệ quy không bao giờ dừng
*/

var removeObject = document.querySelectorAll('.remove');
if (removeObject!==null){
    for (var index=0; index<removeObject.length; index++){
        removeObject[index].onclick = function(){
            var currentRemove = this;
            var groupObject = parentElement('.group', currentRemove);
            groupObject.remove();
            //console.log(parentElement('.group', currentRemove));
            //parentElement('.group', currentRemove);
        }
    }
}

/*
Ngăn chặn hành động mặc định của HTML
*/
document.querySelector('.elements').onclick = function(e){

    e.preventDefault(); //Ngăn hành động mặc định HTML

    alert('Bạn vừa click');
    //return false;
}

document.querySelector('.element-2').onclick = function(){
    console.log('Click element 2');
}


document.querySelector('.element-2 button').onclick = function(event){
    event.stopPropagation(); //Ngăn button nổi bọt ra bên ngoài thẻ cha
    console.log('Click button');
}