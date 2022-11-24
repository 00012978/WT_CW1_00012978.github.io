const slidesList = document.querySelectorAll(".slider-item"); // getting hold of the NodeList containing all the elements with "slider-item" class
const btnNextSlide = document.getElementById("btn-next-slide"); 
const btnPreviousSlide = document.getElementById("btn-previous-slide");
let slidesCounter = 0; // setting the counter variable to zero in order to control the current slide

function turnNextSlide () {
    // this function is responsible for changing the slides. it increases the slidesCounter each time when it's called.
    slidesCounter++;
    let activeSlide;
    for (_ of slidesList){
        if (_.classList.contains("active-slide")){
            // after looping through the list of slides, the element containing .active-slide class is assigned to the activeSlide variable
            activeSlide = _;
        }
    } 
    if (slidesCounter >= slidesList.length){
        slidesCounter -= slidesList.length; // if the slidesCounter's value exceeds the actual number of slides, the number of slides is subtracted from the slidesCounter
    }
    activeSlide.classList.remove("active-slide"); // the current's active slide's class .active-slide is removed from its classes
    if (slidesList[slidesCounter].className == "slider-item") {
        slidesList[slidesCounter].classList.add("active-slide"); // the .active-slide class is assigned to the next element containing slider-item class among its classes
}}

function turnPreviousSlide () {
    slidesCounter--;
    let activeSlide;
    for (_ of slidesList){
        if (_.classList.contains("active-slide")){
            activeSlide = _;
        }
    } 
    if (slidesCounter < 0){
        slidesCounter += slidesList.length; // once the slidesCounter becomes negative, it's added the number of slides to
    }
    activeSlide.classList.remove("active-slide");
    if (slidesList[slidesCounter].className == "slider-item") {
        slidesList[slidesCounter].classList.add("active-slide");}
}

btnNextSlide.addEventListener('click', turnNextSlide);
btnPreviousSlide.addEventListener('click', turnPreviousSlide); // whenever buttons are clicked, corresponding functions are called