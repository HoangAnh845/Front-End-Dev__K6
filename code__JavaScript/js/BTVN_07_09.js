/*
Bài tập 01: Cho 1 số tự nhiên n. Viết chương trình kiểm tra n là số lẽ hay chẵn.
- Nếu n là số chẵn => In ra dòng chữ: "Số chẵn"
- Ngược lại => In ra dòng chữ: "Số lẻ"
*/

var n = 10;
if (n % 2 == 0){
    console.log(n + ' Là số chắn');
}else{
    console.log(n + ' Là số lẻ');
}

/*
Bài tập 02: Cho 3 số a, b và c. Viết chương trình in ra số lớn nhất
Ví dụ: Cho 3 số như sau: a = 5, b = 2, c = 4 => Kết quả in ra màn hình: "5 là số lớn nhất"
*/

var  a=5, b=2, c=4;
if(a >= 5){
    console.log('Số lớn nhất là: ' +a);
}else if(b >=5){
    console.log('Số lớn nhất là: ' +b);
}else{
    console.log('Số lớn nhất là: ' +c);
}

/*
Bài tập 03: Cho 1 số từ 0 đến 6. Viết chương trình để in ra thứ trong tuần:

number: 0 => Thứ trong tuần: Chủ nhật

number: 1 => Thứ trong tuần: Thứ hai

number: 2 => Thứ trong tuần: Thứ ba

number: 3 => Thứ trong tuần: Thứ tư

number: 4 => Thứ trong tuần: Thứ năm

number: 5 => Thứ trong tuần: Thứ sáu

number: 6 => Thứ trong tuần: Thứ bảy

Ví dụ: Cho số n = 2 => In ra: "Hôm nay là thứ ba"
*/

var number = 2;
switch (number){
    case 0:
        console.log('Hôm nay là Chủ nhật');
    break;
    case 1:
        console.log('Hôm nay là Thứ hai');
    break;
    case 2:
        console.log('Hôm nay là Thứ ba');
    break;
    case 3:
        console.log('Hôm nay là Thứ tư');
    break;
    case 4:
        console.log('Hôm nay là Thứ năm');
    break;
    case 5:
        console.log('Hôm nay là Thứ sáu');
    break;
    default:
        console.log('Hôm nay là Thứ bảy');
    break;
}

/*
Bài tập 04: Viết chương trình javascript để sắp xếp 4 số (a, b, c, d) theo thứ tự tăng dần
Ví dụ: Cho 4 số a = 5, b = 3, c = 7, d = 6
In ra màn hình: "3, 5, 6, 7"
*/

var a,b,c,d;
a = 5;
b = 3; 
c = 7;
d = 6;
let Array=[a,b,c,d];
Array.sort();
console.log(Array);