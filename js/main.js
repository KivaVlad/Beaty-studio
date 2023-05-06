const swiper = new Swiper('.massage_swiper', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 100,
    navigation: {
        nextEl: '.massage_swiper_btn_next',
        prevEl: '.massage_swiper_btn_prev',
    },
    
});

const swiper2 = new Swiper('.masters_swiper', {
    slidesPerView: 5,
    loop: false,
    spaceBetween: 100,
    navigation: {
        nextEl: '.masters_swiper_btn_next',
        prevEl: '.masters_swiper_btn_prev',
    },
    breakpoints: {
        // when window width is >= 320px
        1300: {
            slidesPerView: 5,
            spaceBetween: 80
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 80
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 80
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 80
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 80
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 80
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 80
        },

        460: {
            slidesPerView: 2,
            spaceBetween: 80
        },
        420: {
            slidesPerView: 1,
            spaceBetween: 80
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 80
        },
    },
    
});

const swiper3 = new Swiper('.cards_container', {
    slidesPerView: 3,
    loop: false,
    spaceBetween: 100,
    navigation: {
        nextEl: '.cards_swiper_btn_next',
        prevEl: '.cards_swiper_btn_prev',
    },
    breakpoints: {
        // when window width is >= 320px
        1300: {
            slidesPerView: 3,
            spaceBetween: 80
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 80
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 80
        },
        500: {
            slidesPerView: 1,
            spaceBetween: 80
        },
        400: {
            slidesPerView: 1,
            spaceBetween: 80
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 80
        },
    },
    
});

const swiper4 = new Swiper('.reviews_container', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 100,
    breakpoints: {
        // when window width is >= 320px
        1300: {
            slidesPerView: 4,
            spaceBetween: 80
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 80
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 80
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 80
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 80
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 80
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 80
        },

        400: {
            slidesPerView: 1,
            spaceBetween: 80
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 80
        },
    }
    
});

// header-scroll
(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());


// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 800);
            });
        });
    };
    scrollTo();
}());



// Burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const menuLinks = document.querySelectorAll('.header_nav_link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
    if (window.innerWidth < 850) {
        for (let i = 0; i < menuLinks.length; i += 1){
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header_nav_active');
            });
        }
    }
}());


