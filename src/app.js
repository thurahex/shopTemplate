
let slideIndex = 1;
ishowSlide(slideIndex);

function plusSlides(n) {
  ishowSlide(slideIndex += n);
}

function currentSlide(n) {
  ishowSlide(slideIndex = n);
}

function ishowSlide(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// item Selection

let itemSlideIndex = 1;
ishowSlide(itemSlideIndex);

function iplusSlides(n) {
  showSlides(itemSlideIndex += n);
}

function icurrentSlide(n) {
  showSlides(itemSlideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("itemSlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {itemSlideIndex = 1}    
  if (n < 1) {itemSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[itemSlideIndex-1].style.display = "block";  
  dots[itemSlideIndex-1].className += " active";
}

const showBtn = document.querySelector(".nav-btn")
const closeBtn =document.querySelector(".close-nav-btn")
const Nav = document.querySelector(".nav-bar")

showBtn.addEventListener("click",() =>{
  Nav.style.top=0
})
closeBtn.addEventListener("click",() =>{
  Nav.style.top="-600px"
})

// landing page animateion

let sections = document.querySelectorAll(".a")
console.log(sections)
window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY
        let offset = sec.offsetTop-150
        let height = sec.offsetHeight

        if(top >= offset &&  top < offset + height){
            sec.classList.add("show-animate")
        }
        // else{
        //     sec.classList.remove("show-animate")
        // }
    })
}