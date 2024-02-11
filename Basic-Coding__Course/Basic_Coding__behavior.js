// JQuery

// Behavior to click the course then show its course list
$(document).ready(function(){
    $('#course1').click(function(){
        $('#cpp').show(500)
        $('#java').hide()
        $('#python').hide()
        $('#csharp').hide()
        $('#R').hide()
        
    })

    $('#course2').click(function(){
        $('#java').show(500)
        $('#cpp').hide()
        $('#python').hide()
        $('#csharp').hide()
        $('#R').hide()
       
    })

    $('#course3').click(function(){
        $('#python').show(500)
        $('#java').hide()
        $('#cpp').hide()
        $('#csharp').hide()
        $('#R').hide()
       
    })

    $('#course4').click(function(){
        $('#csharp').show(500)
        $('#java').hide()
        $('#python').hide()
        $('#cpp').hide()
        $('#R').hide()
       
    })

    $('#course5').click(function(){
        $('#R').show(500)
        $('#java').hide()
        $('#python').hide()
        $('#csharp').hide()
        $('#cpp').hide()
       
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



