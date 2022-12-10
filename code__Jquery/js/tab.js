$ = jQuery;

$(document).ready(function(){
    const $tabNavItem = $('.tabs .tabs__nav li a');

    const $tabContentItem = $('.tabs .tabs--panel');
    /*
    Quy ước: Đặt tên biến theo cú pháp $tenbien dùng để lưu các object
    => Phân biệt với các kiểu dữ liệu khác
    */
    
    if ($tabNavItem.length>0 && $tabContentItem.length>0){
        $tabNavItem.on('click', function(e){
            e.preventDefault();
            let hash = $(this).attr('href');
            
            //Remove active nav
            $tabNavItem.parent('li').removeClass('active');

            //Add active current
            $(this).parent('li').addClass('active');

            //Animation
            $tabContentItem.parent().find('.active').fadeOut(400, function(){
                //Remove active tab content
                $tabContentItem.removeClass('active');

                $tabContentItem.parent().find(hash).fadeIn(400, function(){
                    //Add active current
                    $tabContentItem.parent().find(hash).addClass('active');
                });
            });
            
        });
    }
});


//Extend dom jquery

// $.fn.extend({
//     tabCustom: function(){
//         return 'Unicode';
//     }
// });

//console.log($('.tabs').tabCustom());