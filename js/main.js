
//TODO:========COUNTDOWN
function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  let clock = document.querySelector(id);
  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    let t = getTimeRemaining(endtime);


    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}

let deadline = new Date(Date.parse(new Date()) + 24 * 60 * 60 * 1000); // for endless timer
initializeClock('.countdown', deadline);

function initializeClock1(id, endtime) {
  let clock = document.querySelector(id);
  let hoursSpan = clock.querySelector('.hours1');
  let minutesSpan = clock.querySelector('.minutes1');
  let secondsSpan = clock.querySelector('.seconds1');

  function updateClock1() {
    let t = getTimeRemaining(endtime);


    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock1();
  let timeinterval = setInterval(updateClock1, 1000);
}

let deadline1 = new Date(Date.parse(new Date()) + 24 * 60 * 60 * 1000); // for endless timer
initializeClock1('.countdown1', deadline);

//TODO:==========SLIDER
let slides = document.querySelectorAll('.slider-item');
let dotImg = document.querySelectorAll('.dot-img');
let index = 0;
let endSlides = slides.length - 1;

slides[index].classList.toggle('slider-item_active');
dotImg[index].classList.toggle('dot-img_active');


function nextSlide() {
  if (index == endSlides) {
    return false;
  } else {
    slides[index].classList.remove('slider-item_active');
    dotImg[index].classList.remove('dot-img_active');
    index += 1;
    slides[index].classList.toggle('slider-item_active');
    dotImg[index].classList.toggle('dot-img_active');
  }
}

function prevSlide() {
  if (index == 0) {
    return false;
  } else {
    slides[index].classList.remove('slider-item_active');
    dotImg[index].classList.remove('dot-img_active');
    index -= 1;
    slides[index].classList.toggle('slider-item_active');
    dotImg[index].classList.toggle('dot-img_active');
  }
}

function slidesChange(n) {
  slides[index].classList.remove('slider-item_active');
  dotImg[index].classList.remove('dot-img_active');
  index = n;
  slides[index].classList.toggle('slider-item_active');
  dotImg[index].classList.toggle('dot-img_active');
}
//Adaptive 

let hoverElements = document.querySelectorAll("[class*='hover']");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    for (const iterator of hoverElements) {
      iterator.classList.remove('phone_hover');
      iterator.classList.remove('submit-share_hover');
      iterator.classList.remove('slider_hover');
      iterator.classList.remove('section-reviews__reviews-more-link_hover');
      let val = iterator.className;
      console.log(val);
    }
} else {
  console.log('Good');
}
