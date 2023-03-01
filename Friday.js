$(() => {

$(document).ready(function () {
    $('.hamburger').click(function () {
      $('.menu').slideToggle();
    });
  });


// https://www.youtube.com/watch?v=YnQMBo6bYvY&t=382s

  $(".switch").click(function(){
    $("body").toggleClass("dark-mode");

  });

  $(".switch2").click(function(){
    $("body").toggleClass("light-mode");

  });
  
});


//https://blog.hubspot.com/website/css-animation-examples