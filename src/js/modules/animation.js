(function ($) {
    "use strict";

    $('.sidebar-button').on("click", function () {
        $(this).toggleClass('active');
    });

    const sidebarButton = document.querySelector('.sidebar-button');

    if (sidebarButton) {
        sidebarButton.addEventListener('click', () => {
            document.querySelector('.main-menu').classList.toggle('show-menu');
        });
    }

    $('.menu-close-btn').on("click", function () {
        $('.main-menu').removeClass('show-menu');
    });

    // sidebar
    $('.right-sidebar-button').on("click", function () {
        $('.right-sidebar-menu').addClass('show-right-menu');
    });
    $('.right-sidebar-close-btn').on("click", function () {
        $('.right-sidebar-menu').removeClass('show-right-menu');
    });

    jQuery('.dropdown-icon').on('click', function () {
        jQuery(this).toggleClass('active').next('ul, .mega-menu, .mega-menu2').slideToggle();
        jQuery(this).parent().siblings().children('ul, .mega-menu, .mega-menu2').slideUp();
        jQuery(this).parent().siblings().children('.active').removeClass('active');
    });
    jQuery('.dropdown-icon2').on('click', function () {
        jQuery(this).toggleClass('active').next('.submenu-list').slideToggle();
        jQuery(this).parent().siblings().children('.submenu-list').slideUp();
        jQuery(this).parent().siblings().children('.active').removeClass('active');
    });
    jQuery(function ($) {
        $(document).on('click', '.portfolio-drop-down', function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            let submenu = $(this).siblings('.sub-menu'); // Get submenu

            if (submenu.length) {
                // Close other submenus at the same level
                $(this).parent().siblings().find('.sub-menu').slideUp();

                // Toggle clicked submenu
                submenu.stop(true, true).slideToggle();
            }
        });
    });


    // FancyBox Js
    $('[data-fancybox="gallery-01"]').fancybox({
        buttons: [
            "close",
        ],
        loop: false,
        protect: true,
    });
    $('.video-player').fancybox({
        buttons: [
            "close",
        ],
        loop: false,
        protect: true,
    });

    // sticky header

    window.addEventListener('scroll', function () {
        const header = document.querySelector('header.header-area');
        header.classList.toggle("sticky", window.scrollY > 0);
    });


    //Counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // Home1 Process Slider
    var swiper = new Swiper(".home1-process-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 60,
        autoplay: {
            delay: 2500, // Autoplay duration in milliseconds
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".process-slider-next",
            prevEl: ".process-slider-prev",
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            386: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });

    var slider = new Swiper(".home1-testimonial-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 30,
        loop: true,
        effect: 'fade', // Use fade effect
        fadeEffect: { crossFade: true },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".testimonial-slider-next",
            prevEl: ".testimonial-slider-prev",
        },

    });

    var swiper = new Swiper(".home2-testimonial-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 30,
        loop: true,
        effect: 'fade',             // Use the fade effect
        fadeEffect: {
            crossFade: true           // Enable cross-fade transition
        },
        autoplay: {
            delay: 2500, // Autoplay duration in milliseconds
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".testimonial-slider-next",
            prevEl: ".testimonial-slider-prev",
        },
        pagination: {
            el: ".franctional-pagi",
            type: "fraction",
        },
    });
    var swiper = new Swiper(".home2-feature-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 30,
        loop: true,
        effect: 'fade',             // Use the fade effect
        fadeEffect: {
            crossFade: true           // Enable cross-fade transition
        },
        autoplay: {
            delay: 2500, // Autoplay duration in milliseconds
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".feature-slider-next",
            prevEl: ".feature-slider-prev",
        },
        pagination: {
            el: ".swiper-pagination1",
            clickable: true,
        },
    });
    // Home3 Blog Slider
    var swiper = new Swiper(".home3-blog-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 60,
        autoplay: {
            delay: 2500, // Autoplay duration in milliseconds
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: ".blog-slider-next",
            prevEl: ".blog-slider-prev",
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            386: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 25,
            },
            1400: {
                slidesPerView: 2,
            },
        },
    });
    // Home3 Testimonial Slider
    var swiper = new Swiper(".home3-testimonial-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 24,
        autoplay: {
            delay: 2500, // Autoplay duration in milliseconds
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: ".blog-slider-next",
            prevEl: ".blog-slider-prev",
        },
        pagination: {
            el: ".swiper-pagination1",
            clickable: true,
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            386: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 2,
            },
        },
    });
    // Home4 Team Slider
    var swiper = new Swiper(".home4-team-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 24,
        autoplay: {
            delay: 2500, // Autoplay duration in milliseconds
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination1",
            clickable: true,
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            386: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 4,
            },
        },
    });
    // Home5 Banner Slider
    var swiper = new Swiper(".home5-banner-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 30,
        loop: true,
        effect: 'fade',             // Use the fade effect
        fadeEffect: {
            crossFade: true           // Enable cross-fade transition
        },
        autoplay: {
            delay: 2500, // Autoplay duration in milliseconds
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination1",
            clickable: true,
        },
    });
    // Home6 Testimonial Slider
    var swiper = new Swiper(".home6-testimonial-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 24,
        autoplay: {
            delay: 2500, // Autoplay duration in milliseconds
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: ".testimonial-slider-next",
            prevEl: ".testimonial-slider-prev",
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            386: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 2,
            },
        },
    });
    // Service Details Slider
    var swiper = new Swiper(".service-details-post-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 30,
        loop: true,
        effect: 'fade',             // Use the fade effect
        fadeEffect: {
            crossFade: true           // Enable cross-fade transition
        },
        autoplay: {
            delay: 2500, // Autoplay duration in milliseconds
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".post-slider-next",
            prevEl: ".post-slider-prev",
        },
    });
    // Recent Post Slider
    var swiper = new Swiper(".related-product-slider", {
        speed: 1500,
        spaceBetween: 24,
        autoplay: {
            delay: 2000, // Autoplay duration in milliseconds
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: ".related-product-slider-next",
            prevEl: ".related-product-slider-prev",
        },

        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            420: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 4,
            },
        },
    });
    // About banner Slider
    var swiper = new Swiper(".about-page-banner-slider", {
        speed: 1500,
        spaceBetween: 24,
        autoplay: {
            delay: 2000, // Autoplay duration in milliseconds
            disableOnInteraction: false,
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            350: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 15,
            },
            1400: {
                slidesPerView: 6,
            },
        },
    });
    // Home4 Team Slider
    var swiper = new Swiper(".about-page-team-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 24,
        autoplay: {
            delay: 2500, // Autoplay duration in milliseconds
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: ".about-page-team-slider-next",
            prevEl: ".about-page-team-slider-prev",
        },

        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            386: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 4,
            },
        },
    });

    var swiper = new Swiper(".pf-horizontal-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 25,
        loop: true,
        effect: "fade",
        mousewheel: {
            invert: false,
        },
        navigation: {
            nextEl: ".next-16",
            prevEl: ".prev-16",
        },
    });

    var swiper = new Swiper(".portfolio-carousel-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 25,
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true           // Enable cross-fade transition
        },
        mousewheel: {
            invert: false,
        },
        navigation: {
            nextEl: ".portfolio-carousel-slider-next",
            prevEl: ".portfolio-carousel-slider-prev",
        },
        pagination: {
            el: ".swiper-pagination1",
            clickable: true,
        },
    });

    gsap.registerPlugin(Observer);

    let sections = document.querySelectorAll("section"),
        images = document.querySelectorAll(".bg"),
        outerWrappers = gsap.utils.toArray(".outer"),
        innerWrappers = gsap.utils.toArray(".inner");

    if (sections.length && images.length && outerWrappers.length && innerWrappers.length) {
        let currentIndex = -1,
            wrap = gsap.utils.wrap(0, sections.length),
            animating;

        gsap.set(outerWrappers, { yPercent: 100 });
        gsap.set(innerWrappers, { yPercent: -100 });

        function gotoSection(index, direction) {
            index = wrap(index); // make sure it's valid
            animating = true;
            let fromTop = direction === -1,
                dFactor = fromTop ? -1 : 1,
                tl = gsap.timeline({
                    defaults: { duration: 1.25, ease: "power1.inOut" },
                    onComplete: () => (animating = false),
                });

            if (currentIndex >= 0) {
                gsap.set(sections[currentIndex], { zIndex: 0 });
                tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(sections[currentIndex], { autoAlpha: 0 });
            }

            gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
            tl.fromTo(
                [outerWrappers[index], innerWrappers[index]],
                { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
                { yPercent: 0 },
                0
            ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

            currentIndex = index;
        }

        Observer.create({
            type: "wheel,touch,pointer",
            wheelSpeed: -1,
            onDown: () => !animating && gotoSection(currentIndex - 1, -1),
            onUp: () => !animating && gotoSection(currentIndex + 1, 1),
            tolerance: 10,
            preventDefault: true,
        });

        gotoSection(0, 1);
    }

    //wow js 
    jQuery(window).on('load', function () {
        new WOW().init();
        window.wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            offset: 80
        })
        window.wow.init();
    });

    // niceSelect
    if ($('select').length) {
        $("select").niceSelect();
    }

    //Quantity Increment
    $(".quantity__minus").on("click", function (e) {
        e.preventDefault();
        var input = $(this).siblings(".quantity__input");
        var value = parseInt(input.val(), 10);
        if (value > 1) {
            value--;
        }
        input.val(value.toString().padStart(2, "0"));
    });
    $(".quantity__plus").on("click", function (e) {
        e.preventDefault();
        var input = $(this).siblings(".quantity__input");
        var value = parseInt(input.val(), 10);
        value++;
        input.val(value.toString().padStart(2, "0"));
    });

    window.addEventListener('scroll', function () {
        const appbackimg = document.querySelector('.home2-app-banner-section .banner-img');
        if (appbackimg) { // Check if the element exists
            const getAppBlockHeight = appbackimg.getBoundingClientRect().y;
            appbackimg.classList.toggle("animate-back-img", 320 >= getAppBlockHeight);
        }
    });

    window.addEventListener('scroll', function () {
        const appbackimg = document.querySelector('.home7-about-section .skill-area .skill-list');
        if (appbackimg) { // Check if the element exists
            const getAppBlockHeight = appbackimg.getBoundingClientRect().y;
            appbackimg.classList.toggle("active", 700 >= getAppBlockHeight);
        }
    });

    // services Images
    const serviceImgItem = document.querySelectorAll(
        ".sevices-wrap .single-services "
    );
    function followImageCursor(event, serviceImgItem) {
        const contentBox = serviceImgItem.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;
        serviceImgItem.children[1].style.transform = `translate(${dx}px, ${dy}px) rotate(25deg)`;
    }

    serviceImgItem.forEach((item, i) => {
        item.addEventListener("mousemove", (event) => {
            setInterval(followImageCursor(event, item), 100);
        });
    });

    //Cart Menu Quantity button toggle
    $(".qty-btn").on("click", function (e) {
        e.stopPropagation();
        // Toggle "active" class for the current quantity button and its related elements
        $(this).next(".quantity-area").toggleClass("active");

        // Remove "active" class from other quantity buttons and related elements
        $(".quantity-area")
            .not($(this).next(".quantity-area"))
            .removeClass("active");
    });
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".quantity-area").length) {
            // Remove "active" class from all quantity buttons and related elements
            $(".quantity-area").removeClass("active");
        }
    });

    // Payment Method
    $(function () {
        $(".choose-payment-method ul li").on("click", function () {
            $(".choose-payment-method ul li").removeClass("active"); // Remove active class from all list items
            if ($(this).hasClass("stripe")) {
                $("#StripePayment").show();
                $("#OfflinePayment").hide();
                $(this).addClass("active"); // Add active class to the clicked list item
            } else if ($(this).hasClass("paypal")) {
                $("#OfflinePayment").hide();
                $("#StripePayment").hide();
                $(this).addClass("active"); // Add active class to the clicked list item
            } else if ($(this).hasClass("offline")) {
                $("#OfflinePayment").show();
                $("#StripePayment").hide();
                $(this).addClass("active"); // Add active class to the clicked list item
            } else {
                $("#StripePayment").hide();
                $("#OfflinePayment").hide();
            }
        });
    });

    // BTN Hover
    $(".btn-hover")
        .on("mouseenter", function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find("span").css({ top: 0, left: 0 });
            $(this).find("span").css({ top: relY, left: relX });
        })
        .on("mouseout", function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find("span").css({ top: 0, left: 0 });
            $(this).find("span").css({ top: relY, left: relX });
        });

    document.addEventListener("DOMContentLoaded", () => {
        const paths = document.querySelectorAll(".blinking-svg .circle");

        // Check if paths exist on the current page
        if (paths.length > 0) {
            function randomHide() {
                // Select a random path
                const randomIndex = Math.floor(Math.random() * paths.length);
                const randomPath = paths[randomIndex];

                // Add the "hide" class
                randomPath.classList.add("hide");

                // Remove the "hide" class after 0.8s
                setTimeout(() => {
                    randomPath.classList.remove("hide");
                }, 800);
            }

            // Run the randomHide function repeatedly
            setInterval(randomHide, 500);
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
        const contactSection = document.querySelector(".home4-contact-btn-area");
        const btnArea = document.querySelector(".home4-contact-btn-area");

        const observerOptions = {
            root: null, // Use the viewport as the root
            threshold: 0.1, // Trigger when 10% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    btnArea.classList.add("active");
                } else {
                    //   btnArea.classList.remove("active");
                }
            });
        }, observerOptions);

        if (contactSection) {
            observer.observe(contactSection);
        }
    });

    // Home4 Industry Hover
    $(".industry-list ul li").on({
        mouseenter: function () {
            // Remove the 'active' class from all content list items
            $(".industry-list ul li").removeClass("active");
            // Add the 'active' class to the hovered content list item
            $(this).addClass("active");

            // Get the index of the hovered content list item
            var index = $(this).index();

            // Remove the 'active' class from all image list items in both industry-img containers
            $(".industry-img ul li").removeClass("active");

            // Add the 'active' class to the corresponding image list items in both industry-img containers
            $(".industry-img").each(function () {
                $(this).find("ul li:eq(" + index + ")").addClass("active");
            });
        },
    });

    // Serch Btn
    $(".search-btn").on("click", function (e) {

        let parent = $(this).parent();

        parent.find(".search-input").toggleClass("active");

        e.stopPropagation();

    });
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".search-input, .search-btn").length) {
            $(".search-input").removeClass("active");
        }
    });
    $(".search-close").on("click", function (e) {
        $(".search-input").removeClass("active");
    });

    // Language Btn
    $(".language-btn").on("click", function (e) {
        let parent = $(this).parent();
        parent.find(".language-list").toggleClass("active");
        e.stopPropagation();
    });
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".language-btn").length) {
            $(".language-list").removeClass("active");
        }
    });


    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Основная анимация для широких экранов
    gsap.to(".promo__video", {
        width: "97vw",
        height: "80vh",
        x: 100,
        y: 100,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".promo",
            start: "top 30%",
            end: "bottom top",
            scrub: 2,
            // markers: true,
        }
    });

    // Адаптация под разные разрешения
    mm.add("(max-width: 1700px)", () => {
        gsap.to(".promo__video", {
            x: 70,
            scrollTrigger: {
                trigger: ".promo",
                start: "top 30%",
                end: "bottom top",
                scrub: 2,
            }
        });
    });

    mm.add("(max-width: 1600px)", () => {
        gsap.to(".promo__video", {
            x: 25,
            y: 100,
            width: "95vw",
            scrollTrigger: {
                trigger: ".promo",
                start: "top 30%",
                end: "bottom top",
                scrub: 2,
            }
        });
    });

    mm.add("(max-width: 1470px)", () => {
        gsap.to(".promo__video", {
            x: 20,
            y: 100,
            width: "95vw",
            scrollTrigger: {
                trigger: ".promo",
                start: "top 30%",
                end: "bottom top",
                scrub: 2,
            }
        });
    });

    mm.add("(max-width: 1199px)", () => {
        gsap.to(".promo__video", {
            x: 12,
            y: 80,
            width: "95vw",
            height: "70vh",
            scrollTrigger: {
                trigger: ".promo",
                start: "top 30%",
                end: "bottom top",
                scrub: 2,
            }
        });
    });


    $(window).scroll(function () {
        if ($(window).width() <= 767) { // Adjust the breakpoint as needed (576px is Bootstrap's sm breakpoint)
            return; // Disable animation for small devices
        }

        var scroll = $(window).scrollTop();

        // Move banner down and scale down gradually
        var translateYBanner = Math.min(scroll / 2, 500); // Moves down, limit to 500px
        var scale = Math.max((100 - scroll / 5) / 100, 0); // Ensure scale never goes below 0
        var opacity = Math.max(1 - scroll / 500, 0); // Ensure opacity never goes below 0

        $(".home6-banner-section .banner-wrapper").css({
            transform: 'translate3d(0%, ' + translateYBanner + 'px, 0) scale(' + scale + ')',
            opacity: opacity > 0 ? opacity : 0, // Prevent negative opacity
        });

        // Dashboard effect: Move up and rotateX from 45deg to 0deg
        var translateYDashboard = Math.min(scroll / 2, 300); // Move up, limit to 300px
        var rotateXValue = Math.max(30 - (scroll / 10), 0); // Gradually reduce rotateX from 45deg to 0deg

        // Apply smooth transition of rotateX from 45deg to 0deg
        $(".dashboard-img-section .dashboard-img-wrap .dashboard-img").css({
            "transform": "translate3d(0, -" + translateYDashboard + "px, 0) rotateX(" + rotateXValue + "deg)",
        });
    });

    const celebrateBtn = document.getElementById('celebrateBtn');

    if (celebrateBtn) {
        celebrateBtn.addEventListener('mouseenter', () => {
            // trigger confetti
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });

            // button animation
            celebrateBtn.style.transform = 'scale(0.95)';
        });

        celebrateBtn.addEventListener('mouseleave', () => {
            celebrateBtn.style.transform = 'scale(1)';
        });
    }

    $(function () {
        function initializeThrowable() {
            $("#feature-wrap .throwable-item").each(function () {
                var xPos = Math.random() * 50;
                var yPos = Math.random() * 50;
                $(this).css({
                    position: "absolute",
                    left: xPos + "px",
                    top: yPos + "px",
                    cursor: "grab",
                    opacity: 0,
                    transform: "scale(0.5)",
                });
            });

            // Fix for passive event listener issue on mobile
            $(document).on("touchmove", function (event) {
                event.preventDefault();
            }, { passive: false });

            // Check if the throwable function is available before using it
            if ($.fn.throwable) {
                $(".throwable-item").throwable({
                    gravity: { x: 0, y: 3 },
                    damping: 0.9,
                    containment: "parent",
                    collisionDetection: true,
                    bounce: 0.3,
                });
            } else {
                console.warn("Throwable plugin is not loaded.");
            }
        }

        // Intersection Observer to trigger animation when visible
        let observer = new IntersectionObserver(
            function (entries) {
                entries.forEach((entry) => {
                    let target = $(entry.target);
                    if (entry.isIntersecting) {
                        // Reset position randomly before animation
                        target.css({
                            opacity: 0,
                            transform: "scale(0.5)",
                        });

                        // Animate when in viewport
                        target.animate({ opacity: 1, transform: "scale(1)" }, 500, function () {
                            initializeThrowable(); // Reinitialize throwable
                        });
                    } else {
                        // Reset when leaving viewport
                        target.css({
                            opacity: 0,
                            transform: "scale(0.5)",
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );

        $(".throwable-item").each(function () {
            observer.observe(this);
        });
    });


    $(".award-table tbody tr").on("mouseenter", function (e) {
        // // Get the index of the hovered content list item
        var index = $(this).index();
        // Remove the 'active' class from all image list items
        $(".award-img-group li").removeClass("active");
        // Add the 'active' class to the corresponding image list item
        $(".award-img-group li:eq(" + index + ")").addClass("active");
    });

    //Project Info Flow
    const infoflow1TextItem = document.querySelectorAll(".portfolio-caption-card");
    function followImageCursor2(event, infoflow1TextItem) {
        const contentBox = infoflow1TextItem.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;
        infoflow1TextItem.children[1].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    infoflow1TextItem.forEach((item, i) => {
        item.addEventListener("mousemove", (event) => {
            setInterval(followImageCursor2(event, item), 100);
        });
    });


    //Scroll Down Button
    const scrollBtn = document.querySelector('#scroll-btn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('#scroll-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    if ($("body").not(".is-mobile").hasClass("tt-magic-cursor")) {
        if ($(window).width() > 1024) {
            gsap.config({
                nullTargetWarn: false,
                trialWarn: false,
            });
            $(".magnetic-item").wrap('<div class="magnetic-wrap"></div>');

            if ($("a.magnetic-item").length) {
                $("a.magnetic-item").addClass("not-hide-cursor");
            }

            var $mouse = { x: 0, y: 0 }; // Cursor position
            var $pos = { x: 0, y: 0 }; // Cursor position
            var $ratio = 0.15; // delay follow cursor
            var $active = false;
            var $ball = $("#ball");

            var $ballWidth = 20; // Ball default width
            var $ballHeight = 20; // Ball default height
            var $ballOpacity = 0.5; // Ball default opacity
            var $ballBorderWidth = 2; // Ball default border width

            gsap.set($ball, {
                // scale from middle and style ball
                xPercent: -50,
                yPercent: -50,
                width: $ballWidth,
                height: $ballHeight,
                borderWidth: $ballBorderWidth,
                opacity: $ballOpacity,
            });

            document.addEventListener("mousemove", mouseMove);

            function mouseMove(e) {
                $mouse.x = e.clientX;
                $mouse.y = e.clientY;
            }

            gsap.ticker.add(updatePosition);

            function updatePosition() {
                if (!$active) {
                    $pos.x += ($mouse.x - $pos.x) * $ratio;
                    $pos.y += ($mouse.y - $pos.y) * $ratio;

                    gsap.set($ball, { x: $pos.x, y: $pos.y });
                }
            }

            $(".magnetic-wrap").mousemove(function (e) {
                parallaxCursor(e, this, 2); // magnetic ball = low number is more attractive
                callParallax(e, this);
            });

            function callParallax(e, parent) {
                parallaxIt(e, parent, parent.querySelector(".magnetic-item"), 25); // magnetic area = higher number is more attractive
            }

            function parallaxIt(e, parent, target, movement) {
                var boundingRect = parent.getBoundingClientRect();
                var relX = e.clientX - boundingRect.left;
                var relY = e.clientY - boundingRect.top;

                gsap.to(target, {
                    duration: 0.3,
                    x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
                    y:
                        ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
                    ease: Power2.easeOut,
                });
            }

            function parallaxCursor(e, parent, movement) {
                var rect = parent.getBoundingClientRect();
                var relX = e.clientX - rect.left;
                var relY = e.clientY - rect.top;
                $pos.x =
                    rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
                $pos.y =
                    rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
                gsap.to($ball, { duration: 0.3, x: $pos.x, y: $pos.y });
            }

            // Magic cursor behavior
            // ======================

            // Magnetic item hover.
            $(".magnetic-wrap")
                .on("mouseenter mouseover", function (e) {
                    $ball.addClass("magnetic-active");
                    gsap.to($ball, { duration: 0.3, width: 70, height: 70, opacity: 1 });
                    $active = true;
                })
                .on("mouseleave", function (e) {
                    $ball.removeClass("magnetic-active");
                    gsap.to($ball, {
                        duration: 0.3,
                        width: $ballWidth,
                        height: $ballHeight,
                        opacity: $ballOpacity,
                    });
                    gsap.to(this.querySelector(".magnetic-item"), {
                        duration: 0.3,
                        x: 0,
                        y: 0,
                        clearProps: "all",
                    });
                    $active = false;
                });

            // Alternative cursor style on hover.
            $(
                ".cursor-alter, .tt-main-menu-list > li > a, .tt-main-menu-list > li > .tt-submenu-trigger > a"
            )
                .not(".magnetic-item") // omit from selection.
                .on("mouseenter", function () {
                    gsap.to($ball, {
                        duration: 0.3,
                        borderWidth: 0,
                        opacity: 0.2,
                        backgroundColor: "#CCC",
                        width: "90px",
                        height: "90px",
                    });
                })
                .on("mouseleave", function () {
                    gsap.to($ball, {
                        duration: 0.3,
                        borderWidth: $ballBorderWidth,
                        opacity: $ballOpacity,
                        backgroundColor: "transparent",
                        width: $ballWidth,
                        height: $ballHeight,
                        clearProps: "backgroundColor",
                    });
                });

            // Cursor view on hover (data attribute "data-cursor="...").
            $("[data-cursor]").each(function () {
                $(this)
                    .on("mouseenter", function () {
                        $ball
                            .addClass("ball-view")
                            .append('<div class="ball-view-inner"></div>');
                        $(".ball-view-inner").append($(this).attr("data-cursor"));
                        gsap.to($ball, {
                            duration: 0.3,
                            yPercent: -75,
                            width: 82,
                            height: 82,
                            opacity: 1,
                            borderWidth: 0,
                        });
                        gsap.to(".ball-view-inner", {
                            duration: 0.3,
                            scale: 1,
                            autoAlpha: 1,
                        });
                    })
                    .on("mouseleave", function () {
                        gsap.to($ball, {
                            duration: 0.3,
                            yPercent: -50,
                            width: $ballWidth,
                            height: $ballHeight,
                            opacity: $ballOpacity,
                            borderWidth: $ballBorderWidth,
                        });
                        $ball.removeClass("ball-view").find(".ball-view-inner").remove();
                    });
                $(this).addClass("not-hide-cursor");
            });

            // Cursor drag on hover (class "cursor-drag"). For Swiper sliders.
            $(".swiper").each(function () {
                if ($(this).parent().attr("data-simulate-touch") === "true") {
                    if ($(this).parent().hasClass("cursor-drag")) {
                        $(this)
                            .on("mouseenter", function () {
                                $ball.append('<div class="ball-drag"></div>');
                                gsap.to($ball, {
                                    duration: 0.3,
                                    width: 60,
                                    height: 60,
                                    opacity: 1,
                                });
                            })
                            .on("mouseleave", function () {
                                $ball.find(".ball-drag").remove();
                                gsap.to($ball, {
                                    duration: 0.3,
                                    width: $ballWidth,
                                    height: $ballHeight,
                                    opacity: $ballOpacity,
                                });
                            });
                        $(this).addClass("not-hide-cursor");

                        // Ignore "data-cursor" on hover.
                        $(this)
                            .find("[data-cursor]")
                            .on("mouseenter mouseover", function () {
                                $ball.find(".ball-drag").remove();
                                return false;
                            })
                            .on("mouseleave", function () {
                                $ball.append('<div class="ball-drag"></div>');
                                gsap.to($ball, {
                                    duration: 0.3,
                                    width: 60,
                                    height: 60,
                                    opacity: 1,
                                });
                            });
                    }
                }
            });

            // Cursor drag on mouse down / click and hold effect (class "cursor-drag-mouse-down"). For Swiper sliders.
            $(".swiper").each(function () {
                if ($(this).parent().attr("data-simulate-touch") === "true") {
                    if ($(this).parent().hasClass("cursor-drag-mouse-down")) {
                        $(this)
                            .on("mousedown pointerdown", function (e) {
                                if (e.which === 1) {
                                    // Affects the left mouse button only!
                                    gsap.to($ball, {
                                        duration: 0.2,
                                        width: 60,
                                        height: 60,
                                        opacity: 1,
                                    });
                                    $ball.append('<div class="ball-drag"></div>');
                                }
                            })
                            .on("mouseup pointerup", function () {
                                $ball.find(".ball-drag").remove();
                                if ($(this).find("[data-cursor]:hover").length) {
                                } else {
                                    gsap.to($ball, {
                                        duration: 0.2,
                                        width: $ballWidth,
                                        height: $ballHeight,
                                        opacity: $ballOpacity,
                                    });
                                }
                            })
                            .on("mouseleave", function () {
                                $ball.find(".ball-drag").remove();
                                gsap.to($ball, {
                                    duration: 0.2,
                                    width: $ballWidth,
                                    height: $ballHeight,
                                    opacity: $ballOpacity,
                                });
                            });

                        // Ignore "data-cursor" on mousedown.
                        $(this)
                            .find("[data-cursor]")
                            .on("mousedown pointerdown", function () {
                                return false;
                            });

                        // Ignore "data-cursor" on hover.
                        $(this)
                            .find("[data-cursor]")
                            .on("mouseenter mouseover", function () {
                                $ball.find(".ball-drag").remove();
                                return false;
                            });
                    }
                }
            });

            // Cursor close on hover.
            $(".cursor-close").each(function () {
                $(this).addClass("ball-close-enabled");
                $(this)
                    .on("mouseenter", function () {
                        $ball.addClass("ball-close-enabled");
                        $ball.append('<div class="ball-close">Close</div>');
                        gsap.to($ball, {
                            duration: 0.3,
                            yPercent: -75,
                            width: 80,
                            height: 80,
                            opacity: 1,
                        });
                        gsap.from(".ball-close", { duration: 0.3, scale: 0, autoAlpha: 0 });
                    })
                    .on("mouseleave click", function () {
                        $ball.removeClass("ball-close-enabled");
                        gsap.to($ball, {
                            duration: 0.3,
                            yPercent: -50,
                            width: $ballWidth,
                            height: $ballHeight,
                            opacity: $ballOpacity,
                        });
                        $ball.find(".ball-close").remove();
                    });

                // Hover on "cursor-close" inner elements.
                $(
                    ".cursor-close a, .cursor-close button, .cursor-close .tt-btn, .cursor-close .hide-cursor"
                )
                    .not(".not-hide-cursor") // omit from selection (class "not-hide-cursor" is for global use).
                    .on("mouseenter", function () {
                        $ball.removeClass("ball-close-enabled");
                    })
                    .on("mouseleave", function () {
                        $ball.addClass("ball-close-enabled");
                    });
            });

            // ================================================================
            // Scroll between anchors
            // ================================================================

            $('a[href^="#"]')
                .not('[href$="#"]') // omit from selection
                .not('[href$="#0"]') // omit from selection
                .on("click", function () {
                    var target = this.hash;

                    // If fixed header position enabled.
                    if ($("#tt-header").hasClass("tt-header-fixed")) {
                        var $offset = $("#tt-header").height();
                    } else {
                        var $offset = 0;
                    }

                    // You can use data attribute (for example: data-offset="100") to set top offset in HTML markup if needed.
                    if ($(this).data("offset") != undefined)
                        $offset = $(this).data("offset");


                    return false;
                });


            // Show/hide magic cursor
            // =======================

            // Hide on hover.
            $(
                "a, button, .tt-btn, .tt-form-control, .tt-form-radio, .tt-form-check, .hide-cursor"
            ) // class "hide-cursor" is for global use.
                .not(".not-hide-cursor") // omit from selection (class "not-hide-cursor" is for global use).
                .not(".cursor-alter") // omit from selection
                .not(".tt-main-menu-list > li > a") // omit from selection
                .not(".tt-main-menu-list > li > .tt-submenu-trigger > a") // omit from selection
                .on("mouseenter", function () {
                    gsap.to($ball, { duration: 0.3, scale: 0, opacity: 0 });
                })
                .on("mouseleave", function () {
                    gsap.to($ball, { duration: 0.3, scale: 1, opacity: $ballOpacity });
                });

            // Hide on click.
            $("a")
                .not('[target="_blank"]') // omit from selection.
                .not('[href^="#"]') // omit from selection.
                .not('[href^="mailto"]') // omit from selection.
                .not('[href^="tel"]') // omit from selection.
                .not(".lg-trigger") // omit from selection.
                .not(".video-player") // omit from selection.
                .not(".tt-btn-disabled") // omit from selection.
                .on("click", function () {
                    gsap.to($ball, { duration: 0.3, scale: 1.3, autoAlpha: 0 });
                });

            // Show/hide on document leave/enter.
            $(document)
                .on("mouseleave", function () {
                    gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 0 });
                })
                .on("mouseenter", function () {
                    gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
                });

            // Show as the mouse moves.
            $(document).mousemove(function () {
                gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
            });
        }
    }

    gsap.registerPlugin(ScrollTrigger);

    let drawLine = gsap.timeline();

    ScrollTrigger.create({
        trigger: "#about-section",
        animation: drawLine,
        start: "-5% 0",
        end: "120% 100%",
        scrub: 4,
    });
    drawLine.fromTo(
        "#route-1",
        { drawSVG: "0%" },
        { duration: 6, drawSVG: "100%" }
    );

    // Back To Top
    jQuery(function ($) {
        "use strict";

        var progressPath = document.querySelector('.progress-wrap .progress-circle path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        };

        updateProgress();
        $(window).on('scroll', updateProgress);

        var offset = 50;
        var duration = 550;

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > offset) {
                $('.progress-wrap').addClass('active-progress');
            } else {
                $('.progress-wrap').removeClass('active-progress');
            }
        });

        $('.progress-wrap').on('click', function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });


    $(".interactive-link").each(function () {
        $(this)
            .on("mouseover", function () {
                $(".interactive-item").removeClass("active");
                $(this).parent().addClass("active");
            })
    });

    // Dark Light
    const dayNight = document.querySelector(".tt-style-switch");

    const toggleDarkMode = () => {
        const body = document.body;
        const icon = dayNight.querySelector("i");
        body.classList.toggle("dark");

        icon.classList.toggle("bi-brightness-low-fill", body.classList.contains("dark"));
        icon.classList.toggle("bi-moon", !body.classList.contains("dark"));

        localStorage.setItem("mortar_theme", body.classList.contains("dark") ? "dark" : "");
    };

    dayNight.addEventListener("click", toggleDarkMode);

    window.addEventListener("load", () => {
        const savedTheme = localStorage.getItem("mortar_theme");
        if (savedTheme === "dark") {
            toggleDarkMode();
        }
    });

    if ($('.marquee_text').length) {
        $(".marquee_text").marquee({
            direction: "left",
            duration: 55000,
            gap: 50,
            delayBeforeStart: 0,
            duplicated: true,
            startVisible: true,
        });
    }
    if ($('.marquee_text2').length) {
        $(".marquee_text2").marquee({
            direction: "left",
            duration: 25000,
            gap: 50,
            delayBeforeStart: 0,
            duplicated: true,
            startVisible: true,
        });
    }

}(jQuery));


