
window.addEventListener('DOMContentLoaded', function(){

    //Khai báo các biến cần thiết
    var province, district, ward;

    //Khởi tạo object dom
    province = document.querySelector('#province');
    district = document.querySelector('#district');
    ward = document.querySelector('#ward');

    //Function load quận/huyện theo tỉnh/thành
    function loadDistrict(provinceId){
        var xhttpDistrict = new XMLHttpRequest();
        xhttpDistrict.open("GET", "data/quan_huyen.json", true);
        xhttpDistrict.send();

        //Thành công
        xhttpDistrict.onload = function(){
            if (this.status==200){
                //Load dữ liệu thành công
                var response = this.response;
                if (response!==' '){
                    var districtObject = JSON.parse(response);
                    var optionHtml = '<option value="0">Chọn Quận/Huyện</option>\n';

                    var districtSelected = 0;

                    if (sessionStorage.getItem('districtSelected')){
                        districtSelected = sessionStorage.getItem('districtSelected');
                        
                    }

                    for (var index in districtObject){
                        var districtItem = districtObject[index];

                        if (districtItem.parent_code==provinceId){
                            
                            var selectedAttr = '';
                            if (districtSelected==districtItem.code){
                                selectedAttr = 'selected';
                            }
                            
                            optionHtml+=`<option value="${districtItem.code}" ${selectedAttr}>${districtItem.name_with_type}</option>\n`;
                        }
                    }

                    //Render option vào select
                    district.innerHTML = optionHtml;

                    //Load xã/phường khi load trang (Nếu quận/huyện đã được chọn từ trước)

                    // setTimeout(function(){
                    //     var districtId = district.options[district.selectedIndex].value;
                        
                    //     loadWard(districtId);

                    // }, 1500);

                    var districtId = district.options[district.selectedIndex].value;
                        
                    loadWard(districtId);

                }
            }
        }

        //Lưu tỉnh/thành phố đã chọn vào sessionStorage
        sessionStorage.setItem('provinceSelected', provinceId);
    }

    //Function load xã/phường theo quận/huyện
    function loadWard(districtId){
        var xhttpWard = new XMLHttpRequest();
        xhttpWard.open("GET", "data/xa_phuong.json", true);
        xhttpWard.send();

        //Thành công
        xhttpWard.onload = function(){
            if (this.status==200){
                //Load dữ liệu thành công
                var response = this.response;
                if (response!==' '){
                    var wardObject = JSON.parse(response);
                    var optionHtml = '<option value="0">Chọn Xã/Phường</option>\n';

                    var wardSelected = 0;

                    if (sessionStorage.getItem('wardSelected')){
                        wardSelected = sessionStorage.getItem('wardSelected');
                    }

                    for (var index in wardObject){
                        var wardItem = wardObject[index];
                        if (wardItem.parent_code==districtId){
                            
                            var selectedAttr = '';
                            if (wardSelected==wardItem.code){
                                selectedAttr = 'selected';
                            }
                            
                            optionHtml+=`<option value="${wardItem.code}" ${selectedAttr}>${wardItem.name_with_type}</option>\n`;
                        }
                    }

                    //Render option vào select
                    ward.innerHTML = optionHtml;
                }
            }
        }

        //Lưu quận/huyện đã chọn vào sessionStorage
        sessionStorage.setItem('districtSelected', districtId);
    }

    //Load tỉnh/thành phố (khi load trang)
    if (province!==null){

        var xhttpProvince = new XMLHttpRequest();
        xhttpProvince.open("GET", "data/tinh_tp.json", true);
        xhttpProvince.send();

        //Thành công
        xhttpProvince.onload = function(){
            if (this.status==200){
                //Load dữ liệu thành công
                var response = this.response;
                if (response!==' '){
                    var provinceObject = JSON.parse(response);
                    var optionHtml = '<option value="0">Chọn Tỉnh/Thành phố</option>\n';

                    var provinceSelected = 0;

                    if (sessionStorage.getItem('provinceSelected')){
                        provinceSelected = sessionStorage.getItem('provinceSelected');
                    }
                    
                    for (var index in provinceObject){

                        var selectedAttr = '';
                        if (provinceSelected==provinceObject[index].code){
                            selectedAttr = 'selected';
                        }

                        optionHtml+=`<option value="${provinceObject[index].code}" ${selectedAttr}>${provinceObject[index].name}</option>\n`;
                    }

                    //Render option vào select
                    province.innerHTML = optionHtml;

                    //Load quận/huyện khi load trang (Nếu tỉnh/thành phố đã được chọn từ trước)
                    // setTimeout(function(){
                    //         var provinceId = province.options[province.selectedIndex].value;
                    //         loadDistrict(provinceId);
                    // }, 500);

                    var provinceId = province.options[province.selectedIndex].value;
                    loadDistrict(provinceId);
                }
            }
        }

        //Lỗi (Thường được dùng để debug)
        // xhttpProvince.error = function(){
        //     console.log(this);
        // }    
        
        //Load quận/huyện khi chọn tỉnh/thành phố
        province.addEventListener('change', function(){

            //Reset quận/huyện, xã/phường đã chọn
            district.innerHTML = '<option value="0">Chọn Quận/Huyện</option>\n';
            ward.innerHTML = '<option value="0">Chọn Xã/Phường</option>\n';

            var provinceId = this.value;
            
            if (provinceId>0 && district!==null){

                //Gọi ajax tới data/quan_huyen.json
                loadDistrict(provinceId);
            }
        });

        //Load xã/phường khi chọn quận/huyện
        district.addEventListener('change', function(){
            var districtId = this.value;
            if (districtId>0 && ward!==null){
                //Gọi ajax tới data/xa_phuong.json
                loadWard(districtId);
            }
        });

        

        //Chọn xã phường
        ward.addEventListener('change', function(){
            var wardId = this.value;
            if (wardId>0){
                sessionStorage.setItem('wardSelected', wardId);
            }
            
        });
    }
    
});