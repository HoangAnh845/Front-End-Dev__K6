// var number = 12; //Khả dụng ở mọi nơi (global)

// //Scope
// for (var index = 0; index<=10; index++){
//     //Nội dung scope
//     console.log('index = '+index);
// }

// var check = 10;

// //Scope
// if (check==10){
//     //Nội dung scope
//     console.log('Thoả mãn điều kiện')
// }

// let index;

// for (index = 0; index <= 10; index++){
//     console.log('index = '+index);

//     let age = 30;
//     console.log('age: '+age);
// }

// console.log(index);
// console.log(age);

// const webUrl = 'https://unicode.vn';

// console.log(webUrl);

// let check = 10;
// if (check==10){
//     const age = 30;
//     console.log(age);
// }

// console.log(age);

// const customerObject = {};
// customerObject.name='Hoàng An';
// console.log(customerObject);

// customerObject = [];

//1. tham số mặc định tại vị trí khai báo
// function getMsg(name, defaultStr=''){

// }

//2. Tham số mặc định trong hàm
function getMsg(name, defaultStr){
    //defaultStr = defaultStr!==undefined?defaultStr:'';
    //defaultStr = defaultStr || '';
    defaultStr = defaultStr ?? '';
    return defaultStr;
}

console.log(getMsg('Unicode'));

//Cú pháp Spread

const oldArr = [1,2,3];

const newArr = [...oldArr,4,5,6];

console.log(newArr);

const oldObject = {
    name: 'Dương Minh Trí'
  };
const newObject = {
    ...oldObject,
    age: 4
};

console.log(newObject);

//Tham số còn lại

function setMsg(...args){
    console.log(args);
}

setMsg('Unicode', 'Academy');

//Destructuring: Phá vỡ cấu trúc

const customerArr = [
    'Hoàng An',
    'Anh Quân',
    'Hoàng Anh'
];

const [firstCustomer, secondCustomer, lastCustomer] = customerArr;

console.log(firstCustomer);
console.log(secondCustomer);
console.log(lastCustomer);

// const customerObject = {
//     name: 'Hoàng An',
//     age: 30
// };

// const {name, age} = customerObject;

// console.log(name);
// console.log(age);

let a = 10;
let b = 20;

//Đổi chỗ 2 biến

//Cách 1: Dùng biến trung gian
// let tg = a;
// a = b;
// b = tg;

//Cách 2: Dùng phép toán
// a=a+b;
// b=a-b;
// a=a-b;

//Cách 3: Dùng Destructuring
[a, b] = [b,a];

console.log('a = '+a);
console.log('b = '+b);

//Arrow function

// const getName = function(){
//     return 'Hoàng An Unicode';
// }

//Không có tham số
// const getName = () => {
//     return 'Hoàng An Unicode';
// }

// const getName = (name) => {
//     return name;
// }

// const getName = name => {
//     return name;
// }

// console.log(getName('Hoàng An'));

// setInterval(() => {
//     console.log(Math.random());
// }, 1000);

// document.querySelector('html').addEventListener('click', (e) =>{
//     console.log(e);
//     console.log('clicked me');
// });

//Classes

// function Person(){
//     this.name = 'Hoàng An';
//     this.age = 30;

//     this.getName = () => {
//         return this.name;
//     }
// }

// const myObject = new Person();
// console.log(myObject.getName());

class Person{

    //Hàm khởi tạo, dùng để gán thuộc tính của Object
    constructor(nameVal, ageVal){
       // this.name = 'Hoàng An';
       // this.age = 30;
       this.name = nameVal;
       this.age = ageVal;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    setName(value){
        this.name = value;
    }

    setAge(value){
        this.age = value;
    }
}

class User extends Person{
    constructor(nameVal, ageVal){
        //super(name, age);
        //this.age = 40;
        super(nameVal, ageVal); //kế thừa constructor từ class cha
        // this.name = name;
        // this.age = age;
    }

    getFullInfo(){
       //return this.name+' - '+this.age;
       return this.getName()+' - '+this.getAge();
    }
}

// const myObject = new Person('Hoàng An Unicode', 30);
// console.log(myObject.getName());

// myObject.setName('Hoàng Anh');

// console.log(myObject.getName());

// myObject.setAge(35);

// console.log(myObject.getAge());

// const userObject = new User('Hoàng An Unicode', 35);

// console.log(userObject.getFullInfo());

function getProducts(){

    let productPromise = new Promise((thanhcong, loi) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'http://localhost:3000/products', true);
        xhttp.send();
        
        xhttp.onload = function(){
            if (this.status==200){
                //return this.response;
                let response = this.response;

                thanhcong(response);
            }
        }   

        xhttp.error = ()=>{
            loi('Lỗi xảy ra');
        }
    });
    
    return productPromise;
}

let productObject = getProducts();

console.log(productObject);

productObject.then((data)=>{
    console.log(data);
},
(error)=>{
    console.log(error);
});