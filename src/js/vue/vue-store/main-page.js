export default {
    state:{
        TopSideSliderOptions: {
            CurrentSlide: 0,
            ItemsToShow: 1,
            Titles: [
                'К-Блоки: ЕВРОПА АРТ от 22,80',
                'КУРСОРЫ АЛЬФА 100% аналог ГЕВАРИУС-ПОЛИМАТ',
                'БОБИНЫ 3:1 все размеры от 3290 ₽',
                'КУРСОРЫ ПРЕМЬЕР: 100% аналог ДПС-ПОЛИМАТ от 215 р',
                'Е-Блоки iVORY для ежедневников и еженедельников от 75 руб.',
                'К-Блоки: ЕВРОПА АРТ от 22,80',
                'КУРСОРЫ АЛЬФА 100% аналог ГЕВАРИУС-ПОЛИМАТ'
            ],
            Images: window.innerWidth > 470 ?  [
                'assets/img/main-images/top-side-images/banner_top-side.png',
                'assets/img/main-images/top-side-images/banner_top-side.png',
                'assets/img/main-images/top-side-images/banner_top-side.png',
                'assets/img/main-images/top-side-images/banner_top-side.png',
                'assets/img/main-images/top-side-images/banner_top-side.png',
                'assets/img/main-images/top-side-images/banner_top-side.png',
                'assets/img/main-images/top-side-images/banner_top-side.png'
            ] : [
                'assets/img/main-images/top-side-images/banner_top-side-mobile.png',
                'assets/img/main-images/top-side-images/banner_top-side-mobile.png',
                'assets/img/main-images/top-side-images/banner_top-side-mobile.png',
                'assets/img/main-images/top-side-images/banner_top-side-mobile.png',
                'assets/img/main-images/top-side-images/banner_top-side-mobile.png',
                'assets/img/main-images/top-side-images/banner_top-side-mobile.png',
                'assets/img/main-images/top-side-images/banner_top-side-mobile.png'
            ],
            Vertical: window.innerWidth > 1024,
            Arrows: false,
            SliderNavigation: window.innerWidth > 1024 ? 'list' : 'progress',
            AutoPlay: window.innerWidth < 1024,
        },
        SharesSliderOptions: {
            CurrentSlide: 2,
            ItemsToShow: window.innerWidth > 670 ? (window.innerWidth > 1600 ? 5 : 3) : 1,
            Titles: [],
            Images: [
                'assets/img/main-images/carts-block-images/carts-block-1.png',
                'assets/img/main-images/carts-block-images/carts-block-2.png',
                'assets/img/main-images/carts-block-images/carts-block-1.png',
                'assets/img/main-images/carts-block-images/carts-block-2.png',
                'assets/img/main-images/carts-block-images/carts-block-1.png'
            ],
            Vertical: false,
            Arrows: window.innerWidth > 670,
            SliderNavigation: window.innerWidth < 670 ? 'dots' : '',
            AutoPlay: false,
        },
    },
    mutations: {

    },
    actions: {

    },
    getters: {

    },
}
