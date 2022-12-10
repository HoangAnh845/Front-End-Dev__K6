var pageCount=0,studenArrPageChild=[], numberItemOfPage=6,numberPageOject;
var itemTable='';
var pageDotObject,page1,nextButtonOject,prevButtonObject,nameButtonObject,emailButtonObject,phoneButtonObject,cityButtonObject,flag=true,flagMail=true,flagPhone=true;flagCity=true;
var studentArr = [
    [
        'Tạ Hoàng An',
        'hoangan.web@gmail.com',
        '0388875179'
    ],
    [
        'Nguyễn Văn A',
        'Anguyenvana@gmail.com',
        '0388875178'
    ],
    [
        'Nguyễn Văn B',
        'Bnguyenvanb@gmail.com',
        '0388875177'
    ],
    [
        'Nguyễn Văn C',
        'Cnguyenvanc@gmail.com',
        '0388875176'
    ],
    [
        'Nguyễn Văn D',
        'Dnguyenvanc@gmail.com',
        '0388875176'
    ],
    [
        'Nguyễn Văn E',
        'Enguyenvanc@gmail.com',
        '0388875176'
    ],
    [
        'Nguyễn Văn F',
        'Fnguyenvanc@gmail.com',
        '0388875176'
    ]
];
numberItemOfPage =12;

function addtdCity(Array,item){
    Array.forEach(function(element,index){
        if(index<30)
        element.push(item+' Hà nội ')
        else if(index>30&&index<70)
        element.push(item+' Tp Hồ Chí Minh');
        else if(index>70)
        element.push(item+' Đà nẵng');
        // console.log(element)
    });
}

//render 1 arr 2 chieu thành dạng hàng table đầu vào là 1 mảng 2 chieu và stt của mảng đó
function renderArrToHtmlTable (parameters,pagenumber) {
    itemTable='';
    if (parameters!==undefined){
        parameters.forEach(function(item, index){
            itemTable+= `<tr>`;
                itemTable+=`<td>${(pagenumber*numberItemOfPage)+index+1}</td>`;
                itemTable+=`<td>${item[0]}</td>`;
                itemTable+=`<td>${item[1]}</td>`;
                itemTable+=`<td>${item[2]}</td>`;
                itemTable+=`<td>${item[3]}</td>`;
            itemTable+=`</tr>`;
        });
    }
}

//tạo nút chọn trang đầu vào là arr tổng
function addSelectPageDot (arr) {
    pageCount = Math.ceil(arr.length/numberItemOfPage);
        var divPageSelectHtml= '<div class="page-select"><span class="prev"><i class="fa fa-angle-double-left" aria-hidden="true"></i></span><span class="beforedot can-hide dot">...</span>';
        for (let index = 0; index <pageCount; index++) {
            divPageSelectHtml+=`<span id='page${index+1}' class='button'>${index+1}</span>`
        }
        divPageSelectHtml+='<span class="afterdot can-hide dot">...</span><span class="next"><i class="fa fa-angle-double-right" aria-hidden="true"></i></div>'
    document.querySelector('.container').innerHTML += divPageSelectHtml;
}


//cắt ra thành nhiều arr nhỏ tử arr ban đầu
function splitStudentArr(arr){
    if(pageCount!==0){
        for (let index = 0; index < pageCount; index++) {
            studenArrPageChild[index]=arr.slice(index*numberItemOfPage,(index+1)*numberItemOfPage);
            //console.log(index,studenArrPageChild[index])
        }
    }
}

//remove class active,can-hide đầu vào là 'active' hoạc can-hide
function removeClassPageDot (parameter) {
    var activeDot= document.querySelectorAll('.page-select span.'+parameter);
    if(activeDot!==null){
        activeDot.forEach(elementActive => {
            elementActive.classList.remove(parameter)
        });
    }
}

//đưa du liệu item vào tbody đầu vào là html của mảng muốn hiển thị
function renderArrToFullTable (parameters) {
    var tableHtml = `<input type="search" id="search" placeholder="Từ khoá tìm kiếm..." /><input type="search" id="searchcity" placeholder="tìm kiếm với thành phố..." /><table border="1">
    <thead>
    <tr>
    <th width="5%">STT</th>
    <th class='nameButton'>Họ tên</th>
    <th class='emailButton'>Email</th>
    <th class='phoneButton'>Số điện thoại</th>
    <th class='cityButton'>Tỉnh / Thành phố</th>
    </tr>
    </thead>
    <tbody>
    ${parameters}
    </tbody>
    </table>`;
    
    document.querySelector('.result').innerHTML = tableHtml;
}


//sự kiện khi chọn trang đầu vào là số thú tự của trag
function pageActiveEvent(pageNumber) {
    removeClassPageDot('can-hide');
    if(pageNumber-3<=0&&pageNumber>=0){
        for(var index=6; index<=pageCount;index++){
            var pageHide= document.querySelector('.page-select span#page'+(index+1));
            if(pageHide!==null)
            pageHide.classList.add('can-hide')
            
        }
    }else if(pageCount-pageNumber<=3&&pageNumber<=pageCount){
        for(var index=0; index<pageCount-6;index++){
            var pageHide= document.querySelector('.page-select span#page'+(index+1));
            if(pageHide!==null)
            pageHide.classList.add('can-hide')
        }
    }else{
        for(var index=0; index<pageNumber-3;index++){
            var pageHide= document.querySelector('.page-select span#page'+(index+1));
            if(pageHide!==null)
            pageHide.classList.add('can-hide')
        }
        for(var index=pageNumber+3; index<pageCount;index++){
            var pageHide= document.querySelector('.page-select span#page'+(index+1));
            if(pageHide!==null)
            pageHide.classList.add('can-hide')
        }      
    }
    var pageActive=document.querySelector('.page-select span#page'+(pageNumber+1))
    if(pageActive!==null){
        pageActive.classList.add('active')
    }
    if(pageNumber<4&&pageCount>=6){
        var beforedot= document.querySelector('.page-select span.beforedot');
        if(beforedot!==null)
        beforedot.classList.add('can-hide')
        var afterdot= document.querySelector('.page-select span.afterdot');
        if(afterdot!==null)
        afterdot.classList.remove('can-hide')
    }else if(pageNumber>pageCount-4&&pageCount>=6){
        var beforedot= document.querySelector('.page-select span.beforedot');
        if(beforedot!==null)
        beforedot.classList.remove('can-hide')
        var afterdot= document.querySelector('.page-select span.afterdot');
        if(afterdot!==null)
        afterdot.classList.add('can-hide')
    }else if(pageCount<=6){
        var beforedot= document.querySelector('.page-select span.beforedot');
        if(beforedot!==null)
        beforedot.classList.add('can-hide')
        var afterdot= document.querySelector('.page-select span.afterdot');
        if(afterdot!==null)
        afterdot.classList.add('can-hide')
    }else{
        var beforedot= document.querySelector('.page-select span.beforedot');
        if(beforedot!==null)
        beforedot.classList.remove('can-hide')
        var afterdot= document.querySelector('.page-select span.afterdot');
        if(afterdot!==null)
        afterdot.classList.remove('can-hide')
    }
}


//thêm cho đủ số học sinh sinh cần
function addStudenToArr (parameters) {
    while (studentArr.length<parameters){
        studentArr[studentArr.length]=[
            `Nguyễn Văn ${studentArr.length+1}`,
            `nguyenvanc${studentArr.length+1}@gmail.com`,
            '0388875176'
        ]
    }
}


//sự kiện chọn trang bằng nút
function addEventDotClick () {
    pageDotObject = document.querySelectorAll('.page-select span.button');
    if(pageDotObject!==null){
        for (let index = 0; index < pageDotObject.length; index++) {
            const element = pageDotObject[index];
            element.addEventListener('click',function(){
                removeClassPageDot('active');
                pageActiveEvent(index);
                var pagenumber=parseInt(element.innerText) -1;
                renderArrToHtmlTable(studenArrPageChild[pagenumber],pagenumber);
                document.querySelector('.result table tbody').innerHTML = itemTable;
            })
        }
    }
}
//su kiện nút next
function addEventNextButtonClick () {
    nextButtonOject =document.querySelector('.page-select span.next');
    if(nextButtonOject!==null){
        nextButtonOject.addEventListener('click',function(){
            var activeDot = document.querySelector('.page-select span.button.active');
            if(activeDot!==null){
                var num=parseInt(activeDot.innerText);
                if(num<pageCount){
                    removeClassPageDot('active');
                    pageActiveEvent(num);
                    var pagenumber=parseInt(activeDot.innerText);
                    renderArrToHtmlTable(studenArrPageChild[pagenumber],pagenumber);
                    document.querySelector('.result table tbody').innerHTML = itemTable;
                }
                
            }
        })
    }
}

//sụ kiện prev
function addEventPrevButtonClick () {
    prevButtonObject =document.querySelector('.page-select span.prev');
    if(prevButtonObject!==null){
        prevButtonObject.addEventListener('click',function(){
            var activeDot = document.querySelector('.page-select span.button.active');
            if(activeDot!==null){
                var num=parseInt(activeDot.innerText);
                if(num-2>=0){
                    removeClassPageDot('active');
                    pageActiveEvent(num-2);
                    var pagenumber=parseInt(activeDot.innerText) -2;
                    renderArrToHtmlTable(studenArrPageChild[pagenumber],pagenumber);
                    document.querySelector('.result table tbody').innerHTML = itemTable;
                }
               
            }
        })
    }
}


//sukien click vào đầu cột name
function addEventHeadNameClick(){
    nameButtonObject = document.querySelector('.result table thead .nameButton');
    if(nameButtonObject!==null){
        nameButtonObject.addEventListener('click',function(){
            if(studentArr!==null){
                var listNames=[];
                for (let index = 0; index < studentArr.length; index++) {
                    const element = studentArr[index];
                    
                    //mảng chứa tên
                    listNames.push(element[0]);
                    
                    for (let i = 0; i < listNames.length-1; i++) {
                        var fullNameIArr=listNames[i].split(' ');
                        var nameI = fullNameIArr[fullNameIArr.length-1]
                        for (var j = i+1; j<listNames.length; j++){
        
                            //chuyển chuỗi thành mảng để lấy ra tên của từng học viên
                            var fullNameJArr = listNames[j].split(' ');
                    
                            //lấy ra tên của từng học viên
                            var nameJ = fullNameJArr[fullNameJArr.length-1];
                    
                            //So sánh theo tên và đổi chỗ cả họ và tên
                            if(flag==true){
                                
                                if (nameI>nameJ){
                                    /*
                                    var tmp = studentArr[i];
                                    studentArr[i] = studentArr[j];
                                    studentArr[j] = tmp;
                                    */
                                [listNames[i], listNames[j]] = [listNames[j], listNames[i]];
                                [studentArr[i], studentArr[j]] = [studentArr[j], studentArr  [i]];
                                }
                            }else if(flag==false){
                                if (nameI<nameJ){
                                    /*
                                    var tmp = studentArr[i];
                                    studentArr[i] = studentArr[j];
                                    studentArr[j] = tmp;
                                    */
                                [listNames[i], listNames[j]] = [listNames[j], listNames[i]];
                                [studentArr[i], studentArr[j]] = [studentArr[j], studentArr  [i]];
                                }
                            } 
                        }
                    }          
                }
                removeClassPageDot('active');
                splitStudentArr(studentArr);
                // Hiện trang số 0 khi vừa load xong
                renderArrToHtmlTable(studenArrPageChild[0],0);
                pageActiveEvent(0);
                document.querySelector('.result table tbody').innerHTML = itemTable;
            }
        flag=!flag;    
        })
    }
    
}
//sukien click vào đầu cột email
function addEventHeadEmailClick(){
    emailButtonObject = document.querySelector('.result table thead .emailButton');
    if(emailButtonObject!==null){
        emailButtonObject.addEventListener('click',function(){
            for(var i=0;i<studentArr.length-1;i++){
                for(var j=i+1;j<studentArr.length;j++){
                    if(flagMail==true){
                        if(studentArr[i][1]>studentArr[j][1]){
                            [studentArr[i], studentArr[j]] = [studentArr[j], studentArr  [i]];
                        }
                    }else if(flagMail==false){
                        if(studentArr[i][1]<studentArr[j][1]){
                            [studentArr[i], studentArr[j]] = [studentArr[j], studentArr  [i]];
                        }
                    }
                    
                }
            }
            removeClassPageDot('active');
            splitStudentArr(studentArr);
            renderArrToHtmlTable(studenArrPageChild[0],0);
            pageActiveEvent(0);
            document.querySelector('.result table tbody').innerHTML = itemTable;
            flagMail=!flagMail;
        })
    }
    
}
//sukien click vào đầu cột phone
function addEventHeadPhoneClick(){
    phoneButtonObject = document.querySelector('.result table thead .phoneButton');
    if(phoneButtonObject!==null){
        phoneButtonObject.addEventListener('click',function(){
            for(var i=0;i<studentArr.length-1;i++){
                for(var j=i+1;j<studentArr.length;j++){
                    if(flagPhone==true){
                        if(studentArr[i][2]>studentArr[j][2]){
                            [studentArr[i], studentArr[j]] = [studentArr[j], studentArr  [i]];
                        }
                    }else if(flagPhone==false){
                        if(studentArr[i][2]<studentArr[j][2]){
                            [studentArr[i], studentArr[j]] = [studentArr[j], studentArr  [i]];
                        }
                    }
                    
                }
            }
            removeClassPageDot('active');
            splitStudentArr(studentArr);
            renderArrToHtmlTable(studenArrPageChild[0],0);
            pageActiveEvent(0);
            document.querySelector('.result table tbody').innerHTML = itemTable;
            flagPhone=!flagPhone;
        })
    }
    
}

//sukien click vào đầu cột Thành phố
function addEventHeadCityClick(){
    cityButtonObject = document.querySelector('.result table thead .cityButton');
    if(cityButtonObject!==null){
        cityButtonObject.addEventListener('click',function(){
            for(var i=0;i<studentArr.length-1;i++){
                for(var j=i+1;j<studentArr.length;j++){
                    if(flagCity==true){
                        if(studentArr[i][3]>studentArr[j][3]){
                            [studentArr[i], studentArr[j]] = [studentArr[j], studentArr  [i]];
                        }
                    }else if(flagCity==false){
                        if(studentArr[i][3]<studentArr[j][3]){
                            [studentArr[i], studentArr[j]] = [studentArr[j], studentArr  [i]];
                        }
                    }
                    
                }
            }
            removeClassPageDot('active');
            splitStudentArr(studentArr);
            renderArrToHtmlTable(studenArrPageChild[0],0);
            pageActiveEvent(0);
            document.querySelector('.result table tbody').innerHTML = itemTable;
            flagCity=!flagCity;
        })
    }
    
}
function search (){
    var keywordSearch = searchObject.value;
    keywordSearch = keywordSearch.trim();
    var keywordSearchCity = searchCityObject.value;
    keywordSearchCity = keywordSearchCity.trim();
    itemTable='';
    
    if (keywordSearch.length>=3&&keywordSearchCity.length<3){
        studentArr.forEach(function(item, index){
            var fullName = item[0];
            var email = item[1];
            var phone = item[2];
            var pattern = new RegExp(keywordSearch, 'ui');
            //console.log(patternFullName);
            
            if (pattern.test(fullName) || pattern.test(email) || pattern.test(phone)){
           
                itemTable+= `<tr>`;
                itemTable+=`<td>${index+1}</td>`;
                itemTable+=`<td>${studentArr[index][0]}</td>`;
                itemTable+=`<td>${studentArr[index][1]}</td>`;
                itemTable+=`<td>${studentArr[index][2]}</td>`;
                itemTable+=`<td>${studentArr[index][3]}</td>`;
                itemTable+=`</tr>`;
            
             }
        });
        
    }else if(keywordSearch.length>=3&&keywordSearchCity.length>=3){
        studentArr.forEach(function(item, index){
            var fullName = item[0];
            var email = item[1];
            var phone = item[2];
            var city = item[3];
            var patterncity = new RegExp(keywordSearchCity, 'ui');
            //console.log(patternFullName);
            var pattern = new RegExp(keywordSearch, 'ui');
            if (patterncity.test(city)){
                if(pattern.test(fullName) || pattern.test(email) || pattern.test(phone)){
                    itemTable+= `<tr>`;
                    itemTable+=`<td>${index+1}</td>`;
                    itemTable+=`<td>${studentArr[index][0]}</td>`;
                    itemTable+=`<td>${studentArr[index][1]}</td>`;
                    itemTable+=`<td>${studentArr[index][2]}</td>`;
                    itemTable+=`<td>${studentArr[index][3]}</td>`;
                    itemTable+=`</tr>`;
                }
             }
        });
    }
    else if(keywordSearch.length<3&&keywordSearchCity.length>=3){
        studentArr.forEach(function(item, index){
            var fullName = item[0];
            var email = item[1];
            var phone = item[2];
            var city = item[3];
            var patterncity = new RegExp(keywordSearchCity, 'ui');
            //console.log(patternFullName);
            var pattern = new RegExp(keywordSearch, 'ui');
            if (patterncity.test(city)){
                    itemTable+= `<tr>`;
                    itemTable+=`<td>${index+1}</td>`;
                    itemTable+=`<td>${studentArr[index][0]}</td>`;
                    itemTable+=`<td>${studentArr[index][1]}</td>`;
                    itemTable+=`<td>${studentArr[index][2]}</td>`;
                    itemTable+=`<td>${studentArr[index][3]}</td>`;
                    itemTable+=`</tr>`;
             }
        });
    }
    else{
        //Hiển thị đầy đủ kết quả
    
        if (studentArr!==null){
            splitStudentArr(studentArr);
            renderArrToHtmlTable(studenArrPageChild[0],0);
            pageActiveEvent(0);
        }
    }

    //Thay thế giá trị tìm được vào table
    document.querySelector('.result table tbody').innerHTML = itemTable;
}