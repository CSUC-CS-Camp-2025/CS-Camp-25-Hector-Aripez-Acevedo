// Waits until Waits until the HTML document is fully loaded 
// before running the code inside.
// //Adds a click event listener to that button.
$( document ).ready(function() {

    $('#btn').click(function() {
        window.alert("DID YOU JUST CLICK ME?!");
    });
});

// Keeps track of the current slide.
// How many slides there are.
//loping back to zero after the last one.

$(document).ready(function () {
    let idx = 0;
    const imgs = document.querySelectorAll('.slideshowItem');
    const numSlides = imgs.length;

    function slideshow() {
        
        imgs[idx].classList.remove('active');
        idx = (idx + 1) % numSlides;
        imgs[idx].classList.add('active');
    }

    setInterval(slideshow, 5000);

    const links = document.querySelectorAll('.tab');
    const tabContent = document.querySelectorAll('.tabContent');
            
     });
    
