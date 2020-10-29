//import polyfill from SVG (from Internet Explorer)
//import './js/modules/SVG_polyfill';

//import polyfill from Vuex-store(from Internet Explorer)
//import 'es6-promise/auto';

// import Vue directives
import ImageLazyLoad from "./vue/vue-directives/ImageLazyload";
import VueScrollTo from 'vue-scrollto';
import VueTheMask from 'vue-the-mask';

// Vue.js
import Vue from 'vue';


// Vue components (for use in html)
import vueCustomScrollbar from 'vue-custom-scrollbar';
import VueSlider from 'vue-slider-component';


// Vue directives
Vue.directive('image-lazy-load', ImageLazyLoad);
Vue.use(VueScrollTo,{offset: -100,duration: 1400,});
Vue.use(VueTheMask);

// Vue init
const app = new Vue({
    //store: store,
    //router: router,
    el: '#app',
    components: {
        vueCustomScrollbar,
        VueSlider,
    },
    data: {
        RangeSliderData:{
            min: 1,
            max: 999,
            value: [5, 250],
        }

    },
    methods: {
      ChangePriceRange(){
          if (customDragStop){
              customDragStop()
          }
      },
    },
    mounted: function () {
        if (this.$refs.filter){
            this.$refs.filter.setValue([this.RangeSliderData.min, this.RangeSliderData.max]);
        }

        if (document.querySelector('.filter-module__price-inputs input')){
            if (document.querySelectorAll('.filter-module__price-inputs input')[0].dataset.value){
                this.RangeSliderData.value[0] = parseInt(document.querySelectorAll('.filter-module__price-inputs input')[0].dataset.value);
            }

            if (document.querySelectorAll('.filter-module__price-inputs input')[1].dataset.value){
                this.RangeSliderData.value[1] = parseInt(document.querySelectorAll('.filter-module__price-inputs input')[1].dataset.value);
            }
        }
    }
});

window.app = app;



// JS
// import LoadImage from 'blueimp-load-image'
import $ from "jquery";
import '../modules/header/header.js';
import '../modules/carts-dropdown/carts-dropdown.js';
import changeCountProduct from '../modules/product-price/product-price';
import '../modules/header/header';
import '../modules/carts-dropdown/carts-dropdown';
import '../modules/filter-module/filter-module';
import '../modules/product-settings/product-settings'
import '../modules/order/order';
import SumoSelect from 'sumoselect';
import '../modules/lk-discounts/lk-discounts';
import '../modules/product-photo-swiper/product-photo-swiper';
import '../modules/product-block/product-block';
import '../modules/cart/cart';
import '../modules/subscribe-create/subscribe-create';
import '../modules/contact/contact';
import '../modules/lk-data/lk-data';
import '../modules/lk-password/lk-password';
import '../modules/lk-new/lk-new';
import '../modules/lk-company/lk-company';
import '../modules/general-title/general-title';
import '../modules/turn/turn';
import '../modules/flipbook/flipbook';

import initQuestionsTabs from '../modules/info-questions/info-questions';
import initSearchTabs from '../modules/search/search';
import DiscountsSlider from '../modules/lk-discounts/lk-discounts';
import initProductPhotoSwiper from '../modules/product-photo-swiper/product-photo-swiper';
import initProductTabs from '../modules/product-tabs/product-tabs';
import initProductAccordions from '../modules/product-accordions/product-accordions';
import lkOrdersSeeAll from '../modules/lk-orders/lk-orders'
import followLkMenuMobile from '../modules/lk-menu/lk-menu'

import Menu from '../modules/menu/menu';
import TopSideSlider from '../modules/top-side/top-side'
import MobileMenu from "../modules/mobile-menu/mobile-menu";
import CartsSlider from "../modules/carts-slider/carts-slider";
import PopUp from "../modules/pop-up/pop-up";
import CookieInfo from "../modules/cookie-info/cookie-info";
import FormErrorHandler from "../modules/form-error-handler/form-error-handler";

import * as Swiper from 'swiper/js/swiper.js';

window.NewSwiper = Swiper;

if (document.querySelector('.inp__digit-of-numbers-js')){
    let inputDigits = document.querySelectorAll('.inp__digit-of-numbers-js');
    inputDigits.forEach((item)=>{
        let itemValue = item.value;
        item.value = itemValue.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        item.addEventListener('keyup', (e)=>{
            e.currentTarget.value = e.currentTarget.value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        });
        item.addEventListener('change', (e)=>{
            e.currentTarget.value = e.currentTarget.value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        })
    })
}
if (document.querySelector('.mobile-menu')){
    new MobileMenu({
        $el: document.querySelector('.mobile-menu'),
        $toggles: document.querySelectorAll('.mobile-toggles')
    });
}

if (document.querySelector('.menu')){
    document.querySelectorAll('.menu').forEach(el => {
        new Menu({
            $el: el,
            $toggle: el.querySelector('.menu__toggles'),
        });
    })
}

window.addEventListener('load',function () {
    if (document.querySelector('.top-side')){
        new TopSideSlider();
    }

    if (document.querySelector('.carts-slider')){
        document.querySelectorAll('.carts-slider').forEach(el => {
            new CartsSlider({
                $el: el,
            });
        })
    }
    if (document.querySelector('.lk-discounts-slider')){
        document.querySelectorAll('.lk-discounts-slider').forEach(el => {
            new DiscountsSlider({
                $el: el,
            });
        })
    }
    if (document.querySelector('form.lk-buyer')){
        new FormErrorHandler({
            form: document.querySelector('form.lk-buyer')
        })
    }
    if (document.querySelector('form.lk-company')){
        new FormErrorHandler({
            form: document.querySelector('form.lk-company')
        })
    }
    if (document.querySelector('form.lk-new')){
        new FormErrorHandler({
            form: document.querySelector('form.lk-new')
        })
    }
    if (document.querySelector('form.reviews__form')){
        let reviewsForm = document.querySelectorAll('form.reviews__form');
        reviewsForm.forEach(item=>{
            new FormErrorHandler({
                form: item
            })
        })
    }
    if (document.querySelector('form.lk-check__block-item')){
        new FormErrorHandler({
            form: document.querySelector('form.lk-check__block-item')
        })
    }
    if (document.querySelector('form.lk-data')){
        new FormErrorHandler({
            form: document.querySelector('form.lk-data')
        })
    }
    if (document.querySelector('form.contacts-callback__form')){
        let action = ()=>{};
        new FormErrorHandler({
            form: document.querySelector('form.contacts-callback__form'),
            actionAfter: function actionAfter(){
                new PopUp({
                    typeOfContent: 'info',
                    caption: 'Спасибо за обращение. Мы свяжемся с вами в ближайшее время!',
                    text: ''
                })
            }
        })
    }


    if (document.querySelector('.product-photo-swiper__gallery-thumbs') && document.querySelector('.product-photo-swiper__gallery')){
        initProductPhotoSwiper();
    }

    if (document.querySelector('.tab-btn') && document.querySelector('.tab-content')){
        initProductTabs();
    }

    if (document.querySelector('.product-block__tab-content')){
        initProductAccordions();
    }

    if (document.querySelector('.questions__nav-item') && document.querySelector('.questions__nav-item')){
        initQuestionsTabs();
    }

    if (document.querySelector('.search__nav-item') && document.querySelector('.search__nav-item')){
        initSearchTabs();
    }

    changeCountProduct();
    
    if (document.querySelector('.select')){
        $('select').SumoSelect({
            floatWidth: 0
        });
    }

    followLkMenuMobile();
    lkOrdersSeeAll();
    window.PopUp = PopUp;
    window.CookieInfoMess = CookieInfo;

});

// SCSS
import 'sumoselect/sumoselect.min.css';
import '../styles/main.scss';
import 'vue-slider-component/theme/antd.css';

