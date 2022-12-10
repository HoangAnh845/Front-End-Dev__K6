$ = jQuery;
$(document).ready(function(){

    //Click vào nút add
    $('#myDIV form').on('submit', function(e){
        e.preventDefault(); //ngăn tình trạng submit form
        
        let inputValue = $('#myInput').val().trim();

        if (inputValue!==''){
            let liHtml = `<li>${inputValue} <span class="close">×</span></li>`;
            //let currentHtml = $('#myUL').html();
            $('#myUL').append(liHtml);
            $('#myInput').val('');
        }
    });

    //Click vào nút xoá công việc
    $('#myUL').on('click', '.close', function(){
        if (confirm('Bạn có chắc chắn muốn xoá?')){
            $(this).parent().remove();
        }
    });

    //Click vào tên công việc
    $('#myUL').on('click', 'li', function(){
    //    $(this).css({
    //     'background': '#888',
    //     'color': '#fff',
    //     'text-decoration': 'line-through',
    //    });

        if (!$(this).hasClass('checked')){
            $(this).addClass('checked');
        }else{
            $(this).removeClass('checked');
        }
       
    });


});