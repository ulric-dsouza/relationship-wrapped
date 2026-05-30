const slides =
document.querySelectorAll('.slide');

const progress =
document.getElementById('progress');

let current = 0;

function updateSlide() {

    slides.forEach(slide =>
        slide.classList.remove('active')
    );

    slides[current].classList.add('active');

    const pct =
        ((current + 1) / slides.length) * 100;

    progress.style.width = pct + "%";
}

function nextSlide() {

    if(current < slides.length - 1) {

        current++;

        updateSlide();
    }
}

function prevSlide() {

    if(current > 0) {

        current--;

        updateSlide();
    }
}

document.addEventListener('keydown', (e) => {

    if(e.key === 'ArrowRight')
        nextSlide();

    if(e.key === 'ArrowLeft')
        prevSlide();

});

const startDate =
new Date("2024-09-22T12:28:12");

function updateCounter() {

    const now = new Date();

    let years =
        now.getFullYear() -
        startDate.getFullYear();

    let months =
        now.getMonth() -
        startDate.getMonth();

    let days =
        now.getDate() -
        startDate.getDate();

    if(days < 0) {
        months--;
        days += 30;
    }

    if(months < 0) {
        years--;
        months += 12;
    }

    const diff =
        now - startDate;

    const totalMinutes =
        Math.floor(diff / 60000);

    const hours =
        Math.floor(
            (totalMinutes % (24 * 60))
            / 60
        );

    const minutes =
        totalMinutes % 60;

    document.getElementById('years').textContent =
        years;

    document.getElementById('months').textContent =
        months;

    document.getElementById('days').textContent =
        days;

    document.getElementById('hours').textContent =
        hours;

    document.getElementById('minutes').textContent =
        minutes;
}

setInterval(updateCounter, 1000);

updateCounter();

updateSlide();