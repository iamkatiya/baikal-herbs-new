$(document).on('click', function (e) {

    if (e.target.closest('.goto')) {
        var goto = e.target.closest('.goto').getAttribute("href");
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(goto).offset().top
        }, 2000);
    }
});
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
        navSpeed: 1300,
        smartSpeed: 1300,
        slideSpeed: 1300,
        dotsSpeed: 1400,
        dots       : true,
        loop       : false,
        margin     : 10,
        dotsContainer: '.test',
        navText: ['',''],
    });

    $('.owl-next').on('click',function(){
        action = 'next'
    });

    $('.owl-prev').on('click',function(){
        action = 'prev'
    });


    $('.bookmarks li').on('click', function(e) {
        owl.trigger('to.owl.carousel', [$(this).index(), 1300]);
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

        var owl1 = $(".owl-carouselDima").owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            items: 1,
            navSpeed: 2000,
            dotsContainer: '.teeest',
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                },
                1081: {
                    items: 2,
                    animateOut: 'fadeOut',
                }
            },
        });

        $('.teamarks li').on('click', function(e) {
            owl1.trigger('to.owl.carousel', [$(this).index(), 1300]);
            
        });
        $('.mainmarks li').on('click', function(e) {
            owl1.trigger('to.owl.carousel', [$(this).index(), 1300]);

        });
        var sync1 = $("#sync1");
        var sync2 = $("#sync2");
        var slidesPerPage = 5; //globaly define number of elements per page
        var syncedSecondary = true;

        sync1.owlCarousel({
            items: 1,
            slideSpeed: 7000,
            nav: true,
            navSpeed: 1300,
            autoplay: false,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,
        }).on('changed.owl.carousel', syncPosition);

        sync2
            .on('initialized.owl.carousel', function() {
                sync2.find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                items: slidesPerPage,
                dots: false,
                nav: false,
                smartSpeed: 1200,
                slideSpeed: 1500,
                slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                responsiveRefreshRate: 100
            }).on('changed.owl.carousel', syncPosition2);

        function syncPosition(el) {
            //if you set loop to false, you have to restore this next line
            //var current = el.item.index;

            //if you disable loop you have to comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);

            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }

            //end block

            sync2
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = sync2.find('.owl-item.active').length - 1;
            var start = sync2.find('.owl-item.active').first().index();
            var end = sync2.find('.owl-item.active').last().index();

            if (current > end) {
                sync2.data('owl.carousel').to(current, 1100, true);
            }
            if (current < start) {
                sync2.data('owl.carousel').to(current - onscreen, 1100, true);
            }
        }

        function syncPosition2(el) {
            if (syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 1100, true);
            }
        }

        sync2.on("click", ".owl-item", function(e) {
            e.preventDefault();
            var number = $(this).index();
            sync1.data('owl.carousel').to(number, 1300, true);
        });
});



