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
