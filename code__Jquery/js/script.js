//Khi làm việc với jQuery => Vẫn phải code Javascript (Dùng cú pháp của jQuery)
/*
tương tác sự kiện
lấy nội dung html
cập nhật nội dung vào thẻ html
*/

//Trước khi làm việc với jQuery => Kiểm tra DOM đã được load hay chưa?

//1. Kiểm tra DOM đã được load hay chưa
// $(document).ready(function(){
//     console.log('DOM đã đưọc load');
// });

//Kiểm tra xem html đã load xong chưa? (fonts, ảnh,...)
// $(window).on('load', function(){
//     console.log('HTML đã load');
// });

//Khi xảy ra sung đột plugin (Thư viện được phát triển dựa vào jQuery) => Thay thế $ => jQuery

/*
Dấu hiệu nhận biết xung đột Plugin jQuery
- Báo lỗi ở ký hiệu $ => Xảy ra 2 trường hợp
+ TH1: Chưa có thư viện jQuery
+ TH2: xung đột plugin jQuery

- Cách xử lý:
+ Kiểm tra thư viện jQuery: Có hay chưa? Link có đúng không? Có nằm trước file js đang code hay không?
+ Thử thay thế $ => jQuery

Trong trường hợp vẫn muốn sử dụng ký hiệu $ => thực hiện gán $ = jQuery
*/

$ = jQuery; //Lúc này $ chính là jQuery => Khắc phục được tình trạng xung đột
$(document).ready(function(){
    //Code jQuery viết trong này

    //let allElementOj = $('*');
    //let pElementOj = $('p:eq(0)');
    //let pElementOj = $('p:gt(0)');
    //let pElementOj = $('p:lt(2)');
    //let pElementOj = $('p:even');
    //let pElementOj = $('p:odd');
    //let pElementOj = $('p:first');
    // let pElementOj = $('p:last');
    // if (pElementOj!==null){
    //     pElementOj.css('color', 'red');
    // }
   
    // $('input:text').css('background', 'green');
    // //$('input:button').css('background', 'blue');
    // $('input:button').css({
    //     'background-color': 'blue',
    //     'color': '#fff',
    //     'cursor': 'pointer',
    //     'border': 'none' 
    // });

    //Sự kiện jQuery
    //Danh sách sự kiện giống bên Javascript
    // $('.show').on('click', function(e){
    //     console.log('bạn vừa click');
    //     //console.log(e.target.innerHTML);
    //    // e.target.innerHTML = 'Unicode';
    //    //console.log(this.innerHTML); //context (ngữ cảnh) của Javascript thuần
    //    //console.log($(this)); //context của jQuery
    //    let contentHtml = $(this).html();
    //    console.log(contentHtml);
    // });

    // $('.show').click(function(){ //Giống on('click')
    //     console.log('Bạn vừa click');
    // });

    // $('.show').on('click', function(){
    //    // $('.result').html('<b>Nội dung muốn chèn</b>'); //Nếu truyên tham số => Chèn dữ liệu, nếu không truyền tham số => Lấy dữ liệu

    //    //$('.result').text('<b>Nội dung muốn chèn</b>');

    //    //$('.result').html($('.source').html());
    //    $('.result').html($('.source').text());
    // });

    $('.show').on('click', function(){
        let buttonHtml = `<button type="button" class="show2">Show 2</button>`;
        $('.result').html(buttonHtml);
    });

    // $('.show2').on('click', function(){
    //     alert('Bạn vừa click vào nút thứ 2');
    // });

    //Khắc phục tình trạng tác động sự kiện vào html dynamic (html được sinh ra dựa vào js)
    $('.result').on('click', '.show2', function(){
        alert('Bạn vừa click vào nút thứ 2');
    });

    
  
});