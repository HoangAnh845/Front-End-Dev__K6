//Import sẽ viết ở đầu file
//Export kiểu default, khi import có thể tự đặt tên (Không trùng với các từ khoá của javascript: function, var, const,...)

//import functionData from './functions.js';
//import User from './class.js';
//import {customerObject, serviceObject} from './customer.js';
// import {serviceObject} from './customer.js';
import * as Customer from './customer.js'; //Import tất cả dữ liệu của 1 file. chuỗi sau từ khoá as đặt tên bất kỳ (Dặt dễ hiểu)

// console.log('Export - Import');

// const userOj = functionData.userOj;
// const customerOj = functionData.customerOj;

// console.log(userOj);
// console.log(customerOj);
// console.log(functionData.getName('Hoàng An'));

// const userObj = new User();
// console.log(userObj);

// //Muốn lấy dữ liệu
// console.log('Tên: '+userObj.getName())

// console.log(customerObject);
// console.log(serviceObject);

console.log(Customer.getService(0));
console.log(Customer.serviceObject);
console.log(Customer.customerObject);
console.log(Customer.functionData);

const User = new Customer.User();
console.log(User);
