//Tạo hàm trong javascript

//Ví dụ 1: Tính tổng 2 số numberA và numberB với giá trị tương ứng: 10 và 20

// var numberA, numberB, totalAB;

// numberA = 10;
// numberB = 20;

// totalAB = numberA + numberB*2;

// console.log("Total is: " + totalAB);

//Ví dụ 2: Tính tổng 2 số numberA và numberB với giá trị tương ứng: 50 và 100

// numberA = 50;
// numberB = 100;

// totalAB = numberA + numberB*2;

// console.log("Total is 2: " + totalAB);

//1. Hàm không có tham số

function getMessage(){
    //Nội dung hàm
    var number = -10, message;
    if (number>0){
        message = number+" là số dương";
    }else{
        message = number+" là số âm";
    }

    //Lúc này sẽ xảy ra 2 trường hợp 
    //Trường hợp 1: Trả về giá trị của hàm (Hàm này sẽ trả về giá trị giống như 1 biến)
    //=> return function

    return message; //Sau return các câu lệnh sẽ không hoạt động

    //Trường hợp 2: Không về giá trị của hàm (void function)
    //+ Trường hợp 2.1: Không làm gì cả (Ví dụ sau)
    //+ Trường hợp 2.2: In luôn kết quả ra màn hình (Thường sẽ in ra DOM, alert,...)

    //alert(message);
    //console.log(message);
}

// var myMessage = getMessage()+' - Không thể thực hiện';

// console.log(myMessage);

//2. Hàm có tham số

//2.1: Định nghĩa hàm, viết hàm, tạo hàm
function getTotal(numberA, numberB){
    var total = numberA + numberB;
    return total;
}

//2.2: Gọi hàm

var myTotal = getTotal(5, 10);
console.log("Tổng là: " + myTotal);

myTotal = getTotal(50, 100);
console.log("Tổng là: " + myTotal);

/*
1 số thuật ngữ cần nắm rõ
- Biến sử dụng trong hàm vẫn cần khai báo bằng từ khoá var (Ví dụ: var total) => Đây gọi là biến cục bộ (Chỉ được sử dụng ở trong nội bộ hàm, không có tác dụng ở bên ngoài và ở hàm khác)
- Khi định nghĩa hàm: Sẽ có các tham số (Đặt trong dấu ngoặc tròn). Ví dụ: numberA, numberB (Cách sử dụng giống như biến, không cần khai bằng từ khoá var)
- Khi gọi hàm: Cần truyền các giá trị vào hàm (Gọi là tham trị)
- Còn các thuật ngữ sẽ giải thích sau: Tham chiếu
*/

var number1 = 50, number2 = 200;
myTotal = getTotal(number1, number2);
console.log("Tổng là: " + myTotal);

/*
Trong ví dụ trên: number1 và number2 gọi là tham biến
*/

var myTotal = getTotal();
console.log(myTotal);

var messageStr = null; //Global Variable

console.log(messageStr);

function setMessage(msg){
    var messageStr; //Local Variable
    messageStr+= msg;
}

setMessage('Unicode');

console.log(messageStr);

/*
Trong trường hợp hàm setMessage(), biến messageStr được gọi là biến toàn cục (Global Variable)
- Biến toàn cục sẽ được sử dụng khắp mọi nơi (Chỉ cần được khai báo trước khi sử dụng)
- Biến toàn cục sẽ được khai báo bên ngoài hàm
- Muốn sử dụng biến toàn cục trong hàm => Chỉ cần gọi biến đó ra
- Nếu khai báo lại biến toàn cục trong hàm => Biến toàn cục sẽ trở thành biến cục bộ (Local Variable)
*/

//3. Hàm có tham số mặc định

function makeTotal(numberA, numberB=0){
    var total;
    if (numberB==0){
        return "Không thể tính toán"; //Lúc này các câu lệnh phía dưới bị huỷ bỏ
    }
    
    total = numberA+numberB;

    return total;
}

console.log(makeTotal(10, 50));
/*
Hàm có tham số mặc định: Khi gọi hàm có thể bỏ qua và không cần truyền tham trị
- Nếu không truyền tham trị vào tham số có giá trị mặc định => Hàm sẽ lấy giá trị mặc định đã khai báo
- Nếu không khai báo giá trị cho tham số => Bắt buộc phải truyền tham trị, nếu không sẽ bị lỗi hoặc tính toán không chính xác
*/

function getMsg(msg, isDisplay=false){
    if (isDisplay){ //if (variable==true)
        alert(msg);
    }else{
        return msg;
    }
}

/*
Hàm getMsg() sẽ có 2 chức năng
- Chức năng 1: hiển thị luôn thông báo bằng hộp thoại alert() => Nếu isDisplay = true
- Chức năng 2: Trả về giá trị thông báo (return) nếu isDisplay=false hoặc không truyền tham số isDisplay (Bởi vì đã gán mặc định = false)
*/

//getMsg('Unicode Training', true);

///Hàm setTimeout()

console.log('Chương trình chạy luôn');

// function handleSetTimeout(){
//     console.log('Đợi 2 giây chương trình mới chạy');
// }

// setTimeout(function(){
//     console.log('Đợi 2 giây chương trình mới chạy');
//     setTimeout(function(){
//         console.log('Đợi 2 giây tiếp theo chương trình mới chạy');
//     }, 2000);
// }, 2000);

/*
Callback là cách gọi vào hàm khác như 1 tham số
*/

//Hàm setInterval()

// var count = 0;
// var myInterval = setInterval(function(){
//     count++;
//     console.log('Chương trình đang chạy. count='+count);

//     //Thiết lập clearInterval nếu count>=10
//     if (count>=10){
//         clearInterval(myInterval);
//     }
// }, 1000);

