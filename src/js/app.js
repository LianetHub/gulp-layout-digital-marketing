"use strict";

// Инициализация Fancybox
if (typeof Fancybox !== "undefined" && Fancybox !== null) {
    Fancybox.bind("[data-fancybox]", {
        dragToClose: false,
        closeButton: false
    });
}


document.addEventListener("DOMContentLoaded", () => {


    // Определение ОС пользователя
    const isMobile = {
        Android: () => /Android/i.test(navigator.userAgent),
        BlackBerry: () => /BlackBerry/i.test(navigator.userAgent),
        iOS: () => /iPhone|iPad|iPod/i.test(navigator.userAgent),
        Opera: () => /Opera Mini/i.test(navigator.userAgent),
        Windows: () => /IEMobile/i.test(navigator.userAgent),
        any: function () {
            return this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows();
        },
    };

    function getNavigator() {
        if (isMobile.any() || window.innerWidth < 992) {
            document.body.classList.remove('_pc');
            document.body.classList.add('_touch');
        } else {
            document.body.classList.remove('_touch');
            document.body.classList.add('_pc');
        }
    }

    getNavigator();
    window.addEventListener('resize', getNavigator);

    // Обработчик событий
    document.addEventListener('click', (e) => {
        if (e.target.closest('.header__menu-toggler')) {
            toggleMenu();
        }

        if (e.target.matches('.header.open-menu')) {
            document.body.classList.remove('lock');
            document.querySelector('.header').classList.remove('open-menu');
        }

        if (e.target.matches('.menu__link') && document.querySelector('.header').classList.contains('open-menu')) {
            document.body.classList.remove('lock');
            document.querySelector('.header').classList.remove('open-menu');
        }

        // Табы
        const tabBtn = e.target.closest('.cases__tab-btn');
        if (tabBtn) {
            const tabsWrapper = tabBtn.closest('.cases__tabs');
            const allTabBtns = tabsWrapper ? tabsWrapper.querySelectorAll('.cases__tab-btn') : document.querySelectorAll('.cases__tab-btn');
            const allTabContents = tabsWrapper ? tabsWrapper.querySelectorAll('.cases__tabs-content') : document.querySelectorAll('.cases__tabs-content');

            const index = Array.from(allTabBtns).indexOf(tabBtn);

            allTabBtns.forEach(btn => btn.classList.remove('active'));
            allTabContents.forEach(content => content.classList.remove('active'));

            tabBtn.classList.add('active');
            if (allTabContents[index]) {
                allTabContents[index].classList.add('active');
            }
        }

        const loginTabBtn = e.target.closest('.login__tabs-btn');
        if (loginTabBtn) {

            const allTabBtns = document.querySelectorAll('.login__tabs-btn');
            const allTabContents = document.querySelectorAll('.login__content-block');

            const index = Array.from(allTabBtns).indexOf(loginTabBtn);

            allTabBtns.forEach(btn => btn.classList.remove('active'));
            allTabContents.forEach(content => content.classList.remove('active'));

            loginTabBtn.classList.add('active');
            if (allTabContents[index]) {
                allTabContents[index].classList.add('active');
            }
        }
    });

    function toggleMenu() {
        document.body.classList.toggle('lock');
        document.querySelector('.header').classList.toggle('open-menu');
    }

    // promo video controls
    const video = document.getElementById('promo-video');

    video?.addEventListener('click', () => {
        video.removeAttribute('muted');
        video.removeAttribute('autoplay');
        video.removeAttribute('playsinline');
        video.removeAttribute('controls');

        video.muted = false;
        video.controls = true;

        setTimeout(() => {
            video.play();
        }, 0);
    });

    // Инициализация слайдеров
    if (document.querySelector('.complex__slider')) {
        new Swiper('.complex__slider', {
            slidesPerView: "auto",
            spaceBetween: 10,
            navigation: {
                nextEl: '.complex__next',
                prevEl: '.complex__prev',
            },
            breakpoints: {
                991.98: {
                    spaceBetween: 40,
                }
            }
        });
    }

    if (document.querySelector('.projects__slider')) {
        new Swiper('.projects__slider', {
            slidesPerView: "auto",
            spaceBetween: 10,
            navigation: {
                nextEl: '.projects__next',
                prevEl: '.projects__prev',
            },
            breakpoints: {
                575.98: {
                    spaceBetween: 20,
                },
                991.98: {
                    spaceBetween: 40,
                }
            }
        });
    }

    if (document.querySelector('.tariff__slider')) {
        new Swiper('.tariff__slider', {
            slidesPerView: "auto",
            spaceBetween: 10,
            breakpoints: {
                575.98: {
                    spaceBetween: 20,
                },
                991.98: {
                    spaceBetween: 40,
                }
            }
        });
    }
    if (document.querySelector('.blog__slider')) {
        new Swiper('.blog__slider', {
            slidesPerView: "auto",
            spaceBetween: 10,
            navigation: {
                nextEl: '.blog__next',
                prevEl: '.blog__prev',
            },
            breakpoints: {
                575.98: {
                    spaceBetween: 20,
                },

            }
        });
    }

    if (document.querySelector('.cases__tabs-btns')) {
        new Swiper('.cases__tabs-btns', {
            slidesPerView: "auto",
            breakpoints: {
                991.98: {
                    slidesPerView: 4,
                }
            }
        });
    }

    // ========== intlTelInput ==========
    document.querySelectorAll('.phone-input')?.forEach(function (input) {
        const iti = window.intlTelInput(input, {
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
            initialCountry: "ru",
            separateDialCode: true,
        });



        const applyMaskIfRussian = () => {
            const country = iti.getSelectedCountryData().iso2;

            input.removeEventListener('input', onIntlPhoneInput);
            input.removeEventListener('keydown', onIntlPhoneKeyDown);
            input.removeEventListener('paste', onPhonePaste);
            input.setAttribute('placeholder', '')

            if (country === 'ru') {
                input.addEventListener('input', onIntlPhoneInput);
                input.addEventListener('keydown', onIntlPhoneKeyDown);
                input.addEventListener('paste', onPhonePaste);
                input.setAttribute('placeholder', '(___) ___–__–__')
            }
        };

        input.addEventListener('countrychange', applyMaskIfRussian);
        applyMaskIfRussian();
    });

    // ========== Маска без +7 (для intlTelInput с separateDialCode) ==========
    function getInputNumbersValue(input) {
        return input.value.replace(/\D/g, '');
    }

    function onPhonePaste(e) {
        const input = e.target;
        const inputNumbersValue = getInputNumbersValue(input);
        const pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            const pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                input.value = inputNumbersValue;
            }
        }
    }

    function onIntlPhoneInput(e) {
        const input = e.target;
        let inputNumbersValue = getInputNumbersValue(input);
        const selectionStart = input.selectionStart;

        if (!inputNumbersValue) {
            input.value = "";
            return;
        }

        if (input.value.length !== selectionStart) {
            if (e.data && /\D/g.test(e.data)) {
                input.value = inputNumbersValue;
            }
            return;
        }

        let formattedInputValue = "";

        if (inputNumbersValue.length >= 1) {
            formattedInputValue += '(' + inputNumbersValue.substring(0, 3);
        }
        if (inputNumbersValue.length >= 4) {
            formattedInputValue += ') ' + inputNumbersValue.substring(3, 6);
        }
        if (inputNumbersValue.length >= 7) {
            formattedInputValue += '-' + inputNumbersValue.substring(6, 8);
        }
        if (inputNumbersValue.length >= 9) {
            formattedInputValue += '-' + inputNumbersValue.substring(8, 10);
        }

        input.value = formattedInputValue;
    }


    function onIntlPhoneKeyDown(e) {
        const input = e.target;
        const inputValue = getInputNumbersValue(input);
        if (e.keyCode === 8 && inputValue.length <= 1) {
            input.value = "";
        }
    }

    // ========== Маска для обычных input[type="tel"] ==========
    function onPhoneInput(e) {
        const input = e.target;
        let inputNumbersValue = getInputNumbersValue(input);
        const selectionStart = input.selectionStart;

        if (!inputNumbersValue) {
            input.value = "";
            return;
        }

        if (input.value.length !== selectionStart) {
            if (e.data && /\D/g.test(e.data)) {
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].includes(inputNumbersValue[0])) {
            if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
            const firstSymbols = (inputNumbersValue[0] === "8") ? "8" : "+7";
            let formattedInputValue = firstSymbols;

            if (inputNumbersValue.length > 1) {
                formattedInputValue += ' (' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }

            input.value = formattedInputValue;
        } else {
            input.value = '+' + inputNumbersValue.substring(0, 16);
        }
    }

    function onPhoneKeyDown(e) {
        const input = e.target;
        const inputValue = getInputNumbersValue(input);
        if (e.keyCode === 8 && inputValue.length === 1) {
            input.value = "";
        }
    }

    document.querySelectorAll('input[type="tel"]:not(.phone-input)')?.forEach(function (input) {
        input.addEventListener('keydown', onPhoneKeyDown);
        input.addEventListener('input', onPhoneInput);
        input.addEventListener('paste', onPhonePaste);
    });




    // animation
    const promoBody = document.querySelector('.promo__body');
    if (promoBody) {
        gsap.registerPlugin(ScrollTrigger);

        let mm = gsap.matchMedia();

        mm.add("(min-width: 992px)", () => {


            const animation = gsap.to(".promo__video-wrapper .video-area", {
                y: 620,
                width: () => `${window.innerWidth - 90}px`,
                height: "80vh",
                x: () => {
                    const vw = window.innerWidth;
                    const bodyWidth = promoBody.offsetWidth;
                    return ((vw - bodyWidth) / 2) - 30;
                },
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".promo__video-wrapper",
                    start: () => `top ${document.querySelector('.header').offsetHeight}`,
                    end: `${document.querySelector('.promo__offer').offsetHeight} top`,
                    scrub: 3,
                    // markers: true,
                    onEnter: () => promoBody.classList.add('scrolled'),
                    onLeaveBack: () => promoBody.classList.remove('scrolled'),
                }
            });

            ScrollTrigger.addEventListener("refreshInit", () => {
                animation.invalidate();
            });


            window.addEventListener("resize", () => {
                ScrollTrigger.refresh();
            });

            return () => {
                window.removeEventListener("resize", () => {
                    ScrollTrigger.refresh();
                });
                animation.scrollTrigger?.kill();
                animation.kill();
            };
        });
    }


})


