var activeObject = document.querySelector('.active');
activeObject.onclick= function(){
    var menuObject = document.querySelector('.menu ul');
    if (menuObject.style.display == "none"){
        menuObject.style.display = "block";
    }else{
        menuObject.style.display = "none";
    }
};

var fasObject = document.querySelector('.item .fas');
fasObject.onclick= function(){
    var itemObject = document.querySelector('.item');
//    var hihi = itemObject.this
    if (this.style.opacity == "none"){
        this.style.opacity = "block";
    }else{
        this.style.opacity = "none";
    }
};