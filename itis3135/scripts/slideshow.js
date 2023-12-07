let index = 1;
displaySlides(index);

function nextSlides(n) {
  displaySlides(index += n);
}

function currentSlide(n) {
  displaySlides(index = n);
}

function displaySlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let demo = document.getElementsByClassName("demo");
  let caption = document.getElementById("caption");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < demo.length; i++) {
    demo[i].className = demo[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";
  demo[index-1].className += " active";
  caption.innerHTML = demo[index-1].alt;
}