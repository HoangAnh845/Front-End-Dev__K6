//Sự kiện click vào nút submit

var buttonObject = document.querySelector('.input-wrap button');

var inputObject = document.querySelector('.input-wrap input');

var toDoList = document.querySelector('.to-do-list'); //Chứa nội dung các công việc

var valueInput, listItem, toDoListItemObject, removeItemObject, itemId, editItemObject, clearAllItem, contentToDolist;

clearAllItem = document.querySelector('.clear-all');

function checkClearAllItem(){

    //Kiểm tra nếu không có list công việc => Ẩn text Clear Item
    contentToDolist = toDoList.innerText;
    if (contentToDolist!==''){
        clearAllItem.style.display = 'block';
    }else{
        clearAllItem.style.display = 'none';
    }
}

function renderItemToDoList(){
     //Chạy vòng lặp để thêm id cho từng item
     toDoListItemObject = document.querySelectorAll('.to-do-list .item');
     if (toDoListItemObject!==null){
          for (var index = 0; index<toDoListItemObject.length; index++){
              toDoListItemObject[index].id = "item_"+(index+1);

              //Thêm data-id cho nút xoá
              removeItemObject = toDoListItemObject[index].querySelector('.remove');

              if (removeItemObject!==null){
                  removeItemObject.setAttribute('data-id', index+1);
              }
              
              //Thêm data-id cho nút sửa
              editItemObject = toDoListItemObject[index].querySelector('.edit');

              if (editItemObject!==null){
                  editItemObject.setAttribute('data-id', index+1);
              }
          }
     }
}


if (buttonObject!==null){
    buttonObject.onclick = function(){
        
        if (inputObject!==null){
            valueInput = inputObject.value; //Lấy giá trị của ô input sau khi người dùng nhập vào

            if (valueInput!==''){
                
                if (toDoList!==null){
                    /*
                    listItem = `<div class="item">
                        <div class="content">
                            Công việc 1
                        </div>
                        <div class="action">
                            <span class="edit">Sửa</span>
                            <span class="remove">Xoá</span>
                        </div>
                    </div>`;
                    */

                   listItem = '<div class="item">';
                   listItem+='<div class="content">'+valueInput+'</div>';
                   listItem+='<div class="action">';
                   listItem+='<span class="edit">Sửa</span>'; 
                   listItem+='<span class="remove">Xoá</span>';  
                   listItem+='</div></div>';

                   //Kiểm tra nếu button có class update => Update
                   //Nếu button không có class update => thêm mới

                   if (!buttonObject.classList.contains('update')){
                        toDoList.innerHTML+=listItem;

                   }else{

                        //lấy data-id trong button để xác định chúng ta đang sửa item số mấy
                        itemId = buttonObject.getAttribute('data-id');

                        //khởi tạo object theo data-id để sửa nội dung
                        toDoListItemObject = document.querySelector('#item_'+itemId+' .content'); 

                        if (toDoListItemObject!==null){
                            toDoListItemObject.innerText = valueInput;

                            buttonObject.innerText = 'Submit';

                            buttonObject.classList.remove('update');
                        }
                   }
                   //Xoá dữ liệu trong ô input
                   inputObject.value = '';
                
                   renderItemToDoList(); //Thêm id vào từng item, nút sửa, nút xoá
                  
                   //Xoá item  
                   removeItemObject = document.querySelectorAll('.to-do-list .remove');


                   if (removeItemObject!==null){

                       for (var index = 0; index<removeItemObject.length; index++){
                            removeItemObject[index].onclick = function(){
                                itemId = this.getAttribute('data-id');

                                toDoListItemObject = document.querySelector('#item_'+itemId); //Khởi tạo item object theo id để xoá

                                if (toDoListItemObject!==null){
                                    if (confirm('Bạn có chắc chắn muốn xoá?')){
                                        toDoListItemObject.remove();

                                        checkClearAllItem();
                                    }
                                }

                            }
                       } 
                       
                   }

                   //Sửa item
                   editItemObject = document.querySelectorAll('.to-do-list .edit');
                   if (editItemObject!==null){
                       for (var index = 0; index<editItemObject.length; index++){
                           editItemObject[index].onclick = function(){
                                itemId = this.getAttribute('data-id');
                                
                                toDoListItemObject = document.querySelector('#item_'+itemId);

                                if (toDoListItemObject!==null){
                                    valueInput = toDoListItemObject.querySelector('.content').innerText;
                                    
                                    if (valueInput!==''){
                                        //Điền dữ liệu vào ô input để sửa
                                        inputObject.value = valueInput;

                                        //Thay đổi text của button
                                        buttonObject.innerText = 'Cập nhật';

                                        //Thêm class vào button để xác định hành động cập nhật
                                        buttonObject.classList.add('update');

                                        buttonObject.setAttribute('data-id', itemId);
                                    }
                                }
                           }
                       }
                   }

                   checkClearAllItem();
                }

            }else{
                alert('Vui lòng nhập nội dung công việc');
            }
        }
        
    }
}

checkClearAllItem();

//Xoá tất cả item

if (clearAllItem!==null){
    clearAllItem.onclick = function(){
        if (confirm('Bạn có chắc chắn muốn xoá?')){
            toDoList.innerText= '';
            buttonObject.innerText = 'Submit';
            inputObject.value = '';

            //Kiểm tra nếu không có list công việc => Ẩn text Clear Item
            contentToDolist = toDoList.innerText;
            if (contentToDolist!==''){
                clearAllItem.style.display = 'block';
            }else{
                clearAllItem.style.display = 'none';
            }
        }
    }
}