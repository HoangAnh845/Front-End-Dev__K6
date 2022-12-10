$ = jQuery;
$(document).ready(function () {
    //Click vào nút add
    $('#myDIV form').on('submit', function (e) {
        e.preventDefault();

        let inputValue = $('#myInput').val().trim();
        if (inputValue !== '') {
            let liHtml =
                `<div class="text">
                <span>${inputValue}</span>
                <span><i class="fa fa-close"></i></span>
            </div>`;
            $('#myUL').append(liHtml);
            $('#myInput').val('');
        }
    });

    $('#myUL').on('click', '.text', function () {
        if (confirm('Bạn có chắn chắn muốn xóa?')) {
            $(this).parent().remove();
        }
    })

    $('#myUL').on('click', '.text', function () {

        if (!$(this).hasClass('checked')) {
            $(this).addClass('checked');
        } else {
            $(this).removeClass('checked');
        }

    });

});