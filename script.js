var CarouselPosition = 1;
var SliderPosition = 0;

function SliderPlus(p){
    SliderPosition = SliderPosition + p;
    if(SliderPosition > 2){SliderPosition = 0;}
    if(SliderPosition < 0){SliderPosition = 2;}
    Slider(SliderPosition);
}

function Slider(p){
    var Slider = document.getElementsByClassName("SliderDiv");
    Slider[0].style.right = p*13.5+"%";
    var sliderdots = document.getElementsByClassName("SliderDot");
    for(i=0; i< sliderdots.length;i++){
        sliderdots[i].className = sliderdots[i].className.replace("SliderCurrentDot", "SliderOtherDot");
    }   
    sliderdots[p].className = sliderdots[p].className.replace("SliderOtherDot", "SliderCurrentDot");
    SliderPosition = p; 
}

Carousel(CarouselPosition);
function CurrentCarousel(p){
    Carousel(p);
}
function plusSlide(){
    CarouselPosition = CarouselPosition + 1;
    var slides = document.getElementsByClassName("CarouselContainer");
    if(CarouselPosition>slides.length){CarouselPosition = CarouselPosition - slides.length;}
    if(CarouselPosition<1){CarouselPosition = slides.length}
    Carousel(CarouselPosition);
}
function Carousel(slidePosition){
    var i;
    var slides = document.getElementsByClassName("CarouselContainer");
    var dots = document.getElementsByClassName("dot");
    for(i=0; i< slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("current_dot", "");
    }
    dots[slidePosition-1].classList.add("current_dot");
    slides[slidePosition-1].style.display = "block";
}
setInterval(plusSlide, 5000);