//add đủ 100 hs
addStudenToArr(100);
//them data city vào arr tổng
addtdCity(studentArr,'Thành phố');
// //tạo nút chọn trang
addSelectPageDot (studentArr);
//cắt ra thành nhiều mảng nhỏ
splitStudentArr(studentArr);
// Hiện trang số 0 khi vừa load xong
renderArrToHtmlTable(studenArrPageChild[0],0);
pageActiveEvent(0);
//đưa du liệu item vào tbody
renderArrToFullTable(itemTable);
//sự kiện chọn trang bằng nút
addEventDotClick ();

//su kiện nút next
addEventNextButtonClick ()
//sụ kiện prev
addEventPrevButtonClick ();

//sukien click vào đầu cột name
addEventHeadNameClick();
//sukien click vào đầu cột email
addEventHeadEmailClick()
//sukien click vào đầu cột phone
addEventHeadPhoneClick()
//sukien click vào đầu cột city
addEventHeadCityClick()

//Tìm kiếm
var searchObject;
var searchCityObject;
searchObject = document.querySelector('#search');
searchCityObject = document.querySelector('#searchcity');
if (searchObject!==null){
    searchObject.addEventListener('keyup', function(){
        search();
    });
}
if (searchCityObject!==null){
    searchCityObject.addEventListener('keyup', function(){
        search();
    });
}
/*
Phân trang
- Tổng số dòng = 20
- Số dòng trên 1 trang = 6
=> Tính số trang = 20/6 = 3.33 = 4 trang
*/
