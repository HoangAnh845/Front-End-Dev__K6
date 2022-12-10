function showMess(){
    console.log('Hiển thị thông báo');
}

function showNumber(callbackFunc, ...args){
   // console.log(args);
    setTimeout(function(){
        console.log('Hiển thị số nguyên');
        try{
            if (typeof callbackFunc=='function'){
                callbackFunc(...args); //gọi hàm được truyền từ tham số
            }else{
                throw new Error('Tham số thứ nhất phải là function');
            }
        }catch(exception){
            console.error(exception.message);
        }
       

    }, 1000);
    
}

showNumber(function(str, age, location){
    console.log('Test function callback');
    console.log(str);
    console.log(age);
    console.log(location);
}, 'Uniode', 30, 'Phú Thọ');

//showMess();