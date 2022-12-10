var menuToggle, menuBox, menuClose, menuBg, downIcon, menuItem, subMenu, subMenuActive;

menuToggle = document.querySelector('.menu-toggle');
menuBox = document.querySelector('.menu-box');
menuClose = document.querySelector('.menu-box .close');
menuBg = document.querySelector('.menu-box .menu-bg');
if (menuToggle!==null){
    menuToggle.addEventListener('click', function(){
        menuBox.style.width = '100%';
    });
}

function closeMenu(){
    if (menuBox!==null && menuBox.style.width=='100%'){
        menuBox.style.width = '0';
    }else{
        console.log('Menu is null'); //Chỉ nên giữa trong quá trình code
    }
}

//Click vào nút close (x)
if (menuClose!==null){
    menuClose.addEventListener('click', function(){
        closeMenu();
    });
}

//Click vào background overlay
if (menuBg!==null){
   menuBg.addEventListener('click', function(){
       closeMenu();
   }) 
}
/*
Nếu đối tượng không phải là form mà vẫn muốn bắt sự kiện từ bàn phím => cần sử dụng document
*/
document.addEventListener('keyup', function(e){
    var keyCode = e.keyCode;
    if (keyCode==27){
        closeMenu();
    }
});

menuItem = document.querySelectorAll('.primary-menu>ul>li');

if (menuItem!==null){
    for (var index = 0; index < menuItem.length; index++){

        menuItem[index].setAttribute('data-index', index);

        subMenu = menuItem[index].querySelector('ul');

        if (subMenu!==null){
            menuItem[index].classList.add('has-children'); //Thêm class vào li có sub menu

            //Tạo node
            downIcon = document.createElement('i');
            downIcon.classList.add('fa');
            downIcon.classList.add('fa-angle-right');
            
            menuItem[index].insertBefore(downIcon, subMenu);
            
            downIcon.addEventListener('click', function(){

                
                var subMenuSelect =  this.parentElement.querySelector('ul');
                if (subMenuSelect!==null){
                    
                   
                    //Đóng tất cả dropdown đang mở
                    subMenuActive = document.querySelector('.primary-menu>ul>li ul.active')

                    //Lấy index của item đang tác động (click)
                    var currentIndex = this.parentElement.getAttribute('data-index');
                    
                    if (subMenuActive!==null){
                        
                        //Lấy index cuả subMenu đang mở
                        var subMenuActiveIndex = subMenuActive.parentElement.getAttribute('data-index');
                       
                        if (currentIndex!==subMenuActiveIndex){
                            subMenuActive.classList.remove('active');
                          
                            subMenuActive.parentElement.querySelector('i').classList.remove('icon-down');
                        }
                      
                    }
                    
                    
                    if (subMenuSelect.classList.contains('active')){
                      
                        subMenuSelect.classList.remove('active');
                       
                        this.classList.remove('icon-down');
                      
                    }else{
                      
                        subMenuSelect.classList.add('active');
                        
                        this.classList.add('icon-down');

                     
                    }
        
                }
            });
        }
    }
}
