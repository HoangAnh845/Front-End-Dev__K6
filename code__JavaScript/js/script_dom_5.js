//onload: sự kiện khi html của trang đã được tải xong

window.onload = function(){
    // var pObject = document.querySelectorAll('p');
    // console.log(pObject);

    var preLoader;
    preLoader = document.querySelector('.preloader');
    if (preLoader!==null){
        preLoader.style.opacity = 0;
    
        setTimeout(function(){
            preLoader.style.display = 'none';
        }, 4000); //400ms
    }

    /*Back to top*/
    var backToTop;
    backToTop = document.querySelector('.back-to-top');
    //Sự kiện onscroll
    window.onscroll = function(){
        var position = window.scrollY;
        if (position>=100){
            backToTop.style.display = 'block';
            backToTop.classList.add('show');
        }else{
            backToTop.classList.remove('show');
            setTimeout(function(){
                backToTop.style.display = 'none';
            }, 400);
           
        }
    }

    //Hành động khi click vào nút back-to-top
    backToTop.querySelector('a').onclick = function(e){
        e.preventDefault(); //Ngăn không cho thẻ a hoạt động
        var scrollToTop = setInterval(function(){
            var position = window.scrollY;

            position-=20; //Dịch chuyển lên trên 20px

            window.scrollTo(0, position);

            console.log(position);

            if (position<=0){
                clearInterval(scrollToTop);
            }
        }, 10);
        
    }

    //Fixed menu khi scroll với điều kiện kéo hết chiều cao header
    var headerInnerHeight = document.querySelector('.header').clientHeight;
   
    window.onscroll = function(){
        var position = window.scrollY;
        if (position>=headerInnerHeight){
            document.querySelector('.header nav').classList.add('fixed');
        }else{
            document.querySelector('.header nav').classList.remove('fixed');
        }
    }
}

