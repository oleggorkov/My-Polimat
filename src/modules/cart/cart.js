import PopUp from "../pop-up/pop-up";
import * as Swiper from 'swiper/js/swiper.js';
window.addEventListener('load',function () {
    let options = document.querySelectorAll('.cart__options');


    for (let item of options){

        if (item.querySelector('.cart__options-btn--analogue')){
            let analogueCard = item.querySelector('.cart__options-btn--analogue');
            analogueCard.addEventListener('click', (e)=>{
                // new PopUp(
                //     {
                //         typeOfContent: 'analog',
                //         carts: [{
                //             itemID: '12345',
                //             href: 'product-2.html',
                //             title: '2020 - ЕВРОПА металлик мини 1-сп (1 х 297*445) серебристо-белый',
                //             price: '28,80 - 29,80*',
                //             priceInfoText: '',
                //             okay: 'много',
                //             hourglass: '20.12.2019 (чт)',
                //             padlock: '550 шт',
                //             imgSrc: 'img/cart-image/cart-image-cursor.png',
                //             imgSrcWebp: 'img/cart-image/cart-image-cursor.webp'
                //         },{
                //             itemID: 12345,
                //             href: 'product.html',
                //             title: 'ЕВРОПА МИНИ серебристо-белый 3-сп (ЕМД)',
                //             price: '25,44 - 31,44*',
                //             okay: 'много',
                //             hourglass: '20.12.2019 (чт)',
                //             padlock: '123 шт',
                //             imgSrc: 'img/cart-image/cart-image.png',
                //             imgSrcWebp: 'img/cart-image/cart-image.webp',
                //         },{
                //             itemID: 12345,
                //             href: 'product.html',
                //             title: 'ЕВРОПА МИНИ серебристо-белый 3-сп (ЕМД)',
                //             price: '25,44 - 31,44*',
                //             okay: 'много',
                //             hourglass: '20.12.2019 (чт)',
                //             padlock: '123 шт',
                //             imgSrc: 'img/cart-image/cart-image.png',
                //             imgSrcWebp: 'img/cart-image/cart-image.webp',
                //         },{
                //             itemID: 12345,
                //             href: 'product.html',
                //             title: 'ЕВРОПА МИНИ серебристо-белый 3-сп (ЕМД)',
                //             price: '25,44 - 31,44*',
                //             okay: 'много',
                //             hourglass: '20.12.2019 (чт)',
                //             padlock: '123 шт',
                //             imgSrc: 'img/cart-image/cart-image.png',
                //             imgSrcWebp: 'img/cart-image/cart-image.webp',
                //         },{
                //             itemID: 12345,
                //             href: 'product.html',
                //             title: 'ЕВРОПА МИНИ серебристо-белый 3-сп (ЕМД)',
                //             price: '25,44 - 31,44*',
                //             okay: 'много',
                //             hourglass: '20.12.2019 (чт)',
                //             padlock: '123 шт',
                //             imgSrc: 'img/cart-image/cart-image.png',
                //             imgSrcWebp: 'img/cart-image/cart-image.webp',
                //         },{
                //             itemID: 12345,
                //             href: 'product.html',
                //             title: 'ЕВРОПА МИНИ серебристо-белый 3-сп (ЕМД)',
                //             price: '25,44 - 31,44*',
                //             okay: 'много',
                //             hourglass: '20.12.2019 (чт)',
                //             padlock: '123 шт',
                //             imgSrc: 'img/cart-image/cart-image.png',
                //             imgSrcWebp: 'img/cart-image/cart-image.webp',
                //         },{
                //             itemID: 12345,
                //             href: 'product.html',
                //             title: 'ЕВРОПА МИНИ серебристо-белый 3-сп (ЕМД)',
                //             price: '25,44 - 31,44*',
                //             okay: 'много',
                //             hourglass: '20.12.2019 (чт)',
                //             padlock: '123 шт',
                //             imgSrc: 'img/cart-image/cart-image.png',
                //             imgSrcWebp: 'img/cart-image/cart-image.webp',
                //         },{
                //             itemID: 12345,
                //             href: 'product.html',
                //             hrefToSprite: 'img/sprite.svg',
                //             title: 'ЕВРОПА МИНИ серебристо-белый 3-сп (ЕМД)',
                //             price: '25,44 - 31,44*',
                //             priceInfoText: '* цена за 1 компл., зависит от оборота',
                //             okay: 'много',
                //             hourglass: '20.12.2019 (чт)',
                //             padlock: '123 шт',
                //             imgSrc: 'img/cart-image/cart-image.png',
                //             imgSrcWebp: 'img/cart-image/cart-image.webp',
                //         }
                //         ]
                //     }
                // )
            })
        }

     }
     let btnBuyIt = document.querySelectorAll('.cart__btn-buy-it');
     btnBuyIt.forEach(item=>{
         item.addEventListener('click', (e)=>{
             new PopUp({
                 typeOfContent: 'quick-view',
                 type: 'Календарный блок',
                 hrefToSprite: 'img/sprite.svg',
                 title: 'ЕВРОПА МИНИ серебристо-белый 3-сп (ЕМД)',
                 images: [
                     {src: 'img/cart-image/cart-image-cursor', extension: 'png', alt: 'cart-image'},
                     {src: 'img/cart-image/cart-image-cursor', extension: 'png', alt: 'cart-image'},
                     {src: 'img/cart-image/cart-image-cursor', extension: 'png', alt: 'cart-image'},
                     {src: 'img/cart-image/cart-image-cursor', extension: 'png', alt: 'cart-image'},
                 ],
                 characteristics: [
                     {title: 'Год', data: '2020'},
                     {title: 'Поля', data: 'Широкие'},
                     {title: 'Вид', data: 'Мини'},
                     {title: 'Бумага', data: 'Мелованная'},
                     {title: 'Шрифт', data: 'Болд'},
                     {title: 'Объем в упаковке', data: '0.006 м3'},
                     {title: 'Вес в упаковке, кг', data: '7,62'},
                     {title: 'Кратность упаковки', data: '50+2'},
                 ],
                 priceDiscounts: [
                     {count: '5-9 уп.', price: '191'},
                     {count: '10-29 уп.', price: '185'},
                     {count: '30-99 уп.', price: '179'},
                 ],
                 numberOfPackages: '1 уп = 100 шт + 1 шт бесплатно',
                 price: [
                     {
                         supplier: 'ИП Зарецкий А.В.',
                         oldPrice: '29.90',
                         newPrice: '25.80',
                         sum: '3 870',
                         nds: 'без НДС',

                     },{
                         supplier: 'ООО Всё для календарей',
                         oldPrice: '29.90',
                         newPrice: '25.80',
                         sum: '3 870',
                         nds: 'с НДС',
                         availability: {
                             onStock: '1234',
                             reserve: '550 шт',
                             stillComing: '20.12.2020'
                         },
                     },
                 ]
             })
         })
    })
});
