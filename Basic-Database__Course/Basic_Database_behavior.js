$(document).ready(function(){
    $('#course1').click(function(){
        $('#sql').show(500);
        $('#linq').hide();
        $('#access').hide();
        $('#postgre').hide();
        $('#netfr').hide();
    })

    $('#course2').click(function(){
        $('#linq').show(500);
        $('#sql').hide();
        $('#access').hide();
        $('#postgre').hide();
        $('#netfr').hide();
       
    })

    $('#course3').click(function(){
        $('#access').show(500);
        $('#sql').hide();
        $('#linq').hide();
        $('#postgre').hide();
        $('#netfr').hide();
       
    })

    $('#course4').click(function(){
        $('#postgre').show(500);
        $('#linq').hide();
        $('#sql').hide();
        $('#access').hide();
        $('#netfr').hide();
       
    })

    $('#course5').click(function(){
        $('#netfr').show(500);
        $('#linq').hide();
        $('#access').hide();
        $('#sql').hide();
        $('#postgre').hide();
       
    })
})



// To show detail for each course
var show_detail = document.querySelectorAll('.course-box__list');
for(var i=0; i<show_detail.length; i++){
    show_detail[i].addEventListener('click', function(){
        window.location.href = '/DetailPage/DetailPageUI.html';
    })
}


var show_detail_choice = document.querySelectorAll('.choice-box');
for(var i=0; i<show_detail.length; i++){
    show_detail_choice[i].addEventListener('click', function(){
        window.location.href = '/DetailPage/DetailPageUI.html';
    })
}

