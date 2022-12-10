
// 1. Vẽ bàn cờ vua (Google search để xem ảnh bàn cờ)
/*
Mô tả bước giải:
-Bước đầu sẽ một bảng có thẻ table > tr > td (sử dụng nối chuỗi)
-xét cái thuộc tính css cho thẻ table 
-tiếp đến thẻ td sử dụng vòng lặp xét một biến i để cho chạy từ 1 cho đến 8 
-xét tiếp một vào lặp lồng cho biến mới j cũng cho từ 1 đến 8
-sử dụng if else để xét: if đk là nếu (i+j)%2 !=0 thì sẽ có background màu đen
-còn else sẽ có background màu trắng 
*/
var tableHtml = '<table border="1" width = "55%"  cellpadding="0" cellspacing="0">';
tableHtml += '<tr>';
for (var i=1;i<=8;i++){
    for (var j=1; j<=8; j++){
        if ((i+j)%2 != 0){
            tableHtml+='<td style="width:100px ;height :100px ;background : black">';
        }else{
            tableHtml+='<td style=style="width: 100px; height: 100px">';
        }
    }
    tableHtml += '</tr>';
}
tableHtml += '</table>';
document.write(tableHtml);


// 2. Vẽ tam giác sao với N dòng

// *
// * *
// * * *
// * * * *
// * * * * *
// (Ví dụ N = 5)
/**
Mô tả: khai báo một biến mới n và thêm biến nữa để xét xuống dòng
-sử dụng vòng lặp để cho chạy tới <= n 
-xét tiếp vòng lặp nữa bên trong để vòng lặp lồng sẽ chạy trc nên là nếu i = 0 thì j=1; i=0 thì j=2;..... và nối thêm chuỗi "*"
-và nối thêm chuỗi "<br>" ngoài vòng lặp lồng để xuống dòng
 */
// var n =5;
// var rectangleHtml = '<br>';
// for (var i=0;i<n;i++){
//     for (var j=0; j<=i;j++){
//          rectangleHtml += '*';
//     }
//     rectangleHtml += '<br>';
// }
// document.write(rectangleHtml += '<br>');


// 3. Vẽ tam giác sao đối xứng với N x 2 dòng
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
// (Ví dụ N = 5)
/*
Mô tả vòng lặp for tăng: khai báo một biến mới n và thêm biến nữa để xét xuống dòng
-sử dụng vòng lặp để cho chạy tới <= n 
-xét tiếp vòng lặp nữa bên trong để vòng lặp lồng tăng  sẽ chạy trc nên là nếu i = 0 thì j=1; i=0 thì j=2;..... và nối thêm chuỗi "*"
-và nối thêm chuỗi "<br>" ngoài vòng lặp lồng để xuống dòng

Mô tả vòng lặp for giảm:
-Giống vòng lặp for tăng nhưng khác ở vòng lặp for lồng  for (var j=n; j>i;j--)
-vòng lặp lồng giảm sẽ chạy trc nên là nếu i = 0 thì j=5; i=0 thì j=4;..... và nối thêm chuỗi "*"
*/
// var n =5;
// var rectangleHtml = '<br>';
// for (var i=0;i<n;i++){
//     for (var j=0; j<=i;j++){
//          rectangleHtml += '*';
//     }
//     rectangleHtml += '<br>';
// }
// for (var i=0;i<n;i++){
//     for (var j=n; j>i;j--){
//          rectangleHtml += '*';
//     }
//     rectangleHtml += '<br>';
// }
// document.write(rectangleHtml);



/*
4. Vẽ tam giác số tăng dần với N dòng
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

(Ví dụ N = 5)
*/
/**
Mô tả: khai báo 3 biến n, index , rectangleHtml
-sử dụng vòng lặp for để xét biến i <n 
-xét tiếp vòng lặp lồng để j<=i
-cho index = 1 nối chuỗi: rectangleHtml với index++ để tăng thêm một đơn vị sử dụng <br> để xuống dòng
 */
var n =5;
var index=1;
var rectangleHtml = '<br>';
for (var i=0;i<n;i++){
    for (var j=0; j<=i;j++){
         rectangleHtml += index++ ;
    }
    rectangleHtml += '<br>';
}
document.write(rectangleHtml += '<br>');


