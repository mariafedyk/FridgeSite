$(document).ready(function () {
    $('.nav-item a').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('.hidden-menu-ticker').prop("checked", false);
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 2
            }, 1200);
        }
    });

    $('.nav-mobile a').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('.hidden-menu-ticker').prop("checked", false);
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1500);
        }
    });

    $('.mobile-menu').click(function () {
        $('body').addClass('active');
    });

    $('.nav-item').click(function () {
        $('body').removeClass('active');
    });

    $('.close-menu').click(function () {
        $('body').removeClass('active');
    });

    $('#read-more').click(function () {
        $('.open-ul').toggleClass('opened');
        $('.models-in').toggleClass('opened-ul');

        if ($('.open-ul').hasClass('opened')) {
            $('.open-ul').show(1000);
        }
        else {
            $('.open-ul').hide(1000);
        }

        if($('.models-in').hasClass('opened-ul')) {
            $('#read-more').text('Закрити');
        }
        else {
            $('#read-more').text('Більше');
        }
    });

});