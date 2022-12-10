/*
<i class="fa fa-angle-down" aria-hidden="true"></i>
*/

var menuItem = document.querySelectorAll('.menu-primary .menu>li');

var iconDown;

if (menuItem!==null){
    for (var index = 0; index < menuItem.length; index++){
        var subMenu = menuItem[index].querySelector('ul');

        if (subMenu!==null){

            iconDown = document.createElement('i');
            iconDown.classList.add('fa');
            iconDown.classList.add('fa-angle-down');

            menuItem[index].insertBefore(iconDown, subMenu);
           
        }

     
    }
  
}