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

    let modelSpecs,
        modelPrice,
        modelSpecsHolder,
        modelPriceHolder;
    
    modelSpecsHolder = $('#model-specs');
    modelPriceHolder = $('#model-price');

    modelPrice = 0;
    modelSpecs = '';

    function calculatePrice() {
        modelPrice = parseInt($('input[name=engine]:checked', '#autoForm').val());
        modelPrice += parseInt($('input[name=transmission]:checked', '#autoForm').val());
        modelPrice += parseInt($('input[name=package]:checked', '#autoForm').val());
        const formattedNumber = modelPrice.toLocaleString('en').replace(/,/g, ' ');
        modelPriceHolder.text(formattedNumber + ' грн');
    }
    calculatePrice();
    $('#autoForm input').on('change', function() {
        calculatePrice();   
        getSpecs()
    })
    
    function getSpecs() {
        modelSpecs = $('input[name=engine]:checked + label', '#autoForm').text();
        modelSpecs = modelSpecs + ', ' + $('input[name=transmission]:checked + label', '#autoForm').text();
        modelSpecs = modelSpecs + ', ' + $('input[name=package]:checked + label', '#autoForm').text();
        modelSpecsHolder.text(modelSpecs);
    }
    getSpecs()
})