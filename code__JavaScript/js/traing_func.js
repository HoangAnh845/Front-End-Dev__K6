const userOj = {
    name: 'Hoang Anh',
    age: 30
};

const customerOj = {
    service: 'Traing',
    cost: 3000
};

function getName(){
    return 'Javascript Unicode';
};

const customerObject =[
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

//viết cuối 
export default {userOj,customerOj,getName};
export {customerObject,serviceObject};
