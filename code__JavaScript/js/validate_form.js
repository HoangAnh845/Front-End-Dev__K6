/*
Cấu trúc url: protocol + domain + :port + path + ?query string
Ví dụ: http://127.0.0.1:5500/validate_form.html?fullname=ho%C3%A0ng+an&email=hoangan.web%40gmail.com&phone=0388875179
- protocol: http://
- domain (hostname): 127.0.0.1
- port: 5500 (mặc định port = 80 nếu http, port=443 nếu https)
- part: validate_form.html
- query string: fullname=ho%C3%A0ng+an&email=hoangan.web%40gmail.com&phone=0388875179 
Cấu trúc query string: key1=value1&key2=value2&key3=

Các cách gửi dữ liệu từ form:
- Gửi bằng phương thức get: lấy dữ liệu từ query string trên url (Cách lấy sẽ được học ở phần BOM)
- Gửi bằng phương thức post: Được dùng để gửi lên server (hay còn gọi là back-end), học ở phần ajax

Validate là gì?

Validate là 1 công việc xác thực các dữ liệu trong form trước khi được gửi đi (submit)
*/

//Khởi tạo dom object

var formObject, fullNameObject, emailObject, phoneObject, allFields;
var fullName, email, phone;
var checkFullname, checkEmail, checkPhone;
var msg;

msg = document.querySelector('.msg');

formObject = document.querySelector('#form-register');

if (formObject!==null){

    //Disable button submit
    formObject.querySelector('button[type="submit"]').disabled = 'disabled';

    //bắt sự kiện onkeyup để lấy dữ liệu từng field
    allFields = formObject.querySelectorAll('.field-item');
    if (allFields!==null){
        for (var index = 0; index < allFields.length; index++){
            allFields[index].addEventListener('keyup', function(){

                 //khởi tạo object từng field
                fullNameObject = formObject.querySelector('input[name="fullname"]');
                emailObject = formObject.querySelector('input[name="email"]');
                phoneObject = formObject.querySelector('input[name="phone"]');

                //Lấy dữ liệu từng field trong form
                if (fullNameObject!==null){
                    fullName = fullNameObject.value.trim();
                }

                if (emailObject!==null){
                    email = emailObject.value.trim();
                }

                if (phoneObject!==null){
                    phone = phoneObject.value.trim();
                }


                if (fullName!=='undefined' && email!=='undefined' && phone!=='undefined' && fullName!=='' && email!=='' && phone!==''){
                    formObject.querySelector('button[type="submit"]').removeAttribute('disabled');
                }else{
                    formObject.querySelector('button[type="submit"]').disabled = 'disabled';
                }
            });
        }
    }

    formObject.onsubmit = function(e){
     
        //khởi tạo object từng field
        fullNameObject = formObject.querySelector('input[name="fullname"]');
        emailObject = formObject.querySelector('input[name="email"]');
        phoneObject = formObject.querySelector('input[name="phone"]');

        //Lấy dữ liệu từng field trong form
        if (fullNameObject!==null){
            fullName = fullNameObject.value.trim();
        }

        if (emailObject!==null){
            email = emailObject.value.trim();
        }

        if (phoneObject!==null){
            phone = phoneObject.value.trim();
        }

        //Xử lý validate
        checkFullname=true;
        checkEmail = true;
        checkPhone = true;

        if (fullName==''){
            checkFullname = false;
        }

        if (email==''){
            checkEmail = false;
        }

        if (phone==''){
            checkPhone = false;
        }

        //Reset tất cả thông báo lỗi
        if (msg!==null){
            msg.innerText = ''; //reset msg về trống
            msg.style.display = 'none'; //ẩn msg
            msg.classList.remove('msg-error'); //remove class msg-error
        }

        formObject.querySelector('.fullname-error .error').innerText = '';
        formObject.querySelector('.email-error .error').innerText = '';
        formObject.querySelector('.phone-error .error').innerText = '';

        //Reset border error
        formObject.querySelector('.fullname-error .field-item').classList.remove('border-error');

        formObject.querySelector('.email-error .field-item').classList.remove('border-error');

        formObject.querySelector('.phone-error .field-item').classList.remove('border-error');


        if (checkFullname && checkEmail && checkPhone){
            
            if (msg!==null){
                msg.style.display = 'block'; //Hiển thị msg
               
                msg.innerText = 'Xác thực thành công';
            }

        }else{
            
            e.preventDefault();  //Ngăn form submit 

            //Thông báo lên msg
            if (msg!==null){
                msg.style.display = 'block'; //Hiển thị msg
                msg.classList.add('msg-error');
                msg.innerText = 'Dữ liệu không hợp. Vui lòng kiểm tra chi tiết bên dưới';
            }

            if (!checkFullname){
                formObject.querySelector('.fullname-error .error').innerText = 'Họ và tên không được để trống';
                formObject.querySelector('.fullname-error .field-item').classList.add('border-error');
                //fullNameObject.focus();
            }

            if (!checkEmail){
                formObject.querySelector('.email-error .error').innerText = 'Email không được để trống';
                formObject.querySelector('.email-error .field-item').classList.add('border-error');
                //emailObject.focus();
            }

            if (!checkPhone){
                formObject.querySelector('.phone-error .error').innerText = 'Điện thoại không được để trống';
                formObject.querySelector('.phone-error .field-item').classList.add('border-error');
                //phoneObject.focus();
            }

            /*
            focus con trỏ chuột vào input bị lỗi đầu tiên
            */            
            allFields = formObject.querySelectorAll('.field-item');
            if (allFields!==null){
                for (var index = 0; index < allFields.length; index++){
                     if (allFields[index].classList.contains('border-error')){
                        allFields[index].focus();
                        break;
                     }   
                }
            }

        }
    }
}