function changeColor(currentObject){
    console.log(currentObject);
    currentObject.style.color = 'red';
}

document.querySelector('.div1').onclick = function(){
    var parentObject = this;
    this.innerHTML = '<button type="button">Button</button>';

    document.querySelector('.div1 button').onclick = function(){
        console.log(this);
        parentObject.style.border = '1px solid green';
        //this.parentElement.style.border = '1px solid green';
    }

}