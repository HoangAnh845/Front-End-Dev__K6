console.log('Thay thế chuỗi trong Javascript');

var welcome = 'Học lập trình tại Unicode Academy';

//Thay thế là công việc sửa lại chuỗi ban đầu bằng cách thay thế 1 chuỗi con thành 1 chuỗi con khác

welcome = welcome.replace('Unicode', 'Trung tâm Unicode');

//Xoá 1 chuỗi con trong 1 chuỗi cha => thay thế thành chuỗi trống
welcome = welcome.replace('Academy', '');

console.log(welcome);

var welcome=null;

if (welcome!==null){
    welcome = welcome.replace('Unicode', '');

    console.log(welcome);
}else{
    console.log('Null thì không thể thay thế')
}

var number = 10;
console.log(typeof number); //return number
//number = number.toString(); //Convert number to string
number = number+''; //data type: string
number = number.replace('Unicode', '');

console.log(number);

console.log('Chuyển đổi chữ trong Javascript');

var welcome = 'Học lập trình tại Unicode Academy';

welcome = welcome.toUpperCase(); //Chuyển thành chữ hoa

console.log(welcome);

welcome = welcome.toLowerCase(); //Chuyển thành chữ thường

console.log(welcome);

//var fullName = 'tạ hoàng an';

fullName = 'tạ hoàng an';

//Yêu cầu: Chuyển các ký tự đầu của 1 chữ thành chữ Hoa

function convertFirstLetterWord(str){

    for (var index = 0; index < str.length; index++){
        
        if (index==0){
            //Chuyển ký tự đầu tiên thành chữ hoa
            str = str.replace(str[0], str[0].toUpperCase());
        }else{
            //Chuyển các ký tự sau dấu cách thành chữ hoa
            if (str[index]==' '){
                str = str.replace(str[index+1], str[index+1].toUpperCase());
            }
        }
        
    }

    return str;
}

fullName = convertFirstLetterWord(fullName);

console.log(fullName);

