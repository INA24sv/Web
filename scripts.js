
//BACHILLERATOS//
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(acc => {
        acc.addEventListener('click', function () {
            const panel = this.nextElementSibling;
            document.querySelectorAll('.panel').forEach(p => {
                if (p !== panel) {
                    p.classList.remove('show');
                    p.style.maxHeight = null;
                }
            });
            if (panel.classList.contains('show')) {
                panel.classList.remove('show');
                panel.style.maxHeight = null;
            } else {
                panel.classList.add('show');
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });
});


//MAYA CURRICULAR//
document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content) {
                    item.style.display = 'none';
                }
            });
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});


const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalSlides = slides.length;
const interval = 4000; // 3 segundos

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}

function moveToNextSlide() {
    currentIndex++;
    if (currentIndex === totalSlides) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function moveToPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    showSlide(currentIndex);
}

document.querySelector('.next').addEventListener('click', moveToNextSlide);
document.querySelector('.prev').addEventListener('click', moveToPrevSlide);

setInterval(moveToNextSlide, interval);

