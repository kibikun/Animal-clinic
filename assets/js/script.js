const container = document.querySelector('.carousel__container');
const slides = document.querySelectorAll('.img__container');

let index = 0;

function slide() {
    if (index < slides.length - 1) {
        index++;
        container.style.transform = `translateX(-${index * 100}%)`;
    }
}

setInterval(slide, 5000);



const menuBtn = document.querySelector('.main__menu');
const closeBtn = document.querySelector('.cls__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.add('pop');
});


closeBtn.addEventListener('click', () => {
    menu.classList.remove('pop');
});