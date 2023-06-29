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
 $(".menu-toggle").click(function() {
                    $('.mobile-menu').toggleClass('active');
                    $('.overlay').toggleClass('its-active');
                });
/*-----------Submenu--------------*/
$(".navbar ul li a").click(function() {
    if (($(this).next()).is(':visible')) {
        $(this).next().slideUp();
    } else {
        $('.sub-menu').slideUp();
        $(this).next().slideDown();
    }
    return false;
})

$(".DropDown").click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).children().next('.sub-menu').slideDown();
    } else {
        $(this).children().next('.sub-menu').slideUp();
    }
})
$(".DropDown").click(function() {
    if ($(window).width() < 1025) {
        $('.sub-menu').not($(this).children()).slideUp('active');
        $(this).children(".sub-menu").slideToggle();
    }
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

$(function() {
    var title = $(".checkout_accordian-icon");
    title
        .on("click", function() {
        var ThisIt = $(this);
            $(".checkout_accordian-icon").not(ThisIt).removeClass("checkout-active");
            $(this).toggleClass("checkout-active");
            $(".checkout_accordian").not(ThisIt.next(".checkout_accordian")).slideUp(400);
            ThisIt.next(".checkout_accordian").slideToggle(400);
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
/*---------indicator---------*/
$(window).on('scroll', function() {
    var scrollPos = $(window).scrollTop()
    var winHeight = $(window).height()
    var docHeight = $(document).height()
    var perc = 100 * scrollPos / (docHeight - winHeight)
    $('#indicator').width(perc + '%')
})
