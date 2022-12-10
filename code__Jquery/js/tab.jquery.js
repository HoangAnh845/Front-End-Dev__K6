"use strict";

//Nội dung plugin jQuery
$ = jQuery;
console.log('Plugin Tabs jQuery');
$(document).ready(function(){
    $.fn.extend({

        tab: function(options){

    
            $(window).on('load', function(){
                $('.tabs').show(); //Hiển thị tab khi load xong
            });

            const $listTabObject = $(this);

            //Xử lý options
            options = options || {};

            let animate = false;
            let animateType = 'default';
            let speed = 'default';
            let style = true;

            if (Object.keys(options).length>0){

                if (options.animate!==undefined){
                    animate = options.animate;
                }

                if (options.animateType!==undefined){
                    animateType = options.animateType;
                }

                if (options.speed!==undefined){
                    speed = options.speed;
                }

                if (options.style!==undefined){
                    style = options.style;
                }
            }
            
            
            if (speed=='default'){
                speed = 400; 
            }
            
            //Kiểm tra và đọc từng tab
            if ($listTabObject.length>0){

                let htmlStyle = `<style type="text/css">/*Style by tab Plugin jQuery -- Begin*/\n`

                $listTabObject.each(function(){
                    const $currentTab = $(this);
                    if ($currentTab.length>0){

                        const $optionsApply = {
                            animate: animate,
                            animateType: animateType,
                            speed: speed,
                            style: style
                        };

                        let currentId = $currentTab.attr('id');
                        if (currentId==undefined){
                            currentId = 'tabs_'+Math.random().toString().replace(/\./g, '');

                            $currentTab.attr('id', currentId);
                        }

                        //Thêm CSS cho từng tab
                        if (style==true){
                           htmlStyle+=customTab.style(currentId);
                        }
                        
                        customTab.run($currentTab, $optionsApply);
                    }
                });

                htmlStyle+=`\n/*Style by tab Plugin jQuery -- End*/\n</style>`;
                $('head').append(htmlStyle);
            }
        }
    });

    //Định nghĩa tab và tương tác sự kiện
    const customTab = {
        run: function($currentTabObject, $options){

            const $tabNavItem = $currentTabObject.find('.tabs__nav li a');

            const $tabContentItem = $currentTabObject.find('.tabs--panel');

            let allowSpeed = [
                'slow', 'fast'
            ];

            let speedValue = null;
           
            if (allowSpeed.indexOf($options.speed)!==-1){
                
                speedValue = $options.speed;
            
            }else{
                $options.speed = Number($options.speed);
                if (!isNaN($options.speed)){
                    speedValue = $options.speed;
                }
            }

            if ($tabNavItem.length>0 && $tabContentItem.length>0){
                $tabNavItem.on('click', function(e){
                    e.preventDefault();
                    let hash = $(this).attr('href');
                    
                    //Remove active nav
                    $tabNavItem.parent('li').removeClass('active');
        
                    //Add active current
                    $(this).parent('li').addClass('active');
        
                    //Animation

                    if ($options.animate==true){

                        if ($options.animateType=='fade'){

                            $tabContentItem.parent().find('.active').fadeOut(speedValue, function(){
                                //Remove active tab content
                                $tabContentItem.removeClass('active');
                
                                $tabContentItem.parent().find(hash).fadeIn(speedValue, function(){
                                    //Add active current
                                    $tabContentItem.parent().find(hash).addClass('active');
                                });
                            });
                        }else if ($options.animateType=='slide'){
                            $tabContentItem.parent().find('.active').slideUp(speedValue, function(){
                                //Remove active tab content
                                $tabContentItem.removeClass('active');
                
                                $tabContentItem.parent().find(hash).slideDown(speedValue, function(){
                                    //Add active current
                                    $tabContentItem.parent().find(hash).addClass('active');
                                });
                            });
                        }else{
                            //Remove active tab content
                            $tabContentItem.removeClass('active');

                             //Add active current
                            $tabContentItem.parent().find(hash).addClass('active');
                        }


                    }else{
                        //Remove active tab content
                       $tabContentItem.removeClass('active');

                        //Add active current
                       $tabContentItem.parent().find(hash).addClass('active');
                    }

                    
                    
                });
            }
        },

        style: function(selectorId){
            const styleContent = `#${selectorId} .tabs__nav{background:brown}#${selectorId} .tabs__nav ul{list-style:none;font-size:0}#${selectorId} .tabs__nav ul li{display:inline-block}#${selectorId} .tabs__nav ul li a{color:#fff;text-decoration:none;display:block;padding:5px 10px;font-size:14px}#${selectorId} .tabs__nav ul li+li a{border-left:1px solid #fff}#${selectorId} .tabs__nav ul li a:hover,#${selectorId} .tabs__nav ul li.active a{background:green}#${selectorId} .tabs__content{padding:10px;border:1px solid #ddd}#${selectorId} .tabs__content .tabs--panel{display:none}#${selectorId} .tabs__content .tabs--panel.active{display:block}`;

            return styleContent;
        }
    };
});