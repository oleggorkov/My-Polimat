import $ from "jquery";

window.addEventListener('load',function () {
    if($('.flipbook').length){
        $('.flipbook').turn({
            page: '1',
            autoCenter: true,
            turnCorners: "bl,br",
            when: {
                turned: function() {
                    $('.flipbook__loader').addClass('flipbook__loader--dnone');
                    $('.flipbook').removeClass('flipbook--dnone');
                }
            }
        });

        if (window.outerWidth < 600) {
            $('.flipbook').turn("display", "single");
        }

        $( window ).on('resize',function() {
            if (window.outerWidth < 600) {
                $('.flipbook').turn("display", "single");
            } else {
                $('.flipbook').turn("display", "double");
            }
            $('.flipbook').turn("resize");
        });

        $('.flipbook__next').on('click', function(){
            $(".flipbook").turn("next");
        });

        $('.flipbook__prev').on('click', function(){
            $(".flipbook").turn("previous");
        });
    }
})