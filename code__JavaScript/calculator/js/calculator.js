//set định dạng số
function setModel(number){
	var n= Number(number);
	var value= n.toLocaleString("en");
	return value;
}
function delSetModel(number){
	return Number(number.replace(/,/g, ''));
}
//lấy giá trị
function getExResult(){
	return document.getElementById('ex-value').innerText;
}
function getResult(){
	return document.getElementById('final-value').innerText;
}
//in giá trị
function printExResult(number){
	 document.getElementById('ex-value').innerText=number;
}
function printResult(number){
	if(number=="") {
        document.getElementById('final-value').innerText = number;
    } else {
        document.getElementById('final-value').innerText = setModel(number);
    }
}
//Lấy số từ bàn phím nhập vào bằng id của button
let getNumber= document.querySelectorAll('.number');
for(var i in getNumber){
	getNumber[i].onclick=function(){
		var input= delSetModel(getResult());
		if(input !=NaN){
			input=input+this.id;
			printResult(input);
			console.log(input);
		}
	}
}
//xóa all
let getSystem= document.querySelectorAll('.system');
for(var i in getSystem){
	getSystem[i].onclick=function(){
		if(this.id=='clear-all'){
			printResult('');
			printExResult('');
		}
		else if(this.id=='clear'){
			//ép về dạng chuỗi để xóa cuối
			let currentInput= delSetModel(getResult()).toString();
			if(currentInput){
				currentInput=currentInput.substr(0,currentInput.length -1);
				printResult(currentInput);
			}
		}
		else{
			//start calculation
			var exResult=getExResult();
			var crtResult= getResult();
			if(crtResult!=''){
				crtResult=delSetModel(crtResult);
				exResult+=crtResult;
				if(this.id =='='){
					var finalResult =eval(exResult);
					printResult(finalResult);
					printExResult(''); //clear ex-value
				}
				else{
					//tiếp tục tính toán
					exResult+=this.id;
					printExResult(exResult);
					printResult('');
				}
			}
		}
	}
}