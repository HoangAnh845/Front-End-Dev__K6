var endDay = new Date('1-1-2022');

var now= new Date();
var milliseconds = endDay.getTime() - now.getTime();
setInterval(() => {
    
    var seconds=milliseconds/1000;
    var days= Math.floor(seconds/86400);
    var hours= Math.floor((seconds-(days)*86400)/3600);
    var minutes = Math.floor(((seconds-(days)*86400)/3600 - hours)*60);
    var seconds = Math.floor((((seconds-(days)*86400)/3600 - hours)*60-minutes)*60);
    console.log('Còn '+days+' ngày '+hours +' giờ '+minutes+ ' phút '+seconds+' giây đến tết dương lịch 2022');
    document.querySelector('body').innerHTML='Còn '+days+' ngày '+hours +' giờ '+minutes+ ' phút '+seconds+' giây đến tết dương lịch 2022';
    milliseconds-=1000;
}, 1000);