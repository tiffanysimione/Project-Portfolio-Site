$(() => {


$(document).ready(function () {
    $('.hamburger').click(function () {
      $('.menu').slideToggle();
    });
  });

/*
This is a JavaScript code block that uses jQuery to handle events on a hamburger menu button.

The code block creates an anonymous function using the arrow function syntax, which is executed when the document is ready. The purpose of the function is to add an event listener to the hamburger menu button.

The function first uses the jQuery ready method to make sure that the DOM is fully loaded before executing the code. Then, it adds an event listener to the .hamburger element using the click method.

When the .hamburger element is clicked, the function toggles the visibility of the .menu element using the jQuery slideToggle method. This method animates the showing or hiding of the .menu element with a sliding motion.

In summary, this code block creates a click event listener for a hamburger menu button that toggles the visibility of a menu element with a sliding animation when clicked
*/
  



  $(".switch").click(function(){
    $("body").toggleClass("dark-mode");

  });



  $(".switch2").click(function(){
    $("body").toggleClass("light-mode");

  });
  
});

// https://www.youtube.com/watch?v=YnQMBo6bYvY&t=382s
/*
The code block adds two event listeners using the jQuery click method. One listener is added to an element with the class .switch, and the other listener is added to an element with the class .switch2.

When the .switch element is clicked, the code block toggles the dark-mode class on the body element using the jQuery toggleClass method. This method adds the class to the element if it doesn't already have it, and removes it if it does.

Similarly, when the .switch2 element is clicked, the code block toggles the light-mode class on the body element using the same method.


*/


