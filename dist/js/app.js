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

        if (e.target.closest('.marketplace__filter-btn')) {
            document.querySelector('.filter').classList.add('visible');
            document.body.classList.add("filter-lock")
        }

        if (e.target.matches('.filter.visible') || e.target.matches('.filter__close')) {
            document.querySelectorAll('.filter').forEach(el => el.classList.remove('visible'));
            document.body.classList.remove('filter-lock');
        }


        if (e.target.closest('.sort-btn')) {
            const currentDropdown = e.target.closest('.dropdown');
            const allDropdowns = document.querySelectorAll('.dropdown');

            allDropdowns.forEach(dropdown => {
                if (dropdown !== currentDropdown) {
                    dropdown.classList.remove('visible');
                }
            });

            currentDropdown.classList.toggle('visible');
        } else {
            const dropdownsVisible = document.querySelectorAll('.dropdown.visible');
            dropdownsVisible.forEach(dropdown => {
                if (!dropdown.contains(e.target)) {
                    dropdown.classList.remove('visible');
                }
            });
        }

        if (e.target.closest('.dropdown__list-item.sort')) {
            const dropdown = e.target.closest('.dropdown');
            const dropdownText = dropdown.querySelector('.dropdown__button-text');
            const listItem = e.target.closest('.sort');
            const allListItems = listItem.parentNode.querySelectorAll('.sort');

            listItem.classList.add('active');
            allListItems.forEach(el => {
                if (el !== listItem) {
                    el.classList.remove('active');
                }
            });

            dropdownText.innerHTML = listItem.innerHTML;
            dropdown.classList.remove('visible');
        }


        if (e.target.closest('.roadmap__item-title')) {
            e.target.closest('.roadmap__item-title').classList.toggle('active');
            e.target.closest('.roadmap__item-title').nextElementSibling.slideToggle()
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


        if (e.target.matches('.faq__item-title')) {
            e.target.classList.toggle('active');
            e.target.nextElementSibling.slideToggle()
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


    // select

    class CustomSelect {
        static openDropdown = null

        constructor(selectElement) {
            this.select = selectElement
            this.defaultText = this.select.options[this.select.selectedIndex].text
            this.selectName = this.select.getAttribute('name')
            this.options = [...this.select.options]
            this.icon = this.select.dataset.icon
            this.title = this.select.dataset.title
            this.dropdown = null
            this.initialState = {}
            this.init()
        }

        init() {
            if (!this.select) return
            this.saveInitialState()
            this.select.classList.add('hidden')
            this.renderDropdown()
            this.setupEvents()
        }

        saveInitialState() {
            const selectedOption = this.select.options[this.select.selectedIndex]
            this.initialState = {
                selectedText: selectedOption.text,
                selectedValue: selectedOption.value,
            }
        }

        renderDropdown() {
            const isDisabled = this.select.disabled
            let buttonTemplate = ''

            if (this.icon) {
                buttonTemplate = `
            <button type="button" class="dropdown__button icon-chevron" 
                aria-expanded="false" 
                aria-haspopup="true" 
                ${isDisabled ? 'disabled' : ''}>
                <span class="dropdown__button-icon ${this.icon}"></span>
                <span class="dropdown__button-text">${this.defaultText}</span>
            </button>
        `
            } else if (this.title) {
                buttonTemplate = `
            <button type="button" class="dropdown__button icon-chevron" 
                aria-expanded="false" 
                aria-haspopup="true" 
                ${isDisabled ? 'disabled' : ''}>
                <span class="dropdown__button-column">
                    <span class="dropdown__button-caption">${this.title}</span>
                    <span class="dropdown__button-text">${this.defaultText}</span>
                </span>
            </button>
        `
            } else {
                buttonTemplate = `
            <button type="button" class="dropdown__button icon-chevron" 
                aria-expanded="false" 
                aria-haspopup="true" 
                ${isDisabled ? 'disabled' : ''}>
                <span class="dropdown__button-text">${this.defaultText}</span>
            </button>
        `
            }

            this.dropdown = document.createElement('div')
            this.dropdown.className = 'dropdown'
            this.dropdown.innerHTML = `
        ${buttonTemplate}
        <div class="dropdown__body" aria-hidden="true">
            <ul class="dropdown__list" role="listbox"></ul>
        </div>
    `

            const list = this.dropdown.querySelector('.dropdown__list')
            this.options.forEach((option) => {
                const value = option.value
                const text = option.text
                const isSelected = option.selected
                const isDisabled = option.disabled

                const listItem = document.createElement('li')
                listItem.setAttribute('role', 'option')
                listItem.dataset.value = value
                listItem.setAttribute('aria-checked', isSelected)
                listItem.className = `dropdown__list-item${isSelected ? ' selected' : ''}${isDisabled ? ' disabled' : ''}`

                if (isDisabled) {
                    listItem.setAttribute('aria-disabled', 'true')
                }

                listItem.textContent = text
                list.append(listItem)
            })

            this.select.after(this.dropdown)
            this.updateButtonState()
        }

        setupEvents() {
            this.dropdown.querySelector('.dropdown__button').addEventListener('click', (event) => {
                event.stopPropagation()
                const isOpen = this.dropdown.classList.contains('visible')
                this.toggleDropdown(!isOpen)
            })

            this.dropdown.querySelectorAll('.dropdown__list-item').forEach(item => {
                item.addEventListener('click', (event) => {
                    event.stopPropagation()
                    if (!item.classList.contains('disabled')) {
                        this.selectOption(item)
                    }
                })
            })

            document.addEventListener('click', () => this.closeDropdown())
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') this.closeDropdown()
            })

            const form = this.select.closest('form');
            if (form) {
                form.addEventListener('reset', () => this.restoreInitialState())
            }

            const observerDisabled = new MutationObserver(() => {
                const isSelectDisabled = this.select.disabled
                const button = this.dropdown.querySelector('.dropdown__button')
                button.disabled = isSelectDisabled
            })

            observerDisabled.observe(this.select, {
                attributes: true,
                attributeFilter: ['disabled']
            })

            const observerSelected = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'disabled') {
                        const option = mutation.target
                        const value = option.value
                        const isDisabled = option.disabled
                        const item = this.dropdown.querySelector(`.dropdown__list-item[data-value="${value}"]`)

                        item.classList.toggle('disabled', isDisabled)
                        if (isDisabled) {
                            item.setAttribute('aria-disabled', 'true')
                        } else {
                            item.removeAttribute('aria-disabled')
                        }
                    }

                    if (mutation.type === 'attributes' && mutation.attributeName === 'selected') {
                        this.syncSelectedOption()
                    }
                })
            })

            observerSelected.observe(this.select, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['selected', 'disabled']
            })
        }

        toggleDropdown(isOpen) {
            if (isOpen && CustomSelect.openDropdown && CustomSelect.openDropdown !== this) {
                CustomSelect.openDropdown.closeDropdown()
            }

            const body = this.dropdown.querySelector('.dropdown__body')
            const list = this.dropdown.querySelector('.dropdown__list')
            const hasScroll = list.scrollHeight > list.clientHeight

            this.dropdown.classList.toggle('visible', isOpen)
            this.dropdown.querySelector('.dropdown__button').setAttribute('aria-expanded', isOpen)
            body.setAttribute('aria-hidden', !isOpen)

            if (isOpen) {
                CustomSelect.openDropdown = this
                this.dropdown.classList.remove('dropdown-top')
                const dropdownRect = body.getBoundingClientRect()
                const viewportHeight = window.innerHeight
                if (dropdownRect.bottom > viewportHeight) {
                    this.dropdown.classList.add('dropdown-top')
                }
                list.classList.toggle('has-scroll', hasScroll)
            } else {
                if (CustomSelect.openDropdown === this) {
                    CustomSelect.openDropdown = null
                }
            }
        }

        closeDropdown() {
            this.toggleDropdown(false)
        }

        selectOption(item) {
            const value = item.dataset.value
            const text = item.textContent

            this.dropdown.querySelectorAll('.dropdown__list-item').forEach(li => {
                li.classList.remove('selected')
                li.setAttribute('aria-checked', 'false')
            })
            item.classList.add('selected')
            item.setAttribute('aria-checked', 'true')

            this.dropdown.querySelector('.dropdown__button-text').textContent = text
            this.select.value = value
            this.select.dispatchEvent(new Event('change'))
            this.closeDropdown()
            this.updateButtonState()
        }

        restoreInitialState() {
            const state = this.initialState
            this.select.value = state.selectedValue
            this.select.dispatchEvent(new Event('change'))
            this.dropdown.querySelectorAll('.dropdown__list-item').forEach(li => {
                li.classList.remove('selected')
                li.setAttribute('aria-checked', 'false')
            })
            const initialItem = this.dropdown.querySelector(`.dropdown__list-item[data-value="${state.selectedValue}"]`)
            if (initialItem) {
                initialItem.classList.add('selected')
                initialItem.setAttribute('aria-checked', 'true')
            }
            this.dropdown.querySelector('.dropdown__button-text').textContent = state.selectedText
            this.updateButtonState()
        }

        syncSelectedOption() {
            const selectedOption = this.select.options[this.select.selectedIndex]
            const selectedValue = selectedOption.value
            const selectedText = selectedOption.text

            this.dropdown.querySelectorAll('.dropdown__list-item').forEach(li => {
                li.classList.remove('selected')
                li.setAttribute('aria-checked', 'false')
            })
            const selectedItem = this.dropdown.querySelector(`.dropdown__list-item[data-value="${selectedValue}"]`)
            if (selectedItem) {
                selectedItem.classList.add('selected')
                selectedItem.setAttribute('aria-checked', 'true')
            }
            this.dropdown.querySelector('.dropdown__button-text').textContent = selectedText
            this.updateButtonState()
        }

        updateButtonState() {
            const button = this.dropdown.querySelector('.dropdown__button')
            const selectedOption = this.select.options[this.select.selectedIndex]
            if (selectedOption && selectedOption.value !== '') {
                button.classList.add('selected')
            } else {
                button.classList.remove('selected')
            }
        }
    }

    document.querySelectorAll('.select')?.forEach(element => {
        new CustomSelect(element)
    })



})


HTMLElement.prototype.slideToggle = function (duration, callback) {
    if (this.clientHeight === 0) {
        _s(this, duration, callback, true);
    } else {
        _s(this, duration, callback);
    }
};

HTMLElement.prototype.slideUp = function (duration, callback) {
    _s(this, duration, callback);
};

HTMLElement.prototype.slideDown = function (duration, callback) {
    _s(this, duration, callback, true);
};

function _s(el, duration, callback, isDown) {
    if (typeof duration === 'undefined') duration = 400;
    if (typeof isDown === 'undefined') isDown = false;

    el.style.overflow = "hidden";
    if (isDown) el.style.display = "block";

    const elStyles = window.getComputedStyle(el);

    const elHeight = parseFloat(elStyles.getPropertyValue('height'));
    const elPaddingTop = parseFloat(elStyles.getPropertyValue('padding-top'));
    const elPaddingBottom = parseFloat(elStyles.getPropertyValue('padding-bottom'));
    const elMarginTop = parseFloat(elStyles.getPropertyValue('margin-top'));
    const elMarginBottom = parseFloat(elStyles.getPropertyValue('margin-bottom'));

    const stepHeight = elHeight / duration;
    const stepPaddingTop = elPaddingTop / duration;
    const stepPaddingBottom = elPaddingBottom / duration;
    const stepMarginTop = elMarginTop / duration;
    const stepMarginBottom = elMarginBottom / duration;

    let start;

    function step(timestamp) {
        if (start === undefined) start = timestamp;

        const elapsed = timestamp - start;

        if (isDown) {
            el.style.height = `${stepHeight * elapsed}px`;
            el.style.paddingTop = `${stepPaddingTop * elapsed}px`;
            el.style.paddingBottom = `${stepPaddingBottom * elapsed}px`;
            el.style.marginTop = `${stepMarginTop * elapsed}px`;
            el.style.marginBottom = `${stepMarginBottom * elapsed}px`;
        } else {
            el.style.height = `${elHeight - stepHeight * elapsed}px`;
            el.style.paddingTop = `${elPaddingTop - stepPaddingTop * elapsed}px`;
            el.style.paddingBottom = `${elPaddingBottom - stepPaddingBottom * elapsed}px`;
            el.style.marginTop = `${elMarginTop - stepMarginTop * elapsed}px`;
            el.style.marginBottom = `${elMarginBottom - stepMarginBottom * elapsed}px`;
        }

        if (elapsed >= duration) {
            el.style.height = "";
            el.style.paddingTop = "";
            el.style.paddingBottom = "";
            el.style.marginTop = "";
            el.style.marginBottom = "";
            el.style.overflow = "";
            if (!isDown) el.style.display = "none";
            if (typeof callback === "function") callback();
        } else {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}
