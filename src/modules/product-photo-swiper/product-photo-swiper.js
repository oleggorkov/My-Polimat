// swiper
import * as Swiper from 'swiper/js/swiper.js';
export default function initProductPhotoSwiper(){
    var galleryThumbs = new Swiper('.product-photo-swiper__gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 'auto',
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
              spaceBetween: 7
            },
            768: {
                spaceBetween: 15
            },
            1600: {
                direction: 'vertical'
            }
        },
        navigation: {
            nextEl: '.product-photo-swiper__gallery-thumbs-next',
            prevEl: '.product-photo-swiper__gallery-thumbs-prev',
        }
    });

    var gallery = new Swiper('.product-photo-swiper__gallery', {
        slidesPerView: 1,
        thumbs: {
            swiper: galleryThumbs
        },
        navigation: {
            nextEl: '.product-photo-swiper__gallery-thumbs-next',
            prevEl: '.product-photo-swiper__gallery-thumbs-prev',
        }
    });
}