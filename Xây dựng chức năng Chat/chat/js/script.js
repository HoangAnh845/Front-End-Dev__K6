window.addEventListener('DOMContentLoaded', () => {
    let fullNameObj, msgOj, chatFormOj, chatItemHtml, chatContentOj;

    fullNameObj = document.querySelector('[name="fullName"]');
    msgOj = document.querySelector('[name="msg"]');
    chatFormOj = document.querySelector('.chat form');
    chatContentOj = document.querySelector('.msg-content');

    if (chatFormOj !== null) {
        chatItemHtml = `
        <div class="msg-item">
            <label for="">{name}</label>
            {msg}
        </div>
        `;

        if (fullNameObj !== null) {
            //Nhập tên vào input 
            fullNameObj.addEventListener('change', function () {
                let fullName = this.value;
                if (fullName.trim() !== '') {
                    sessionStorage.setItem('fullName', fullName);
                }
            });

            //Khi load trang 
            if (sessionStorage.getItem('fullName') !== null) {
                fullNameObj.value = sessionStorage.getItem('fullName').trim();
            }
        }

        chatFormOj.addEventListener('submit', function (e) {
            e.preventDefault();
            let fullName;
            if (fullNameObj !== null) {
                fullName = fullNameObj.value;
            }

            if (msgOj !== null) {
                let msg = msgOj.value;
                if (msg.trim() == "" || fullName.trim() == "") {
                    if (msg.trim() == "") {
                        alert('Vui lòng nhập tin nhắn');
                    } else {
                        alert('Vui lòng nhập tên');
                    }
                } else {
                    if (chatContentOj !== null) {

                        //thay thế tin nhắn và tên 
                        let chatItemHtmlNew = chatItemHtml.replace("{name}", fullName)
                            .replace("{msg}", msg);

                        let sendMsg = sendMessage(fullName, msg);

                        sendMsg.then((data) => {
                            if (data !== '') {
                                chatContentOj.innerHTML += chatItemHtmlNew;
                                //reset nội dung tin nhắn
                                msgOj.vsalue = "";
                                msgOj.focus();
                            }

                        })

                    }
                }
            }
        });
        // tự động load tin nhắn 
        setInterval (()=>{
            let msgContentPromise = getMeeage();
            msgContentPromise.then((data)=>{
                if(data!==''){
                    let dataOj = JSON.parse(data);
                    let msgContent ='';
                    dataOj.forEach((item)=>{
                        let chatItemHtmlNew = chatItemHtml.replace("{name}", item.fullName)
                        .replace("{msg}", item.msg);
                        msgContent += chatItemHtmlNew;
                    });
                    if (chatContentOj !== null && msgContent.trim()!== ''){
                        chatContentOj.innerHTML = msgContent
                    }
    
                }
    
            });
        },600);
    }

    function sendMessage(name, msg) {
        const msgPromise = new Promise((success, error) => {
            let xhttp = new XMLHttpRequest();
            let currentData = new Date();
            let createAt = currentData.getDate() + '/' + currentData.getMonth() + '/' + currentData.getFullYear() + '' + currentData.getHours() + ':' + currentData.getMinutes() + ':' + currentData.getSeconds();
            let data = {
                fullName: name,
                msg: msg,
                create: createAt
            };
            let queryData = new URLSearchParams(data).toString();

            xhttp.open("POST", "http://localhost:3000/chat", true);
            xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhttp.send(queryData);

            xhttp.onload = function () {
                if (this.status == 201) {
                    success(this.response);
                }
            }

        });
        return msgPromise;
    }

    function getMeeage() {
        const msgPromise = new Promise((success, error) => {
            let xhttp = new XMLHttpRequest();
            xhttp.open("GET", "http://localhost:3000/chat", true);
            xhttp.send();
            xhttp.onload = function () {
                if (this.status == 200) {
                    success(this.response
                    )
                }
            }
        });
        return msgPromise;
    }
});