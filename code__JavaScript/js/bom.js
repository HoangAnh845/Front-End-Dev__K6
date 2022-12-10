/*
Lấy kích thước trình duyệt
*/

var widthBrowser = window.innerWidth;
var heightBrowser = window.innerHeight;

console.log('Kích thước chiều rộng trình duyệt: '+widthBrowser+'px');
console.log('Kích thước chiều cao trình duyệt: '+heightBrowser+'px');

//console.log(window);

//Mở cửa sổ popup

var buttonObject = document.querySelector('button');

//buttonObject.addEventListener('click', function(){
    //window.open('https://unicode.vn'); //Nếu chỉ có url trong hàm open => trình duyệt sẽ mở tab mới

    //window.open('https://unicode.vn', 'unicode');

    //window.open('https://unicode.vn', '', 'width=400,height=400,top=100,left=100');
//});

function openAds(){
    var adsLink = [
        'https://unicode.vn',
        'https://google.com',
        'https://vnexpress.net'
    ];

    var sizeArr = [
        'width=300,height=400',
        'width=340,height=200',
        'width=500,height=200',
    ];

    var positionArr = [
        'top=0,left=0',
        'top=100,left=150',
        'top=200,left=400',
    ];

    adsLink.forEach(function(link, index){
       
        setTimeout(function(){
            var sizeItem = sizeArr[index];

            var positionItem = positionArr[index];

            window.open(link, '', sizeItem+','+positionItem);

        }, 1000);
    });
}

// document.querySelector('body').addEventListener('click', function(){
//     openAds();
// });

var openObjectArr = [];

document.querySelector('.open').addEventListener('click', function(){
    //var windowName = 'link_'+(Math.random()*1000).toString().substr(0,3).replace('.','');
    
     var openObject = window.open('https://unicode.vn');
    
     openObjectArr.push(openObject);
    
    // //console.log(openObjectArr);

});

document.querySelector('.close').addEventListener('click', function(){
    if (openObjectArr.length>0){
        openObjectArr[0].close();
        openObjectArr.shift();
    }
});

// document.querySelector('.open').addEventListener('click', function(){
//    var openObject =  window.open('https://unicode.vn', '', 'width=200,height=400');

//    document.querySelector('.resize').addEventListener('click', function(){
//         openObject.resizeTo(500, 500);
//    });
// });

//Window location

console.log(window.location);

/*
Tìm hiểu window.location
- hash: Các ký tự sau dấu # trên url
- host: tên miền + port (nếu có). Ví dụ: 127.0.0.1:5500
- hostname: tên miền
- href: Link đầy đủ
- origin: giao thức + tên miền + port
- pathname: đường dẫn phía sau tên miền (không có hash)
- port: Port
- protocol: giao thức
- search: lấy query string trên url (sau dấu ?)
*/

var fullUrl = window.location.href;

console.log('Link đầy đủ: '+fullUrl);

/*
Giả sử có 1 đường dẫn: https://unicode.vn/images/image01.jpg
Yêu cầu: lấy ra pathname của đường dẫn này
*/

var url = 'https://unicode.vn/images/image01.jpg';

var urlObject = document.createElement('a'); //dom node
urlObject.href = url;
var pathName = urlObject.pathname;
var domain = urlObject.hostname;
console.log('Path: ' + pathName);
console.log('Domain: ' + domain);

//load lại trang

document.querySelector('.reload').addEventListener('click', function(){
    window.location.reload();
});

//mở url mới (cửa sổ hiện tại)
document.querySelector('.open-url').addEventListener('click', function(){
    window.location.href = 'https://unicode.vn';
});

document.querySelector('.menu-item a').addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = this.dataset.link;
});

//Lịch sử truy cập

console.log(window.history);

document.querySelector('.back').addEventListener('click', function(){
    window.history.back();
});

//Cookie Javascript

//1. Lấy cookie

var cookieStr = document.cookie;

/*
Chuỗi cookie sẽ trả về định dạng: key1=value1;key2=value2
=> Muốn lấy từng cookie thì phải xử lý chuỗi
*/

//2. Tạo cookie

//document.cookie = 'username=hoangan.web;expires=Thu Oct 07 2021 17:00:00';
// document.cookie = 'email=hoangan.web@gmail.com';

/*
Nếu không thiết lập thời gian sống cho cookie => khi tắt trình duyệt thì cookie sẽ bị xoá (trường hợp này gọi là session)
*/

//3. Sửa cookie
//document.cookie = 'username=hoanganit19;expires=Thu Oct 07 2021 17:00:00';

//4. Xoá cookie: lùi thời gian sống về quá khi => cookie sẽ tự động bị xoá
// document.cookie = 'username=;expires=Thu Oct 05 2021 00:00:00';

// console.log(document.cookie);


//Thực hành: viết hàm thao tác với cookie

function setCookie(key, value, expires){

    var dateObject = new Date(expires);

    document.cookie = `${key}=${value};expires=${dateObject.toString()}`;
}

function getCookie(key){
    var cookieStr = document.cookie;
    var cookieArr = cookieStr.split(';');
    var resultCookie = null;
    if (cookieArr!==null){
        cookieArr.forEach(function(cookieItem){
            cookieItem = cookieItem.trim(); //Loại bỏ khoảng trắng đầu cuối
            if (cookieItem!==''){
                var cookieItemArr = cookieItem.split('=');

                 if (cookieItemArr[0].trim()==key.trim()){
                    resultCookie =  cookieItemArr[1].trim();
                
                 }
            }
        
        });
    }

    if (resultCookie==null){
        return false;
    }

    return resultCookie;
   
}

function removeCookie(key){

    var dateObject = new Date();

    dateObject.setDate(dateObject.getDate()-1);

    var expires = dateObject.toString();
   
    setCookie(key, '', expires);
}

//setCookie('email', 'hoangan.web@gmail.com', '2021-10-07 15:00:00');

 var username = getCookie('email');

 console.log(username);

//removeCookie('email');

//Navigator

console.log(navigator);

//1. kiểm tra cookie có được bật hay không?

if (navigator.cookieEnabled){
    console.log('cookie được bật');
}else{
    console.log('cookie không được bật');
}

//2. Kiểm tra tên trình duyệt

console.log('Tên trình duyệt: '+navigator.appName);

console.log('Mã trình duyệt: '+navigator.appCodeName);

console.log(navigator.userAgent);

console.log('Hệ điều hành: '+navigator.platform);

console.log('Ngôn ngữ: '+navigator.language);

//Bom screen

console.log(screen);