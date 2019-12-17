let sliderIndex = 1,
    slides = document.querySelectorAll('.slider__item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrapp = document.querySelector('.slider__dots'),
    dots = document.querySelectorAll('.slider__dot');

function showSlides(n) {

    if (n > slides.length) {
        sliderIndex = 1;
    }

    if (n < 1) {
        sliderIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('active'));
    slides[sliderIndex - 1].style.display = 'block';
    dots[sliderIndex - 1].classList.add('active');
}

function plusSlider(n) {
    showSlides(sliderIndex += n);
}

function currentSlide(n) {
    showSlides(sliderIndex = n);
}

prev.addEventListener('click', function () {
    plusSlider(-1);
});

next.addEventListener('click', function () {
    plusSlider(1);
});

dotsWrapp.addEventListener('click', function () {
    for (i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('slider__dot') && event.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
});

showSlides(sliderIndex);