var input = '[video]https://www.youtube.com/watch?v=jwBnAzKHYW8[/video]';

var pattern = /\[video\].*(?:youtube\.com\/watch\?v=([^&]+).*|youtu\.be\/([^\?]+).*)\[\/video\]/;

var result = input.match(pattern);

var videoId = null;

if (result!==null){
    if (result[1]!==undefined){
        videoId = result[1];
    }

    if (result[2]!==undefined){
        videoId = result[2];
    }
}

if (videoId!==null){
    var iframeHtml = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    document.querySelector('.video-box').innerHTML = iframeHtml;
}