jQuery(document).ready(function ($) {
    
    $('.header .menu-item a').click(function() {
        $('.header .menu-item a').removeClass('active');
        $(this).addClass('active');
    });

});
