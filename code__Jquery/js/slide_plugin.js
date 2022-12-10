/*
Các plugin jquery hỗ trợ làm slide
+ owl carousel
+ slick
*/

$(document).ready(function(){
    $('#main-slide').owlCarousel({
        loop: true,
        margin: 10,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
//        items: 1,
        dots: true,
        center: true,
  //      startPosition: 1,
  //      URLhashListener: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 1000, 
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav: true
            },
            600:{
                items:2,
                nav: true
            },
            1000:{
                items:4,
                nav: true
            }
        }
    });

    $('#main-slide').on('drag.owl.carousel', function(){
        console.log('bạn vừa vuốt slide');
    });
});