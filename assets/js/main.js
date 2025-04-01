(function ($) {
    "use strict";

    /*:::::::::::::::::::::::::::::::::::
            Navbar Area
    :::::::::::::::::::::::::::::::::::*/

    // Navbar Sticky with Smooth Transition
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $(".navbar").addClass("bg-primary shadow-lg");
        } else {
            $(".navbar").removeClass("bg-primary shadow-lg");
        }
    });

    // Smooth Scroll with Ease-In-Out Effect
    $(function () {
        $('.nav-link, .smooth-scroll').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    /*==========================
        Hero Area Slider
    ============================*/

    $('.hero-area-slids').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        animateOut: 'fadeOutRight',
        animateIn: 'fadeIn',
        autoplaySpeed: 1200
    });

    // Wow Animation Initialization
    new WOW().init();

    /*==========================
        Hero Title Typer Effect with Glow
    ============================*/
    var element = $('.typed');

    $(function () {
        element.typed({
            strings: [
                "<span class='highlight'>Neuroscience Enthusiast</span>",
                "<span class='highlight2'>Axon Regeneration</span>"
            ],
            typeSpeed: 100,
            loop: true,
            autoplay: true,
        });
    });

    /* Custom CSS for Glowing Text */
    $('<style>\
        .highlight { color:rgb(209, 198, 221); text-shadow: 0px 0px 10px rgba(229, 221, 235, 0.8); font-weight: bold; }\
        .highlight2 { color:rgb(221, 232, 167); text-shadow: 0px 0px 10px rgba(239, 196, 54, 0.8); font-weight: bold; }\
    </style>').appendTo('head');

    /*::::::::::::::::::::::::::::::::::::
       Portfolio Section with Fade Effect
    ::::::::::::::::::::::::::::::::::::*/

    lightbox.option({
        'imageFadeDuration': 800,
        'resizeDuration': 500,
        'wrapAround': true
    });

    $('.portfolio-area').mixItUp();

    /*::::::::::::::::::::::::::::::::::::
       Testimonial Section with Auto-Play Speed
    ::::::::::::::::::::::::::::::::::::*/

    $('.testimonials').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1200,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false
    });

    /*::::::::::::::::::::::::::::::::::::
       Contact Form
    ::::::::::::::::::::::::::::::::::::*/
    var form = $('#contact-form');
    var formMessages = $('.form-message');

    $(form).submit(function (e) {
        e.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function (response) {
                $(formMessages).removeClass('error').addClass('success').text(response);
                $('#contact-form input, #contact-form textarea').val('');
            })
            .fail(function (data) {
                $(formMessages).removeClass('success').addClass('error');
                $(formMessages).text(data.responseText !== '' ? data.responseText : 'Oops! An error occurred and your message could not be sent.');
            });
    });

    /*::::::::::::::::::::::::::::::::::::
        Preloader with Fade Effect
    ::::::::::::::::::::::::::::::::::::*/
    $(window).on('load', function () {
        $('.preloader').fadeOut('slow');
    });

}(jQuery));
