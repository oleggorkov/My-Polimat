import Slider from "../slider/slider";

export default class CartsSlider extends Slider{
    constructor(options) {
        super({
            $el: options.$el.querySelector('.slider'),
            SliderSettings: {
                slidesPerView: 'auto',
                navigation: {
                    prevEl: options.$el.querySelectorAll('.carts-slider__navigation button')[0],
                    nextEl: options.$el.querySelectorAll('.carts-slider__navigation button')[1],
                }
            }
        });
        if (this.el && this.el.parentElement.querySelector('.carts-slider__navigation')){
            this.navigationEl = this.el.parentElement.querySelector('.carts-slider__navigation');
        }
        let parent = this.el.parentElement;
        if (!parent) {
            return null
        }
        if (this.el.parentElement.classList.contains('comparing-block')){
            return
        }
        if (this.width + 1 > this.virtualSize) {
            this.navigationEl ? this.navigationEl.style.display = 'none' : '';
            this.allowTouchMove = false;
        } else {
            this.allowTouchMove = true;
            this.navigationEl ? this.navigationEl.style.display = '' : '';
        }
        if (options.$el.querySelector('.carts-slider__navigation-progress-bar span')){
            this.ProgressLine = options.$el.querySelector('.carts-slider__navigation-progress-bar span');
            this.ProgressLineWidth = this.width/(this.virtualSize/100);
            this.ProgressLine.style.width = this.ProgressLineWidth + '%';
        }
        this.on('transitionStart', this.CalcProgress);
        this.on('resize', this.CalcProgress);

    }

    CalcProgress(){
        if (this.width + 1 > this.virtualSize){
            this.navigationEl ? this.navigationEl.style.display = 'none' : '';
            this.allowTouchMove = false;
        } else {
            this.navigationEl ? this.navigationEl.style.display = '' : '';
            this.allowTouchMove = true;
        }
        if (this.ProgressLine){
            this.allowTouchMove = true;
            this.ProgressLineWidth = this.width/(this.virtualSize/100);
            this.ProgressLine.style.width = this.ProgressLineWidth + '%';
            this.ProgressLine.style.left = `${this.progress * (100-this.ProgressLineWidth)}%`;
        }
    }
};