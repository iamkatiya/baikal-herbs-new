$(document).ready(function() {
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
        loop       : true,
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

    $(document).ready(function(){
        var owl1 = $(".owl-carousel").owlCarousel({
            loop: true,
            dots: true,
            nav: true,
            items: 2,
            speed: 16000,
            animateOut: 'fadeOut',
        });

        $('.teamarks li').on('click', function(e) {
            owl1.trigger('to.owl.carousel', [$(this).index(), 300]);
            
        });
    });
});



