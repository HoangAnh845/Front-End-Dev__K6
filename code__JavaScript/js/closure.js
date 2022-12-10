function showMessage(mess){
    //return 'Unicode Academy';
    return function(child){
        return 'Unicode Academy: '+mess+' - '+child;
    }
}

var message = showMessage('Front-End');

console.log(message('Javascript'));

// var showmsg = function(){
//     return 'Ôn lại bài cũ';
// }

// console.log(showmsg());

function Student(){
    var name = ''; 
    return {
        set: function(nameValue){
            name = nameValue;
        },

        get: function(){
            return name;
        }
    }
}

//khởi tạo

var studentObject = Student();

//Gán tên sinh viên
studentObject.set('Hoàng An');

//Lấy tên sinh viên
var fullName = studentObject.get();

console.log(fullName);