//Ví dụ về sự kiện trong Javascript

//1. Onchange với select

document.querySelector('#province').onchange = function(){
    //alert(this.value);
}

//2. Oncange với input

document.querySelector('#username').onchange = function(){
    //alert(this.value);
}

//3. Onmouseover

// document.querySelector('.block').onmouseover = function(){
//     this.style.color = 'red';
// }

//4. Onmouseout

// document.querySelector('.block').onmouseout = function(){
//     this.style.color = 'blue';
// }

//5. Onmousemove

// document.querySelector('.block').onmousemove = function(){
//     this.style.color = 'green';
// }

//6. Onkeydown

document.querySelector('#username').onkeydown = function(e){
    //alert('bạn vừa bấm phím');
   // console.log(e);
}

//7. oncopy
document.querySelector('.block').oncopy = function(e){
    //alert('Bạn vừa copy');
    //console.log(e);
}

document.querySelector('#click').addEventListener('click', function(e){  
    alert(e.target.innerText);
});