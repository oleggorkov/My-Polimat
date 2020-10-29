<template>
    <transition name="popup_description">
        <div class="popup popup_description" v-close-popup="true" v-if="state">
            <div class="popup_container">
                <div class="popup_container-close" v-close-popup>
                    <span/>
                    <span/>
                </div>

                <div class="cart-description">
                    <div class="cart-description_column slider">
                        <p><b>2020- ЕВРОПА металлик</b> мини 1-сп (1 х 297*445) серебристо-белый</p>
                        <div class="slider_stage">
                            <transition name="popup-slider" mode="out-in">
                                <img src="assets/img/main-images/shares-images/item-image-big-1.png" alt=""
                                     v-bind:key="index"
                                     v-for="(image,index) in 5"
                                     v-if="index === currentSlide">
                            </transition>

                            <div class="slider_stage-navigation">
                                <button type="button" @click="prevSlide">
                                    <svg>
                                        <use xlink:href="assets/img/sprite.svg#arrow"></use>
                                    </svg>
                                </button>
                                <button type="button" @click="nextSlide">
                                    <svg>
                                        <use xlink:href="assets/img/sprite.svg#arrow"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="slider_navigation">
                            <div v-bind:class="index === currentSlide ? 'nav-active-slide' : ''" v-for="(item,index) in 5">
                                <button @click="currentSlide = index">
                                    <img src="assets/img/main-images/shares-images/item-image-big-1.png" alt="">
                                </button>
                            </div>
                        </div>
                        <div class="slider_option">
                            <button type="button" v-tooltip="'Аналоги'">
                                <svg>
                                    <use xlink:href="assets/img/sprite.svg#copy2"/>
                                </svg>
                            </button>
                            <button type="button" v-tooltip="'В избранное'">
                                <svg>
                                    <use xlink:href="assets/img/sprite.svg#heart"/>
                                </svg>
                            </button>
                            <button type="button" v-tooltip="'В сравнение'">
                                <svg>
                                    <use xlink:href="assets/img/sprite.svg#graph"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="cart-description_column lists">
                        <h3>Характеристики</h3>
                        <h4>Свойства товара</h4>
                        <ul>
                            <li><p>Год</p><span>2020</span></li>
                            <li><p>Тип блока</p><span>Широкие</span></li>
                            <li><p>Серия</p><span>Мини</span></li>
                            <li><p>Формат</p><span>Мелованная</span></li>
                            <li><p>Спирали</p><span>Болд</span></li>
                            <li><p>Спирали</p><span>Белый</span></li>
                            <li><p>Размер</p><span>297х145</span></li>
                            <li><p>Шрифт</p><span>Европа металлик</span></li>
                            <li><p>Бумага</p><span>2</span></li>
                        </ul>
                        <h4>Упаковка</h4>
                        <ul>
                            <li><p>Объем в упаковке</p><span>0.006 м3</span></li>
                            <li><p>Вес в упаковке, кг</p><span>7.54</span></li>
                            <li><p>Кратность упаковки</p><span>50+2</span></li>
                        </ul>
                    </div>
                    <div class="cart-description_column sub-text">
                        <h3>Интерфейс покупок</h3>
                        <div v-if="$store.state.ItemType === 0 || $store.state.ItemType === 1">
                            <div class="sub-text_row price">
                                <p>Ваша цена в следующем <br> ценовом диапазоне</p>
                                <span>235 / 242₽</span>
                            </div>
                            <hr>
                            <div class="sub-text_row price">
                                <p>Для этого необходимо <br> увеличить ваш оборот на, руб.</p>
                                <span>25 350</span>
                            </div>
                        </div>

                        <div v-else-if="$store.state.ItemType === 2" class="sub-text_row prices">
                            <div class="prices-row">
                                <p>Количество</p>
                                <p>5-9</p>
                                <p>10-29</p>
                                <p>30+</p>
                            </div>
                            <div class="prices-row">
                                <p>Цена за шт.</p>
                                <p>235</p>
                                <p>227</p>
                                <p>219</p>
                            </div>
                        </div>

                        <div class="sub-text_row warning-text" v-else>
                            <p>Авторизуйтесь, пожалуйста, на сайте, чтобы увидеть именно ваши цены (они могут быть ниже)</p>
                        </div>

                        <div class="sub-text_row counter">
                            <p class="counter_desc-text">Укажите количество</p>
                            <form action="">
                                <button type="button" @click="minusValue">&minus;</button>
                                <input  v-model="InputCounter" title="" type="number" min="1" max="9999" @input="CheckCounter">
                                <button type="button" @click="plusValue">+</button>
                            </form>
                            <div class="counter-text">
                                <p>Кратно 50</p>
                                <p>+2 бесплатно</p>
                            </div>
                        </div>
                        <div class="sub-text_row buy">
                            <p class="buy-title">Цена за один комплект (1200 шт):</p>
                            <div class="buy-case" v-if="$store.state.ItemType !== 1 && $store.state.ItemType !== 4">
                                <div class="buy-case-row">
                                    <div class="buy-case-row-price">
                                        <div class="buy-case-row-price-column">
                                            <span>Цена:</span>
                                            <p>{{GetProductPrice('IP')}} ₽<del>299 ₽</del></p>
                                        </div>
                                        <div class="buy-case-row-price-column">
                                            <span>Сумма: </span>
                                            <p>{{GetProductSum('IP')}} ₽</p>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-primary btn-blue">Купить</button>
                                </div>
                                <p>ИП Зарецкий А.В. (цена без НДС)</p>
                            </div>
                            <div class="buy-case">
                                <div class="buy-case-row">
                                    <div class="buy-case-row-price">
                                        <div class="buy-case-row-price-column">
                                            <span>Цена:</span>
                                            <p>{{GetProductPrice('IP')}} ₽<del>299 ₽</del></p>
                                        </div>
                                        <div class="buy-case-row-price-column">
                                            <span>Сумма: </span>
                                            <p>{{GetProductSum('IP')}} ₽</p>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-primary btn-blue">Купить</button>
                                </div>
                                <p>ООО «Всё для календарей» (цена с НДС)</p>
                            </div>
                        </div>
                        <div class="sub-text_row icons">
                            <div class="icons-column">
                                <svg>
                                    <use xlink:href="assets/img/sprite.svg#okay"></use>
                                </svg>
                                <p>Свободно <br> много</p>
                            </div>
                            <div class="icons-column">
                                <svg>
                                    <use xlink:href="assets/img/sprite.svg#hourglass"></use>
                                </svg>
                                <p>Ожидаем <br> 20.12.2019 (чт)</p>
                            </div>
                            <div class="icons-column">
                                <svg>
                                    <use xlink:href="assets/img/sprite.svg#padlock"></use>
                                </svg>
                                <p>В резерве <br> 550 шт</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import store from "../../vue-store";

    export default {
        name: "PopupDescription",
        mounted: function(){
          this.state = true;
        },
        data: () => {
            return{
                currentSlide: 0,
                count: 1,
                state: false,
                UserAuth: false,
                mask: {
                    mask: Number,
                    min: 1,
                    max: 9999,
                },
                InputCounter: 100,
                ItemPrice: {
                    IP: [250,235,227,219],
                    OOO: [264,242,234,225],
                }
            }
        },
        methods: {
            nextSlide: function () {
                if (this.currentSlide < 4){
                    this.currentSlide++;
                } else {
                    this.currentSlide = 0;
                }
            },
            prevSlide: function () {
                if (this.currentSlide > 0){
                    this.currentSlide--;
                } else {
                    this.currentSlide = 4;
                }
            },

            GoToItemPage: function () {
                this.$store.state.MainPageStore.popupDescriptionState = false;

                setTimeout(function () {
                    console.log('new page');
                    //location.href = 'some-page'
                },650)
            },

            CheckCounter: function(){
                if (this.InputCounter < 1){
                    this.InputCounter = 1;
                }

                if (this.InputCounter > 9999){
                    this.InputCounter = 9999;
                }
            },
            plusValue: function(){
                this.InputCounter < 9999 ? this.InputCounter++ : this.InputCounter = 9999;
            },
            minusValue: function(){
                this.InputCounter > 1 ? this.InputCounter-- : this.InputCounter = 1;
            },

            GetProductPrice: function(type){
                let Price;

                if (type === 'IP'){
                    if (this.InputCounter < 5){
                        Price = this.ItemPrice.IP[0];
                    }
                    if (this.InputCounter >= 5 && this.InputCounter <= 9){
                        Price = this.ItemPrice.IP[1];
                    }
                    if (this.InputCounter >= 10 && this.InputCounter <= 29){
                        Price = this.ItemPrice.IP[2];
                    }
                    if (this.InputCounter >= 30){
                        Price = this.ItemPrice.IP[3];
                    }
                }

                if (type === 'OOO'){
                    if (this.InputCounter < 5){
                        Price = this.ItemPrice.OOO[0];
                    }
                    if (this.InputCounter >= 5 && this.InputCounter <= 9){
                        Price = this.ItemPrice.OOO[1];
                    }
                    if (this.InputCounter >= 10 && this.InputCounter <= 29){
                        Price = this.ItemPrice.OOO[2];
                    }
                    if (this.InputCounter >= 30){
                        Price = this.ItemPrice.OOO[3];
                    }
                }

                return Price;
            },
            GetProductSum: function (type) {
                let Price = this.GetProductPrice(type),
                    Free;

                if (Price % 50 === 0){
                    Free = Math.floor(this.InputCounter / 50) * 2
                } else {
                    Free = 0;
                }

                return ((this.InputCounter - Free) * Price).toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
            }
        },
    }
</script>

<style lang="scss">
    @import "../../../assets/scss/utils/vars";

    .popup_description{
        .popup_container{
            .cart-description{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                &_column{
                    width: 100%;
                    height: 100%;

                    min-height: 38.5rem;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                }

                h3{
                    font-style: normal;
                    font-weight: bold;
                    font-size: 1.4rem;
                    line-height: 16px;
                    text-align: center;
                    color: #000000;
                    width: 100%;
                }

                h4{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 16px;
                    text-align: center;
                    color: #000000;
                    width: 100%;
                }

                hr{
                    width: 100%;
                    height: 1px;
                    background-color: #CDCDCD;
                    border: none;
                }

                .slider{
                    p{
                        max-width: 200px;

                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 16px;
                        text-align: center;
                        color: #000000;
                    }
                    &_stage{
                        margin-top: 16px;
                        position: relative;
                        height: 225px;
                        width: 100%;
                        min-width: 250px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img{
                            width: auto;
                            height: 100%;
                            margin: 0 48px;
                        }
                        &-navigation{
                            position: absolute;
                            top: 50%;
                            left: 0;
                            width: 100%;
                            height: auto;
                            transform: translateY(-50%);
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            button{
                                min-width: inherit;
                                border-radius: 50%;
                                width: 32px;
                                height: 32px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                border: none;
                                background: #CCCDD1;
                                transition: background ease 0.25s;
                                &:hover,&:focus{
                                    outline: none;
                                    background: $main-color-blue;
                                }
                                svg{
                                    width: 16px;
                                    height: 16px;
                                    fill: white;
                                }
                                &:first-of-type{
                                    transform: rotate(180deg);
                                }
                                &:last-of-type{

                                }
                            }
                        }
                    }
                    &_navigation{
                        width: 75%;
                        height: auto;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: 16px;
                        .nav-active-slide{
                            button{
                                border: 1px solid #5a5b5f;
                            }
                        }
                        div{
                            width: 32px;
                            height: 32px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            cursor: pointer;
                            button{
                                min-width: initial;
                                outline: none;
                                width: 100%;
                                height: 100%;
                                border: 1px solid #CCCDD1;
                                &:focus{
                                    border: 1px solid #5a5b5f;
                                }
                            }
                            img{
                                width: 16px;
                                height: auto;
                                margin-top: 0;
                            }
                        }
                    }
                    &_option{
                        width: 100%;
                        max-width: calc((24px * 3) + (12px * 2));
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: 16px;
                        button{
                            min-width: initial;
                            border: none;
                            outline: none;
                            position: relative;
                            &:hover, &:focus{
                                svg{
                                    fill: $main-color-blue;
                                }
                            }
                        }
                        svg{
                            width: 24px;
                            height: 24px;
                            fill: $main-gray-color;
                            cursor: pointer;
                        }
                    }
                }
                .lists{
                    flex-direction: column;
                    margin-left: 24px;
                    margin-right: 16px;
                    ul{
                        width: 100%;
                        height: 100%;

                        margin-top: 16px;
                        margin-bottom: 16px;

                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: flex-start;
                        li{
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;

                            font-style: normal;
                            font-weight: normal;
                            font-size: 12px;
                            line-height: 14px;
                            margin-bottom: 11px;
                            white-space: nowrap;

                            &:last-of-type{
                                margin-bottom: 0;
                            }

                            p{
                                color: $main-gray-color;
                                min-width: 180px;
                                text-align: left;
                            }

                            span{
                                color: #000000;
                                text-align: left;
                            }
                        }
                    }
                }
                .sub-text{
                    padding-left: 24px;
                    border-left: 1px solid #C4C4C4;
                    &_row{
                        width: 100%;
                        height: auto;

                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .prices{
                        margin-top: 16px;

                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;

                        &-row{
                            width: 100%;
                            height: auto;

                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            &:first-of-type{
                                padding-bottom: 8px;

                                border-bottom: 1px solid #DEDEDE;;

                                p{
                                    font-style: normal;

                                    &:first-of-type{
                                        font-weight: normal;
                                        font-size: 12px;
                                        line-height: 14px;
                                        color: $main-gray-color;
                                        width: 80px;
                                    }

                                    &:not(:first-of-type){
                                        font-weight: bold;
                                        font-size: 14px;
                                        line-height: 16px;
                                        color: #000000;
                                        text-align: center;

                                        width: 64px;
                                    }
                                }
                            }
                            &:last-of-type{
                                margin-top: 8px;

                                p{
                                    color: $helper-color-blue;
                                    font-style: normal;

                                    &:first-of-type{
                                        font-weight: normal;
                                        font-size: 12px;
                                        line-height: 14px;
                                        width: 80px;
                                    }

                                    &:not(:first-of-type){
                                        font-weight: bold;
                                        font-size: 14px;
                                        line-height: 16px;
                                        text-align: center;

                                        width: 64px;
                                    }
                                }
                            }
                        }
                    }
                    .warning-text{
                        margin: 16px 0;

                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 14px;
                        text-align: center;
                        color: $main-gray-color;

                        max-width: 195px;
                    }
                    .price{
                        margin-top: 4px;
                        padding-bottom: 4px;

                        &:first-of-type{
                            margin-top: 16px;
                        }

                        p{
                            font-style: normal;
                            font-weight: normal;
                            font-size: 12px;
                            line-height: 14px;
                            color: $main-gray-color;
                            text-align: left;
                            white-space: nowrap;

                            margin-right: 24px;
                        }

                        span{
                            font-style: normal;
                            font-weight: bold;
                            font-size: 14px;
                            line-height: 16px;
                            text-align: center;
                            white-space: nowrap;

                            color: $helper-color-blue;
                        }
                    }
                    .counter{
                        width: auto;

                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;

                        margin-top: 16px;

                        &-text{
                            width: 100%;
                            height: auto;

                            margin-top: 8px;

                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            p{
                                width: auto;
                                height: auto;

                                font-style: normal;
                                font-weight: normal;
                                font-size: 10px;
                                line-height: 12px;
                                text-align: center;
                                color: #000000;
                            }
                        }

                        & > p{
                            font-style: normal;
                            font-weight: normal;
                            font-size: 12px;
                            line-height: 14px;
                            color: $main-gray-color;
                        }

                        form{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            border: 1px solid #CCCDD1;
                            border-radius: 5px;
                            width: 150px;
                            height: 32px;
                            margin-top: 4px;
                            button{
                                min-width: inherit;
                                border: none;
                                font-style: normal;
                                font-weight: normal;
                                font-size: 20px;
                                line-height: 23px;
                                text-align: center;
                                color: #000000;
                                width: 100%;
                                &:focus{
                                    outline: none;
                                }
                                &:hover{
                                    color: $helper-color-blue;
                                }
                            }
                            input{
                                &::-webkit-inner-spin-button {
                                    display: none;
                                }
                                border: none;
                                text-align: center;
                                width: 48px;

                                font-style: normal;
                                font-weight: bold;
                                font-size: 20px;
                                line-height: 23px;
                                color: #000000;
                            }
                        }
                    }
                    .buy{
                        margin-top: 16px;

                        flex-direction: column;
                        align-items: flex-start;
                        &-title{
                            font-style: normal;
                            font-weight: normal;
                            font-size: 12px;
                            line-height: 13px;
                            text-align: left;
                            color: $main-gray-color;

                            margin-bottom: 24px;
                        }
                        &-case{
                            width: 100%;
                            height: auto;

                            display: flex;
                            flex-direction: column;
                            justify-content: flex-start;
                            align-items: flex-start;

                            &:not(:last-of-type){
                                margin-bottom: 16px;
                            }

                            &-row{
                                width: 100%;
                                height: auto;

                                display: flex;
                                flex-direction: column;
                                justify-content: flex-start;
                                align-items: center;

                                &-price{
                                    width: 100%;
                                    height: auto;

                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;

                                    margin-bottom: 12px;

                                    &-column{
                                        width: 50%;
                                        height: auto;

                                        display: flex;
                                        flex-direction: column;
                                        justify-content: flex-start;
                                        align-items: center;

                                        & > span{
                                            text-align: left;
                                            font-size: 12px;
                                            line-height: 12px;
                                            color: $main-gray-color;
                                        }

                                        & > p{
                                            margin-top: 16px;

                                            font-style: normal;
                                            font-weight: bold;
                                            font-size: 20px;
                                            line-height: 23px;
                                            text-align: left;
                                            text-transform: lowercase;
                                            color: #000000;
                                            position: relative;
                                            white-space: nowrap;

                                            del{
                                                font-style: normal;
                                                font-weight: normal;
                                                font-size: 12px;
                                                line-height: 12px;
                                                text-align: center;
                                                text-decoration-line: line-through;
                                                text-transform: lowercase;
                                                color: $main-gray-color;

                                                position: absolute;
                                                top: 2px;
                                                left: 0;
                                                transform: translateY(-100%);
                                            }
                                        }
                                    }
                                }

                                button{
                                    color: $helper-color-blue;
                                    border: 1px solid $helper-color-blue;

                                    transition: background-color ease 0.25s, color ease 0.25s;

                                    width: 100%;
                                    height: 40px;
                                    min-width: 140px;

                                    &:hover{
                                        background-color: $helper-color-blue;
                                        color: white;
                                    }
                                }
                            }

                            & > p{
                                width: 100%;

                                margin-top: 4px;

                                font-style: normal;
                                font-weight: normal;
                                font-size: 12px;
                                line-height: 13px;
                                text-align: center;
                                color: $main-gray-color;
                            }
                        }
                    }
                    .icons{
                        margin-top: 16px;
                        align-items: flex-end;
                        flex-grow: 1;
                        &-column{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            &:not(:last-of-type){
                                margin-right: 6px;
                            }

                            svg{
                                width: 16px;
                                height: 16px;
                                fill: $helper-color-blue;
                                margin-right: 12px;
                            }
                            p{
                                font-style: normal;
                                font-weight: normal;
                                font-size: 11px;
                                line-height: 12px;
                                color: #000000;
                                white-space: nowrap;
                            }
                        }
                    }
                }
            }
        }

        // ------------ vue animation classes ------------

        &-enter{
            opacity: 0;
            .popup_container{
                transform: translateY(100px);
            }
        };

        &-enter-active{
            transition: ease opacity 0.5s;
            .popup_container{
                transition: ease transform 0.5s;
            }
        }

        &-leave-active{
            transition: ease opacity 0.5s;
            opacity: 0;
            .popup_container{
                transition: ease transform 0.5s;
                transform: translateY(-100px);
            }
        }

        // ------------ vue animation classes ------------
    }

    @media (max-width: 980px) {
        .popup_description{
            .popup_container{
                width: calc(100% - 32px);
                margin-bottom: 16px;
                .cart-description{
                    &_column{
                        justify-content: space-evenly;
                        min-height: auto;
                    }
                    .lists{
                        margin: 0;
                        width: auto;
                        ul{
                            min-width: initial;
                            li{
                                font-size: 12px;
                            }
                        }
                    }
                    .prices{
                        padding: 0;
                    }
                    .sub-text{
                        & > div{
                            width: 100%;
                        }
                        .sub-text_row{
                            &:first-of-type{
                                //display: none;
                            }
                        }
                        .counter{
                            &_desc-text{
                                display: none;
                            }
                            &_mobile-text{
                                display: block;
                                font-style: normal;
                                font-weight: normal;
                                font-size: 10px;
                                line-height: 12px;
                                text-align: center;
                                color: #000000;
                                width: 130px;
                                span{
                                    margin-right: 24px;
                                }
                                svg{
                                    width: 10px;
                                    height: 10px;
                                    fill: black;
                                    display: inline-block;
                                }
                            }
                        }
                    }

                    .slider_stage{
                        max-width: 320px;
                    }

                    .slider_navigation{
                        max-width: 280px;
                    }
                }
            }

            // ------------ vue animation classes ------------

            &-enter{
                opacity: 0;
                .popup_container{
                    transform: translateY(32px) translateX(-50%);
                }
            };

            &-enter-active{
                transition: ease opacity 0.5s;
                .popup_container{
                    transition: ease transform 0.5s;
                }
            }

            &-leave-active{
                transition: ease opacity 0.5s;
                opacity: 0;
                .popup_container{
                    transition: ease transform 0.5s;
                    transform: translateY(-32px) translateX(-50%);
                }
            }

            // ------------ vue animation classes ------------
        }
    }
    @media (max-width: 670px){
        .popup_description{
            .popup_container{
                .cart-description{
                    align-items: center;
                    .lists{
                        width: 100%;
                        margin-top: 16px;
                        padding-right: 0;
                        border-right: none;
                    }
                    .slider_option{
                        max-width: 120px;
                        svg{
                            width: 32px;
                            height: 32px;
                        }
                    }
                    .sub-text{
                        padding-left: 0;
                        border-left: none;
                    }
                }
            }
        }
    }
</style>
