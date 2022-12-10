window.addEventListener('DOMContentLoaded', function(){

    var xhttp = new XMLHttpRequest();


    xhttp.open("GET", "http://localhost:3000/products", true);
   
    xhttp.send();
    
    xhttp.onload = function(){
        if (this.status==200){
            var res = JSON.parse(this.response);
            
            var htmlRow = '';
            for (var index in res){
                htmlRow+=`<tr>
                <td>${parseInt(index)+1}</td>
                <td>${res[index].name}</td>
                <td>${res[index].price}</td>
                <td>${res[index].desc}</td>
                <td align="center"><a href="#edit/${res[index].id}" class="edit">Sửa</a></td>
                <td align="center"><a href="#" data-id="${res[index].id}" class="delete">Xoá</a></td>
            </tr>`;
            }

            if (htmlRow!==''){
                document.querySelector('#product-list tbody').innerHTML = htmlRow;
            }

            //Khi người dùng click vào thẻ a
            var linkObject = document.querySelectorAll('body a');

            if (linkObject!==null){
                linkObject.forEach(function(itemLink){
                    itemLink.addEventListener('click', function(){
                        var hashValue = this.getAttribute('href');
                    
                        if (hashValue!==''){
                            //pattern
                            var pattern = /#edit\/(\d+)/;
                            var editObject = hashValue.match(pattern);
                            
                            if (editObject!==null && editObject[1]!==null){
                                var productId = editObject[1];
                                
                                document.querySelector('.template-list').style.display='none';
                                document.querySelector('.template-add').style.display='block';

                                document.querySelector('.template-add').dataset.type='edit';

                                document.querySelector('.template-add').dataset.id=productId;

                                //productId = 6;

                                //Điền dữ liệu vào form
                                var urlProductDetail = 'http://localhost:3000/products/'+productId;
                                
                                var xhttp = new XMLHttpRequest();

                                xhttp.open("GET", urlProductDetail, true);
                            
                                xhttp.send();

                                xhttp.onreadystatechange = function(){
                                    if (this.readyState==4){

                                        if (this.status==200){
                                            var productDetail = this.response;
                                            if (productDetail!==''){
    
                                                productDetail = JSON.parse(productDetail);
                                                
                                                document.querySelector('#name').value=productDetail.name;
    
                                                document.querySelector('#price').value = productDetail.price;
    
                                                document.querySelector('#desc').value = productDetail.desc;

                                                document.querySelector('.confirm').innerHTML = 'Cập nhật';
                                            }
                                        }else{
                                            var url = window.location.origin+window.location.pathname;
                                            window.location.href = url;
                                        }
                                    
                                    }
                                }
                            
                            }

                        }
                    })
                });
            }

            //Click vào link xoá
            var deleteObject = document.querySelectorAll('.delete');
            if (deleteObject!==null){
                deleteObject.forEach(function(itemDelete){
                    itemDelete.addEventListener('click', function(e){
                        e.preventDefault();
                        if (confirm('Bạn có chắc chắn muốn xoá?')){
                            var productId = this.dataset.id;
                            
                           // productId = 6;

                            var urlProductDelete = 'http://localhost:3000/products/'+productId;

                            var xhttp = new XMLHttpRequest();

                            xhttp.open("DELETE", urlProductDelete, true);
                        
                            xhttp.send();

                            xhttp.onreadystatechange = function(){
                                if (this.readyState==4){
                                    
                                    if (this.status==200){
                                        //Xoá thành công
                                        setMessage('msg', 'Xoá sản phẩm thành công');
                                    }else{
                                        //Link không tồn tại
                                        setMessage('msg', 'Sản phẩm không tồn tại');
                                    }
                                }
                            }

                        }
                        
                    })
                });
            }

        }
    }

    //Khi người dùng click vào thẻ a
    var linkObject = document.querySelectorAll('body a');

    if (linkObject!==null){
        linkObject.forEach(function(itemLink){
            itemLink.addEventListener('click', function(){
                var hashValue = this.getAttribute('href');
                if (hashValue=='#add'){
                    document.querySelector('.template-list').style.display='none';
                    document.querySelector('.template-add').style.display='block';

                    document.querySelector('.msg').innerHTML = ''; //reset thông báo
                }
            })
        });
    }

    //Khi người dùng load trang
    var hashValue = window.location.hash;
    if (hashValue=='#add'){
        document.querySelector('.template-list').style.display='none';
        document.querySelector('.template-add').style.display='block';

    }
    else{
        var pattern = /#edit\/(\d+)/;
        var editObject = hashValue.match(pattern);
        if (editObject!==null && editObject[1]!==null){
            var productId = editObject[1];
            
            document.querySelector('.template-list').style.display='none';
            document.querySelector('.template-add').style.display='block';

            document.querySelector('.template-add').dataset.type='edit';

            document.querySelector('.template-add').dataset.id=productId;

            document.querySelector('.confirm').innerHTML = 'Cập nhật';

            //productId = 6;

            //Điền dữ liệu vào form
            var urlProductDetail = 'http://localhost:3000/products/'+productId;
            
            var xhttp = new XMLHttpRequest();

            xhttp.open("GET", urlProductDetail, true);
        
            xhttp.send();

            xhttp.onreadystatechange = function(){
                if (this.readyState==4){

                    if (this.status==200){
                        var productDetail = this.response;
                        if (productDetail!==''){

                            productDetail = JSON.parse(productDetail);
                            
                            document.querySelector('#name').value=productDetail.name;

                            document.querySelector('#price').value = productDetail.price;

                            document.querySelector('#desc').value = productDetail.desc;
                            
                        }
                    }else{
                        var url = window.location.origin+window.location.pathname;
                        window.location.href = url;
                    }
                
                }
            }
        

        }else{
            document.querySelector('.template-list').style.display='block';
            document.querySelector('.template-add').style.display='none';
        }
        
    }

    //Khi người dung bấm quay lại danh sách
    document.querySelector('.back-list').addEventListener('click', function(){
        var url = window.location.origin+window.location.pathname;
        window.location.href = url;
    });

    //Hiển thị thông báo khi load trang

    var msg = getMessage('msg');

    if (msg!==false){ 
        document.querySelector('.msg').innerHTML = msg;
    }else{
        document.querySelector('.msg').innerHTML = '';
    }
   
    //Xử lý khi submit form
    var templateAddObject = document.querySelector('.template-add');
    if (templateAddObject!==null){
        templateAddObject.querySelector('form').addEventListener('submit', function(e){
            e.preventDefault();
            
            var nameVal = document.querySelector('#name').value;
            var priceVal = document.querySelector('#price').value;
            var descVal = document.querySelector('#desc').value;
            
            if (nameVal.trim()!=='' && priceVal.trim()!=='' && descVal.trim()!==''){
        
                var dataObject = {
                    'name': nameVal,
                    'price': priceVal,
                    'desc': descVal 
                };
        
                var urlObject = new URLSearchParams(dataObject);
                
                var data = urlObject.toString();
                
                var xhttp = new XMLHttpRequest();

                if (templateAddObject.dataset.type=='add'){
                    xhttp.open('POST', 'http://localhost:3000/products', true);
                    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhttp.send(data);
                    var url = window.location.origin+window.location.pathname;
                    window.location.href = url;
                    setMessage('msg', 'Thêm sản phẩm thành công');
                }else{
                    var productId = templateAddObject.dataset.id;
                    xhttp.open('PUT', 'http://localhost:3000/products/'+productId, true);
                    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhttp.send(data);
                    
                    setMessage('msg', 'Cập nhật sản phẩm thành công');
                }
        
            }
        });
    }

});

//Viết 1 số hàm cần thiết
function setMessage(name, value){
    sessionStorage.setItem(name, value);
}

function getMessage(name){
 
    var msg = sessionStorage.getItem(name);

    if (msg!==null){
        sessionStorage.removeItem(name);
        return msg;
    }

    return false;
}