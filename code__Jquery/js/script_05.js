$(document).ready(function(){
    $('.set').on('click', function(){
       // $('p').attr('data-training', 'Unicode');
        $('p').data('training', 'Unicode');
    });

    $('.get').on('click', function(){
        //console.log($('p').attr('data-training'));
        //console.log($('p').prop('data-training'));
        console.log($('p').data('training'));
    });
});

/*
set attr => get attr
set data => get data
*/

/*
Ajax jQuery
- js thuần: xmlhttprequest, fetch, axios
- jquery: ajax()
*/

$(document).ready(function(){
    $('.get-data').on('click', function(){
        // $.ajax({
        //     url: 'http://localhost:3000/posts',
        //     type: 'GET',
        //     dataType: 'text', //Kiểu dữ liệu trả về (text, html, json)
        //     beforeSend: function(){
        //         console.log('Đang gửi...');
        //     },
        //     success: function(response){
        //         let objectRes = JSON.parse(response);
        //         console.log(objectRes);
        //     },
        //     error: function(error){
        //         console.log(error);
        //         if (error.status==404){
        //             console.log('Link bị lỗi');
        //         }
        //     }
        // });

        $.get('http://localhost:3000/posts', function(data){
            console.log(data);
        })
    });

    $('#post-form').on('submit', function(e){
        e.preventDefault();
        let titleVal = $(this).find('input[name="title"]').val();  
        let authorVal = $(this).find('input[name="author"]').val();  
        if (titleVal.trim()!=='' && authorVal.trim()!==''){
            $.ajax({
                url: 'http://localhost:3000/posts',
                type: 'POST',
                data: {
                    title: titleVal,
                    author: authorVal
                },
                success: function(response){
                    if (response!==null){
                        alert('Thêm thành công');
                    }
                },

                error: function(error){
                    console.log(error);
                }
            });
        }  
    });

    $( ".block" ).draggable();
});

/*
Các plugin jQuery cần phải học:
- Slider: owl carousel, slick,...
- validate: validate
- gallery: lightbox, fancybox
*/