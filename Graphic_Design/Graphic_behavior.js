// #ph, #figma, #xd, #premiere, #effect

$(document).ready(function(){
    $('#course1').click(function(){
        $('#ai').show(500);
        $('#ph').hide();
        $('#figma').hide();
        $('#xd').hide();
        $('#premiere').hide();
        $('#effect').hide();
    })

    $('#course2').click(function(){
        $('#ph').show(500);
        $('#ai').hide();
        $('#figma').hide();
        $('#xd').hide();
        $('#premiere').hide();
        $('#effect').hide();
     
    })

    $('#course3').click(function(){
        $('#figma').show(500);
        $('#ph').hide();
        $('#ai').hide();
        $('#xd').hide();
        $('#premiere').hide();
        $('#effect').hide();
       
    })

    $('#course4').click(function(){
        $('#xd').show(500);
        $('#ph').hide();
        $('#figma').hide();
        $('#ai').hide();
        $('#premiere').hide();
        $('#effect').hide();
       
    })

    $('#course5').click(function(){
        $('#premiere').show(500);
        $('#ph').hide();
        $('#figma').hide();
        $('#xd').hide();
        $('#ai').hide();
        $('#effect').hide();
       
    })

    $('#course6').click(function(){
        $('#effect').show(500);
        $('#ph').hide();
        $('#figma').hide();
        $('#xd').hide();
        $('#premiere').hide();
        $('#ai').hide();
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