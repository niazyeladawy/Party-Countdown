
$("#open").click(function(){
    $(".sidebar").animate({left:'0'},500);
    $(".header-content").animate({marginLeft:"250px"},500);
});

$("#close").click(function(){
    $(".sidebar").animate({left:'-250px'},500);
    $(".header-content").animate({marginLeft:"0"},500);
});
$(document).ready(function(){
    $(".item-title").click(function(ev){
        $(ev.target).parent().siblings().slideToggle(500);
        $(ev.target).parents(".item").siblings().children(".item-content").slideUp(500);
    });
})


let countDownDate = new Date("dec 17, 2021 15:37:25").getTime();

let countDown = setInterval(() => {
    
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let day = Math.floor(distance/(24*60*60*1000));
    let hours = Math.floor(distance%(24*60*60*1000)/(60*60*1000));
    let minutes = Math.floor(distance%(60*60*1000)/(60*1000));
    let seconds = Math.floor(distance%(60*1000)/(1000));

    $("#days").html(`${day} Days`);
    $("#hours").html(`${hours} Hours`);
    $("#minutes").html(`${minutes} Minutes`);
    $("#seconds").html(`${seconds} Seconds`);
    
    if(distance < 0){
        clearInterval(countDown);
        console.log("Expired");
    }

}, 1000);

$("textarea").keyup(function(){
    let charCount = $(this).val().length;
    let max = 100;
    if(charCount < max){
        let result = max - charCount;
        $("#remaining").html(`${result}`);
    }
    else{
        $("#remaining").html(`your available character finished`);
        

        
    }
    
    console.log(charCount);
})



