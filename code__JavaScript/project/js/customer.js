import functionData from './functions.js';
import User from './class.js';

const customerObject = [
    {
        id: 1,
        name: 'Nguyễn Văn A',
        location: 'Hà Nội'
    },

    {
        id: 2,
        name: 'Nguyễn Văn B',
        location: 'Hồ Chí Minh'
    }
];

const serviceObject = [
    {
        name: 'Dịch vụ 1',
        price: 20000
    },

    {
        name: 'Dịch vụ 2',
        price: 20000
    }
];

function getService(index){
    return serviceObject[index];
}

//Export tên bắt buộc phải đưa vào object
export {customerObject, serviceObject, getService, functionData, User};
// export {serviceObject};