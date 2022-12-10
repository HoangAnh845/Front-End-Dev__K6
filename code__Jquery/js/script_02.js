$ = jQuery;
$(document).ready(function(){

    $('.btn').on('click', function(){
        
        if (!$(this).hasClass('show')){
            $(this).text('Ẩn');
            $(this).addClass('show');
            $('.result').css('display', 'block');
        }else{
            $(this).text('Hiện');
            $(this).removeClass('show');
            $('.result').css('display', 'none');
        }
        
    });

    let count = 0;
    $('.add').on('click', function(){
        count++;
        let pHtml = `<p>Giá trị: ${count}</p>`;
        //$('.list-content').append(pHtml); //thêm xuống dưới
        $('.list-content').prepend(pHtml); //Thêm lên đầu
    });

    $('.attr').on('click', function(){
        $(this).attr('data-id', "unicode"); //thêm thuộc tính
        let age = $(this).attr('data-age'); //lấy giá trị thuộc tính
        console.log(age);
    });

    $('.username').on('change', function(){
        let username = $(this).val();  //Lấy dữ liệu value của input
        //let username = $(this).attr('value'); //Chỉ lấy giá trị của thuộc tính có sẵn (Không lấy được dữ liệu khi người dùng nhập vào)
        console.log(username);
    });

    $('.update-value').on('click', function(){
        //$('.username').val('Hoàng An Unicode');
        $('.username').attr('value', 'Hoàng An Unicode');
    });

    let index = 0;
    $('.add-new').on('click', function(){
        index++;
        let pHtml = `<p>Phần tử thứ: ${index} - <span class="remove" style="color: red; cursor: pointer;">Xoá</span> -  <span class="duplicate" style="color: blue; cursor: pointer;">Nhân bản</span></p>`;
        $('.list-do').append(pHtml);
    });

    $('.list-do').on('click', '.remove', function(){
        $(this).parent().remove();
    })

    $('.list-do').on('click', '.duplicate', function(){
        let cloneObject = $(this).parent().clone();
        console.log(cloneObject);
        
        $('.list-do').append(cloneObject);
        
    });

    $('.get-size').on('click', function(){
        let width = $('.block').width();
        let height = $('.block').height();
        console.log(width);
        console.log(height);
    });

});