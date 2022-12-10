// elem.hasAttribute(name) – kiểm tra sự tồn tại.
// elem.getAttribute(name) – nhận giá trị.
// elem.setAttribute(name, value) – đặt giá trị.
// elem.removeAttribute(name) – loại bỏ thuộc tính.



var product_data;
product_data = [
    {product_id: 1, product_name: 'Sản phẩm 1', product_price: 1000},
    {product_id: 2, product_name: 'Sản phẩm 2', product_price: 2000},
    {product_id: 3, product_name: 'Sản phẩm 3', product_price: 3000},
    {product_id: 4, product_name: 'Sản phẩm 4', product_price: 4000},
    {product_id: 5, product_name: 'Sản phẩm 5', product_price: 5000},
];

//chèn dữ liệu của table
var count = 0
product_data.forEach(function(item,index){
    count++

    var product_item = `
    <tr>
        <td>${count}</td>
        <td>${item.product_name}</td>
        <td>${item.product_price}</td>
        <td>
            <input type="number" id="quantity_cart" ${item.product_id}>
            <button type="button" id="add_cart" ${item.product_id}>Thêm vào giỏ</button>
        </td>
    </tr>
    `
    document.querySelector('#product_table').innerHTML+=product_item;
});

//add_cart
// var add_cart = document.querySelectorAll('#product_table #add_cart');
// if (add_cart.length >0){
//     for (var index = 0; index < add_cart.length; index++){
//         add_cart[index].onclick = function(e){
//             console.log(this);
//         }
        
//     }
// }








function newFunction() {
    console.log(product_data);
}

