const userOj = {
    name: 'Hoàng An',
    age: 30
};

const customerOj = {
    service: 'Training',
    cost: 30000
};

function getName(name){
    return 'Javascript Unicode: '+name;
}

//Export viết cuối file

//Khi export hàm => Chỉ cần đưa vào tên hàm, không cần dấu () hoặc tham số
//Với export default => chỉ export 1 lần (Thường sẽ export tất cả hàm, class, biến, hằng...)
export default {userOj, customerOj, getName};

// export default userOj;
// export default customerOj;