/*
- Các tài nguyên slide phải được lấy từ html (không fix dữ liệu trong js)
- html thể hiện được:
+ item (ảnh)
+ nav (Nút mũi tên next, prev)
+ dots (Dấu chấm xác định ví của item)
*/

var carouselObject, innerAllItem, carouseNavHtml, carouselDotHtml, carouselItemsObject, currentIndex, nextItemObject, prevItemObject, carouselDotObject, prevIndex, autoSlide, carouselObjectAll;

carouselObjectAll = document.querySelectorAll('.unicode-carousel');

for (var indexSlide = 0; indexSlide < carouselObjectAll.length; indexSlide++){

    carouselObject = carouselObjectAll[indexSlide];

    if (carouselObject!==null){

        //Create object all items carousel
        carouselItemsObject = carouselObject.children;
      
        //Add class active to first item
        if (carouselItemsObject!==null){
            carouselItemsObject[0].classList.add('active');
        }
    
        //Add class slide-wrapper
        carouselObject.classList.add('slide-wrapper'); //add class slide-wrapper vào div wrapper
    
        //add div có class .slide-inner xung quanh tất cả item của slide
        innerAllItem = carouselObject.innerHTML;
        
        innerAllItem = '<div class="slide-inner">'+innerAllItem+'</div>';
    
        //add carousel nav
        carouseNavHtml = `<div class="slide-nav">
            <span class="nav-prev">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </span>
            <span class="nav-next">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </span>
        </div>`;
    
        innerAllItem+=carouseNavHtml;
    
        //add carousel dots
        if (carouselItemsObject!==null){
            carouselDotHtml = `<div class="slide-dots">`;
    
            for (var index = 0; index < carouselItemsObject.length; index++){
                if (index==0){
                    carouselDotHtml+=`<span class="dot active" data-position="${index}"></span>`;
                }else{
                    carouselDotHtml+=`<span class="dot" data-position="${index}"></span>`;
                }
            
            }
    
            carouselDotHtml+=`</div>`;   
        }
    
        innerAllItem+= carouselDotHtml;
        
        carouselObject.innerHTML = innerAllItem;
    
        //Xử lý chuyển slide
        
        carouselItemsObject = carouselObject.querySelector('.slide-inner').children;
    
        if (carouselItemsObject!==null){
            for (var index = 0; index<carouselItemsObject.length; index++){
                //console.log(carouselItemsObject[index]);
                if (carouselItemsObject[index].classList.contains('active')){
                    currentIndex = index;
                    break;
                }
            }
        }
    
        //Hàm focusSlide(prevIndex, nextIndex) sẽ chuyển slide đến vị trí mong muốn
        function focusSlide(prevIndex, nextIndex){
    
            //Remove active: Xoá class active của item hiện tại
            if (carouselItemsObject[prevIndex].classList.contains('active')){
                carouselItemsObject[prevIndex].classList.remove('active')
            }
    
            //Remove active dot
            if (carouselDotObject!==null){
    
                if (carouselDotObject[prevIndex].classList.contains('active')){
                    carouselDotObject[prevIndex].classList.remove('active');
                }
                
            }
    
            //Add active: Thêm class active vào item tiếp theo
            carouselItemsObject[nextIndex].classList.add('active');
            
            //Add active dot: thêm class active vào dot tương ứng
            if (carouselDotObject!==null){
                carouselDotObject[nextIndex].classList.add('active');
            }
        }
    
        //Next slide
    
        carouselDotObject = carouselObject.querySelectorAll('.slide-dots .dot');
        
        nextItemObject = carouselObject.querySelector('.slide-nav .nav-next');
        if (nextItemObject!==null){
            nextItemObject.addEventListener('click', function(){
    
                //Dừng chế độ auto play
                autoSlide = clearInterval(autoSlide);
    
                prevIndex  = currentIndex; //index hiện tại
    
                currentIndex++; //index mới
    
                if (currentIndex>=carouselItemsObject.length){
                    currentIndex = 0;
                }   
                
                focusSlide(prevIndex, currentIndex); //Chuyển slide đến vị trí currentIndex
                   
            });
        }
    
        //Prev slide
        prevItemObject = carouselObject.querySelector('.slide-nav .nav-prev');
        if (prevItemObject!==null){
            prevItemObject.addEventListener('click', function(){
    
                //Dừng chế độ auto play
                autoSlide = clearInterval(autoSlide);
    
                prevIndex = currentIndex; //index cũ
    
                currentIndex--; //index mới
    
                if (currentIndex<0){
                    currentIndex = carouselItemsObject.length-1;
                }
    
                focusSlide(prevIndex, currentIndex);
    
            });
        }
    
    
    
        //Focus carousel by dot
        if (carouselDotObject!==null){
            for (var index = 0; index < carouselDotObject.length; index++){
                carouselDotObject[index].addEventListener('click', function(e){
            
                   prevIndex = currentIndex; //index cũ 
                    
                   currentIndex = this.dataset.position; //currentIndex mới
                    
                   focusSlide(prevIndex, currentIndex);
    
                });
            }
        }
    
        //Auto Slide
    
        function autoPlaySlide(){
            prevIndex = currentIndex;
            currentIndex++;
    
            if (currentIndex>=carouselItemsObject.length){
                currentIndex = 0;
            }   
    
            focusSlide(prevIndex, currentIndex);
        }
    
        autoSlide = setInterval(autoPlaySlide, 4000);

        nextItemObject.addEventListener('mouseout', function(){
            
            if (typeof autoSlide==='undefined'){
                autoSlide = setInterval(autoPlaySlide, 4000);
            }
            
        });

        prevItemObject.addEventListener('mouseout', function(){
            
            if (typeof autoSlide==='undefined'){
                autoSlide = setInterval(autoPlaySlide, 4000);
            }
            
        });
        
    }
}

/*
Ý tưởng xử lý phần dừng tự động chạy slide
- Khi click vào nút next, prev => clearInterval để dừng lại. Tuy nhiên cần gán giá trị của clearInterval() như đoạn code sau:

autoSlide = clearInterval(autoSlide);

Lúc này autoSlide sẽ trả về giá trị undefined sau khi clearInterval() xong

- Khi di chuyển chuột ra khỏi nút next, prev ta thực hiện setInterval, tuy nhiên ta cần check biến autoSlide chỉ set nếu autoSlide=undefined. Như đoạn code sau:

if (typeof autoSlide==='undefined'){
    autoSlide = setInterval(autoPlaySlide, 4000);
}

Tại sao phải làm vậy?
Do sự kiện onmouseover, onmouseout, onmousemove rất dễ gây nhầm lẫn do tác động chuột tuỳ vào từng người nên ta nên check biến autoSlide trước khi setInterval()
*/
