let $carousel = $('.slider__item-wrap');
$carousel.flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    // pageDots: false,
    wrapAround: true,
    on: {
        ready: function () {
            let dotted = $('.flickity-page-dots');
            let paging = $('.slider__bottom-paging .dot');
            $(dotted).appendTo(paging);
        },
        change: function (index) {
            let number = ('.slider__bottom-paging .num');
            let indexPage = index + 1;
            $(number).text(indexPage.toString().padStart(2, 0));
        }
    }
});

$('.slider__bottom-control .prev').on('click', function () {
    $carousel.flickity('previous');
});
$('.slider__bottom-control .next').on('click', function () {
    $carousel.flickity('next');
});

let header = document.querySelector('header');
let slider = document.querySelector('.slider');
let heightHeader = header.clientHeight;
let heightSlider = slider.clientHeight;

function changeBgHeader() {
    let scrollY = window.pageYOffset;
    if (scrollY > (heightSlider - heightHeader)) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};

let backtoTop = document.querySelector('.totop')
function showBackToTop() {
    let scrollY = window.pageYOffset;
    if (scrollY > 500) {
        backtoTop.classList.add('active');
    } else {
        backtoTop.classList.remove('active');
    }
};

document.addEventListener('scroll', function () {
    showBackToTop();
    changeBgHeader();
});

let backtotop = document.querySelector('footer .backtotop');
backtotop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
let btt = document.querySelector('.totop');
btt.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

// let $carouselList = $('.list');
// $carouselList.flickity({
//     // options
//     cellAlign: 'left',
//     contain: true,
//     prevNextButtons: false,
//     // pageDots: false,
//     wrapAround: true,
// });

// let menuHeader = document.querySelectorAll('header .menu-header a');
// let HeightHeader = document.querySelector('header').offsetHeight;
// menuHeader.forEach(function (element, index) {
//     // console.log(element); //element: thẻ a
//     element.addEventListener('click', function (e) {
//         e.preventDefault();
//         let href = element.getAttribute('href');
//         let className = href.replace('#', '');
//         let section = document.querySelector('.' + className);
//         let posSection = section.offsetTop;
//         window.scrollTo({
//             top: posSection - HeightHeader,
//             behavior: "smooth"
//         });
//         menuHeader.forEach(function (menu_element, menu_index) {
//             menu_element.classList.remove('active');
//         });
//         element.classList.add('active');
//     });
// });
