/*
Sự khác nhau giữa DOMContentLoaded với Load
- DOMContentLoaded: Sự kiện được hình thành DOM được khởi tạo (Có thể sử dụng Javascript để tương tác với HTML)
- Load: Sự kiện được hình thành khi tất cả các thành phần HTML trên trang web tải xong (Bao gồm các DOM)
*/
window.addEventListener('DOMContentLoaded', function(){
    var selectAllObject, deleteAnyObject, deleteAnySpan, checkboxItem;

    selectAllObject = document.querySelector('.selectAll');

    deleteAnyObject = document.querySelector('.deleteAny');

    deleteAnySpan = document.querySelector('.deleteAny span');

    checkboxItem = document.querySelectorAll('.check-item');

    /*
    - Hàm checkItem có tác dụng checked hoặc unchecked 1 item cụ thể
    - checkItemObj là object của checkbox cần tác động
    - actionChecked là hành động checked hoặc unchecked (true = checked, false=unchecked)
    */

    function checkItem(checkItemObj, actionChecked){
        checkItemObj.checked = actionChecked;
    }

    function getCountChecked(){

        var countChecked = 0;
        if (checkboxItem!==null){
            for (var index = 0; index < checkboxItem.length; index++){
                if (checkboxItem[index].checked){
                    countChecked++;
                }
            }
        }
        return countChecked;
    }


    if (selectAllObject !== null){
        selectAllObject.addEventListener('change', function(){
            //console.log(this.checked);
            var isChecked = this.checked; //trả về true hoặc false

           
            //Checked/Unchecked all item
            if (checkboxItem!==null){
                for (var index = 0; index < checkboxItem.length; index++){

                    checkItem(checkboxItem[index], isChecked);                    
                }
            }

            //Count checked
            var countChecked = getCountChecked(); //Lấy số lượng checkbox được checked
            if (deleteAnyObject!==null && deleteAnySpan!==null){
                if (countChecked>0){
                    deleteAnyObject.removeAttribute('disabled');
                    deleteAnySpan.innerText = countChecked;
                }else{
                    deleteAnyObject.setAttribute('disabled', 'disabled');
                    deleteAnySpan.innerText = 0;
                }
            }
        });
    }

    //Checkbox vào từng item riêng lẻ
    if (checkboxItem!==null){
        for (var index = 0; index < checkboxItem.length; index++){
            checkboxItem[index].addEventListener('change', function(){
                //checkItem(this, this.checked);
                var countChecked = getCountChecked();
                if (deleteAnyObject!==null && deleteAnySpan!==null){
                    if (countChecked>0){
                        deleteAnyObject.removeAttribute('disabled');
                        deleteAnySpan.innerText = countChecked;
                    }else{
                        deleteAnyObject.setAttribute('disabled', 'disabled');
                        deleteAnySpan.innerText = 0;
                    }
                }

                if (selectAllObject !== null){
                    if (countChecked==checkboxItem.length){
                        selectAllObject.checked = true;
                    }else{
                        selectAllObject.checked = false;
                    }
                }
                
            });
        }
    }
});