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

// =========================
// MONTHLY MESSAGE TREND
// =========================

const monthlyCtx =
document.getElementById('monthlyChart');

if(monthlyCtx){

new Chart(monthlyCtx, {

    type: 'line',

    data: {

        labels: [

            'Sep 24',
            'Oct 24',
            'Nov 24',
            'Dec 24',
            'Jan 25',
            'Feb 25',
            'Mar 25',
            'Apr 25',
            'May 25',
            'Jun 25',
            'Jul 25',
            'Aug 25',
            'Sep 25',
            'Oct 25',
            'Nov 25',
            'Dec 25',
            'Jan 26',
            'Feb 26',
            'Mar 26',
            'Apr 26',
            'May 26'

        ],

        datasets: [{

            label: 'Messages',

            data: [

                142,
                0,
                0,
                2566,
                6253,
                2074,
                4467,
                6474,
                2496,
                4046,
                5068,
                9523,
                23500,
                15201,
                15676,
                24423,
                20660,
                27881,
                32633,
                38216,
                23395

            ],

            borderColor: '#ff4d8d',

            borderWidth: 4,

            tension: 0.4,

            pointRadius: 4,

            pointBackgroundColor: '#ffffff',

            fill: false
        }]
    },

    options: {

        responsive: true,

        plugins: {

            legend: {
                display: false
            }
        },

        scales: {

            x: {

                ticks: {
                    color: 'white'
                },

                grid: {
                    color: 'rgba(255,255,255,0.05)'
                }
            },

            y: {

                ticks: {
                    color: 'white'
                },

                grid: {
                    color: 'rgba(255,255,255,0.05)'
                }
            }
        }
    }
});
}

// =========================
// NIGHT OWL CHART
// =========================

const hourlyCtx =
document.getElementById('hourlyChart');

if(hourlyCtx){

new Chart(hourlyCtx, {

    type: 'bar',

    data: {

        labels: [

            '12a',
            '1a',
            '2a',
            '3a',
            '4a',
            '5a',
            '6a',
            '7a',
            '8a',
            '9a',
            '10a',
            '11a',
            '12p',
            '1p',
            '2p',
            '3p',
            '4p',
            '5p',
            '6p',
            '7p',
            '8p',
            '9p',
            '10p',
            '11p'

        ],

        datasets: [{

            data: [

                55407,
                46738,
                18732,
                4000,
                2000,
                1000,
                1000,
                2000,
                3500,
                4500,
                6000,
                7000,
                8968,
                10140,
                10294,
                11549,
                13999,
                11617,
                10000,
                9000,
                8000,
                7000,
                6000,
                17315

            ],

            backgroundColor:
                'rgba(255,255,255,0.85)',

            borderRadius: 20
        }]
    },

    options: {

        responsive: true,

        plugins: {

            legend: {
                display: false
            }
        },

        scales: {

            x: {

                ticks: {
                    color: 'white'
                },

                grid: {
                    display: false
                }
            },

            y: {

                ticks: {
                    color: 'white'
                },

                grid: {
                    color: 'rgba(255,255,255,0.05)'
                }
            }
        }
    }
});
}

