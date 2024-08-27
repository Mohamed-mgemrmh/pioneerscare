const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
});
// add event on elements

// header and scroll to top btn 
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// mobile navbar

const menuBtn = document.querySelector('.menu-button');
const menuLinks = document.querySelectorAll('.header .container nav ul li');
menuBtn.onclick = () => {
  header.classList.toggle('open')
}
menuLinks.forEach(function(link) {
  link.onclick = () => {
    header.classList.toggle('open');
    menuLinks.forEach(function(link) {
      link.classList.remove('active');
    })
    link.classList.add('active')
  };
});
new Swiper('.slide-content', {
speed: 600,
loop: true,
autoplay: {
    delay: 3000,
    disableOnInteraction: false
},
slidesPerView: 'auto',
pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
},
breakpoints: {
    320: {
    slidesPerView: 1,
    spaceBetween: 20
    },
    675: {
    slidesPerView: 2,
    spaceBetween: 20
    },
    950: {
        slidesPerView: 3,
        spaceBetween: 20
    },
    1200: {
    slidesPerView: 4,
    spaceBetween: 20
    }
},
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
});