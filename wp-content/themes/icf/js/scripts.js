jQuery(document).ready(function ($) {
    
    $('.header .menu-item a').click(function() {
        $('.header .menu-item a').removeClass('active');
        $(this).addClass('active');
    });

    if($('div.primary').length) {
        $('div.primary').on('click', function(e){
            var form = $(this).attr('data-class');
            var title = $(this).attr('data-title');
            var code = $(this).attr('data-code');
            $(".popup-form h3").html(title);
            $(".popup-form input[name='tags']").val(code);
            $(".popup-form").fadeIn(300);
        });
        $('.popup-form .close').on('click', function(e){
            e.stopPropagation();
            $(".popup-form").fadeOut(300);
        });
        $('.popup-form').click(function() {
            $(".popup-form").fadeOut(300);
        });
        $('.form-wrapper').click(function(event) {
            event.stopPropagation();
        });
        $('.form-wrapper input[type="submit"]').click(function(event) {
            $(".popup-form").fadeOut(300);
        });
    }

});
