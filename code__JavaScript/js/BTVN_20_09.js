var preloader;
window.onload = function () {
    preloader = document.querySelector('.preloader');
    if (preloader !== null){
        preloader.style.opacity = 0;
        setTimeout(function(){
            preloader.style.display = 'none';
        },1000);
    }

    var backToTop;
    backToTop =document.querySelector('.back-to-top');
    window.onscroll = function(){
      var position = window.scrollY;
      if(position>-10){
          backToTop.style.opacity = 1;
          backToTop.style.display = 'block';
      }else{
        backToTop.style.opacity = 0;
        backToTop.style.display = 'none';
      }
    }

    backToTop.querySelector('li.sp-1').onclick = function(e){
        e.preventDefault();
        window.scrollTo(0,0);
    }
    backToTop.querySelector('li.sp-2').onclick = function(e){
        e.preventDefault();
        window.scrollTo(0,800);
    }
    backToTop.querySelector('li.sp-3').onclick = function(e){
        e.preventDefault();
        window.scrollTo(0,1200);
    }
    backToTop.querySelector('li.sp-4').onclick = function(e){
        e.preventDefault();
        window.scrollTo(0,1700);
    }
    backToTop.querySelector('li.sp-5').onclick = function(e){
        e.preventDefault();
        window.scrollTo(0,2200);
    }
    backToTop.querySelector('li.sp-6').onclick = function(e){
        e.preventDefault();
        window.scrollTo(0,2600);
    }
    backToTop.querySelector('li.sp-7').onclick = function(e){
        e.preventDefault();
        window.scrollTo(0,3000);
    }
}