// Behavior to click the bars to show the menu in iphone
$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).hide();
        $('.fa-xmark').fadeIn(500).show();
        $('.top-header__menu--by_iphone ul li').css('visibility', 'visible')
        .animate({
            'marginLeft': '-380px'
        })
    })

    $('.fa-xmark').click(function(){
        $(this).hide();
        $('.fa-bars').fadeIn(500).show();
        $('.top-header__menu--by_iphone ul li').css('visibility', 'visible')
        .animate({
            'marginLeft': '5px',
        })
    })
})
