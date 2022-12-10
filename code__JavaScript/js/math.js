console.log(Math);

var pINumber = Math.PI;

console.log('Số PI: '+pINumber);

var roundNumber = Math.round(5.4);

console.log('Làm tròn: '+roundNumber);

var powNumber = Math.pow(10,3);

console.log('Luỹ thừa: '+powNumber);

var randNumber = Math.random(); //Lấy số ngẫu nhiên từ 0 đến 1 (float)

//Random giá trị từ 1 đến 100
randNumber = randNumber*10;

console.log(randNumber);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

randNumber = getRandomInt(1, 100);

console.log(randNumber);