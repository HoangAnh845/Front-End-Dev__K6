var str = 'Học lập trình Front-End';
console.log(str);

var number = 10;

try{

    if (number<=10){
        throw new Error('Lỗi number <= 10');
    }

    showMessage(); //Gặp lỗi, tất cả code phía sau không chạy

}catch(exception){
    var mess = exception.message;
    if (mess!=' '){
        if (mess.indexOf('defined')>=0){
            console.error('Đã có lỗi xảy ra. Kiểm tra ngay lập tức');
            console.error(mess);
        }else{
            console.warn('Kiểm tra và khắc phục cảnh báo sau');
            console.warn(mess);
        }
        
    }

    //console.warn('Lỗi cảnh báo');
}
// finally{
//     console.log('Chương trình kết thúc');
// }

document.querySelector('body').style.background = 'red';