const slides = document.querySelectorAll('.slide');

let current = 0;

document.addEventListener('click', () => {

    if (current >= slides.length - 1)
        return;

    slides[current].classList.remove('active');

    current++;

    slides[current].classList.add('active');

});