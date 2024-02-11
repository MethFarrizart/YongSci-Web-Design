// Behavior to click the course
let btn_ios = document.getElementById("btn-ios");
let btn_flutter = document.getElementById("btn-flutter");
let section_flutter = document.getElementById("flutter-section");
let section_ios = document.getElementById("ios-section");
let section_swift = document.getElementById("swift-section");
let btn_swift = document.getElementById("btn-swift");



let CurrentSection = section_ios;

const animationOut = [
    { opacity: '100' },
    { opacity: '0'}
];
const animationIn = [
    { opacity: '0' },
    { opacity: '100'}
];
const timing= {
    duration: 200,
  }

btn_ios.addEventListener('click',()=>{
    CurrentSection.animate(animationOut,timing);
    section_ios.animate(animationIn,timing);
        CurrentSection.style.display= 'none';
        section_ios.style.display="block";
    CurrentSection = section_ios;
        
});

btn_flutter.addEventListener('click',()=>{
    CurrentSection.animate(animationOut,timing);
    section_flutter.animate(animationIn,timing);
        CurrentSection.style.display = 'none';
        section_flutter.style.display = 'block';
    CurrentSection = section_flutter;
});

btn_swift.addEventListener('click',()=>{
    CurrentSection.animate(animationOut,timing);
    section_swift.animate(animationIn,timing);
        CurrentSection.style.display= 'none';
        section_swift.style.display="block";
    CurrentSection = section_swift;
        
})

//JQuery
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





// To show detail for each course
var show_detailthis = document.querySelectorAll('.course-item');
for(var i=0; i<show_detailthis.length; i++){
    show_detailthis[i].addEventListener('click', function(){
        window.location.href = '/DetailPage/DetailPageUI.html';
    })
}


// To show detail for each course
var show_detail = document.querySelectorAll('.course-box__list');
for(var i=0; i<show_detail.length; i++){
    show_detail[i].addEventListener('click', function(){
        window.location.href = '/DetailPage/DetailPageUI.html';
    })
}


// To show detail for each course
var show_detail_choice = document.querySelectorAll('.course-item-row');
for(var i=0; i<show_detail.length; i++){
    show_detail_choice[i].addEventListener('click', function(){
    window.location.href = '/DetailPage/DetailPageUI.html';
    })
}






