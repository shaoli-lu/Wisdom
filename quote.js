let pic = document.getElementById('pic');

document.addEventListener('DOMContentLoaded', function() {
getQuote();

})

function getQuote() {
    fetch("https://api.adviceslip.com/advice").then(response => response.json()).then(data => {
    
   
        document.querySelector('#quote').innerHTML = '"' + data.slip.advice  + '"' ;  
       
        
            
    })  
}

pic.addEventListener('click', getQuote)

$(document).ready(function () {

    $('#author').hover(
    function () {
        $(this).stop().fadeOut(function () {
            var $temp = $(this).attr('src');
            $(this).attr('src', $(this).attr('data-alt-src'));
            $(this).attr('data-alt-src', $temp);
        });

        $(this).fadeIn();
    },

    function () {
        $(this).stop().fadeOut(function () {
            var $temp = $(this).attr('data-alt-src');
            $(this).attr('data-alt-src', $(this).attr('src'));
            $(this).attr('src', $temp);
        });

        $(this).fadeIn();

    });
});