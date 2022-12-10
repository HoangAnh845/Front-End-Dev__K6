$(document).ready(function(){

    // $('.text').hover(function(){
    //    $(this).animate({
    //     height: '+=100'
    //    }, 500);
    // }, function(){
    //     $(this).animate({
    //         height: '-=50'
    //        }, 500);
    // });

    $('.play').on('click', function(){
        $('.text').animate({
            height: '+=200'
        }, 2000);
    });


    $('.stop').on('click', function(){
        $('.text').stop(); //tạm dừng hiệu ứng
    });

    let lengthItem = $('.block').children().length;
    let count = 0;
    let currentActive = null;
    $('.next').on('click', function(){
        count++;
        currentActive = $('.block .active');
        console.log(currentActive);
        currentActive.removeClass('active');
       
        if (count<lengthItem){
            currentActive.next().addClass('active');
        }else{
            $('.block').children().first().addClass('active');
            count = 0;
        }
    });

    let countPrev = lengthItem;

    //Hàm prev(), last()
    
    //$('.block').children().last().addClass('active');
    //$('.block .active').prev().addClass('active');
    
    // $('.prev').on('click', function(){
    //     countPrev--;
    //     currentActive = $('.block .active');
    //     //console.log(currentActive);
    //     currentActive.removeClass('active');
    //     if (countPrev<0){
    //         countPrev = lengthItem;
    //     }

    //     console.log(countPrev);
    //     // if (countPrev<lengthItem){
    //     //     currentActive.prev().addClass('active');
    //     // }else{
    //     //     $('.block').children().end().addClass('active');
    //     //     countPrev = lengthItem;
    //     // }
    // });

});