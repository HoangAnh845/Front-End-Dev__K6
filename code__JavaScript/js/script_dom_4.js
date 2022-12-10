var pObject = document.createElement('p'); //object tự tạo, có nghĩa thẻ p không có sẵn

var blockObject = document.querySelector('.block'); //Khởi tạo object từ thẻ html có sẵn

pObject.innerHTML = 'Học lập trình tại Unicode';
pObject.classList.add('text');

var textNode = document.createTextNode('Học lập trình tại Unicode'); //Khởi tạo text, không thuộc thẻ html nào

console.log([pObject]);

//add object tự tạo vào object có sẵn

blockObject.appendChild(pObject);

blockObject.appendChild(textNode);

//blockObject.innerHTML = '<p></p>';


// var pObject2 = document.querySelector('.block p');

// console.log([pObject2]);

var divObject = document.createElement('div');
divObject.classList.add('content');
divObject.innerHTML = 'Nội dung mới thêm vào';

blockObject.insertBefore(divObject, pObject);

var spanObject = document.createElement('span');
spanObject.classList.add('icon');
spanObject.innerHTML = 'Icon';

var listObject = document.querySelector('.block ul');
blockObject.insertBefore(spanObject, listObject);

document.querySelector('.remove').onclick = function(){
    blockObject.removeChild(pObject);
    blockObject.removeChild(spanObject);
}

document.querySelector('.replace').onclick = function(){
   var iObject = document.createElement('i');
   iObject.innerHTML = 'Note mới sau thay thế';
   blockObject.replaceChild(iObject, pObject);
}