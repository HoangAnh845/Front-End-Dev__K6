window.addEventListener('DOMContentLoaded', function(){
    new WOW().init(); //khởi tạo thư viện wowjs
});


document.querySelector('.action').addEventListener('click', function(){
    if (!document.querySelector('.editor').classList.contains('enable-editior')){
        document.querySelector('.editor').setAttribute('contenteditable', true);
        document.querySelector('.editor').classList.add('enable-editior');
        document.querySelector('.editor').innerHTML = 'Hãy viết gì đó...';
        this.innerText = 'Disable Editor';
    }else{
        document.querySelector('.editor').removeAttribute('contenteditable');
        document.querySelector('.editor').classList.remove('enable-editior');
        this.innerText = 'Enable Editor';
    }
   
});

//Kéo thả thành phần trong Javascript
window.addEventListener('DOMContentLoaded', function(){
    var positionLeft=0, positionTop=0, postionTmpLeft = 0, positionTmpTop = 0;
    var elementObject = document.querySelector('.element');
    if (elementObject!==null){

        var isMove = false;
        elementObject.addEventListener('mousedown', function(){
            isMove = true;
        });

        elementObject.addEventListener('mousemove', function(){
            if (isMove){
                elementObject.setAttribute('draggable', true); //Kích hoạt chế độ kéo thành phần
            }
        });

        

        //Gán giá trị ban đầu cho positionLeft và positionTop

        var checkLeft = false;
        var checkTop = false;

        elementObject.addEventListener('drag', function(e){
            
            this.style.cursor = 'move';

            //Chỉ gán 1 lần, nếu postionTmpLeft>0 hoặc positionTmpTop>0 thì dừng lại
            if (postionTmpLeft==0 && !checkLeft){
                postionTmpLeft = e.clientX;
                checkLeft = true;
            }

            if (positionTmpTop==0 && !checkTop){
                positionTmpTop = e.clientY;
                checkTop = true;
            }

            //  console.log('postionTmpLeft: '+postionTmpLeft);
            // console.log('positionTmpTop: '+positionTmpTop);

            // console.log('Client X: '+e.clientX);
            // console.log('Client Y: '+e.clientY);
            positionLeft = e.clientX - postionTmpLeft;
            positionTop = e.clientY - positionTmpTop;

            console.log('Position Left: '+positionLeft);
            console.log('Position Top: '+positionTop);

            if (positionLeft>0 && positionTop>0){
                this.style.left = positionLeft+'px';
                this.style.top = positionTop+'px';
            }
            
        });

        elementObject.addEventListener('mouseup', function(){
            elementObject.removeAttribute('draggable'); 
        });

        
    }
});