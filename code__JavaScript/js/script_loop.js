//Vòng lặp for (Lặp với số lần lặp xác định)

//1. Vòng lặp for tăng
// for (var index = 1; index<=100; index+=2){
//     console.log(index);
// }

//2. Vòng lặp for giảm

// for (var index = 10; index>=1; index--){
//     console.log(index);
// }

//Ví dụ 1:
/*
Cho trước số nguyên n
Tính tổng total = 1+2+3+4+5+...+n
*/

var n = 5; 
var total=1; //Gán giá trị ban đầu để mỗi lặp sẽ lưu lại kết quả
for (var index = 2; index<=n; index++){
    total+=index;
}

//In kết quả ngoài vòng lặp
console.log('Kết quả tính tổng: '+total);

/*
Duyệt chương trình bằng tay (Chạy chương trình trên giấy)
- total = 0, n = 5
- index = 1 => total = total+index = 0 + 1 = 1
- index = 2 => total = total+index = 1 + 2 = 3
- index = 3 => total = total+index = 3 + 3 = 6
- index = 4 => total = total+index = 6 + 4 = 10
- index = 5 => total = total+index = 10 + 5 = 15
*/

/*
Tính giai thừa của 1 số N (N!)
- Công thức tính giai thừa: 5! = 5*4*3*2*1 (N=5)
- Viết giải thuật (Tin học): Dùng vòng lặp for chạy từ N về 1
- Viết code
*/

//Khai báo bến và gán các giá trị ban đầu
var result, n;
n = 10; //10!
result = 1; //Ban đầu chưa tính toán, gán result=1 (biến result để lưu kết quả qua mỗi lần lặp)

for (var index = n; index>1; index--){
    result*=index;
}

console.log('Kết quả tính '+n+'! = '+result);

/*
Kiểm tra 1 số nguyên N xem có phải là số nguyên tố hay không?
- Định nghĩa số nguyên tố (Toán học): 
+ Lớn hơn 1
+ CHỈ chia hết cho 1 và chính nó
- Viết giải thuật:
+ Kiểm tra số N xem có lớn hơn 1 hay không?
+ Nếu N <=1 => Kết luận không phải số nguyên tố
+ Nếu N > 1 => 
++ Chạy vòng lặp từ 2 => N-1
++ Kiểm tra trong vòng lặp xem N có chia hết cho số nào không?
++ Nếu N chia hết cho bất kỳ số nào trong vòng lặp => Kết luận không phải số nguyên tố (Gắn cờ hiệu)
++ Nếu N không chia hết cho số nào trong vòng lặp => Kết luận là số nguyên tố (Gắn cờ hiệu)
+ Thông báo kết quả ra màn hình
- Viết code Javascript
*/

var n = 7, message = null, check;
if (n<=1){
    message = n+' không phải là số nguyên tố';
}else{

    //Gắn lá cờ (Chỉ có 2 trường hợp: Đúng và sai. Có thể dùng 0 và 1)
    check = true; //Giả định n là số nguyên tố
    for (index = 2; index<n; index++){
        if (n % index==0){
            //Không phải số nguyên tố
            check = false; //Cắm cờ để thông báo
        }
    }

    if (check){
        message = n+' là số nguyên tố';
    }else{
        message = n+' không phải là số nguyên tố';
    }

    /*
    Kỹ thuật gán 1 biến có kiểu dữ liệu true, false để kiểm tra => Gọi là kỹ thuật đặt cờ hiệu
    */
}

//Thông báo kết quả
console.log(message);

//Vẽ bảng cửu chương

var tableHtml = '<table border="1" width="100%" cellpadding="0" cellspacing="0">';

for (var col = 1; col<=10; col++){
    if (col==1 || col==6){
        tableHtml+= '<tr>';
    }
    
    tableHtml+='<td>';

    //Vòng lặp lồng
    for (var unit = 1; unit<=10; unit++){
        tableHtml+=col+' x '+unit+' = '+col*unit+'<br/>';
    }

    tableHtml+='</td>';

    if (col==5 || col==10){
       tableHtml+='</tr>';
    }
}


// tableHtml+= '<tr>';
// for (var col = 6; col<=10; col++){

//     tableHtml+='<td>';

//     //Vòng lặp lồng
//     for (var unit = 1; unit<=10; unit++){
//         tableHtml+=col+' x '+unit+' = '+col*unit+'<br/>';
//     }

//     tableHtml+='</td>';
// }
// tableHtml+='</tr>';

tableHtml+='</table>';

document.write(tableHtml);

//Vòng lặp lồng

// for (var i = 1; i<=10; i++){
//     for (var j = 1; j<=10; j++){
//         for (var k = 1; k<=10; k++){
//             console.log('i='+i+' - j='+j+' - k='+k);
//         }
        
//     }
// }

//Vòng lặp while: Lặp với số lần lặp không xác định trước

var n = 10, index=1;
while (index<=n){
    index++; //Tăng biến đếm để thoát vòng lặp
    console.log(index);
}

/*
Việc tăng biến đếm (index) ở trước hay sau biểu thức phụ thuộc vào giá trị gán ban đầu và giải thuật của bài toán
*/

/*
Tính tổng total = 1+2=3+4...+n
*/
var n = 10, index = 1, total = 0;
while (index<=n){
    total+=index;
    index++; //Tăng biến đếm
}

console.log('Kết quả tính tổng = '+total);

/*
Cho biểu thức: Total = 1+2+3+4+6+..+n
Yêu cầu: Tìm n với điều kiện Total >= 55
*/
var index=1, total=0, n = 0;

while (total<5050){
    total+=index;
    index++;
}

n = index-1;

console.log('Giá trị n = '+n);