/*
Fake sản phẩm
*/
var productData = [
    {product_id: 1, product_name: 'Sản phẩm 1', product_price: 1000000},
    {product_id: 2, product_name: 'Sản phẩm 2', product_price: 200000},
    {product_id: 3, product_name: 'Sản phẩm 3', product_price: 3000},
    {product_id: 4, product_name: 'Sản phẩm 5', product_price: 4000},
    {product_id: 6, product_name: 'Sản phẩm 4', product_price: 5000},
];

var tableHtml, appObject, productItemHtml, buttonAddCard, cartData, carItem, cartTable, cartContent, carItemHtml, buttonUpdateCart, quantityInputList, buttonDeleteCart;

appObject = document.querySelector('.app');

if (appObject!==null){

    productItemHtml = '';

    if (productData.length>0){
        productData.forEach(function(item, index){
            productItemHtml+= `
            <tr>
                <td>${index+1}</td>
                <td>${item.product_name}</td>
                <td>${formatNumber(item.product_price)} đ</td>
                <td>
                    <input type="number" name="quantity" data-id="${item.product_id}" value="1" /> <br/>
                    <button type="button" class="add-to-cart" style="width: 100%;">Thêm vào giỏ</button>
                </td>
            </tr>`;
        });
    }
    

    tableHtml = `
    <h3>Danh sách sản phẩm</h3>
    <table width="100%" cellpadding="0" cellspacing="0" border="1">
    <thead>
        <tr>
            <th width="5%">STT</th>
            <th>Tên sản phẩm</th>
            <th width="10%">Giá</th>
            <th width="10%">Hành động</th>
        </tr>
    </thead>
    <tbody>
        ${productItemHtml}
    </tbody>
    </table>`;

    tableHtml+=`
    <hr/>
    <h3>Giỏ hàng</h3>
    <div class="cart-content"></div>
    `;

    appObject.innerHTML = tableHtml;

    var cartDataJson = sessionStorage.getItem('cartData');
    if (cartDataJson.trim()!==' '){
        cartData = JSON.parse(cartDataJson);
    }else{
        cartData = []; //Khai báo 1 mảng rỗng để lưu trữ sản phẩm trong giỏ hàng
    }
    
    cartContent = document.querySelector('.cart-content');
    cartContent.innerHTML = renderCart(); //hiển thị dữ liệu giỏ hàng khi load trang

    updateCart();
    deleteItemCart();
    deleteCart();

    //Xử lý hành động thêm vào giỏ hàng
    buttonAddCard = document.querySelectorAll('.add-to-cart');
    if (buttonAddCard !== null){
        buttonAddCard.forEach(function(buttonItem){
            buttonItem.addEventListener('click', function(){

                //Tạo object của input tương ứng khi click vào nút add to cart
                var quantityObject = this.parentElement.querySelector('input[name="quantity"]');
                
                if (quantityObject!==null){
                    var quantity = quantityObject.value; //giá trị số lượng muốn thêm vào giỏ
                    var productId = quantityObject.dataset.id; //id sản phẩm
                    
                    //Xử lý validate số lượng sản phẩm

                    if (quantity<=0){
                        quantity = 1;
                    }

                    //Xử lý validate id sản phẩm
                    if (isProductId(productId)){
                        
                        //Xử lý thêm vào giỏ hàng
                        
                        if (isProductCart(productId)){
                            var carItemArr = isProductCart(productId);
                            
                            carItem = carItemArr[0]; 

                            //tăng số lượng trong đối tượng cartItem
                            carItem = {
                                proId: parseInt(productId),
                                qty: (parseInt(carItem.qty)+parseInt(quantity))
                            };

                            //Cập nhật lại vào giỏ hàng
                            var cartIndex = carItemArr[1];
                            cartData[cartIndex] = carItem;
                        }else{

                            //Nếu không tồn tại sẽ thêm mới sản phẩm vào giỏ
                            carItem = {
                                proId: parseInt(productId),
                                qty: parseInt(quantity)
                            };

                            cartData.push(carItem);
                        }

                        //Render giỏ hàng vào html

                        if (cartData.length>0){
                            cartContent = document.querySelector('.cart-content');
                            
                            if (cartContent!==null){
                            
                                cartContent.innerHTML = renderCart();

                                //thực hiện cập nhật giỏ hàng
                                updateCart();

                                //Thực hiện xoá sản phẩm trong giỏ hàng
                                deleteItemCart();

                                //Xoá tất cả giỏ hàng
                                deleteCart();
                            }
                            
                             //Lưu trữ dữ liệu giỏ hàng vào sessionStorage
                            var cartDataJson = JSON.stringify(cartData);
                            sessionStorage.setItem('cartData', cartDataJson);
                        }

                       

                    }else{
                        alert('Đã có lỗi xảy ra');
                    }

                    /*
                    Xác định cấu trúc lưu trữ giỏ hàng
                    - Sản phẩm đã có trong giỏ => tăng số lượng (Xác định bằng id sản phẩm)
                    - Sản phẩm chưa có trong giỏ => Thêm mới với id và số lượng xác định
                    */
                }
            });
        });
    }
}