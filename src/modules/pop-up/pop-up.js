import LoadImage from 'blueimp-load-image'
import * as Swiper from 'swiper/js/swiper.js';
import VueTheMask from 'vue-the-mask';
import changeCountProduct from "../product-price/product-price";
import Vue from 'vue';
Vue.use(VueTheMask);

export default class PopUp {
    constructor(options) {
        this.popUp = document.querySelector('.pop-up');
        this.closeBtn = this.popUp.querySelector('.pop-up__close');
        this.contentArea = this.popUp.querySelector('.pop-up__content');
        this.wrapper = this.popUp.querySelector('.pop-up__wrapper');
        this.options = options;
        this.wrapperAdditionalClass = 'pop-up__wrapper--' + this.options.typeOfContent;
        this.OpenPopUp();
        this.closeBtn.addEventListener('click', ()=>this.ClosePopUp());
        this.popUp.addEventListener('mousedown', (e)=>{
            if (e.currentTarget == e.target && this.options.typeOfContent != 'cookie-info' && this.options.typeOfContent != 'weekends'){
                this.ClosePopUp();
            }
        })
    }
    AddContent(content){
        this.wrapper.classList.add(this.wrapperAdditionalClass);
        let ReturnSliderCart = (item)=>{
            return `
                    <div class="swiper-slide">
                      <picture class="product-photo-swiper__img">
                        <source type="image/webp" src="${item.src}.webp"><img src="${item.src}.${item.extension}" alt="${item.alt}">
                      </picture>
                      <div class="product-photo-swiper__img-number">4</div>
                    </div>`
        };
        let ReturnSliderCarts = (arr)=>{
            let rezult = ``;
            for (let item of arr){
                rezult = rezult + ReturnSliderCart(item)
            }
            return rezult
        };
        let ReturnSliderButtons = (side) =>{
            return `<button class="product-photo-swiper__gallery-thumbs-btn product-photo-swiper__gallery-thumbs-${side} pop-up-photo-swiper__gallery-thumbs-${side}" type="button">
                    <div class="product-photo-swiper__gallery-thumbs-btn-arrow product-photo-swiper__gallery-thumbs-btn-arrow--${side}"></div>
                  </button>`
        };
        let ReturnProductChatacteristics = (arr)=>{
            let rezult = ``;
            for (let item of arr){
                rezult = rezult + ReturnProductChatacteristic(item)
            }
            return rezult
        };
        let ReturnProductChatacteristic = (item)=>{
            return `<div class="product-block__spec-item">
                <span>${item.title}</span>
                <span>${item.data}</span>
            </div>`
        };
        let ProductPriceDiscount = (obj) =>{
            let rezult = ``;
            for (let item of obj){
                rezult = rezult + `<div>
                            <p>${item.count}</p><p class="is-red">${item.price} ₽</p>
                        </div>`
            }
            return `<div class="product-price__discount product-price__discount--type-2">
                        ${rezult}
                    </div>`
        };
        switch (content.typeOfContent) {
            case "cancel-order":
                this.contentArea.innerHTML = `
                    <div class="pop-up__info-order">
                        <div class="pop-up__info-order-caption pop-up__info-order-caption--big">Отмена заказа</div>
                        <div class="pop-up__info-order-text">Вы хотите отменить заказ </div>
                        <div class="pop-up__info-order-text">№ ${content.orderNumber} от ${content.orderDate}</div>
                        <button type="button" data-id="${content.orderNumber}" class="btn--blue-invert btn--height4rem  pop-up__info-main-btn pop-up__info-cancel-btn" id="pop-up__info-cancel-btn">Отменить</button>
                    </div>
                `;
                let cancelOrderBtn = this.contentArea.querySelector('.pop-up__info-cancel-btn');
                cancelOrderBtn.addEventListener('click', ()=>{
                    this.contentArea.innerHTML = `
                        <div class="pop-up__info-order">
                            <div class="pop-up__info-order-caption pop-up__info-order-caption--big">Заказ отменён</div>
                            <div class="pop-up__info-order-text">№ ${content.orderNumber} от ${content.orderDate}</div>
                        </div>
                    `;
                });
                break;
            case "paid-order":
                this.contentArea.innerHTML = `
                    <div class="pop-up__info-order">
                        <p class="pop-up__info-order-caption">Ваш заказ оплачен</p>
                        <p class="pop-up__info-order-text">Вы можете отслеживать статус вашего заказа в личном кабинете </p>
                        <button type="button" data-lk="${this.options.href}" class="btn--blue-invert btn--height4rem pop-up__info-main-btn pop-up__info-lk-btn" id="pop-up__info-lk-btn">${this.options.btnText}</button>
                    </div>
                `;
                break;
            case "weekends":
                this.contentArea.innerHTML = `
                    <div class="pop-up__info-order">
                        <p class="pop-up__info-order-caption">${this.options.caption}</div>
                        <p class="pop-up__info-order-text">${this.options.text}</p>
                        <button type="button" id="pop-up__info-agree-btn" data-id="pop-up__info-agree-btn" class="btn--blue btn--height4rem pop-up__info-main-btn pop-up__info-agree-btn">Понятно</button>
                    </div>
                `;
                var agreeBtn = this.contentArea.querySelector('.pop-up__info-agree-btn');
                agreeBtn.addEventListener('click', ()=>this.ClosePopUp());
                this.popUp.style.backgroundColor = 'transparent';
                this.popUp.style.height = 'auto';
                this.popUp.style.width = 'auto';
                this.popUp.style.right = '1rem';
                this.popUp.style.bottom = '5rem';
                break;
            case "problem-order":
                let sendButton = `<button type="button" data-id="${content.orderNumber}" class="btn--blue-invert btn--height4rem  pop-up__info-main-btn pop-up__info-send-problem-btn" id="pop-up__info-send-problem-btn">Отправить</button>`;
                let customInput = `
                    <label class="pop-up__form-file-label">
                        <input type="file" name="file"  class="pop-up__form-file-input" />
                        <svg>
                          <use xlink:href="${content.hrefToSprite}#plus"></use>
                        </svg>
                    </label>
                `;
                this.contentArea.innerHTML = `
                    <div class="pop-up__info-order">
                        <p class="pop-up__info-order-caption pop-up__info-order-caption--big">Проблема с заказом</p>
                        <p class="pop-up__info-order-text pop-up__info-order-text--center">№ ${content.orderNumber} от ${content.orderDate}</p>
                        <textarea class="textarea textarea--default textarea--error textarea--valid pop-up__problem-order-textarea"
                        placeholder="Опишите вашу проблему"></textarea>
                        <form action="post" class="pop-up__form-file">
                            <p class="pop-up__info-order-text pop-up__info-order-text--left  pop-up__info-order-text--width100">прикрепите фото</p>
                            <div class="pop-up__form-file-inputs">
                                ${customInput} 
                                ${customInput}
                                ${customInput}
                                ${customInput}
                                ${customInput}
                                ${customInput}
                            </div>
                            ${sendButton}
                        </form>
                    </div>
                `;
                let sendProblemButton = this.contentArea.querySelector('.pop-up__info-send-problem-btn')
                sendProblemButton.addEventListener('click', ()=>{
                    this.contentArea.innerHTML = `<div class="pop-up__info-order-caption pop-up__info-order-caption--big">Ваше обращение зарегистрировано</div>`;
                });
                let fileInputs = document.querySelectorAll('.pop-up__form-file-input');
                fileInputs.forEach(item=>{
                    item.onchange = function (e) {

                        LoadImage(
                            e.target.files[0],
                            function (img) {
                                let svg = item.parentNode.querySelector('svg');
                                svg.style.display = 'none';
                                item.parentNode.appendChild(img);
                            },
                            { maxWidth: 72,
                                maxHeight: 40,
                            } // Options
                        )
                    }
                });
                break;
            case "analog":
                let ReturnCart = (obj) =>{
                    return `
                  <div class="cart pop-up__analogue-cart">
                  <div class="cart__wrapper">
                    <div class="cart__inner cart__image cart__image--mobile">
                      <div class="cart__case">
                        <picture>
                          <source type="image/webp" src="${obj.imgSrcWebp}"><img src="${obj.imgSrc}" alt="cart-image">
                        </picture>
                      </div>
                    </div>
                    <div class="cart__inner">
                      <div class="cart__case">
                          <div class="cart__options">
                            <button class="cart__options-btn js-element_favorites cart__options-btn--favorites" data-itemis=${obj.itemID} type="button" title="В избранное">
                                    <svg class="cart__options-svg--heart">
                                      <use xlink:href="${obj.hrefToSprite}#heart-painted"></use>
                                    </svg>
                            </button>
                            <button class="cart__options-btn js-element_compare  cart__options-btn--compare" data-itemis=${obj.itemID} type="button" title="В сравнение" data-itemid="${obj.itemID}">
                                    <svg>
                                      <use xlink:href="${obj.hrefToSprite}#graph-painted"></use>
                                    </svg>
                            </button>
                            <button class="cart__options-btn js-element_zoomin cart__options-btn--zoom-in" data-itemis=${obj.itemID} type="button" title="Увеличить">
                                    <svg>
                                      <use xlink:href="${obj.hrefToSprite}#search"></use>
                                        </svg>
                            </button>
                            <button class="cart__options-btn js-element_analogs cart__options-btn--analogue" data-itemis=${obj.itemID} type="button" title="Аналоги">
                                    <svg>
                                      <use xlink:href="${obj.hrefToSprite}#copy2"></use>
                                    </svg>
                            </button>
                          </div>
                              <div class="cart__title cart__text-title"><span class="cart__text-title cart__text-title--bold">${obj.title}</span></div>
                              <a href="${obj.href}" class="cart__image cart__image--desktop">
                                <picture v-image-lazy-load>
                                  <source type="image/webp" srcset="${obj.imgSrcWebp}"><img src="${obj.imgSrc}" alt="cart-image">
                                </picture>
                              </a>
                              <div class="cart__price">${obj.price} ₽<span>${obj.priceInfoText ? obj.priceInfoText : ''}</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="cart__wrapper">
                    <div class="cart__inner">
                      <div class="cart__case">
                        <div class="cart__button">
                            <a href="${obj.href}">
                                <button class="btn btn--default btn--red btn--height3rem" type="button">Перейти к покупке</button>                                </button>
                            </a>
                        </div>
                          <div class="cart__helper-info">
                            <div class="cart__helper-info-item">
                                <svg>
                                  <use xlink:href="${obj.hrefToSprite}#okay"></use>
                                </svg>
                                <div class="cart__helper-info-item-wrapper">
                                    <span class="cart__helper-info-item-text">Свободно</span>
                                    <span class="cart__helper-info-item-number">${obj.okay}</span>
                                </div>
                            </div>
                            <div class="cart__helper-info-item">
                                <svg>
                                  <use xlink:href="${obj.hrefToSprite}#hourglass"></use>
                                </svg>
                                <div class="cart__helper-info-item-wrapper">
                                    <span class="cart__helper-info-item-text">Ожидаем</span>
                                    <span class="cart__helper-info-item-number">${obj.hourglass}</span>
                                </div>
                            </div>
                            <div class="cart__helper-info-item">
                                <svg>
                                  <use xlink:href="${obj.hrefToSprite}#padlock"></use>
                                </svg>
                                <div class="cart__helper-info-item-wrapper">
                                    <span class="cart__helper-info-item-text">В резерве</span>
                                    <span class="cart__helper-info-item-number">${obj.padlock}</span>
                                </div>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div> `
                };
                let ReturnCarts = (arr) =>{
                    let rezult = ``;
                    for (let item of arr){
                        rezult = rezult + ReturnCart(item);
                    }
                    return rezult;
                };
                this.contentArea.innerHTML = `
                    <section class="section product-analog">
                        <h2 class="title-main section__wrapper-title">Аналоги</h2>
                        <div class="pop-up__carts-wrapper">  
                            ${ReturnCarts(this.options.carts)}
                        </div>
                    </section>
                `;
                break;
            case "zoom-in":
                this.contentArea.innerHTML = `
                <div class="product-settings__title">${this.options.type}<div class="product-settings__subtitle">${this.options.title}</div></div>
                <div class="product-photo-swiper">
                <div class="swiper-container product-photo-swiper__gallery pop-up-photo-swiper__gallery">
                  <div class="swiper-wrapper">
                    ${ReturnSliderCarts(this.options.images)}
                  </div>
                </div>
                <div class="product-photo-swiper__slider-nav-wrapper">
                  ${ReturnSliderButtons('prev')}
                  <div class="swiper-container product-photo-swiper__gallery-thumbs carts-slider__navigation pop-up-photo-swiper__gallery-thumbs ">
                    <div class="swiper-wrapper">
                      ${ReturnSliderCarts(this.options.images)}
                    </div>
                  </div>
                  ${ReturnSliderButtons('next')}
                </div>
              </div>
                `;
                var galleryThumbs = new Swiper('.pop-up-photo-swiper__gallery-thumbs', {
                    spaceBetween: 10,
                    slidesPerView: 'auto',
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    breakpoints: {
                        320: {
                            spaceBetween: 7,
                            direction: 'horizontal',
                        },
                        768: {
                            spaceBetween: 15,
                        },
                        1600: {
                            direction: 'vertical'
                        }
                    },
                    navigation: {
                        nextEl: '.pop-up-photo-swiper__gallery-thumbs-next',
                        prevEl: '.pop-up-photo-swiper__gallery-thumbs-prev',
                    }
                });
                var gallery = new Swiper('.pop-up-photo-swiper__gallery', {
                    slidesPerView: 1,
                    thumbs: {
                        swiper: galleryThumbs
                    },
                    navigation: {
                        nextEl: '.pop-up-photo-swiper__gallery-thumbs-next',
                        prevEl: '.pop-up-photo-swiper__gallery-thumbs-prev',
                    }
                });
                break;
            case "quick-view":
                let ProductAvailability = item =>{
                    return `
                    <div class="product-price__availability">
                        <div class="product-price__availability-item is-green"><span>
                          <svg>
                            <use xlink:href="${item.hrefToSprite}#okay"></use>
                          </svg>На складе</span><span>${item.onStock}</span>
                        </div>
                        <div class="product-price__availability-item"><span>
                          <svg>
                            <use xlink:href="${item.hrefToSprite}#hourglass"></use>
                          </svg>В резерве</span><span>${item.reserve}</span>
                        </div>
                        <div class="product-price__availability-item"><span>
                          <svg>
                            <use xlink:href="${item.hrefToSprite}#padlock"></use>
                          </svg>Ещё поступит</span><span>${item.stillComing}</span>
                        </div>
                    </div>`
                };
                let ProductSuplier = (item) =>{
                    return `
                    <div class="product-price__price-and-supplier">
                        <div class="product-price__price-old product-price__price-text product-price__price-text--is-gray">${item.oldPrice}</div>
                            <div class="product-price__price-supplier product-price__price-text product-price__price-text--is-blue">${item.supplier}</div>
                            </div>
                        <div class="product-price__price-block product-price__price-block--type-3">
                            <div class="product-price__price-new product-price__price-new--center">${item.newPrice}
                              <div class="product-price__price-des product-price__price-text product-price__price-text--is-gray">Цена за комплект</div>
                            </div>
                        </div>
                        <div class="product-price__price-sum product-price__price-text">
                            <span class="product-price__price-text">Сумма:
                                <span class="product-price__price-text--is-bold"> ${item.sum} ₽</span>
                            </span>
                            <span class="product-price__price-sum--nds">${item.nds}</span>
                        </div>
                        <button class="product-price__btn">Положить в корзину</button>
                        ${item.availability ? ProductAvailability(item.availability) : ''}
                        `
                };
                this.contentArea.innerHTML = `
                    <div class="product-block">
                      <div class="product-photo-swiper product-block__swiper">
                        <div class="swiper-container product-photo-swiper__gallery pop-up-photo-swiper__gallery">
                          <div class="swiper-wrapper">
                            ${ReturnSliderCarts(this.options.images)}
                          </div>
                        </div>
                        <div class="product-photo-swiper__slider-nav-wrapper">
                          ${ReturnSliderButtons('prev')}
                          <div class="swiper-container product-photo-swiper__gallery-thumbs pop-up-photo-swiper__gallery-thumbs carts-slider__navigation">
                            <div class="swiper-wrapper">
                              ${ReturnSliderCarts(this.options.images)}
                            </div>
                          </div>
                          ${ReturnSliderButtons('next')}
                        </div>
                      </div>
                      <div class="product-settings product-block__settings">
                        <div class="product-settings__title">${this.options.type}</div>
                        <div class="product-settings__subtitle">${this.options.title}</div>
                        <div class="product-settings__actions">
                          <button type="button">
                            <svg>
                              <use xlink:href="${this.options.hrefToSprite}#copy2"></use>
                            </svg><span>Аналоги</span>
                          </button>
                          <button class="product-settings__actions-btn pop-up-settings__actions-btn--favorite" type="button">
                            <div class="product-settings__svg-ico-favorite"></div>
                            <svg class="product-settings__svg-ico--favorite product-settings__svg-ico product-settings__svg-ico--active">
                                <use xlink:href="${this.options.hrefToSprite}#heart-painted"></use>
                            </svg><span>В избранное</span>
                          </button>
                          <button type="button" class="product-settings__actions-btn product-settings__actions-btn--active product-settings__actions-btn--compare">
                            <svg class="product-settings__svg-ico--compare product-settings__svg-ico product-settings__svg-ico--active">
                                <use xlink:href="${this.options.hrefToSprite}#graph-painted"></use>
                            </svg><span>Сравнить</span>
                          </button>
                        </div>
                        <div class="product-block__specifications">
                            <div class="product-block__tab-title">Характеристики</div>
                                ${ReturnProductChatacteristics(this.options.characteristics)}
                          </div>
                      </div>
                      <div class="product-price__in-basket-wrapper">
                        <div class="product-settings__description">
                          <p class="is-gray"><span class="is-bold">Кол-во упаковок</span>${this.options.numberOfPackages}
                            <div class="product-price__count">
                              <button class="product-rem-count product-price__btn-change">–</button>
                              <input class="product-count product-price__input-change" value="160">
                              <button class="product-add-count product-price__btn-change">+</button>
                            </div>
                          </p>
                        </div>
                        ${ProductPriceDiscount(this.options.priceDiscounts)}
                        <div class="product-price__in-basket">
                          ${ProductSuplier(this.options.price[0])}
                          
                          <div class="product-price__hr-separator product-price__hr-separator--main-gray width100"></div>
                          
                          ${ProductSuplier(this.options.price[1])}
                                    
                        </div>
                      </div>
                    </div>`;
                var popUpGalleryThumbs = new Swiper('.pop-up-photo-swiper__gallery-thumbs', {
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

                var popUpGallery = new Swiper('.pop-up-photo-swiper__gallery', {
                    slidesPerView: 1,
                    thumbs: {
                        swiper: popUpGalleryThumbs
                    },
                    navigation: {
                        nextEl: '.product-photo-swiper__gallery-thumbs-next',
                        prevEl: '.product-photo-swiper__gallery-thumbs-prev',
                    }
                });
                changeCountProduct();

                const entrepreneurButton = document.querySelector('.pop-up .js-entrepreneur-btn');
                const companyButton = document.querySelector('.pop-up .js-company-btn');
                if (entrepreneurButton && companyButton){
                    entrepreneurButton.addEventListener('click', () => {
                        companyButton.classList.remove('is-active');
                        entrepreneurButton.classList.add('is-active');

                    });
                    companyButton.addEventListener('click', () => {
                        entrepreneurButton.classList.remove('is-active');
                        companyButton.classList.add('is-active');
                    });
                }


                break;
            case "subscribe":
                if (!this.options.needQuan){
                    this.options.needQuan = ''
                }
                if (!this.options.email){
                    this.options.email = ''
                }

                this.contentArea.innerHTML = `
                    <form class="pop-up__info-order" id="pop-up__subscribe-form" name="pop-up__subscrible" method="get" action="/ajax/add2subscribe.php">
                        <div class="pop-up__info-order-caption pop-up__info-order-caption--big">Подписка</div>
                        <div class="lk-subscribe__checkbox-wrapper inp__wrapper">
                            <input type="checkbox" name="pop-up-subscribe-discount" id="pop-up-subscribe-discount" ${this.options.isDiscount} class="checkbox-label checkbox-label--square checkbox-input">
                            <label for="pop-up-subscribe-discount" class="checkbox-label checkbox-label--square checkbox-input">
                                Подписаться на информацию о снижении цены
                            </label>
                        </div>
                        <div class="lk-subscribe__checkbox-wrapper inp__wrapper">
                            <input type="checkbox" name="pop-up-subscribe-availability" id="pop-up-subscribe-availability" ${this.options.isInStock} class="checkbox-label checkbox-label--square checkbox-input">
                            <label for="pop-up-subscribe-availability" class="checkbox-label checkbox-label--square checkbox-input">
                                Подписаться на информацию о поступлении товара на склад 
                            </label>
                        </div>
                        <div class="lk-subscribe__checkbox-wrapper pop-up__subscribe-text-wrapper pop-up__subscribe-text-wrapper--mb18rem inp__wrapper">
                            <label for="pop-up__required-quantity-of-goods" class="pop-up__required-quantity-of-goods">Укажите количество требуемого товара со склада</label>
                            <input id="pop-up__required-quantity-of-goods" name="pop-up__required-quantity-of-goods" type = "number" min = "1"  onkeydown="javascript: return event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key))"
                            class="inp inp--default inp--error inp--valid pop-up__subscribe-input" required value="${this.options.needQuan}">
                            <p class="inp__error-message inp__error-message--right">Пожалуйста, заполните поле</p>
                            <p class="inp__valid-ico"></p>
                        </div>
                        <input type="hidden" name="action" value="${this.options.updateGoods}">
                        <input type="hidden" name="goodID" value="${this.options.goodId}">
                        <button name="sund-subscribe" type="button" class="btn--blue-invert btn--height4rem  pop-up__info-main-btn pop-up__subscribe-btn">Подписаться!</button>
                    </form>
                `;
                let inputGoods = this.popUp.querySelector('#pop-up__required-quantity-of-goods');
                let formSubscribe = this.popUp.querySelector('#pop-up__subscribe-form');
                let btnSubscribe = this.popUp.querySelector('.pop-up__subscribe-btn');
                this.inputArea = this.contentArea.querySelector('#pop-up__subscribe-email-input');
                if (this.inputArea) {
                    this.inputAreaWrapper = this.inputArea.parentNode;
                }
                this.inputSubscribeAvailible = this.popUp.querySelector('#pop-up-subscribe-availability');

                inputGoods.addEventListener('keyup', (e)=>{
                    let current = e.currentTarget.value;
                    if (e.currentTarget.value.length > 5){
                        e.currentTarget.value = current.slice(0, 5);
                    }
                });
                this.requiredQuanGods = this.contentArea.querySelector('#pop-up__required-quantity-of-goods');
                this.requiredQuanGodsWrapper = this.requiredQuanGods.parentNode;
                this.inputSubscribeAvailible.addEventListener('change', (e)=>{
                    if (!e.currentTarget.checked){
                        this.requiredQuanGods.setAttribute('disabled', true);
                        this.requiredQuanGodsWrapper.classList.remove('inp__wrapper--error');
                    } else {
                        this.requiredQuanGods.removeAttribute('disabled');
                    }
                });
                btnSubscribe.addEventListener('click', (e)=>{

                    if (document.getElementById('pop-up-subscribe-availability').prop('checked')) {
                        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                        if (reg.test(this.inputArea.value) == false) {
                            this.inputAreaWrapper.classList.remove('inp__wrapper--valid');
                            this.inputAreaWrapper.classList.add('inp__wrapper--error');
                        } else {
                            this.inputAreaWrapper.classList.remove('inp__wrapper--error');
                            this.inputAreaWrapper.classList.add('inp__wrapper--valid');
                        }
                    }
                    let QuanGoods = this.requiredQuanGods.value;
                    let hasDisabled = this.requiredQuanGods.hasAttribute('disabled');
                    if (hasDisabled){

                    } else if (Number(QuanGoods) >= 1){
                        this.requiredQuanGodsWrapper.classList.remove('inp__wrapper--error');
                        this.requiredQuanGodsWrapper.classList.add('inp__wrapper--valid');
                    } else {
                        this.requiredQuanGodsWrapper.classList.add('inp__wrapper--error');
                        this.requiredQuanGodsWrapper.classList.remove('inp__wrapper--valid');
                        return
                    }

                    if (!this.popUp.querySelector('.inp__wrapper--error') && this.popUp.querySelector('checkbox-input').prop('checked'))
                    {
                        formSubscribe.submit();
                        this.contentArea.innerHTML = `
                    <div class="pop-up__info-order-caption pop-up__info-order-caption--big">Вы успешно подписаны на рассылку</div>`


                    }
                });
                break;
            case "info":
                this.contentArea.innerHTML = `
                    <div class="pop-up__info-order">
                        <p class="pop-up__info-order-caption">${this.options.caption}</div>
                        <p class="pop-up__info-order-text">${this.options.text}</p>
                        <button type="button" id="pop-up__info-agree-btn" data-id="pop-up__info-agree-btn" class="btn--blue-invert btn--height4rem pop-up__info-main-btn pop-up__info-agree-btn">Понятно</button>
                    </div>
                `;
                var agreeBtn = this.contentArea.querySelector('.pop-up__info-agree-btn');
                agreeBtn.addEventListener('click', ()=>this.ClosePopUp());
                break;
            case "play-video":
                this.contentArea.innerHTML = `
                    <iframe width="95%" height="75%" src="${this.options.link}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                `;
                break;
            case "preloader":
                this.contentArea.innerHTML = `
                    <svg class="preloader__ico">
                      <use xlink:href="${this.options.imageUrl}"></use>
                    </svg>
                `;
                break;
            case "cookie-info":
                this.contentArea.innerHTML = `
                    <div class="cookie-info">
                        <div class="cookie-info__wrapper">
                            <p class="cookie-info__text">Мы cохраняем файлы cookie: это помогает сайту работать лучше. Если Вы продолжите использовать сайт, мы будем считать, что Вас это устраивает.</p> 
                            <div class="cookie-info__ok">Ок</div>
                        </div>
                    </div>
                `;
                let okBtn = this.popUp.querySelector('.cookie-info__ok');
                this.popUp.style.backgroundColor = 'transparent';
                this.popUp.style.height = 'auto';
                this.popUp.style.bottom = '0';

                okBtn.addEventListener('click', ()=>this.ClosePopUp());
                break;
            case "inner-html":
                this.contentArea.innerHTML = `${this.options.html}`
        }
    };
    ClosePopUp(){
        this.popUp.classList.remove('pop-up--active');
        this.contentArea.innerHTML = '';
        this.wrapper.classList.remove(this.wrapperAdditionalClass);
    };

    OpenPopUp(){
        this.wrapper.className = 'pop-up__wrapper';
        this.popUp.style = '';
        this.popUp.classList.add('pop-up--active');
        this.AddContent(this.options)
    };
}