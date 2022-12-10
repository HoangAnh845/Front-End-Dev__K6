function render(row,colume){
	var resume= "<table cellpadding='0' cellspacing='0'>";
	for(var x=0;x<row;x++){
		resume +="<tr>";
		for(var y=0;y<colume;y++){
			resume +="<td>";
			resume +="<button class='btn' id='but"+x+"_"+y+"' ></button>";
			resume +="</td>";
		}
		resume+="</tr>";
		
	}
	resume +="</table>";
	return resume;
}
//Play game
function playgame(){
	var rows= document.getElementById("row").value;
	var cols= document.getElementById("colume").value;
	
	document.getElementById("main").innerHTML= render(rows,cols);

	//Khác
	let CPlayer = 0; // Current Player (0 is O,1 is X)
	let changeType = false;
	let listbutton= document.querySelectorAll(".btn");
	for(var i=0;i<listbutton.length;i++){
		listbutton[i].onclick=function(){
			
			if(CPlayer==0){
				this.style.backgroundImage="url('images/Xpng.png')";
				this.style.backgroundSize="cover";
				CPlayer=1;
				
			}else{
				CPlayer=0;
				this.style.backgroundImage="url('images/Opng.png')";
				this.style.backgroundSize="cover";
			}
		}
	}
		

}

