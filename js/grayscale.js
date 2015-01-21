/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

//change the color scheme
$('input#switch').change(function() {
    if ($('body').hasClass('scheme1')) {
        $('body').removeClass('scheme1').addClass('scheme2');
    }
    else if ($('body').hasClass('scheme2')) {
        $('body').removeClass('scheme2').addClass('scheme3');
    }
    else if ($('body').hasClass('scheme3')) {
        $('body').removeClass('scheme3').addClass('scheme1');
    }
});

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Reveal
$('.speaker').click(function(e) {
    $(e.currentTarget).find('p').toggle();
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
