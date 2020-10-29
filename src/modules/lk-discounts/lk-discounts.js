import Slider from "../../modules/slider/slider";

export default class DiscountsSlider extends Slider{

    constructor(options) {
        super({
            $el: options.$el.querySelector('.slider'),
            SliderSettings: {
                slidesPerView: 'auto',
                loopedSlides: 4,
                updateOnWindowResize: true,
                navigation: {
                    prevEl: document.querySelectorAll('.lk-discounts .carts-slider__navigation button')[0],
                    nextEl: document.querySelectorAll('.lk-discounts .carts-slider__navigation button')[1],
                }
            }
        });
        this.ProgressLine = document.querySelector('.lk-discounts .carts-slider__navigation-progress-bar span');
        this.CalcProgress();
        this.on('transitionStart', this.CalcProgress);
        this.on('resize', this.CalcProgress);
        this.on('click', this.CalcProgress);
        this.on('slideChange', this.CalcProgress);
    }

    CalcProgress(){
        this.ProgressLineWidth = this.width/(this.virtualSize/100);
        this.ProgressLine.style.width = this.ProgressLineWidth + '%';
        this.ProgressLine.style.left = `${this.progress * (100-this.ProgressLineWidth)}%`;
    }
};