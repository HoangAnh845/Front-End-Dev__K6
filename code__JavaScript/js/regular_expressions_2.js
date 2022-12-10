/*

Danh sách các ký tự Regex đặc biệt như sau:
\d - Chữ số bất kỳ ~ [0-9]
\D - Ký tự bất kỳ không phải là chữ số (ngược với \d) ~ [^0-9]
\w - Ký tự từ a-z, A-Z, _ hoặc 0-9 ~ [a-zA-Z0-9_]
\W - Ngược lại với \w (nghĩa là các ký tự không thuộc các khoảng: a-z, A-Z, dấu gạch dưới (_) hoặc 0-9) ~[^a-zA-Z0-9_]
\s - Khoảng trắng (space)
\S - Ký tự bất kỳ không phải là khoảng trắng

- Capturing Group: Chỉ áp dụng khi match, replace
- Greedy Regex: Tình trạng tham lam của dấu chấm (.)
- None Capturing Group: ?: => không sử dụng nhiều
- Positive Lookbehind: So sánh dựa chuỗi phía trước (?<=)
- Negative Lookbehind: So sánh dựa chuỗi phía trước (Phủ định) (?<!)
- Positive Lookahead: So sánh dựa vào chuỗi phía sau (?=)
- Negative Lookahead: So sánh dựa vào chuỗi phía sau (Phủ định) (?!)

*/

var pattern = /^((([a-z][a-z0-9-_\.]{2,}))(@([a-z][a-z0-9-_\.]*\.[a-z]{2,})))$/;
var str = 'hoangan.web@gmail.com';

var result = str.match(pattern);

console.log(result);

/*
Thay thế chuỗi biểu thức chính quy
*/

var str = 'hoangan.web@gmail.com contact@unicode.vn info@pveser.com';

var pattern = /[a-z][a-z0-9-_\.]{2,}@[a-z][a-z0-9-_\.]*\.[a-z]{2,}/g;

var result = str.match(pattern);

/*
Nếu sử dụng modifier là g (global) => Capturing Group không hoạt động
*/

if (result!==null){
    for (var index = 0; index < result.length; index++){
        var email = result[index];
        
        //Viết biểu thức chính quy thay thế từng username thành ***
        //var patternUsername = /^[a-z][a-z0-9-_\.]{2,}/;
        
        //Thay thế từng email thành dạng ***@domain.com
        //var item = email.replace(patternUsername, '***');

        //Thay thế email ban đầu thành email dạng ***@domain.com vào chuỗi str
        //str = str.replace(email, item);

        //lấy từng username của từng email
        var patternUsername = /^[a-z][a-z0-9-_\.]{2,}/;
        var userName = email.match(patternUsername);

        //áp dụng thay thế chuỗi cố định. thay thế username tìm được thành ***
        str = str.replace(userName, '***');
    }
}

//str = str.replace('hoangan.web', '***');

//str = str.replace(pattern, '***');

console.log(str);

/*
Ví dụ: Cho trước 1 đoạn văn bản, trong đó có tên miền, email, số điện thoại.
Yêu cầu:
Viết chương trình tự động thêm link vào email, tên miền, số điện thoại theo quy tắc sau:
- email@domain.com => <a href="mailto:email@domain.com">email@domain.com</a>
- https://domain.com => <a href="https://domain.com">https://domain.com</a>
- 0388875179 => <a href="tel:0388875179">0388875179</a>
*/

var text = `Lorem Ipsum is simply dummy text of the printing hoangan.web@gmail.com and typesetting industry. Lorem 0388875179 Ipsum has been the industry's standard dummy text ever since the 1500s, when hoanganit19@gmail.com an unknown printer took a galley of type and scrambled https://unicode.vn it to make a type 0388875179 specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, http://vnexpress.net remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing https://hoangan.net Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;

//Thay thế email
var patternEmail = /([a-z][a-z0-9-_\.]{2,}@[a-z][a-z0-9-_\.]*\.[a-z]{2,})/g;
text = text.replace(patternEmail, '<a href="mailto:$1">$1</a>');

//Thay thế website
var patternDomain = /((http|https):\/\/[a-z][a-z0-9-_\.]*\.[a-z]{2,})/g;
text = text.replace(patternDomain, '<a href="$1" target="_blank">$1</a>');

//Thay thế số điện thoại
var patternPhone = /((0|\+84)\d{9})/g;
text = text.replace(patternPhone, '<a href="tel:$1">$1</a>');

/*
Thay thế chuỗi bằng capturing group (Lấy giá trị của pattern tìm được trong capturing group vào hàm replace)
- Capturing group 1 => $1
- Capturing group 2 => $2
- Capturing group 3 => $3
Lưu ý: Nếu không có capturing group => không sử dụng được $1, $2, $3
*/

document.querySelector('.result').innerHTML = text;

/*
Giả sử có 2 url như sau
https://unicode.vn/khoa-hoc/lap-trinh-javascript-1.html
https://unicode.vn/khoa-hoc/lap-trinh-php-2.html
=> Cấu trúc: https://unicode.vn/{slug}-{id}.html
Trong đó
- {slug}: Chuỗi đường dẫn sau tên miền đến trước -id
- {id}: Số sau - và trước .html
*/

//var url = 'https://unicode.vn/khoa-hoc/lap-trinh-javascript-1.html';
var url = 'https://unicode.vn/khoa-hoc/lap-trinh-php-2.html';
var patternUrl = /^(https|http):\/\/unicode\.vn\/([a-z-\/]+)-(\d+)\.html$/;

// var resultUrl = url.match(patternUrl);

// console.log(resultUrl);

// var slug = 'khoa-hoc/lap-trinh-php';
// var id = 2;

console.log(url);

url = url.replace(patternUrl, 'https://vnexpress.net/$2-$3.html');

console.log(url);

console.log('Greedy Regex');

var image = '<img style="border: 1px solid red;" src="https://unicode.vn/images/anh.jpg" width="200" alt="Học code tại Unicode"/>';

var patternImage = /img.*src="(.+?)"/;

var resultImage = image.match(patternImage);
console.log(resultImage);

console.log('Non Capturing Group');

var str = 'https://unicode.vn';

var pattern = /(?:http|https):\/\/[a-z][a-z0-9-_\.]*\.([a-z]{2,})/;

var result = str.match(pattern);

console.log(result);

/*
Ví dụ: kiểm tra mật khẩu mạnh yếu

Có độ dài tối thiểu là: 10
Chứa ít nhất 2 chữ số: 1234567890
Chứa ít nhất 2 kí tự chữ cái in thường: a-z
Chứa ít nhất 2 ký tự chữ cái in hoa: A-Z
Chứa ít nhất 2 kí tự đặc biệt: !@#$%^&*()-+



*/

var password = 'UNicocde@@12';

var pattern = /(?=.*[0-9].*[0-9].*)(?=.*[a-z].*[a-z].*)(?=.*[A-Z].*[A-Z].*)(?=.*[!@#$%^&*()-+].*[!@#$%^&*()-+].*)(?=.{10,})/;

var checkPassword = pattern.test(password);

console.log(checkPassword);

/*
kiểm tra username hợp lệ
- chữ thường
- chỉ chứa chữ cái, số, dấu chấm, gạch dưới, gạch ngang
- Độ dài >=10

*/

var html = `<div class="col-left col-small" data-campaign="ThuongVien" id="automation_TV0">
<article class="item-news item-news-common"><h3 class="title-news"><a href="https://vnexpress.net/ba-tin-hieu-lac-quan-trong-chong-dich-tai-tp-hcm-4362830.html" title="Ba tín hiệu lạc quan trong chống dịch tại TP HCM" data-medium="Item-4" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-4&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Ba tín hiệu lạc quan trong chống dịch tại TP HCM</a></h3><div class="thumb-art"><a href="https://vnexpress.net/ba-tin-hieu-lac-quan-trong-chong-dich-tai-tp-hcm-4362830.html" class="thumb thumb-5x3" title="Ba tín hiệu lạc quan trong chống dịch tại TP HCM" data-medium="Item-4" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-4&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1"><picture><!--[if IE 9]><video style="display: none;"><![endif]--><source srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/pham-duc-hai-9014-1632735237.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=kj2rLWAkTdiA4v6BnL_hqQ 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/pham-duc-hai-9014-1632735237.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=5lx1zEyA6OTDbsaAx7bTgw 2x"><!--[if IE 9]></video><![endif]--><img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="680x408" alt="Ba tín hiệu lạc quan trong chống dịch tại TP HCM" class="lazy loading" src="https://i1-vnexpress.vnecdn.net/2021/09/27/pham-duc-hai-9014-1632735237.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=7OZWhhXYrlh8VPPh2bbpnQ" data-ll-status="loading"></picture></a></div><p class="description"><a href="https://vnexpress.net/ba-tin-hieu-lac-quan-trong-chong-dich-tai-tp-hcm-4362830.html" title="Ba tín hiệu lạc quan trong chống dịch tại TP HCM>" data-medium="Item-4" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-4&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Số ca tử vong và bệnh nhân thở máy giảm, ca xuất viện cao hơn nhập viện là 3 tín hiệu vui trong công tác chống dịch, theo lãnh đạo Ban chỉ đạo chống Covid-19 TP HCM.</a><span class="meta-news">
            <a class="count_cmt" href="https://vnexpress.net/ba-tin-hieu-lac-quan-trong-chong-dich-tai-tp-hcm-4362830.html#box_comment_vne" style="white-space: nowrap; display: inline-block;">
                <svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
                <span class="font_icon widget-comment-4362830-1">13</span>
            </a>
        </span></p></article>
<article class="item-news item-news-common"><h3 class="title-news"><a href="https://vnexpress.net/tp-hcm-lay-y-kien-nguoi-dan-ve-phuong-an-tuong-dai-tran-hung-dao-4362720.html" title="TP HCM lấy ý kiến người dân về phương án tượng đài Trần Hưng Đạo" data-medium="Item-5" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-5&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">TP HCM lấy ý kiến người dân về phương án tượng đài Trần Hưng Đạo</a></h3><div class="thumb-art"><a href="https://vnexpress.net/tp-hcm-lay-y-kien-nguoi-dan-ve-phuong-an-tuong-dai-tran-hung-dao-4362720.html" class="thumb thumb-5x3" title="TP HCM lấy ý kiến người dân về phương án tượng đài Trần Hưng Đạo" data-medium="Item-5" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-5&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1"><picture><!--[if IE 9]><video style="display: none;"><![endif]--><source srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/tuong-tran-hung-dao-1632728042-6460-1632728116.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=bz9CpKS1SCDfjxA-WX2Vuw 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/tuong-tran-hung-dao-1632728042-6460-1632728116.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=FuWwv1T8_9fGBqO8mIFi9Q 2x"><!--[if IE 9]></video><![endif]--><img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="680x408" alt="TP HCM lấy ý kiến người dân về phương án tượng đài Trần Hưng Đạo" class="lazy loading" src="https://i1-vnexpress.vnecdn.net/2021/09/27/tuong-tran-hung-dao-1632728042-6460-1632728116.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=aXoCR_mywBEbaEKM_bCFlQ" data-ll-status="loading"></picture></a></div><p class="description"><a href="https://vnexpress.net/tp-hcm-lay-y-kien-nguoi-dan-ve-phuong-an-tuong-dai-tran-hung-dao-4362720.html" title="TP HCM lấy ý kiến người dân về phương án tượng đài Trần Hưng Đạo>" data-medium="Item-5" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-5&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Sau khi công bố phương án tôn tạo tượng Đức thánh Trần Hưng Đạo và công viên Mê Linh, TP HCM mời người dân góp ý về màu sắc, thiết kế, bức phù điêu và lư hương.</a><span class="meta-news">
            <a class="count_cmt" href="https://vnexpress.net/tp-hcm-lay-y-kien-nguoi-dan-ve-phuong-an-tuong-dai-tran-hung-dao-4362720.html#box_comment_vne" style="white-space: nowrap; display: inline-block;">
                <svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
                <span class="font_icon widget-comment-4362720-1">13</span>
            </a>
        </span></p></article>
<article class="item-news item-news-common " data-id="4362902">
<h3 class="title-news">
<a href="https://vnexpress.net/nhieu-can-bo-duoc-bi-tinh-nghi-ban-thuoc-molnupiravir-4362902.html" title="Nhiều cán bộ dược bị tình nghi bán thuốc molnupiravir" data-medium="Item-6" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-6&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Nhiều cán bộ dược bị tình nghi bán thuốc molnupiravir</a>
</h3>
<div class="thumb-art">
<a href="https://vnexpress.net/nhieu-can-bo-duoc-bi-tinh-nghi-ban-thuoc-molnupiravir-4362902.html" class="thumb thumb-5x3" title="Nhiều cán bộ dược bị tình nghi bán thuốc molnupiravir" data-medium="Item-6" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-6&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source data-srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/xu-ly-ban-thuoc-khang-virus-mo-6631-1356-1632742078.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=qfi-phUhWv66Q9yZS29xmQ 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/xu-ly-ban-thuoc-khang-virus-mo-6631-1356-1632742078.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=CFZ3uIJugocXDd_v95FJ2A 2x" srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/xu-ly-ban-thuoc-khang-virus-mo-6631-1356-1632742078.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=qfi-phUhWv66Q9yZS29xmQ 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/xu-ly-ban-thuoc-khang-virus-mo-6631-1356-1632742078.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=CFZ3uIJugocXDd_v95FJ2A 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="220x132" alt="Nhiều cán bộ dược bị tình nghi bán thuốc molnupiravir" class="lazy lazied" src="https://i1-vnexpress.vnecdn.net/2021/09/27/xu-ly-ban-thuoc-khang-virus-mo-6631-1356-1632742078.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=qfi-phUhWv66Q9yZS29xmQ" data-src="https://i1-vnexpress.vnecdn.net/2021/09/27/xu-ly-ban-thuoc-khang-virus-mo-6631-1356-1632742078.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=qfi-phUhWv66Q9yZS29xmQ" data-ll-status="loaded">
</picture> </a>
</div>
<p class="description">
<a href="https://vnexpress.net/nhieu-can-bo-duoc-bi-tinh-nghi-ban-thuoc-molnupiravir-4362902.html" title="Nhiều cán bộ dược bị tình nghi bán thuốc molnupiravir" data-medium="Item-6" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-6&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1"><span class="location-stamp">TP HCM</span>Công an điều tra hành vi Tham ô tài sản, mua bán thuốc kháng virus molnupiravir liên quan cán bộ quản lý dược tại Trung tâm y tế quận Bình Tân và Tân Phú.</a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/nhieu-can-bo-duoc-bi-tinh-nghi-ban-thuoc-molnupiravir-4362902.html#box_comment_vne" style="white-space: nowrap; display: none;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4362902-1">3</span>
</a>
</span>
</p>
</article>
<article class="item-news item-news-common " data-id="4362778">
<h3 class="title-news">
<a href="https://vnexpress.net/ha-noi-cho-tap-the-duc-ngoai-troi-tu-28-9-4362778.html" title="Hà Nội cho tập thể dục ngoài trời từ 28/9" data-medium="Item-7" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-7&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Hà Nội cho tập thể dục ngoài trời từ 28/9</a>
</h3>
<div class="thumb-art">
<a href="https://vnexpress.net/ha-noi-cho-tap-the-duc-ngoai-troi-tu-28-9-4362778.html" class="thumb thumb-5x3" title="Hà Nội cho tập thể dục ngoài trời từ 28/9" data-medium="Item-7" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-7&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source data-srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/apxe-1632731789-8788-1632731914.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=sMWZCryPy83l8b8y7nvDVA 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/apxe-1632731789-8788-1632731914.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=Qj9wgtaQiEnWKh2fYYiXbg 2x" srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/apxe-1632731789-8788-1632731914.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=sMWZCryPy83l8b8y7nvDVA 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/apxe-1632731789-8788-1632731914.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=Qj9wgtaQiEnWKh2fYYiXbg 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="220x132" alt="Hà Nội cho tập thể dục ngoài trời từ 28/9" class="lazy lazied" src="https://i1-vnexpress.vnecdn.net/2021/09/27/apxe-1632731789-8788-1632731914.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=sMWZCryPy83l8b8y7nvDVA" data-src="https://i1-vnexpress.vnecdn.net/2021/09/27/apxe-1632731789-8788-1632731914.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=sMWZCryPy83l8b8y7nvDVA" data-ll-status="loaded">
</picture> </a>
</div>
<p class="description">
<a href="https://vnexpress.net/ha-noi-cho-tap-the-duc-ngoai-troi-tu-28-9-4362778.html" title="Hà Nội cho tập thể dục ngoài trời từ 28/9" data-medium="Item-7" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-7&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Sau bốn ngày không ghi nhận ca lây nhiễm cộng đồng, thành phố cho mở cửa thêm một số dịch vụ và hoạt động ngoài trời.</a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/ha-noi-cho-tap-the-duc-ngoai-troi-tu-28-9-4362778.html#box_comment_vne" style="white-space: nowrap; display: inline-block;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4362778-1">17</span>
</a>
</span>
</p>
</article>
<article class="item-news item-news-common " data-id="4362904">
<h3 class="title-news">
<a href="https://vnexpress.net/thai-lan-va-singapore-dua-dang-cai-aff-cup-2020-4362904.html" title="Thái Lan và Singapore đua đăng cai AFF Cup 2020" data-medium="Item-8" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-8&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Thái Lan và Singapore đua đăng cai AFF Cup 2020</a>
</h3>
<div class="thumb-art">
<a href="https://vnexpress.net/thai-lan-va-singapore-dua-dang-cai-aff-cup-2020-4362904.html" class="thumb thumb-5x3" title="Thái Lan và Singapore đua đăng cai AFF Cup 2020" data-medium="Item-8" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-8&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source data-srcset="https://i1-thethao.vnecdn.net/2021/09/27/VIETNAMVODICHAFFCUP2018DUCDONG-9502-9499-1632741657.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=ehD-mS4-SpmJFzuRVndCHg 1x, https://i1-thethao.vnecdn.net/2021/09/27/VIETNAMVODICHAFFCUP2018DUCDONG-9502-9499-1632741657.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=cLGhhEd1VZ_Sr5HG1tFWaA 2x" srcset="https://i1-thethao.vnecdn.net/2021/09/27/VIETNAMVODICHAFFCUP2018DUCDONG-9502-9499-1632741657.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=ehD-mS4-SpmJFzuRVndCHg 1x, https://i1-thethao.vnecdn.net/2021/09/27/VIETNAMVODICHAFFCUP2018DUCDONG-9502-9499-1632741657.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=cLGhhEd1VZ_Sr5HG1tFWaA 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="220x132" alt="Thái Lan và Singapore đua đăng cai AFF Cup 2020" class="lazy lazied" src="https://i1-thethao.vnecdn.net/2021/09/27/VIETNAMVODICHAFFCUP2018DUCDONG-9502-9499-1632741657.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=ehD-mS4-SpmJFzuRVndCHg" data-src="https://i1-thethao.vnecdn.net/2021/09/27/VIETNAMVODICHAFFCUP2018DUCDONG-9502-9499-1632741657.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=ehD-mS4-SpmJFzuRVndCHg" data-ll-status="loaded">
</picture> </a>
</div>
<p class="description">
<a href="https://vnexpress.net/thai-lan-va-singapore-dua-dang-cai-aff-cup-2020-4362904.html" title="Thái Lan và Singapore đua đăng cai AFF Cup 2020" data-medium="Item-8" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-8&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1"><span class="location-stamp">Hà Nội</span>Trong cuộc họp trực tuyến chiều 27/9, Liên đoàn Bóng đá châu Á thống nhất phương án tổ chức tập trung AFF Cup 2020 tại Thái Lan hoặc Singapore.</a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/thai-lan-va-singapore-dua-dang-cai-aff-cup-2020-4362904.html#box_comment_vne" style="white-space: nowrap; display: inline-block;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4362904-1">10</span>
</a>
</span>
</p>
</article>
<article class="item-news item-news-common  off-thumb" data-id="4362910">
<h3 class="title-news">
<a href="https://vnexpress.net/covid-19-ngay-27-9-4362910.html" title="Thêm 9.342 ca Covid-19" data-medium="Item-9" data-thumb="0" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-9&amp;vn_term=Desktop&amp;vn_thumb=0" data-itm-added="1">Thêm 9.342 ca Covid-19</a>
</h3>
<p class="description">
<a href="https://vnexpress.net/covid-19-ngay-27-9-4362910.html" title="Thêm 9.342 ca Covid-19" data-medium="Item-9" data-thumb="0" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-9&amp;vn_term=Desktop&amp;vn_thumb=0" data-itm-added="1">Bộ Y tế ngày 27/9 công bố 9.362 ca nhiễm, trong đó 9.342 ca tại 36 tỉnh thành; giảm 669 ca so với hôm qua; số người khỏi bệnh là 10.528; 174 ca tử vong.</a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/covid-19-ngay-27-9-4362910.html#box_comment_vne" style="white-space: nowrap; display: inline-block;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4362910-1">14</span>
</a>
</span>
</p>
</article>
<article class="item-news item-news-common " data-id="4362684">
<h3 class="title-news">
<a href="https://video.vnexpress.net/tin-tuc/thoi-su/nguoi-dan-tp-hcm-vui-mung-khi-bo-rao-chan-4362684.html" title="Người dân TP HCM vui mừng khi bỏ rào chắn" data-medium="Item-10" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-10&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Người dân TP HCM vui mừng khi bỏ rào chắn</a>
</h3>
<div class="thumb-art">
<a href="https://video.vnexpress.net/tin-tuc/thoi-su/nguoi-dan-tp-hcm-vui-mung-khi-bo-rao-chan-4362684.html" class="thumb thumb-5x3" title="Người dân TP HCM vui mừng khi bỏ rào chắn" data-medium="Item-10" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-10&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source data-srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/243349601595853738092549109001-6068-6002-1632729820.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=IIvRXFqTJ9YVZAJGa2PxgA 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/243349601595853738092549109001-6068-6002-1632729820.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=tiByQgSKq6teZwnhQfYApw 2x" srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/243349601595853738092549109001-6068-6002-1632729820.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=IIvRXFqTJ9YVZAJGa2PxgA 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/243349601595853738092549109001-6068-6002-1632729820.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=tiByQgSKq6teZwnhQfYApw 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="220x132" alt="Người dân TP HCM vui mừng khi bỏ rào chắn" class="lazy lazied" src="https://i1-vnexpress.vnecdn.net/2021/09/27/243349601595853738092549109001-6068-6002-1632729820.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=IIvRXFqTJ9YVZAJGa2PxgA" data-src="https://i1-vnexpress.vnecdn.net/2021/09/27/243349601595853738092549109001-6068-6002-1632729820.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=IIvRXFqTJ9YVZAJGa2PxgA" data-ll-status="loaded">
</picture> <span class="icon_thumb_videophoto"><svg class="ic ic-video"><use xlink:href="#play-1"></use></svg></span> </a>
</div>
<p class="description">
<a href="https://video.vnexpress.net/tin-tuc/thoi-su/nguoi-dan-tp-hcm-vui-mung-khi-bo-rao-chan-4362684.html" title="Người dân TP HCM vui mừng khi bỏ rào chắn" data-medium="Item-10" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-10&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Nhiều hàng rào chắn tại các con hẻm "vùng xanh" ở TP HCM được lực lượng chức năng tháo dỡ, giúp cho việc di chuyển của người dân thuận tiện hơn.</a>
<span class="meta-news">
<a class="count_cmt" href="https://video.vnexpress.net/tin-tuc/thoi-su/nguoi-dan-tp-hcm-vui-mung-khi-bo-rao-chan-4362684.html#box_comment_vne" style="white-space: nowrap; display: inline-block;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4362684-1">10</span>
</a>
</span>
</p>
</article>
<article class="item-news item-news-common " data-id="4362790">
<h3 class="title-news">
<a href="https://vnexpress.net/hoc-sinh-ha-noi-tiep-tuc-hoc-truc-tuyen-4362790.html" title="Học sinh Hà Nội tiếp tục học trực tuyến" data-medium="Item-11" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-11&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Học sinh Hà Nội tiếp tục học trực tuyến</a>
</h3>
<div class="thumb-art">
<a href="https://vnexpress.net/hoc-sinh-ha-noi-tiep-tuc-hoc-truc-tuyen-4362790.html" class="thumb thumb-5x3" title="Học sinh Hà Nội tiếp tục học trực tuyến" data-medium="Item-11" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-11&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source data-srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/hoc-truc-tuyen-1632732501-5678-1632732531.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=0AvuPMShcIlDjmn81ozcBg 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/hoc-truc-tuyen-1632732501-5678-1632732531.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=1Q67N2VmjWfCjmfANV2SYg 2x" srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/hoc-truc-tuyen-1632732501-5678-1632732531.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=0AvuPMShcIlDjmn81ozcBg 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/hoc-truc-tuyen-1632732501-5678-1632732531.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=1Q67N2VmjWfCjmfANV2SYg 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="220x132" alt="Học sinh Hà Nội tiếp tục học trực tuyến" class="lazy lazied" src="https://i1-vnexpress.vnecdn.net/2021/09/27/hoc-truc-tuyen-1632732501-5678-1632732531.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=0AvuPMShcIlDjmn81ozcBg" data-src="https://i1-vnexpress.vnecdn.net/2021/09/27/hoc-truc-tuyen-1632732501-5678-1632732531.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=0AvuPMShcIlDjmn81ozcBg" data-ll-status="loaded">
</picture> </a>
</div>
<p class="description">
<a href="https://vnexpress.net/hoc-sinh-ha-noi-tiep-tuc-hoc-truc-tuyen-4362790.html" title="Học sinh Hà Nội tiếp tục học trực tuyến" data-medium="Item-11" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-11&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Hơn 2 triệu học sinh Hà Nội sẽ tiếp tục học trực tuyến cho đến khi có thông báo mới, theo hướng dẫn của Sở Giáo dục và Đào tạo thành phố ngày 27/9.</a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/hoc-sinh-ha-noi-tiep-tuc-hoc-truc-tuyen-4362790.html#box_comment_vne" style="white-space: nowrap; display: inline-block;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4362790-1">11</span>
</a>
</span>
</p>
</article>
<article class="item-news item-news-common " data-id="4362899">
<h3 class="title-news">
<a href="https://vnexpress.net/ong-trieu-tai-vinh-lam-pho-ban-dan-van-trung-uong-4362899.html" title="Ông Triệu Tài Vinh làm Phó ban Dân vận Trung ương" data-medium="Item-12" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-12&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Ông Triệu Tài Vinh làm Phó ban Dân vận Trung ương</a>
</h3>
<div class="thumb-art">
<a href="https://vnexpress.net/ong-trieu-tai-vinh-lam-pho-ban-dan-van-trung-uong-4362899.html" class="thumb thumb-5x3" title="Ông Triệu Tài Vinh làm Phó ban Dân vận Trung ương" data-medium="Item-12" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-12&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source data-srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/1-4-1632741521-7015-1632742139.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Uh_W1SnM2rlpudijyqgNjA 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/1-4-1632741521-7015-1632742139.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=L-ar7iyxUACwEV6H27upAw 2x" srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/1-4-1632741521-7015-1632742139.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Uh_W1SnM2rlpudijyqgNjA 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/1-4-1632741521-7015-1632742139.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=L-ar7iyxUACwEV6H27upAw 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="220x132" alt="Ông Triệu Tài Vinh làm Phó ban Dân vận Trung ương" class="lazy lazied" src="https://i1-vnexpress.vnecdn.net/2021/09/27/1-4-1632741521-7015-1632742139.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Uh_W1SnM2rlpudijyqgNjA" data-src="https://i1-vnexpress.vnecdn.net/2021/09/27/1-4-1632741521-7015-1632742139.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Uh_W1SnM2rlpudijyqgNjA" data-ll-status="loaded">
</picture> </a>
</div>
<p class="description">
<a href="https://vnexpress.net/ong-trieu-tai-vinh-lam-pho-ban-dan-van-trung-uong-4362899.html" title="Ông Triệu Tài Vinh làm Phó ban Dân vận Trung ương" data-medium="Item-12" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-12&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Phó ban Kinh tế Trung ương Triệu Tài Vinh được Ban Bí thư điều động, bổ nhiệm giữ chức Phó Trưởng ban Dân vận Trung ương.</a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/ong-trieu-tai-vinh-lam-pho-ban-dan-van-trung-uong-4362899.html#box_comment_vne" style="white-space: nowrap; display: none;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4362899-1"></span>
</a>
</span>
</p>
</article>
<article class="item-news item-news-common " data-id="4362422">
<h3 class="title-news">
<a href="https://vnexpress.net/trung-quoc-say-chien-thang-trong-vu-manh-van-chu-4362422.html" title="Trung Quốc say chiến thắng trong vụ Mạnh Vãn Chu" data-medium="Item-13" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-13&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Trung Quốc say chiến thắng trong vụ Mạnh Vãn Chu</a>
</h3>
<div class="thumb-art">
<a href="https://vnexpress.net/trung-quoc-say-chien-thang-trong-vu-manh-van-chu-4362422.html" class="thumb thumb-5x3" title="Trung Quốc say chiến thắng trong vụ Mạnh Vãn Chu" data-medium="Item-13" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-13&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source data-srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/manhvanchureutersedited-163271-2855-5676-1632719035.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=kY1oFXw5Hgp-J89JUXhMBw 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/manhvanchureutersedited-163271-2855-5676-1632719035.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=0MCNRWsyZUr9aDYXjuN2Qw 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="220x132" alt="Trung Quốc say chiến thắng trong vụ Mạnh Vãn Chu" class="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://i1-vnexpress.vnecdn.net/2021/09/27/manhvanchureutersedited-163271-2855-5676-1632719035.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=kY1oFXw5Hgp-J89JUXhMBw" data-ll-status="observed">
</picture> </a>
</div>
<p class="description">
<a href="https://vnexpress.net/trung-quoc-say-chien-thang-trong-vu-manh-van-chu-4362422.html" title="Trung Quốc say chiến thắng trong vụ Mạnh Vãn Chu" data-medium="Item-13" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-13&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Trung Quốc ca ngợi việc "Công chúa Huawei" Mạnh Vãn Chu được trả tự do một một chiến thắng vang dội trước áp lực Mỹ.</a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/trung-quoc-say-chien-thang-trong-vu-manh-van-chu-4362422.html#box_comment_vne" style="white-space: nowrap; display: none;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4362422-1"></span>
</a>
</span>
</p>
</article>
<article class="item-news item-news-common " data-id="4362748">
<h3 class="title-news">
<a href="https://vnexpress.net/chu-tich-vietnam-airlines-gia-ve-may-bay-khong-the-qua-thap-4362748.html" title="Chủ tịch Vietnam Airlines: 'Giá vé máy bay không thể quá thấp'" data-medium="Item-14" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-14&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Chủ tịch Vietnam Airlines: 'Giá vé máy bay không thể quá thấp'</a>
</h3>
<div class="thumb-art">
<a href="https://vnexpress.net/chu-tich-vietnam-airlines-gia-ve-may-bay-khong-the-qua-thap-4362748.html" class="thumb thumb-5x3" title="Chủ tịch Vietnam Airlines: 'Giá vé máy bay không thể quá thấp'" data-medium="Item-14" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-14&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source data-srcset="https://i1-kinhdoanh.vnecdn.net/2021/09/27/ChutichVNADangNgocHoa-16327325-2676-3718-1632732726.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=m8hQm3fIGG8ESNirIOjGmA 1x, https://i1-kinhdoanh.vnecdn.net/2021/09/27/ChutichVNADangNgocHoa-16327325-2676-3718-1632732726.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=mv0cULejMWw0KRR-WpHe4A 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="220x132" alt="Chủ tịch Vietnam Airlines: 'Giá vé máy bay không thể quá thấp'" class="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://i1-kinhdoanh.vnecdn.net/2021/09/27/ChutichVNADangNgocHoa-16327325-2676-3718-1632732726.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=m8hQm3fIGG8ESNirIOjGmA" data-ll-status="observed">
</picture> </a>
</div>
<p class="description">
<a href="https://vnexpress.net/chu-tich-vietnam-airlines-gia-ve-may-bay-khong-the-qua-thap-4362748.html" title="Chủ tịch Vietnam Airlines: 'Giá vé máy bay không thể quá thấp'" data-medium="Item-14" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-14&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Trong khi các chuyên gia nói "không công bằng" nếu áp sàn giá vé máy bay, doanh nghiệp lại lo ngại, giá thấp có thể ảnh hưởng đến an toàn bay và làm các hãng yếu đi.</a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/chu-tich-vietnam-airlines-gia-ve-may-bay-khong-the-qua-thap-4362748.html#box_comment_vne" style="white-space: nowrap; display: inline-block;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4362748-1">105</span>
</a>
</span>
</p>
</article>
<article class="item-news item-news-common " data-id="4362597">
<h3 class="title-news">
<a href="https://vnexpress.net/sinh-vien-lam-gia-su-online-cho-con-cua-y-bac-si-4362597.html" title="Sinh viên làm gia sư online cho con của y bác sĩ" data-medium="Item-15" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-15&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Sinh viên làm gia sư online cho con của y bác sĩ</a>
</h3>
<div class="thumb-art">
<a href="https://vnexpress.net/sinh-vien-lam-gia-su-online-cho-con-cua-y-bac-si-4362597.html" class="thumb thumb-5x3" title="Sinh viên làm gia sư online cho con của y bác sĩ" data-medium="Item-15" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-15&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source data-srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/gia-su-5098-1632717834-1632726-5852-9845-1632726487.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=wRPz3j7OY0x9P3S8-e7SWQ 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/gia-su-5098-1632717834-1632726-5852-9845-1632726487.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=KrTx414gDVDC7ElVKupMjQ 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="220x132" alt="Sinh viên làm gia sư online cho con của y bác sĩ" class="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://i1-vnexpress.vnecdn.net/2021/09/27/gia-su-5098-1632717834-1632726-5852-9845-1632726487.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=wRPz3j7OY0x9P3S8-e7SWQ" data-ll-status="observed">
</picture> </a>
</div>
<p class="description">
<a href="https://vnexpress.net/sinh-vien-lam-gia-su-online-cho-con-cua-y-bac-si-4362597.html" title="Sinh viên làm gia sư online cho con của y bác sĩ" data-medium="Item-15" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-15&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Phú Quốc, sinh viên Đại học Sư phạm Hà Nội, kèm cậu bé lớp 6 môn Toán hai buổi một tuần, với hy vọng giúp phụ huynh em yên tâm đi chống dịch.</a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/sinh-vien-lam-gia-su-online-cho-con-cua-y-bac-si-4362597.html#box_comment_vne" style="white-space: nowrap; display: none;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4362597-1">8</span>
</a>
</span>
</p>
</article>
<article class="item-news item-news-common " data-id="4362922">
<h3 class="title-news">
<a href="https://vnexpress.net/them-giam-doc-bi-bat-trong-vu-nang-gia-cay-xanh-o-ha-noi-4362922.html" title="Thêm giám đốc bị bắt trong vụ nâng giá cây xanh ở Hà Nội" data-medium="Item-16" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-16&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Thêm giám đốc bị bắt trong vụ nâng giá cây xanh ở Hà Nội</a>
</h3>
<div class="thumb-art">
<a href="https://vnexpress.net/them-giam-doc-bi-bat-trong-vu-nang-gia-cay-xanh-o-ha-noi-4362922.html" class="thumb thumb-5x3" title="Thêm giám đốc bị bắt trong vụ nâng giá cây xanh ở Hà Nội" data-medium="Item-16" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-16&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source data-srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/tuan-1632745404-4331-1632745408.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=iKZus0Y-MtgIKNKf6aibWA 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/tuan-1632745404-4331-1632745408.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=cBRl8AAey92QBnrSkTrp-w 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="220x132" alt="Thêm giám đốc bị bắt trong vụ nâng giá cây xanh ở Hà Nội" class="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://i1-vnexpress.vnecdn.net/2021/09/27/tuan-1632745404-4331-1632745408.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=iKZus0Y-MtgIKNKf6aibWA" data-ll-status="observed">
</picture> </a>
</div>
<p class="description">
<a href="https://vnexpress.net/them-giam-doc-bi-bat-trong-vu-nang-gia-cay-xanh-o-ha-noi-4362922.html" title="Thêm giám đốc bị bắt trong vụ nâng giá cây xanh ở Hà Nội" data-medium="Item-16" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-16&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Ông Đỗ Anh Tuấn, Giám đốc Ban Duy tu các công trình hạ tầng đô thị thuộc Sở Xây dựng Hà Nội, bị bắt với cáo buộc tham gia nâng khống giá trị cây xanh trồng ở thủ đô.</a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/them-giam-doc-bi-bat-trong-vu-nang-gia-cay-xanh-o-ha-noi-4362922.html#box_comment_vne" style="white-space: nowrap; display: none;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4362922-1"></span>
</a>
</span>
</p>
</article>
<article class="item-news item-news-common " data-id="4362813">
<h3 class="title-news">
<a href="https://vnexpress.net/cau-thu-man-utd-ngan-thuc-don-cua-ronaldo-4362813.html" title="Cầu thủ Man Utd ngán thực đơn của Ronaldo" data-medium="Item-17" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-17&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Cầu thủ Man Utd ngán thực đơn của Ronaldo</a>
</h3>
<div class="thumb-art">
<a href="https://vnexpress.net/cau-thu-man-utd-ngan-thuc-don-cua-ronaldo-4362813.html" class="thumb thumb-5x3" title="Cầu thủ Man Utd ngán thực đơn của Ronaldo" data-medium="Item-17" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-17&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source data-srcset="https://i1-thethao.vnecdn.net/2021/09/27/1-1632733877-4788-1632733936.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Kqi-1_AyKmhMz5DWrwS15A 1x, https://i1-thethao.vnecdn.net/2021/09/27/1-1632733877-4788-1632733936.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=euXpFHZhcmvUBhFXibidiw 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="220x132" alt="Cầu thủ Man Utd ngán thực đơn của Ronaldo" class="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://i1-thethao.vnecdn.net/2021/09/27/1-1632733877-4788-1632733936.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Kqi-1_AyKmhMz5DWrwS15A" data-ll-status="observed">
</picture> </a>
</div>
<p class="description">
<a href="https://vnexpress.net/cau-thu-man-utd-ngan-thuc-don-cua-ronaldo-4362813.html" title="Cầu thủ Man Utd ngán thực đơn của Ronaldo" data-medium="Item-17" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-17&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1"><span class="location-stamp">Anh</span>Cristiano Ronaldo yêu cầu đầu bếp Man Utd nấu thêm nhiều món mới, và một vài món khiến đồng đội khó chịu.</a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/cau-thu-man-utd-ngan-thuc-don-cua-ronaldo-4362813.html#box_comment_vne" style="white-space: nowrap; display: inline-block;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4362813-1">144</span>
</a>
</span>
</p>
</article>
<article class="item-news item-news-common " data-id="4362773">
<h3 class="title-news">
<a href="https://vnexpress.net/tp-hcm-khoi-dong-63-cong-trinh-nang-cap-bao-tri-giao-thong-4362773.html" title="TP HCM khởi động 63 công trình nâng cấp, bảo trì giao thông" data-medium="Item-18" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-18&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">TP HCM khởi động 63 công trình nâng cấp, bảo trì giao thông</a>
</h3>
<div class="thumb-art">
<a href="https://vnexpress.net/tp-hcm-khoi-dong-63-cong-trinh-nang-cap-bao-tri-giao-thong-4362773.html" class="thumb thumb-5x3" title="TP HCM khởi động 63 công trình nâng cấp, bảo trì giao thông" data-medium="Item-18" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-18&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source data-srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/Ham-song-SG-4021-1632732228.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=iisl_RtMhnae0sFGPCLTbQ 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/Ham-song-SG-4021-1632732228.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=71-CcHvMRus0uPL6AMS4Uw 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="220x132" alt="TP HCM khởi động 63 công trình nâng cấp, bảo trì giao thông" class="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://i1-vnexpress.vnecdn.net/2021/09/27/Ham-song-SG-4021-1632732228.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=iisl_RtMhnae0sFGPCLTbQ" data-ll-status="observed">
</picture> </a>
</div>
<p class="description">
<a href="https://vnexpress.net/tp-hcm-khoi-dong-63-cong-trinh-nang-cap-bao-tri-giao-thong-4362773.html" title="TP HCM khởi động 63 công trình nâng cấp, bảo trì giao thông" data-medium="Item-18" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-18&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Ngoài thi công trở lại 37 công trình bị ngưng do dịch, đơn vị thuộc Sở Giao thông Vận tải được khởi công 26 công trình nâng cấp, duy tu hạ tầng giao thông trong tháng 10.</a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/tp-hcm-khoi-dong-63-cong-trinh-nang-cap-bao-tri-giao-thong-4362773.html#box_comment_vne" style="white-space: nowrap; display: none;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4362773-1">4</span>
</a>
</span>
</p>
</article>
<article class="item-news item-news-common " data-id="4362632">
<h3 class="title-news">
<a href="https://vnexpress.net/tp-hcm-du-kien-mo-cua-the-nao-tu-1-10-4362632.html" title="TP HCM dự kiến 'mở cửa' thế nào từ 1/10" data-medium="Item-19" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-19&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">TP HCM dự kiến 'mở cửa' thế nào từ 1/10</a>
</h3>
<div class="thumb-art">
<a href="https://vnexpress.net/tp-hcm-du-kien-mo-cua-the-nao-tu-1-10-4362632.html" class="thumb thumb-5x3" title="TP HCM dự kiến 'mở cửa' thế nào từ 1/10" data-medium="Item-19" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-19&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source data-srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/quyn3963-1612852455-1632719574-5108-1632719664.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=c7Eqe2rJqzsKbJSUBlpj1g 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/quyn3963-1612852455-1632719574-5108-1632719664.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=2W3splPEbi_KjmQAoc06vQ 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="220x132" alt="TP HCM dự kiến 'mở cửa' thế nào từ 1/10" class="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://i1-vnexpress.vnecdn.net/2021/09/27/quyn3963-1612852455-1632719574-5108-1632719664.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=c7Eqe2rJqzsKbJSUBlpj1g" data-ll-status="observed">
</picture> </a>
</div>
<p class="description">
<a href="https://vnexpress.net/tp-hcm-du-kien-mo-cua-the-nao-tu-1-10-4362632.html" title="TP HCM dự kiến 'mở cửa' thế nào từ 1/10" data-medium="Item-19" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-19&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Trong dự thảo chỉ thị mới, TP HCM cho phép mở nhiều hoạt động như đám cưới, thể thao, hớt tóc, thương mại, dịch vụ... với yêu cầu cụ thể về vaccine và xét nghiệm.</a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/tp-hcm-du-kien-mo-cua-the-nao-tu-1-10-4362632.html#box_comment_vne" style="white-space: nowrap; display: inline-block;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4362632-1">156</span>
</a>
</span>
</p>
</article>
<article class="item-news item-news-common " data-id="4362664">
<h3 class="title-news">
<a href="https://vnexpress.net/ve-tinh-cua-viet-nam-san-sang-phong-vao-dau-thang-10-4362664.html" title="Vệ tinh của Việt Nam sẵn sàng phóng vào đầu tháng 10" data-medium="Item-20" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-20&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Vệ tinh của Việt Nam sẵn sàng phóng vào đầu tháng 10</a>
</h3>
<div class="thumb-art">
<a href="https://vnexpress.net/ve-tinh-cua-viet-nam-san-sang-phong-vao-dau-thang-10-4362664.html" class="thumb thumb-5x3" title="Vệ tinh của Việt Nam sẵn sàng phóng vào đầu tháng 10" data-medium="Item-20" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-20&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source data-srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/ve-tinh-nano-1628410488-162841-8227-2805-1632730120.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=YsGD_9wJEHhpxm8x3CD6gg 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/ve-tinh-nano-1628410488-162841-8227-2805-1632730120.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=WD8QCYSEvRxt99JrFsbGIg 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="220x132" alt="Vệ tinh của Việt Nam sẵn sàng phóng vào đầu tháng 10" class="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://i1-vnexpress.vnecdn.net/2021/09/27/ve-tinh-nano-1628410488-162841-8227-2805-1632730120.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=YsGD_9wJEHhpxm8x3CD6gg" data-ll-status="observed">
</picture> </a>
</div>
<p class="description">
<a href="https://vnexpress.net/ve-tinh-cua-viet-nam-san-sang-phong-vao-dau-thang-10-4362664.html" title="Vệ tinh của Việt Nam sẵn sàng phóng vào đầu tháng 10" data-medium="Item-20" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-20&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Vệ tinh NanoDragon do Việt Nam chế tạo là một trong số 38 nhiệm vụ nghiên cứu ứng dụng công nghệ vũ trụ vào đời sống, giai đoạn 2016-2020.</a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/ve-tinh-cua-viet-nam-san-sang-phong-vao-dau-thang-10-4362664.html#box_comment_vne" style="white-space: nowrap; display: none;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4362664-1">2</span>
</a>
</span>
</p>
</article>
<article class="item-news item-news-common hidden" data-id="4362716">
<h3 class="title-news">
<a href="https://vnexpress.net/cuu-hlv-tp-hcm-co-the-dan-dat-thai-lan-4362716.html" title="Cựu HLV TP HCM có thể dẫn dắt Thái Lan" data-medium="Item-21" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-21&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Cựu HLV TP HCM có thể dẫn dắt Thái Lan</a>
</h3>
<div class="thumb-art">
<a href="https://vnexpress.net/cuu-hlv-tp-hcm-co-the-dan-dat-thai-lan-4362716.html" class="thumb thumb-5x3" title="Cựu HLV TP HCM có thể dẫn dắt Thái Lan" data-medium="Item-21" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-21&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source data-srcset="https://i1-thethao.vnecdn.net/2021/09/27/DONG4930JPG-1632727869-7024-1632727964.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=JjmD4XUaU772ru_JMyMeDw 1x, https://i1-thethao.vnecdn.net/2021/09/27/DONG4930JPG-1632727869-7024-1632727964.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=nZt4gZRDzTgg8Rt13ED2Ng 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="220x132" alt="Cựu HLV TP HCM có thể dẫn dắt Thái Lan" class="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://i1-thethao.vnecdn.net/2021/09/27/DONG4930JPG-1632727869-7024-1632727964.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=JjmD4XUaU772ru_JMyMeDw" data-ll-status="observed">
</picture> </a>
</div>
<p class="description">
<a href="https://vnexpress.net/cuu-hlv-tp-hcm-co-the-dan-dat-thai-lan-4362716.html" title="Cựu HLV TP HCM có thể dẫn dắt Thái Lan" data-medium="Item-21" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-21&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1"><span class="location-stamp">Thái Lan</span>HLV Alexandre Polking nhiều khả năng sẽ dẫn dắt đội tuyển Thái Lan theo bản hợp đồng ngắn hạn bốn tháng để thi đấu ở AFF Cup 2020.</a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/cuu-hlv-tp-hcm-co-the-dan-dat-thai-lan-4362716.html#box_comment_vne" style="white-space: nowrap; display: inline-block;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4362716-1">21</span>
</a>
</span>
</p>
</article>
<article class="item-news item-news-common hidden" data-id="4362772">
<h3 class="title-news">
<a href="https://vnexpress.net/chung-khoan-giam-manh-nhat-mot-thang-4362772.html" title="Chứng khoán giảm mạnh nhất một tháng" data-medium="Item-22" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-22&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Chứng khoán giảm mạnh nhất một tháng</a>
</h3>
<div class="thumb-art">
<a href="https://vnexpress.net/chung-khoan-giam-manh-nhat-mot-thang-4362772.html" class="thumb thumb-5x3" title="Chứng khoán giảm mạnh nhất một tháng" data-medium="Item-22" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-22&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source data-srcset="https://i1-kinhdoanh.vnecdn.net/2021/09/27/Thumb1-1632731044-2984-1632731378.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=y9NDC7aOwCVIZF6n8r0utg 1x, https://i1-kinhdoanh.vnecdn.net/2021/09/27/Thumb1-1632731044-2984-1632731378.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=1hBKTr79cl4VNpqZhOaJNw 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="220x132" alt="Chứng khoán giảm mạnh nhất một tháng" class="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://i1-kinhdoanh.vnecdn.net/2021/09/27/Thumb1-1632731044-2984-1632731378.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=y9NDC7aOwCVIZF6n8r0utg" data-ll-status="observed">
</picture> </a>
</div>
<p class="description">
<a href="https://vnexpress.net/chung-khoan-giam-manh-nhat-mot-thang-4362772.html" title="Chứng khoán giảm mạnh nhất một tháng" data-medium="Item-22" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-22&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">VN-Index giảm hơn 26 điểm và trở về vùng giá cuối tháng 8 bởi áp lực xả hàng mạnh ở các cổ phiếu vốn hóa lớn.</a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/chung-khoan-giam-manh-nhat-mot-thang-4362772.html#box_comment_vne" style="white-space: nowrap; display: none;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4362772-1">3</span>
</a>
</span>
</p>
</article>
<article class="item-news item-news-common hidden" data-id="4362669">
<h3 class="title-news">
<a href="https://vnexpress.net/cuu-chu-tich-hdqt-saigon-co-op-bi-cao-buoc-chiem-doat-tai-lieu-mat-4362669.html" title="Cựu Chủ tịch HĐQT Saigon Co.op bị cáo buộc chiếm đoạt tài liệu mật" data-medium="Item-23" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-23&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Cựu Chủ tịch HĐQT Saigon Co.op bị cáo buộc chiếm đoạt tài liệu mật</a>
</h3>
<div class="thumb-art">
<a href="https://vnexpress.net/cuu-chu-tich-hdqt-saigon-co-op-bi-cao-buoc-chiem-doat-tai-lieu-mat-4362669.html" class="thumb thumb-5x3" title="Cựu Chủ tịch HĐQT Saigon Co.op bị cáo buộc chiếm đoạt tài liệu mật" data-medium="Item-23" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-23&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source data-srcset="https://i1-vnexpress.vnecdn.net/2021/09/27/DDung-2245-1632726982.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=S5E5GvvJMbzK5x5ifQcyGw 1x, https://i1-vnexpress.vnecdn.net/2021/09/27/DDung-2245-1632726982.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=zpE1SRf-ZSKTJdndg9VagQ 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="220x132" alt="Cựu Chủ tịch HĐQT Saigon Co.op bị cáo buộc chiếm đoạt tài liệu mật" class="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://i1-vnexpress.vnecdn.net/2021/09/27/DDung-2245-1632726982.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=S5E5GvvJMbzK5x5ifQcyGw" data-ll-status="observed">
</picture> </a>
</div>
<p class="description">
<a href="https://vnexpress.net/cuu-chu-tich-hdqt-saigon-co-op-bi-cao-buoc-chiem-doat-tai-lieu-mat-4362669.html" title="Cựu Chủ tịch HĐQT Saigon Co.op bị cáo buộc chiếm đoạt tài liệu mật" data-medium="Item-23" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-23&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1"><span class="location-stamp">TP HCM</span>Ông Diệp Dũng, 53 tuổi, nguyên Chủ tịch HĐQT Saigon Co.op, bị cho là "mua thông tin" về quá trình cơ quan điều tra xác minh sai phạm tại đơn vị mình.</a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/cuu-chu-tich-hdqt-saigon-co-op-bi-cao-buoc-chiem-doat-tai-lieu-mat-4362669.html#box_comment_vne" style="white-space: nowrap; display: none;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4362669-1"></span>
</a>
</span>
</p>
</article>
</div>`;

var patternVnexpressWrapper = /<div.*id="automation_TV0">(.+)<\/div>/is;

var resultInner = html.match(patternVnexpressWrapper);

resultInner = resultInner[1];

var patternItem = /<article class="item-news.*?">(.+?)<\/article>/isg;

var itemResult = resultInner.match(patternItem);

for (index = 0; index < itemResult.length; index++){
    var patternHeading = /<h3 class="title-news">(.+?)<\/h3>/is;
    var itemHeading = itemResult[index].match(patternHeading);
    itemHeading = itemHeading[1];
    if (itemHeading!==null){
        var patternLink = /<a.*?href="(.+?)".*?/is;
        var itemLink = itemHeading.match(patternLink);
        
        var itemLink = itemLink[1];

        console.log('Link: '+itemLink);
    }
   
}