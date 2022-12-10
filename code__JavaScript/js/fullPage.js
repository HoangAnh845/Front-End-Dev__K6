/*
Ví dụ về cách sử dụng thư viện:
document.querySelector('#selector').fullPage();
*/

//Định nghĩa thư viện
HTMLElement.prototype.fullPage = function (options={}) {

    var timeDuration = 500; //0.5s

    var dotPosition = 'center';

    if (typeof options.timeDuration!=='undefined'){
        timeDuration = options.timeDuration; 
    }

    if (typeof options.dotPosition!=='undefined'){
        dotPosition = options.dotPosition;
    }

    var timeDurationConvert = timeDuration/1000;

    //Auto add class to fullPage
    var currentFullPageOj = this; //dom object
    if (currentFullPageOj !== null) {

        currentFullPageOj.classList.add('fullpage-wrapper');

        //Render innner item
        var fullPageInner = `<div class="fullpage-inner" style="transform: translateY(0); transition: all ${timeDurationConvert}s linear;">`;
        fullPageInner += currentFullPageOj.innerHTML
        fullPageInner += `</div>`;

        currentFullPageOj.innerHTML = fullPageInner;

        //Get All Item
        var fullPageItems = currentFullPageOj.querySelector('.fullpage-inner').children;

        if (fullPageItems !== null) {

            //Render Dot

            var classPostionDot = 'center';
            var allowedPostion = ['top', 'center', 'bottom'];
            if (allowedPostion.indexOf(dotPosition)>=0){
                classPostionDot = dotPosition;
            }

            var dotHtml = `<div class="fullpage-dots ${classPostionDot}">`;

            var postionItem = 0;

            for (var index = 0; index < fullPageItems.length; index++) {
                if (index == 0) {
                    dotHtml += `<span class="active" data-page="${index}"></span>`;

                    fullPageItems[0].classList.add('active');

                } else {
                    dotHtml += `<span data-page="${index}"></span>`;
                }

                //Set thuộc tính data-page cho từng page item
                fullPageItems[index].setAttribute('data-page', index);

                //Lấy chiều cao từng page item
                var itemHeight = fullPageItems[index].offsetHeight; //Dùng offsetHeight để lấy chiều cao không ảnh hưởng bởi border
                fullPageItems[index].dataset.height = itemHeight;



                fullPageItems[index].id = 'section-'+(index+1);
            }

            dotHtml += `<div>`;

            currentFullPageOj.innerHTML += dotHtml;
        }

        //Tác động scroll
        setTimeout(function () {
            window.scrollTo({
                top: 0,
                left: 0
            });

            //currentFullPageOj.style.display = 'block';

        }, 500);

        //Xử lý click vào dots
        var fullPageDotItemObject = currentFullPageOj.querySelectorAll('.fullpage-dots span');

        var currentPosition = 0;

        if (fullPageDotItemObject !== null) {

            fullPageDotItemObject.forEach(function (dotItem) {
                dotItem.addEventListener('click', function () {
                    var pageSelected = this.dataset.page;

                    var pageActiveObject = currentFullPageOj.querySelector('.fullpage-inner .active');

                    //Xoá active
                    if (pageActiveObject !== null) {
                        pageActiveObject.classList.remove('active');
                    }

                    //Thêm active vào vị trí tương ứng
                    var pageFocusObject = currentFullPageOj.querySelector('[data-page="' + pageSelected + '"]');
                    if (pageFocusObject !== null) {
                        pageFocusObject.classList.add('active');
                    }

                    //Active dots
                    var dotActiveObject = currentFullPageOj.querySelector('.fullpage-dots span.active');
                    if (dotActiveObject !== null) {
                        dotActiveObject.classList.remove('active');
                    }

                    this.classList.add('active');

                    //Xử lý chuyển trang
                    var totalHeight = 0;
                    for (var pageIndex = 0; pageIndex < fullPageItems.length; pageIndex++) {
                        totalHeight += parseFloat(fullPageItems[pageIndex].dataset.height);

                        if (pageSelected - 1 >= 0) {
                            if (pageSelected - 1 == pageIndex) {
                                break;
                            }
                        } else {
                            totalHeight = 0;
                            break;
                        }

                    }

                    var fullPageInnerObject = currentFullPageOj.querySelector('.fullpage-inner');

                    if (fullPageInnerObject !== null) {
                        var totalHeightStyle = (currentPosition - totalHeight);

                        fullPageInnerObject.style.transform = 'translateY(' + totalHeightStyle + 'px)';

                    }

                    //Thay đổi url
                    var idItem = fullPageItems[pageSelected].id;

                    var urlPush = window.location.origin+window.location.pathname+'#'+idItem;

                    console.log(urlPush);
                    
                    window.history.pushState({path: urlPush}, '', urlPush);
                });
            });


        }

        //Khi load trang, có hash (#) trên url
        var currentUrlHash = window.location.hash;
        
        if (currentUrlHash!==''){
            var currentPageObject = currentFullPageOj.querySelector(currentUrlHash);
            if (currentPageObject!==null){
                var pageSelected = currentPageObject.dataset.page;
                
                var pageActiveObject = currentFullPageOj.querySelector('.fullpage-inner .active');
    
                        //Xoá active
                        if (pageActiveObject !== null) {
                            pageActiveObject.classList.remove('active');
                        }
    
                        //Thêm active vào vị trí tương ứng
                        var pageFocusObject = currentFullPageOj.querySelector('[data-page="' + pageSelected + '"]');
                        if (pageFocusObject !== null) {
                            pageFocusObject.classList.add('active');
                        }

                        //Active dots
                        var dotActiveObject = currentFullPageOj.querySelector('.fullpage-dots span.active');
                        if (dotActiveObject !== null) {
                            dotActiveObject.classList.remove('active');
                        }
                        
                        var dotObject = currentFullPageOj.querySelector('.fullpage-dots span[data-page="'+pageSelected+'"]');
                       
                        if (dotObject!==null){
                            dotObject.classList.add('active');
                        }
                        
                    
                        //Xử lý chuyển trang
                        var totalHeight = 0;
                        for (var pageIndex = 0; pageIndex < fullPageItems.length; pageIndex++) {
                            totalHeight += parseFloat(fullPageItems[pageIndex].dataset.height);
    
                            if (pageSelected - 1 >= 0) {
                                if (pageSelected - 1 == pageIndex) {
                                    break;
                                }
                            } else {
                                totalHeight = 0;
                                break;
                            }
    
                        }
    
                        var fullPageInnerObject = currentFullPageOj.querySelector('.fullpage-inner');
    
                        if (fullPageInnerObject !== null) {
                            var totalHeightStyle = (currentPosition - totalHeight);
    
                            fullPageInnerObject.style.transform = 'translateY(' + totalHeightStyle + 'px)';
    
                        }
            }
        }
        

        var lastTime = 0;
        var pageSelected = 0;

        var position = 0;
        window.addEventListener('touchstart', function(e){
            position = e.changedTouches[0].pageY;
        });

        window.addEventListener('touchmove', function(e){

            var currentTime = new Date().getTime();
            
            if (currentTime-lastTime>=timeDuration && pageSelected<fullPageItems.length && pageSelected>=0){
                if (e.changedTouches[0].pageY<position){
                    if (pageSelected<fullPageItems.length-1){
                        pageSelected++;
                    }
                    
                }else{
                    if (pageSelected>0){
                        pageSelected--;
                    }
                }
                
                console.log(pageSelected);
            }

            lastTime = currentTime;
            
            var pageActiveObject = currentFullPageOj.querySelector('.fullpage-inner .active');

                    //Xoá active
                    if (pageActiveObject !== null) {
                        pageActiveObject.classList.remove('active');
                    }

                    //Thêm active vào vị trí tương ứng
                    var pageFocusObject = currentFullPageOj.querySelector('[data-page="' + pageSelected + '"]');
                    if (pageFocusObject !== null) {
                        pageFocusObject.classList.add('active');
                    }

                     //Active dots
                     var dotActiveObject = currentFullPageOj.querySelector('.fullpage-dots span.active');
                     if (dotActiveObject !== null) {
                         dotActiveObject.classList.remove('active');
                     }
                     
                     var dotObject = currentFullPageOj.querySelector('.fullpage-dots span[data-page="'+pageSelected+'"]');
                    
                     if (dotObject!==null){
                         dotObject.classList.add('active');
                     }

                    //Xử lý chuyển trang
                    var totalHeight = 0;
                    for (var pageIndex = 0; pageIndex < fullPageItems.length; pageIndex++) {
                        totalHeight += parseFloat(fullPageItems[pageIndex].dataset.height);

                        if (pageSelected - 1 >= 0) {
                            if (pageSelected - 1 == pageIndex) {
                                break;
                            }
                        } else {
                            totalHeight = 0;
                            break;
                        }

                    }

                    var fullPageInnerObject = currentFullPageOj.querySelector('.fullpage-inner');

                    if (fullPageInnerObject !== null) {
                        var totalHeightStyle = (currentPosition - totalHeight);

                        fullPageInnerObject.style.transform = 'translateY(' + totalHeightStyle + 'px)';

                    }

            
                    //Thay đổi url
                    var idItem = fullPageItems[pageSelected].id;

                    var urlPush = window.location.origin+window.location.pathname+'#'+idItem;

                    console.log(urlPush);
                    
                    window.history.pushState({path: urlPush}, '', urlPush);

        });

        window.addEventListener('wheel',function(e){
            
            var currentTime = new Date().getTime();

            if (currentTime-lastTime>=timeDuration && pageSelected<fullPageItems.length && pageSelected>=0){
                if (e.deltaY>0){
                    if (pageSelected<fullPageItems.length-1){
                        pageSelected++;
                    }
                    
                }else{
                    if (pageSelected>0){
                        pageSelected--;
                    }
                }
                
                console.log(pageSelected);
            }

            lastTime = currentTime;

            var pageActiveObject = currentFullPageOj.querySelector('.fullpage-inner .active');

                    //Xoá active
                    if (pageActiveObject !== null) {
                        pageActiveObject.classList.remove('active');
                    }

                    //Thêm active vào vị trí tương ứng
                    var pageFocusObject = currentFullPageOj.querySelector('[data-page="' + pageSelected + '"]');
                    if (pageFocusObject !== null) {
                        pageFocusObject.classList.add('active');
                    }

                     //Active dots
                     var dotActiveObject = currentFullPageOj.querySelector('.fullpage-dots span.active');
                     if (dotActiveObject !== null) {
                         dotActiveObject.classList.remove('active');
                     }
                     
                     var dotObject = currentFullPageOj.querySelector('.fullpage-dots span[data-page="'+pageSelected+'"]');
                    
                     if (dotObject!==null){
                         dotObject.classList.add('active');
                     }

                    //Xử lý chuyển trang
                    var totalHeight = 0;
                    for (var pageIndex = 0; pageIndex < fullPageItems.length; pageIndex++) {
                        totalHeight += parseFloat(fullPageItems[pageIndex].dataset.height);

                        if (pageSelected - 1 >= 0) {
                            if (pageSelected - 1 == pageIndex) {
                                break;
                            }
                        } else {
                            totalHeight = 0;
                            break;
                        }

                    }

                    var fullPageInnerObject = currentFullPageOj.querySelector('.fullpage-inner');

                    if (fullPageInnerObject !== null) {
                        var totalHeightStyle = (currentPosition - totalHeight);

                        fullPageInnerObject.style.transform = 'translateY(' + totalHeightStyle + 'px)';

                    }

            
                    //Thay đổi url
                    var idItem = fullPageItems[pageSelected].id;

                    var urlPush = window.location.origin+window.location.pathname+'#'+idItem;

                    console.log(urlPush);
                    
                    window.history.pushState({path: urlPush}, '', urlPush);
           
            // return false;
            
        });
        
    }

}