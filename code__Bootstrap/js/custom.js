// var loginModal = new bootstrap.Modal(document.getElementById('login-modal'));
// setTimeout(()=>{
//     loginModal.show();
// }, 5000);

// var videoModal = document.querySelector('#video-modal');
// videoModal.addEventListener('hidden.bs.modal', ()=>{
//     let iframe = document.querySelector('iframe');
//     sessionStorage.setItem('video-youtube', iframe.src);
//     iframe.src = '';
// });

// videoModal.addEventListener('shown.bs.modal', ()=>{
//     let iframe = document.querySelector('iframe');
//     if (sessionStorage.getItem('video-youtube')){
//         iframe.src = sessionStorage.getItem('video-youtube');
//     }
    
// });

// var loginModal = document.querySelector('#login-modal');
// loginModal.addEventListener('hidden.bs.modal', ()=>{
//     window.location.reload();
// });

// var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
// var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//   return new bootstrap.Popover(popoverTriggerEl, {
//         'html': true
//   });
// })

// document.querySelector('.start-play').addEventListener('click', ()=>{
//     document.querySelector('.status-loading .progress-bar').style.width = '50%'; 

//     let count = 0;
//     const countInterval = setInterval(() => {
//         count++;
//         document.querySelector('.status-loading .progress-bar').innerText = count+'%';
//         if (count>=50){
//             clearInterval(countInterval);
//         }
//     }, 10);
// });

// document.querySelector('.send').addEventListener('click', (e)=>{
//     e.target.classList.add('disabled');
//     e.target.querySelector('span').classList.remove('d-none');

//     setTimeout(()=>{
//         e.target.classList.remove('disabled');
//         e.target.querySelector('span').classList.add('d-none');
//     }, 5000);
// });

var toastLiveExample = document.getElementById('notify');

var toast = new bootstrap.Toast(toastLiveExample)

toast.show();

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
