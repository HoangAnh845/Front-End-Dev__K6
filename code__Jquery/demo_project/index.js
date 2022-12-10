import routes from "./routes.js";

let hashUrl = window.location.hash;

if (hashUrl.trim()==''){
    hashUrl = '/';
}

hashUrl = hashUrl.replace('#', '');

let module = routes[hashUrl] || 'error';

//Load các file HTML tương ứng

$('#app').load('modules/'+module+'.html');

