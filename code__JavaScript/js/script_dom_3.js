var tabNavItem, hashItem, tabPanel, tabPanelActive, tabNavActive;

tabNavItem = document.querySelectorAll('.nav-tab>ul>li>a');

if (tabNavItem!==null){
    for (var index = 0; index < tabNavItem.length; index++){
        tabNavItem[index].addEventListener('click', function(e){
            e.preventDefault();

            hashItem = this.getAttribute('href'); //this.href

            // console.log(this.href);
            // console.log(hashItem);
        
            tabPanel = document.querySelector(hashItem);
            
            if (tabPanel!==null){

                //Xoá class active tại tab panel đang active

                /*
                phân tích hiệu ứng fadeOut, fadeIn
                Giai đoạn 1: fadeOut (Hiệu ứng ẩn thành phần)
                - Xác định tổng số thời gian sẽ ẩn (0.4s)
                - Xác định thuộc tính CSS dùng để ẩn (opacity): Chuyển từ 1 về 0
                - Sử dụng thuộc tính ẩn hẳn html (display: none)
                - display: none không thể tạo hiệu ứng transition cho nên cần phải đưa vào setTimeout với thời gian bằng thời gian đã set trong transition CSS3

                Giai đoạn 2: fadeIn() (Hiện ứng hiện thành phần)
                - Cho opacity hoạt động trước
                - Hiển thị display: block sau 0.4s (opacity đã chạy xong)
                */
                
                tabPanelActive = document.querySelector('.tab-content .tab-panel.active');

                if (tabPanelActive!==null){
                    
                    tabPanelActive.style.opacity = '0';

                    setTimeout(function(){
                        tabPanelActive.classList.remove('active');

                        tabPanel.classList.add('active');
                        tabPanel.style.opacity = '0'; 

                        setTimeout(function(){

                          tabPanel.style.opacity = '1';
                            
                        }, 400);

                    }, 400);
                }
                
                   
                
            }

            //Active tab nav
            tabNavActive = document.querySelector('.tabs .nav-tab>ul>li.active');
            if (tabNavActive!==null){
                tabNavActive.classList.remove('active');
            }
            
            this.parentElement.classList.add('active');
        });
    }
}