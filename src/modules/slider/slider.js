import * as Swiper from 'swiper/js/swiper.js';

export default class Slider extends Swiper{
    constructor(options) {
        super(options.$el, options.SliderSettings);
    }
}