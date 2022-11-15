/*----------sticky-header-----------*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('.site-header').addClass("sticky-header");
    } else {
        $('.site-header').removeClass("sticky-header");
    }
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
});
$(function() {
    var title = $(".accordian__title");
    title
        .on("click", function() {
            var ThisIt = $(this);
            $(".accordian__title").not(ThisIt).removeClass("active");
            $(this).toggleClass("active");
            $(".accordian__text").not(ThisIt.next(".accordian__text")).slideUp(400);
            ThisIt.next(".accordian__text").slideToggle(400);
        })
        .eq(0)
        .click();
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