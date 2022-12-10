/*
- localStorage: Sẽ không bị xoá
- sessionStorage: Sẽ bị xoá nếu tắt trình duyệt
- localStorage và sessionStorage sẽ được set theo từng domain
*/
if (typeof (Storage)!=='undefined'){
    console.log('trình duyệt hỗ trợ storage');
    
    //Thêm dữ liệu vào localStorage
    //localStorage.setItem('username', 'hoàng an unicode');
    //localStorage.email = 'hoangan.web@gmail.com';

    //Lấy dữ liệu từ localStorage
    //var username = localStorage.getItem('username');
    // var username = localStorage.username;
    // console.log('Username = '+username);

    //Xoá dữ liệu trong localStorage
    //localStorage.removeItem('email');

    //Xoá tất cả localStorage
    //localStorage.clear();

    // var customerArr = [
    //     'Hoàng An',
    //     'Anh quân',
    //     'Minh Thức'
    // ];

    // var customerObject = {
    //     name: 'Hoàng An',
    //     age: 29
    // };

    // var customerJson = JSON.stringify(customerObject);

    // localStorage.setItem('customer', customerJson);

    // var customer = localStorage.getItem('customer'); //chuỗi JSON

    // customer = JSON.parse(customer);

    // console.log(customer.name);

    //sessionStorage.setItem('username', 'Hoàng An');

    var username = sessionStorage.getItem('username');

    console.log(username);

}else{
    console.log('trình duyệt không hỗ trợ');
}