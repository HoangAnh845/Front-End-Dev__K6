$ = jQuery;
$(document).ready(function(){
    $('#checkAll').on('change', function(){

        if ($(this).prop('checked')){
            //$('.check-item').attr('checked', 'checked'); //check tất cả item
            $('.check-item').prop('checked', 'checked');
        }else{
            
           // $('.check-item').removeAttr('checked'); //uncheck tất cả item
           $('.check-item').prop('checked', false); 
          
        }
        
    });

    //let liObject = $('.block').find('li');
    //let liObject = $('.block').children('ul');
    //console.log(liObject);

    //let parentObject = $('.target').parent('ul');
    // let parentObject = $('.target').parents('.block-2');
    // console.log(parentObject);

    //$('.block-3 p').append('Unicode');

    let dataArr = [
        'Giá trị 1',
        'Giá trị 2',
        'Giá trị 3',
        'Giá trị 4'
    ];

    $('.block-3 p').each(function(index){
        
        let newP = (index+1) + ': '+$(this).text()+ ' - '+dataArr[index];

        $(this).text(newP);
    });

    let block3 = $('.block-4');

    if (block3.length>0){
        block3.html();
    }else{
        console.log('Không tồn tại selector');
    }

    $('.btn').on('click', function(){
        if (!$(this).hasClass('show')){
            $(this).addClass('show');
            $('.result').show(2000);
        }else{
            $(this).removeClass('show');
            $('.result').hide(3000);
        }
    });

    $('.btn-fadeout').on('click', function(){
        $('.result-fade').fadeOut(2000);
    });

    $('.btn-fadein').on('click', function(){
        $('.result-fade').fadeIn(3000);
    });

    $('.remove-item').on('click', function(){
        
        let currentDelete = $(this).parents('p');
        //currentDelete.fadeOut();
        currentDelete.slideUp(400, function(){
            currentDelete.remove();
        });
        // setTimeout(function(){
        //     currentDelete.remove();
        // }, 400);
        
    });

    $('.btn-up').on('click', function(){
        
        $('.result-slide').slideUp(2000);
    });

    $('.btn-down').on('click', function(){
    
        $('.result-slide').slideDown(3000);
    });

    $('.btn-toggle').on('click', function(){
        $('.result-toggle').toggle('slide', function(){
           // alert('Xử lý xong');
        });
    })

    $('.btn-slide-toggle').on('click', function(){
        $('.result-slide-toggle').slideToggle(3000);
    });

    $('.menu-toggle-btn').on('click', function(){
        if (!$(this).hasClass('show')){
            $('.menu-toggle').css('width', '100%');
            $(this).addClass('show');
        }else{
            $('.menu-toggle').css('width', '0');
            $(this).removeClass('show');
        }
        
    });

    $('.run-animation').on('click', function(){
        $('.block-animation').animate({
            width: "+=100",
            height: "+=100",
            left: "+=10"
        }, 400);
    });

    let aboutPosition = $('#heading-2').offset().top;
    console.log(aboutPosition);

    $(window).on('scroll', function(){
       let position = $(this).scrollTop();
       if (position>100){
           $('.back').fadeIn();
       }else{
        $('.back').fadeOut();
       }
    });

    $('.back').on('click', function(){
        $('html').animate({
            scrollTop: 0
        }, 2000);
    });

});