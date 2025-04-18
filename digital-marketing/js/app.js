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

        // Табы
        const tabBtn = e.target.closest('.cases__tab-btn');
        if (tabBtn) {
            const tabsWrapper = tabBtn.closest('.cases__tabs');
            const allTabBtns = tabsWrapper ? tabsWrapper.querySelectorAll('.cases__tab-btn') : document.querySelectorAll('.cases__tab-btn');
            const allTabContents = tabsWrapper ? tabsWrapper.querySelectorAll('.cases__tabs-content') : document.querySelectorAll('.cases__tabs-content');

            console.log(allTabContents);


            const index = Array.from(allTabBtns).indexOf(tabBtn);

            allTabBtns.forEach(btn => btn.classList.remove('active'));
            allTabContents.forEach(content => content.classList.remove('active'));

            tabBtn.classList.add('active');
            if (allTabContents[index]) {
                allTabContents[index].classList.add('active');
            }
        }
    });

    function toggleMenu() {
        document.body.classList.toggle('lock');
        document.querySelector('.header').classList.toggle('open-menu');
    }

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


    // маска для телефонов
    var phoneInputs = document.querySelectorAll('input[type="tel"]');

    var getInputNumbersValue = function (input) {
        // Return stripped input value — just numbers
        return input.value.replace(/\D/g, '');
    }

    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    var onPhoneInput = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
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
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }


    // animation
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {
        gsap.to(".promo__video", {
            x: 12,
            y: 80,
            top: "50vh",
            width: "100vw",
            height: "80vh",
            scrollTrigger: {
                trigger: ".promo__body",
                start: "top 20%",
                end: "bottom top",
                scrub: 2,
            }
        });
    });

})


