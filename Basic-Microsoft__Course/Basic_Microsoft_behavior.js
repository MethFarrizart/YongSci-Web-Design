$(document).ready(function(){
    $('#course1').click(function(){
        $('#Ms-word').show(500);
        $('#Ms-pptx').hide();
        $('#Ms-excel').hide();
        $('#Ms-mix').hide()
        $('.title-name').find('p').css('background-color', 'blue');
    })

    $('#course2').click(function(){
        $('#Ms-pptx').show(500)
        $('#Ms-word').hide();
        $('#Ms-excel').hide();
        $('#Ms-mix').hide()
        $('.title-name').find('p').css('background-color', ' rgb(212, 81, 20)');
    })

    $('#course3').click(function(){
        $('#Ms-excel').show(500)
        $('#Ms-word').hide();
        $('#Ms-pptx').hide();
        $('#Ms-mix').hide()
        $('.title-name').find('p').css('background-color', 'rgb(34, 133, 31)');
    })


    $('#course4').click(function(){
        $('#Ms-mix').show(500)
        $('#Ms-excel').hide()
        $('#Ms-word').hide();
        $('#Ms-pptx').hide();
        $('.title-name').find('p').css('background-color', 'blueviolet');
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