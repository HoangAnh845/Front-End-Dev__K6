var linkYTB = '[video]https://www.https://www.youtube.com/watch?v=-dKsDVq24rM&list=RDj6lTi124SOY&index=3[/video]';
var ifRame  = '<iframe width="560" height="315" src="https://www.youtube.com/embed/nQdANPsrETI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' 
var pattern = /https?:\/\/(?:youtu\.be\/|(?:[a-z]{2,3}\.)?youtube\.com\/watch(?:\?|#\!)v=)([\w-]{11})/;
var link    = linkYTB.match(pattern);

//------------Thay thế chuỗi-----------------
ifRame = ifRame.replace('https://www.youtube.com/embed/nQdANPsrETI',link);
console.log(ifRame);