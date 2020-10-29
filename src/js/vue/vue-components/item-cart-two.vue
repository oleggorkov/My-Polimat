<template>
    <transition name="item-cart-two">
        <div class="item-cart mobile-item">
            <div v-if="this.WindowState">
                <a href="product.html" class="item-cart_item-name"><b>2020- ЕВРОПА металлик</b> <br> мини 1-сп (1 х 297*445) <br> серебристо-белый</a>
                <div class="item-cart_image">
                    <a href="product.html">
                        <img class="item-cart_row_image-case" src="assets/img/main-images/shares-images/item-image-big-1.png"
                             alt="2020- ЕВРОПА металлик мини 1-сп (1 х 297*445) серебристо-белый">
                    </a>

                    <div class="item-cart_image-options">
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
                        <button type="button" v-tooltip="'Увеличить'" @click="$store.commit('ShowPopup', 'PopupSlider')" >
                            <svg >
                                <use xlink:href="assets/img/sprite.svg#magnifier"/>
                            </svg>
                        </button>
                        <button type="button" v-tooltip="'Аналоги'">
                            <svg>
                                <use xlink:href="assets/img/sprite.svg#copy2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <p class="item-cart_price">
                    28,80 - 29,80* ₽
                    <span class="item-cart_price-helper-text">* цена за 1 компл., зависит от оборота</span>
                </p>
            </div>

            <div class="mobile-case">
                <div class="mobile-case_column">
                    <a href="product.html">
                        <img class="item-cart_row_image-case" src="assets/img/main-images/shares-images/item-image-big-1.png"
                             alt="2020- ЕВРОПА металлик мини 1-сп (1 х 297*445) серебристо-белый">
                    </a>
                </div>
                <div class="mobile-case_column">
                    <div class="item-cart_image-options">
                        <button type="button">
                            <svg>
                                <use xlink:href="assets/img/sprite.svg#copy2"></use>
                            </svg>
                        </button>
                        <button type="button">
                            <svg>
                                <use xlink:href="assets/img/sprite.svg#heart"></use>
                            </svg>
                        </button>
                        <button type="button" @click="$store.commit('ShowPopup', 'PopupSlider')">
                            <svg >
                                <use xlink:href="assets/img/sprite.svg#magnifier"></use>
                            </svg>
                        </button>
                        <button type="button">
                            <svg >
                                <use xlink:href="assets/img/sprite.svg#graph"></use>
                            </svg>
                        </button>
                    </div>
                    <a href="product.html" class="item-cart_item-name"><b>2020- ЕВРОПА металлик</b> <br> мини 1-сп (1 х 297*445) <br> серебристо-белый</a>
                    <p class="item-cart_price">
                        28,80 - 29,80* ₽
                        <span class="item-cart_price-helper-text">* цена за 1 компл., зависит от оборота</span>
                    </p>
                </div>
            </div>

            <div class="item-cart_options desc-option">
                <div class="item-cart_options-row">
                    <button type="button" class="item-cart_options-row-button"
                            @click="$store.commit('ShowPopup', {name: 'PopupDescription', ItemType: ItemType})">
                        Перейти к покупке
                    </button>
                </div>
                <div class="item-cart_options-row">
                    <div class="item-cart_options-row-option active-option">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#okay"/>
                        </svg>
                        <p>Свободно много</p>
                    </div>
                    <div class="item-cart_options-row-option active-option">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#hourglass"/>
                        </svg>
                        <p>Ожидаем 20.12.2019 (чт)</p>
                    </div>
                    <div class="item-cart_options-row-option active-option">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#padlock"/>
                        </svg>
                        <p>В резерве 550 шт</p>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import {TheMask} from 'vue-the-mask'

    export default {
        name: "item-cart-two",
        components: {
            TheMask
        },
        props: ['ItemType'],
        mounted: function(){
            this.state = true;
        },
        data: function () {
            return{
                WindowState: window.innerWidth > 670,
                InputCounter: 1,
                mask: {
                    mask: Number,
                    min: 1,
                    max: 9999,
                },
            }
        },
        methods: {
            checkInput: function(){
                if (isNaN(this.InputCounter)){
                    this.InputCounter = 1
                }
            },
            plusValue: function(){
                this.InputCounter < 9999 ? this.InputCounter++ : this.InputCounter = 9999;
            },
            minusValue: function(){
                this.InputCounter > 1 ? this.InputCounter-- : this.InputCounter = 1;
            }
        },
    }
</script>

<style lang="scss">
    @import "../../assets/scss/utils/vars";

    .item-cart{
        width: calc(1440px / 5);
        min-width: calc(1440px / 5);
        height: auto;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 16px 8px;

        transition: transform ease 0.5s;

        & > div{
            width: 100%;
        }

        &_image{
            width: 100%;
            height: auto;

            position: relative;
            cursor: pointer;
            margin-top: 16px;
            border: none;

            a,button{
                width: 100%;
                height: auto;
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;

                &:focus{
                    outline: none;
                }

                img{
                    width: 100%;
                    max-width: 130px;
                    height: 100%;
                    object-fit: cover;
                }
            }

            &-options{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;

                position: absolute;
                right: 16px;
                top: 0;

                button{
                    margin-top: 8px;
                    border: none;
                    min-width: auto;

                    position: relative;

                    &:first-of-type{
                        margin-top: 0;
                    }

                    .circle{
                        stroke: #797E87;
                        fill: #797E87;
                    }

                    .stroke{
                        stroke: #797E87;
                        fill: none;
                    }

                    svg{
                        width: 24px;
                        height: 24px;
                        fill: #797E87;
                    }
                }
            }
        }
        &_item-name{
            display: block;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            color: #000000;
            max-width: 200px;
            margin: 0 auto;
        }
        &_price{
            width: auto;
            text-align: center;
            margin: 8px 0;

            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 23px;
            text-transform: lowercase;
            color: #000000;

            position: relative;

            &-helper-text{
                width: 100%;
                height: auto;
                display: block;

                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                text-align: center;
                color: #797E87;
                text-transform: none;
            }
        }
        &_options{
            width: 100%;
            height: auto;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &-row{
                width: 100%;
                height: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
                &:first-of-type{
                    margin-bottom: 16px;
                }
                &-option{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    p{
                        font-style: normal;
                        font-weight: normal;
                        font-size: 11px;
                        line-height: 12px;
                        color: #000000;
                    }
                    svg{
                        width: 24px;
                        height: 24px;
                        margin-right: 12px;
                        fill: #000000;
                    }
                }
                &-button{
                    width: 100%;
                    height: 30px;
                    border: 1px solid $main-color-blue;
                    border-radius: 5px;

                    color: $main-color-blue;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 14px;
                    text-align: center;
                    transition: background ease 0.25s, color ease 0.25s;

                    &:focus,&:hover{
                        outline: none;
                        color: #FFFFFF;
                        background: $main-color-blue;
                    }
                }
                .active-option{
                    svg{
                        fill: $main-color-blue;
                    }
                }
                .image-container{
                    position: relative;
                    &:first-of-type{
                        .image-container_placeholder{
                            left: 0;
                        }
                    }
                    &:last-of-type{
                        .image-container_placeholder{
                            right: 0;
                        }
                    }
                    button{
                        min-width: inherit;
                        min-height: inherit;
                        height: 28px;
                        border: none;
                        svg{
                            width: 20px;
                            height: 20px;
                            fill: #CCCDD1;
                            pointer-events: none;
                        }
                        .stroke{
                            stroke: #CCCDD1;
                        }
                        .circle{
                            stroke: #CCCDD1;
                            fill: #CCCDD1;
                        }
                        .magnifier{
                            stroke: #cccdd1;
                            fill: none;
                        }
                        &:focus{
                            outline: none;
                            ~.image-container_placeholder{
                                color: rgb(130, 131, 135);
                                background: rgb(255, 255, 255);
                                border: 1px solid rgb(130, 131, 135);
                                transition: color ease 0.25s 0.5s, border ease 0.25s 0.5s, background ease 0.25s 0.5s;
                            }
                            svg{
                                fill: $helper-color-blue;
                            }
                            .stroke{
                                stroke: $helper-color-blue;
                            }
                            .circle{
                                stroke: $helper-color-blue;
                                fill: $helper-color-blue;
                            }
                            .magnifier{
                                stroke: $helper-color-blue;
                                fill: none;
                            }
                        }
                        &:hover{
                            ~.image-container_placeholder{
                                color: rgb(130, 131, 135);
                                background: rgb(255, 255, 255);
                                border: 1px solid rgb(130, 131, 135);
                                transition: color ease 0.25s 0.5s, border ease 0.25s 0.5s, background ease 0.25s 0.5s;
                            }
                            svg{
                                fill: $helper-color-blue;
                            }
                            .stroke{
                                stroke: $helper-color-blue;
                            }
                            .circle{
                                stroke: $helper-color-blue;
                                fill: $helper-color-blue;
                            }
                            .magnifier{
                                stroke: $helper-color-blue;
                                fill: none;
                            }
                        }
                    }
                    .image-container_placeholder{
                        background: rgba(255, 255, 255, 0);
                        border: 1px solid rgba(204, 205, 209, 0);
                        box-sizing: border-box;
                        border-radius: 3px;
                        z-index: 15;
                        position: absolute;
                        width: 80px;
                        height: 24px;
                        padding: 0 4px;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        top: -32px;

                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 7px;
                        text-align: center;
                        color: rgba(204, 205, 209, 0);
                        white-space: nowrap;

                        transition: color ease 0.25s, border ease 0.25s, background ease 0.25s;
                    }
                }
            }
        }
    }

    .mobile-case{
        display: none;
    }

    @media (max-width: 670px) {
        .mobile-case{
            width: 100%;
            height: auto;

            display: flex;
            justify-content: space-between;
            align-items: center;

            &_column{
                width: 50%;
                height: auto;

                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;

                &:first-of-type{
                    & > a{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }

                & > button,& > a{
                    min-width: auto;
                    width: 100%;
                    height: auto;
                    border: none;
                    margin: 0;

                    img{
                        width: auto;
                        height: 115px;
                    }
                }

                .item-cart_item-name{
                    text-align: left;
                    font-size: 12px;
                    line-height: 14px;
                }

                .item-cart_price{
                    font-size: 18px;
                    line-height: 21px;
                    margin: 16px 0 8px 0;
                    &-helper-text{
                        font-size: 7px;
                        line-height: 8px;
                    }
                }

                .item-cart_image-options{
                    position: relative;

                    width: 100%;
                    height: auto;
                    margin-bottom: 16px;
                    right: auto;

                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;

                    button{
                        margin-top: 0;
                        margin-right: 8px;
                        svg{
                            width: 32px;
                            height: 32px;
                        }
                    }
                }
            }
        }
    }
</style>
