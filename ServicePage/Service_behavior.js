
var viewbtn = document.querySelector('.view-morebtn');
viewbtn.addEventListener('click', function(){
    window.location.href =  "/Course-Categories/Course Categories-UI.html";
})


window.addEventListener('scroll', ()=>{
    let measure = window.innerHeight; //check innerheight of window scrolling

    //  check step1
    let showThis = document.querySelector('.key-principal');
    let check = showThis.getBoundingClientRect().top; //check the top length of box
    
    if(check < measure){
        showThis.classList.add('activethis');
    }
    else{
        showThis.classList.remove('activethis');
    }


    // check step 2
    let reveal1 = document.querySelector('.cetificate-sec');
    let check_revealImg = reveal1.getBoundingClientRect().top;

    if(check_revealImg < measure){
        reveal1.classList.add('reveal_step2');
    }

    else{
        reveal1.classList.remove('reveal_step2');
    }


    // check step 3
    let reveal2 = document.querySelector('.support-sec');
    let check_revealStep2 = reveal2.getBoundingClientRect().top;

    if(check_revealStep2 < measure){
        reveal2.classList.add('reveal_step3');
    }

    else{
        reveal2.classList.remove('reveal_step3');
    }



    // check step 4
    let reveal3 = document.querySelector('.intern-sec');
    let check_revealStep3 = reveal3.getBoundingClientRect().top;

    if(check_revealStep3 < measure){
        reveal3.classList.add('reveal_step4');
    }

    else{
        reveal3.classList.remove('reveal_step4');
    }
});





