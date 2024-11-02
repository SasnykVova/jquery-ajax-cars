$(document).ready(function() {

    $('.colorItem').on('click', function() {
        let imgSrc = $('#imgHolder img').attr('src')
        let imgPath = $(this).attr('data-img-path')
        if(imgSrc === imgPath) {
            return null
        }

        $('#imgHolder img').fadeOut(300, function() {
            $('#imgHolder img').attr('src', imgPath).fadeIn(300);
        });
    })

})