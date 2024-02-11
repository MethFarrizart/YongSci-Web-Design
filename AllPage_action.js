// JQuery

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



// Behavior to move the slide
$(document).ready(function(){
    let x = $('#course-box__cont1');
    let y = $('#course-box__cont2');
    let z = $('#course-box__cont3');

    let x1 = $('#course-box__cont4');
    let x2 = $('#course-box__cont5');
    let x3 = $('#course-box__cont6');
    var num_slide = 0;
    
    var right_clk = $('.fa-circle-arrow-right');
    var left_clk = $('.fa-circle-arrow-left');

    $('.fa-circle-arrow-right').click(function(){

        // num_slide++;
        if(num_slide < 6){
            num_slide++;
            if(num_slide==1){
                x.hide()
                y.slideDown(600)

                left_clk.css('visibility', 'visible')
                $('.fa-circle-arrow-left').css('opacity', 1)
            }
            else if(num_slide==2){
                y.hide()
                z.slideDown(600)

                left_clk.css('visibility', 'visible')
                $('.fa-circle-arrow-left').css('opacity', 1)
            }
    
            else if(num_slide==3){
                z.hide()
                x1.slideDown(600)

                left_clk.css('visibility', 'visible')
                $('.fa-circle-arrow-left').css('opacity', 1)
            }

            else if(num_slide==4){
                x1.hide()
                x2.slideDown(600)

                left_clk.css('visibility', 'visible')
                $('.fa-circle-arrow-left').css('opacity', 1)
            }

            else if(num_slide==5){
                x2.hide()
                x3.slideDown(600)

                right_clk.css({'visibility': 'hidden', 'transition': '0.5s', 'opacity': '0.1'})
                $('.fa-circle-arrow-left').css('opacity', 1)
            }
        }
    })


    $('.fa-circle-arrow-left').click(function(){
        num_slide--;
        if(num_slide==4){
            x3.hide()
            x2.slideDown(600)

            right_clk.css('visibility', 'visible')
            $('.fa-circle-arrow-right').css('opacity', 1)
        }

        else if(num_slide==3){
            x2.hide()
            x1.slideDown(600)

            right_clk.css('visibility', 'visible')
            $('.fa-circle-arrow-right').css('opacity', 1)
        }

        else if(num_slide==2){
            x1.hide()
            z.slideDown(600)

            right_clk.css('visibility', 'visible')
            $('.fa-circle-arrow-right').css('opacity', 1)
        }

        else if(num_slide==1){
            z.hide()
            y.slideDown(600)

            right_clk.css('visibility', 'visible')
            $('.fa-circle-arrow-right').css('opacity', 1)
        }

        else if(num_slide==0){
            y.hide()
            x.slideDown(600)

            left_clk.css({'visibility': 'hidden', 'transition': '0.5s', 'opacity': '0.1'})
            $('.fa-circle-arrow-right').css('opacity', 1)
        }
    })
})





// Javascript

// behavior in header side
const body = document.body;
let lastscroll= 0;
window.addEventListener('scroll', () =>{
    const currentscroll = window.pageYOffset;
        if(currentscroll <= 0){
            body.classList.remove("scroll-up");
        }

        else if(currentscroll > lastscroll && !body.classList.contains("scroll-down")){
            body.classList.add("scroll-down")
            body.classList.remove("scroll-up")
        }

        else if(currentscroll < lastscroll && body.classList.contains("scroll-down")){
            body.classList.add("scroll-up")
            body.classList.remove("scroll-down")
        }

        lastscroll = currentscroll;
})



// Behavior on menu 
var link = document.querySelector('.top-header__menu').querySelectorAll('a');
link.forEach(element => {
    element.addEventListener("mouseover", function(){
        link.forEach(nav=>nav.classList.remove('active')) 
        this.classList.add('active')
        this.style.transition = '0.3s'
    })
});



