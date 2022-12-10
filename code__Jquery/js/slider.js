$ = jQuery;

$(document).ready(function(){

    //Tính chiều cao item lớn nhất
    let maxHeightItem = $('.carousel .carousel-inner .item').height();

    //Active slide đầu tiên
    $('.carousel .carousel-inner').children().first().addClass('active');

    //xử lý clone html khi active ở vị trí đầu tiên
    let dataItemArr = [];
    $('.carousel .carousel-inner').children().each(function(){
        let cloneItem = $(this).clone();
        cloneItem.removeClass('active');
        dataItemArr.unshift(cloneItem);
    });

    dataItemArr.forEach(function(item){
        $('.carousel .carousel-inner').prepend(item);
    });

    //Tính tổng chiều rộng của các item

    let itemWidth = $('.carousel').width();
    
    let totalWidthCoursel = 0;
    $('.carousel .carousel-inner').children().each(function(){
       
        $(this).attr('data-width', itemWidth);
        $(this).css('width', itemWidth+'px');
        totalWidthCoursel+=parseFloat(itemWidth);
    });

    // //Set CSS Inline cho carousel-inner
    $('.carousel .carousel-inner').css('transition', 'all 0.4s linear');

    if (totalWidthCoursel>0){
        $('.carousel .carousel-inner').css('width', totalWidthCoursel+'px');
    }

    //Xử lý chuyển slider
    const carouselNext = $('.carousel .carousel-nav .next');
    const carouselPrev = $('.carousel .carousel-nav .prev');

    let currentPosition = null;
    
    $('.carousel .carousel-inner').children().each(function(index){
        if ($(this).hasClass('active')){
            currentPosition = index;
        }
        
    });


    //Tính khoảng cách di chuyển (Đưa vào transform)
    let widthTranslate = 0-currentPosition*itemWidth;
  
     $('.carousel .carousel-inner').css('transform', 'translateX('+widthTranslate+'px)');

    //1. Next slide
    if (carouselNext.length>0){
        carouselNext.on('click', function(){
            let currentPosition = 0;
            let checkActiveLast = false;
            $('.carousel .carousel-inner').children().each(function(index){
                if ($(this).hasClass('active')){
                    currentPosition = index+1;
                    if (index==$('.carousel .carousel-inner').children().length-2){
                        checkActiveLast = true;
                    }
                }
            });

            //Tính khoảng cách di chuyển (Đưa vào transform)
            let widthTranslate = 0-currentPosition*itemWidth;
            $('.carousel .carousel-inner').css('transform', 'translateX('+widthTranslate+'px)');
            
            //Remove current active
            let currentActive = $('.carousel .carousel-inner').find('.active');
            $('.carousel .carousel-inner').find('.active').removeClass('active');

            //Next active
            currentActive.next().addClass('active');

            //Clone các item phía trước và sau item active (chỉ áp dụng nếu active ở đầu tiên hoặc cuối cùng)
            
            if (checkActiveLast){

                $('.carousel .carousel-inner').children().each(function(){
                    let cloneItem = $(this).clone();
                    cloneItem.removeClass('active');
                    $('.carousel .carousel-inner').append(cloneItem);
                });

                let totalCountItem = $('.carousel .carousel-inner').children().length;

                $('.carousel .carousel-inner').css('width', itemWidth*10*totalCountItem+'px');

                $('.carousel .carousel-inner').append(cloneItem);
            
            }
            
        
        });
    }

    //1. Prev slide
    if (carouselPrev.length>0){
        carouselPrev.on('click', function(){
            let currentPosition = null;
            let checkActiveFirst = false;
            
            $('.carousel .carousel-inner').children().each(function(index){
                if ($(this).hasClass('active')){
                   
                    currentPosition = index;

                    if (index==1){
                        checkActiveFirst = true;
                    }
                }
            });

            currentPosition--;

            //Tính khoảng cách di chuyển (Đưa vào transform)
            let widthTranslate = 0-currentPosition*itemWidth;
            console.log(widthTranslate);
            $('.carousel .carousel-inner').css('transform', 'translateX('+widthTranslate+'px)');

            //Remove current active
            let currentActive = $('.carousel .carousel-inner').find('.active');
            $('.carousel .carousel-inner').find('.active').removeClass('active');

            //Prev active
            currentActive.prev().addClass('active');

            if (checkActiveFirst){

                let dataItemArr = [];
                $('.carousel .carousel-inner').children().each(function(){
                    let cloneItem = $(this).clone();
                    cloneItem.removeClass('active');
                    dataItemArr.unshift(cloneItem);
                });

                let totalCountItem = $('.carousel .carousel-inner').children().length;

                $('.carousel .carousel-inner').css('width', itemWidth*10*totalCountItem+'px');

                dataItemArr.forEach(function(item){
                    $('.carousel .carousel-inner').prepend(item);
                });
                
            }
        });
    }
});