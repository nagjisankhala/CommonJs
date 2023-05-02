/*----------sticky-header-----------*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('.site-header').addClass("sticky-header");
    } else {
        $('.site-header').removeClass("sticky-header");
    }
});
/*----------Menu Toggle----------*/
 $(".menu-toggle").click(function() {
        $(this).toggleClass("on");
        $(".navbar").slideToggle();
    });
/*-----------Responsive-Tab-------------*/
$(document).ready(function() {
    $('#responsiveTabsDemo').responsiveTabs({
        startCollapsed: 'accordion'
    });
});
/*-------Scroll to top----------*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});
$('.top').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});
/*----------- Accordian-------------*/
$(".about__vision h2").click(function() {
    $(this).next().slideToggle();
     $(this).toggleClass('active');
});

$(".accordian__block h6").click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass('active')
            $(this).next().slideUp();
        } else {
            $('.accordian__content').slideUp();
            $('.accordian__block h6').removeClass('active');
            $(this).siblings('.accordian__content').slideToggle();
            $(this).toggleClass('active');
        }
        return false;
    });
/*-------Number-count--------*/
$('.count').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});
