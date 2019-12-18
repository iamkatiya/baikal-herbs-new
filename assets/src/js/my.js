$(document).ready(function() {
    //плавная прокурутка наверх
    $('.btn-top').click(function() {
        $('body, html').animate({ scrollTop: 0 }, 750);
    });

    //бургер
    $('#burger').click(function(){
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
            $('.header-nav-lang-current a').css('color', '#ffffff');
            $('.header-nav-lang-current i').css('border-color', '#ffffff');
        }
        if ($(".burger-line1").hasClass('line1-click'))
        {
            $('.burger-line1').removeClass('line1-click');
        }
        if ($(".burger-line2").hasClass('line2-click'))
        {
            $('.burger-line2').removeClass('line2-click');
        }
        if ($(".burger-line3").hasClass('line3-click'))
        {
            $('.burger-line3').removeClass('line3-click');
        }
        else {
            $(this).addClass('open');
            $(this).next().fadeIn();
            $('.header-nav-lang-current a').css('color', '#3D3D3D');
            $('.header-nav-lang-current i').css('border-color', '#3D3D3D');
            $('.burger-line1').addClass('line1-click');
            $('.burger-line2').addClass('line2-click');
            $('.burger-line3').addClass('line3-click');

        }
    });
    if ($(window).width() < 1400) {
        $('.header-nav-menu').insertAfter('#burger');
        $('.header-nav-menu .with-child').click(function(){
            $(this).find('.header-nav-menu-inner').show().addClass('inner-menu-li-mobile');
        });
    }

    // $('.history-carousel').owlCarousel({
    //     loop: true,
    //     dots: true,
    //     nav: true,
    //     items: 1,
    //     speed: 16000,
    //     animateOut: 'fadeOut',
    //     nextArrow: '<a class="arrow-next"></a>',
    //     prevArrow: '<a class="arrow-prev"></a>',
    //     responsive: {
    //         700: {
    //             items: 1,
    //         },
    //         1610: {
    //             items: 1,
    //         }
    //     }
    // });

    var action = false;

    var owl = $('.history-carousel').owlCarousel({
        items 	 : 1,
        center	   : true,
        nav        : true,
        animateOut: 'fadeOut',
        dots       : true,
        loop       : false,
        margin     : 10,
        dotsContainer: '.test',
        navText: ['prev','next'],
    });

    $('.owl-next').on('click',function(){
        action = 'next'
    });

    $('.owl-prev').on('click',function(){
        action = 'prev'
    });

    $('.bookmarks li').on('click', function(e) {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            $(".header-desktop").addClass('header-scroll');
            $(".header-nav-menu-item .text-white-uppercase").addClass('black');
            $(".header-nav-menu-item").addClass('black');
            $(".header-nav-menu-absolute").addClass('header-nav-menu-absolute-scroll');
        } else {
            $(".header-desktop").removeClass('header-scroll');
            $(".header-nav-menu-item .text-white-uppercase").removeClass('black');
            $(".header-nav-menu-absolute").removeClass('header-nav-menu-absolute-scroll');
        }
    });

    $(document).ready(function(){
        var owl1 = $(".owl-carouselDima").owlCarousel({
            loop: true,
            dots: true,
            nav: true,
            items: 2,
            speed: 16000,
            animateOut: true,
            animateIn: true,
            dotsContainer: '.teeest',
            // responsive: {
            //     700: {
            //         items: 1
            //     },
            // },
        });

        $('.teamarks li').on('click', function(e) {
            owl1.trigger('to.owl.carousel', [$(this).index(), 300]);
            
        });
    });
});



