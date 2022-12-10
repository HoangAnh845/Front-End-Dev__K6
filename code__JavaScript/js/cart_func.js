function formatNumber(number, $operator=','){

    var number =  parseFloat(number).toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

    var index = number.indexOf('.'); //tìm vị trí có dấu chấm phần thập phân

    number = number.slice(0, index);

    return number;
}

//Kiểm tra id sản phẩm có tồn tại hay không
function isProductId(productId){

    var check = false;

    if (productData.length>0){

        productData.some(function(item){
            
            if (item.product_id==productId){

                check = true; //gán cờ là đúng

                return true; //Thoát vòng lặp some
            }
        });

    }

    return check;
}

//Kiểm tra sản phẩm có tồn tại trong giỏ hàng hay không?

function isProductCart(productId){

    var cartItemSelected = null; //Biến để lưu trữ đối tượng sản phẩm tìm được
    var indexItemSelected = null;

    if (cartData.length>0){
      
        cartData.some(function(item, index){
            
            if (item.proId==productId){
            
                cartItemSelected = item;
                indexItemSelected = index;
                return true; //Thoát vòng lặp some
            }

        });
    }

    if (cartItemSelected!==null){
     
        return [cartItemSelected, indexItemSelected]; //trả về 1 mảng
    }
    
    return false;
}

//Lấy thông tin sản phẩm dựa vào id

function getProductDetail(productId){
    
    var detailProduct = null;
    if (productData.length>0){

        productData.some(function(item){
            
            if (item.product_id==productId){

                detailProduct = item;

                return true; //Thoát vòng lặp some
            }
        });

    }

    return detailProduct;
}

//Render cart

function renderCart(){
    carItemHtml = '';

    var total = 0;

    var totalQuantity = 0;

    console.log(cartData);
    
    if (cartData.length>0){
        cartData.forEach(function(carItem, cartIndex){

            var productDetail = getProductDetail(carItem.proId);
    
            var amount = productDetail.product_price*carItem.qty;
    
            total+=amount;
    
            totalQuantity+=carItem.qty;
    
            carItemHtml+= `
                <tr>
                <td>${cartIndex+1}</td>
                <td>${productDetail.product_name}</td>
                <td>${formatNumber(productDetail.product_price)} đ</td>
                <td><input type="number" data-id="${carItem.proId}" name="quantity" value="${carItem.qty}"/></td>
                <td>${formatNumber(amount)} đ</td>
                <td><button type="button" class="delete">Xoá</button></td>
                </tr>
            `;
        });
        
        carItemHtml+=`
            <tr>
                <td colspan="3"><b>Tổng</b></td>
                <td>${totalQuantity}</td>
                <td colspan="2">${formatNumber(total)} đ</td>
            </tr>
        `;

        cartTable = `<table class="cart" width="100%" cellpadding="0" cellspacing="0" border="1">
        <thead>
            <tr>
                <th width="5%">STT</th>
                <th>Tên sản phẩm</th>
                <th width="10%">Giá</th>
                <th width="10%">Số lượng</th>
                <th width="10%">Thành tiền</th>
                <th width="5%">Xoá</th>
            </tr>
        </thead>
        <tbody>
            ${carItemHtml}
        </tbody>
        </table><hr/>
        <button class="update-cart">Cập nhật giỏ hàng</button>
        <button class="delete-cart">Xoá giỏ hàng</button>
        <button class="payment-cart" onclick="goPaymentCart()">Thanh toán</button>
        `;
    }else{
        cartTable = 'Giỏ hàng trống';
    }


    return cartTable;

}

function updateCart(){
    buttonUpdateCart = document.querySelector('.update-cart');
    if (buttonUpdateCart!==null){
        buttonUpdateCart.addEventListener('click', function(){
           
            quantityInputList = document.querySelectorAll('.cart input[name="quantity"]');
            if (quantityInputList!==null){

                var indexDelete = [];

                quantityInputList.forEach(function(quantityItem, indexQuantity){
                    var quantity = quantityItem.value;
                
                    var productId = quantityItem.dataset.id;

                    if (isProductId(productId)){

                        quantity = parseInt(quantity);
                       

                       if (quantity>0){
                        
                            carItem = {
                                proId: parseInt(productId),
                                qty: parseInt(quantity)
                            };
    
                            cartData[indexQuantity] = carItem;

                           
                        }else{
                            indexDelete.push(indexQuantity);
                            //cartData.splice(indexQuantity, 1);
                            //quantityInputList.splice(indexQuantity, 1);
                        }
     
                    
                    }else{
                        alert('Đã có lỗi xảy ra');
                    }
                });

                //Thực hiện xoá các sản phẩm có số lượng <=0
                if (indexDelete.length>0){
                    indexDelete.forEach(function(itemDelete, index){
                        cartData.splice(index,1);
                    }); 
                }
            }

           //Thực hiện render lại giỏ hàng
           cartContent.innerHTML = renderCart();
           
           var cartDataJson = JSON.stringify(cartData);
           sessionStorage.setItem('cartData', cartDataJson);
           
            /*
            Vấn đề xảy ra là sau khi cart được render => html sẽ được tạo mới
            */
            updateCart();
            deleteCart();
            deleteItemCart();
        });
    }
}

function deleteItemCart(){
    buttonDeleteCart = document.querySelectorAll('.delete');
    if (buttonDeleteCart!==null){
        buttonDeleteCart.forEach(function(itemDelete, index){
            itemDelete.addEventListener('click', function(){
                if (confirm('Bạn có chắc chắn?')){
                    cartData.splice(index, 1);
                    cartContent.innerHTML = renderCart();
                    
                    var cartDataJson = JSON.stringify(cartData);
                    sessionStorage.setItem('cartData', cartDataJson);

                    updateCart();
                    deleteCart();
                    deleteItemCart(); //Bổ sung thêm cái này
                }
            
            });
        });
    }
}

function deleteCart(){
    var deleteCart = document.querySelector('.delete-cart');
    if (deleteCart!==null){
        deleteCart.addEventListener('click', function(){
            if(confirm('Bạn có chắc chắn muốn xoá')){
                cartData = []; //Gán bằng mảng rỗng
                cartContent.innerHTML = renderCart();
                var cartDataJson = JSON.stringify(cartData);
                sessionStorage.setItem('cartData', cartDataJson);
            } 
        });
    }
}

function goPaymentCart(){
    window.location.href='cart_payment.html';
}