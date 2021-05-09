/* Setting the default slide start index: */
var slideIndex = 0;
var slidesArray = document.getElementsByClassName("carousel-item");
var sliderSquares = document.getElementsByClassName("corousel-square");
var prevButton = document.getElementsByClassName("carousel-control-prev")[0];
var nextButton = document.getElementsByClassName("carousel-control-next")[0];
var lastCall = Date.now();
const rotateInterval = 4000;
const slideTransitionTime = 700;
/* We call the function that is implemented below: */
// showSlides(slideIndex);

/* Increase the index by 1 - show the next slide: */
function nextSlide() {
    showSlides(slideIndex, slideIndex += 1);
}
/* Decrease the index by 1 - show the previous slide: */
function previousSlide() {
    showSlides(slideIndex, slideIndex -= 1);
}

// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


/* Flip function: */
function showSlides(prev_idx, new_idx) {
    // debugger;
    /* We refer to the elements with the class name "item", that is, to the pictures: */
    prevButton.classList.add("disabled");
    nextButton.classList.add("disabled");

    if (new_idx >= slidesArray.length) {
        new_idx = 0
    }
    if (new_idx < 0) {
        new_idx = slidesArray.length - 1
    }


    slidesArray[prev_idx].classList.add("carousel-item-left");

    slidesArray[new_idx].classList.add("carousel-item-next");
    slidesArray[new_idx].classList.add("carousel-item-left");
    slideIndex = new_idx;
    sliderSquares[prev_idx].classList.remove("active");
    sliderSquares[new_idx].classList.add("active");
    lastCall = Date.now();

    sleep(slideTransitionTime).then(() => {
        slidesArray[prev_idx].classList.remove("carousel-item-left");
        slidesArray[prev_idx].classList.remove("active");

        slidesArray[new_idx].classList.remove("carousel-item-left");
        slidesArray[new_idx].classList.remove("carousel-item-next");
        slidesArray[new_idx].classList.add("active");

        prevButton.classList.remove("disabled");
        nextButton.classList.remove("disabled");
    });
}


// autorotation
function autorotate() {
    var curTime = Date.now();
    var diff = curTime - lastCall;
    if (diff >= 4000) {
        nextSlide();
        setTimeout(autorotate, rotateInterval);
    } else {
        setTimeout(autorotate, rotateInterval - diff);
    }
}

setTimeout(autorotate, rotateInterval);
