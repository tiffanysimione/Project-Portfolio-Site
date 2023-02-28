
//Hamburger Menu
$(document).ready(function () {
    $('.hamburger').click(function () {
      $('.menu').slideToggle();
    });
  });


$(document).ready(function () {
    $(".radio-btn").click(function () {
      $(".radio-inner").toggleClass("active");
      $("body").toggleClass("dark");
    });
  });

  

  