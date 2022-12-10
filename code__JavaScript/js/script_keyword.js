//Từ khoá break
//Từ khoá break sẽ thoát khỏi vòng lặp ngay cả khi vòng lặp chưa chạy xong
/*
Tác dụng của từ khoá break:
- Giải quyết tính đúng của bài toán (Nếu không có break, bài toán sẽ bị sai)
- Bảo toàn vấn đề tối ưu của bài toán, giúp cải thiện hiệu năng, tốc độ
*/

for (var i = 1; i<=10; i++){
    console.log(i);
    if (i==5){
        break; //Thoát khỏi vòng lặp (Dừng vòng lặp)
    }
}

/*
Ví dụ: Tìm số chẵn nhỏ nhất trong danh sách từ 9 => 20
*/
var result;
for (var i = 9; i<=20; i++){
    if (i%2==0){
        result = i;
        break; //Dừng vòng lặp để đảm bảo tính đúng của bài toán
       // i = 20; //Cách này dùng để thay thế break
    }
}

console.log('Số chẵn nhỏ nhất là: '+result);

//Từ khoá continue
/*
Từ khoá contine sẽ bỏ qua vòng lặp để chuyển tới vòng lặp tiếp theo (Nhảy qua bước tiếp theo trong vòng lặp)
Ví dụ: Vòng chạy 10 lần (10 bước), giả sử đến bước thứ 5 chúng ta không muốn thực hiện mà chuyển qua bước thứ 6 luôn => dùng từ khoá continue để bỏ qua
Lưu ý: Nếu muốn bỏ những câu lệnh nào trong vòng lặp, hãy đặt contine phía trước câu lệnh đó
*/

console.log('===Từ khoá continue====');

for (var i = 1; i<=10; i++){

    console.log('Thử lần lặp thứ: '+i);

    if (i==5){
        continue;
    }

    console.log(i);
    console.log('Lần lặp thứ: '+i);
   
}

console.log('===Từ khoá typeof====');
//Từ khoá typeof
/*
Từ khoá typeof sẽ trả về kiểu dữ liệu của 1 biến hoặc 1 hàm (Nếu là hàm return)
*/
var customerName = 'Hoàng An';
console.log(typeof customerName);

var customerAge = 30;
console.log(typeof customerAge);

var companyName;
console.log(typeof companyName);

console.log(typeof companyAddress);

var checkAge = null;
console.log(typeof checkAge);

/*
Từ khoá typeof sẽ được dùng để kiểm tra 1 biến có tồn tại hay không trước khi đưa vào biểu thức
- Nếu biến tồn tại => kết quả sẽ khác undefined
- Nếu biến không tồn tại, chưa gán => Kết quả sẽ trả về undefined
*/

//var companyAddress = 'Mỹ Đình - Hà Nội';
var finalAddress = '';

if (typeof companyAddress !=='undefined' 
&& companyAddress!='' 
&& typeof finalAddress!=='undefined'){
    finalAddress+=companyAddress;
}else{
    finalAddress = 'Không có giá trị';
}

console.log(finalAddress);