$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >=100){
        $('.header').addClass('sticky');
    }
    if (scroll <=99){
        $('.header').removeClass('sticky');
    }
})

$('.nav_toggle').click(function(){
    $('.nav_menu').toggleClass('show_menu')
})

// ------------------ HELP ----------------
$('.help_content_btn').click(function(){
    $('.help_subcontent').toggle();
})