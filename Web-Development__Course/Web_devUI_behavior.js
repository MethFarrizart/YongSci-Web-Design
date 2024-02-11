

// Behavior to click the course then show its course list
$(document).ready(function(){
    $('#course2').click(function(){
        $('#web-frontend__course').hide();
        $('#web-backend__course').show(500)
    })

    $('#course1').click(function(){
        $('#web-backend__course').hide()
        $('#web-frontend__course').show(500)
    })
})


// Behavior to Choose level to study
$(document).ready(function(){
   const clk1 = $('#click_lvl1')
   const clk2 = $('#click_lvl2')
   const clk3 = $('#click_lvl3')

   const clk4 = $('#click_lvl4')
   const clk5 = $('#click_lvl5')
   const clk6 = $('#click_lvl6')



    clk1.on('click', function(){
        $(this).css('border-bottom', '5px solid blue')
        clk2.css('border-bottom', 'none')
        clk3.css('border-bottom', 'none')

        $('#Intermediate').hide()
        $('#advance').hide()
        $('#beginner').show(400)
    })

    clk2.on('click', function(){
        $(this).css('border-bottom', '5px solid blue')
        clk1.css('border-bottom', 'none')
        clk3.css('border-bottom', 'none')

        $('#beginner').hide()
        $('#advance').hide()
        $('#Intermediate').show(400)
    })

    clk3.on('click', function(){
        $(this).css('border-bottom', '5px solid blue')
        clk1.css('border-bottom', 'none')
        clk2.css('border-bottom', 'none')

        $('#advance').show(500);
        $('#beginner').hide();
        $('#Intermediate').hide();
    })


    clk4.on('click', function(){
        $(this).css('border-bottom', '5px solid blue')
        clk5.css('border-bottom', 'none')
        clk6.css('border-bottom', 'none')
        
        $('#intermediate-backend').hide()
        $('#advance-backend').hide()
        $('#beginner-backend').show(400)
       
    })


    clk5.on('click', function(){
        $(this).css('border-bottom', '5px solid blue')
        clk4.css('border-bottom', 'none')
        clk6.css('border-bottom', 'none')

        $('#beginner-backend').hide()
        $('#advance-backend').hide()
        $('#intermediate-backend').show(400)
    })

    clk6.on('click', function(){
        $(this).css('border-bottom', '5px solid blue')
        clk5.css('border-bottom', 'none')
        clk4.css('border-bottom', 'none')

        $('#beginner-backend').hide()
        $('#intermediate-backend').hide()
        $('#advance-backend').show(400)
    })

})


// To show detail for each course
var show_detail = document.querySelectorAll('.course-box__list');
for(var i=0; i<show_detail.length; i++){
    show_detail[i].addEventListener('click', function(){
        window.location.href = '/DetailPage/DetailPageUI.html';
    })
}

// To show detail for each course
var show_detail_choice = document.querySelectorAll('.choice-box');
for(var i=0; i<show_detail.length; i++){
    show_detail_choice[i].addEventListener('click', function(){
    window.location.href = '/DetailPage/DetailPageUI.html';
    })
}
