var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("testimonial mt--50 mt_md--40 mt_sm--40 slick-slide ");
 // var dots = document.getElementsByClassName("slick-dots");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
   // dots[i].className = dots[i].className.replace(" slick-active", "");
    slides[i].className = slides[i].className.replace(" slick-active", "");
    slides[i].className = slides[i].className.replace(" slick-current", "");

  }
//  slides[slideIndex-1].style.display = "block";  
 // dots[slideIndex-1].className += " slick-active";
  slides[slideIndex-1].className += " slick-active";
  slides[slideIndex-1].className += " slick-current";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}