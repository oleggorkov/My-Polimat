import Slider from "../slider/slider";
import $ from "jquery";

export default class TopSideSlider extends Slider{
    constructor() {
        super({
            $el: document.querySelector('.top-side .slider'),
            SliderSettings: {
                slidesPerView: 1,
                speed: 1200,
                autoplay: {
                    delay: 2500
                },
                on: {
                    slideChange: () => {

                        const SliderNavigationButtons = document.querySelectorAll('.top-side .top-side__slider .top-side__slider-navigation .swiper-slide button');

                        SliderNavigationButtons.forEach(elem => {
                            elem.classList.remove('top-side__slider-navigation-item--active');
                        });

                        SliderNavigationButtons[this.activeIndex].classList.add('top-side__slider-navigation-item--active');
                    },
                    init: () => {

                        let PlayState = true;
                        const ChangeAutoplayState = () => {
                            if (PlayState === true) {
                                this.autoplay.stop();
                                ChangeIcoPlay.classList.add('play-slider')
                            } else {
                                this.autoplay.start();
                                ChangeIcoPlay.classList.remove('play-slider')
                            }
                            PlayState = !PlayState;
                        };

                        let PlayButton = document.querySelector('.top-side__slider-btn');
                        let ChangeIcoPlay = document.querySelector('.top-side__slider-btn div span');
                        PlayButton.addEventListener('click', ChangeAutoplayState);

                        const SliderNavigation = new Slider({
                            $el: document.querySelector('.top-side .top-side__slider .top-side__slider-navigation'),
                            SliderSettings: {
                                direction: 'vertical',
                                slidesPerView: 'auto',
                                speed: 1200,
                                autoplay: {
                                    delay: 2500
                                },
                                on: {
                                    init: () => {

                                        let PlayButton = document.querySelector('.top-side__slider-btn');
                                        PlayButton.addEventListener('click', (e) =>{
                                            SliderNavigation.autoplay.stop();
                                        });

                                        const SliderNavigationButtons = document.querySelectorAll('.top-side .top-side__slider .top-side__slider-navigation .swiper-slide button');

                                        SliderNavigationButtons[0].classList.add('top-side__slider-navigation-item--active');

                                        SliderNavigationButtons.forEach((el, index) => {
                                            el.addEventListener('click', () => {
                                                this.slideTo(index);
                                                SliderNavigationButtons.forEach(elem => {
                                                    elem.classList.remove('top-side__slider-navigation-item--active');
                                                });
                                                el.classList.add('top-side__slider-navigation-item--active');
                                            })
                                        })
                                    },
                                }
                            },
                        })
                    }
                }
            },
        });
    }
}
