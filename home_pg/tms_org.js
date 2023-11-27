//diverting to map
function click1() {
    if(confirm("You are being redirected to Google Maps to show the location of our Organisation."))
    {
        window.open ('https://www.google.com/maps/place/Telemedicine+Society+of+Nepal/@27.704062,85.318814,16z/data=!4m5!3m4!1s0x0:0xb0af363377ff8acc!8m2!3d27.7024852!4d85.3201444?hl=en-US', '_blank');
    }    
};

navtoggle.addEventListener("click", function() {
  menu.classList.toggle("show");
});


//.................slideshow................

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  var images = slides[0].getElementsByTagName("img");
  for (i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > images.length) {slideIndex = 1}
  images[slideIndex-1].classList.add("active");
  setTimeout(showSlides, 2000); // Change image every 1 second
}
