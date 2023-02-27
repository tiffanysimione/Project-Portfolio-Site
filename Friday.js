$(document).ready(function () {
    $('.hamburger').click(function () {
      $('.menu').slideToggle();
    });
  });




  function theme(color){
    $('body').attr('class',color);
}
  

