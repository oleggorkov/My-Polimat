<template>
    <div class="item-cart mobile-item">
        <div class="item-cart_row item-image">
            <p class="item-cart_row-item-name"><b>2020- ЕВРОПА металлик</b> <br> мини 1-сп (1 х 297*445) <br> серебристо-белый</p>
            <button type="button" @click="$store.commit('ShowPopup', 'PopupSlider')">
                <img class="item-cart_row_image-case" src="assets/img/main-images/shares-images/item-image-1.png"
                     alt="2020- ЕВРОПА металлик мини 1-сп (1 х 297*445) серебристо-белый">
            </button>
        </div>

        <p class="item-cart_price">23 456 ₽</p>

        <div class="item-cart_description">
            <p>1 уп = 100 шт<span>+2 шт бесплатно</span></p>
            <b>от 12 345 ₽</b>
            <p>Свободно<span>Много</span></p>
        </div>

        <div class="item-cart_option">
            <div class="image-container">
                <button type="button">
                    <svg>
                        <use xlink:href="assets/img/sprite.svg#heart"></use>
                    </svg>
                </button>
                <span class="image-container_placeholder">В избранное</span>
            </div>
            <button type="button" class="item-cart_option-button"><a href="product.html">купить</a></button>
            <div class="image-container">
                <button type="button">
                    <svg>
                        <use xlink:href="assets/img/sprite.svg#graph"></use>
                    </svg>
                </button>
                <span class="image-container_placeholder">В сравнение</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {TheMask} from 'vue-the-mask'

    export default {
        name: "item-cart",
        components: {
            TheMask
        },
        data: function () {
            return{
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

<style lang="scss" scoped>
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

        .item-image{
            position: relative;
            cursor: pointer;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            a,button{
                width: 100%;
                height: auto;
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
        &_row{
            width: 100%;
            max-width: 360px;
            height: auto;
            &-item-name{
                margin-bottom: 16px;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
                text-align: center;
                color: #000000;
                max-width: 200px;
            }
        }
        &_price{
            width: 100%;
            text-align: center;
            margin: 8px 0;

            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            text-decoration-line: line-through;
            text-transform: uppercase;
            color: #CCCDD1;
        }
        &_description{
            width: 100%;
            height: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            b{
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 23px;
                text-align: center;
                text-transform: lowercase;
                color: #000000;
                width: 100%;
            }
            p{
                font-style: normal;
                font-weight: normal;
                font-size: 9px;
                line-height: 11px;
                color: #000000;
                min-width: 75px;
                span{
                    display: block;
                    color: $helper-color-blue;
                }
                &:first-of-type{
                    text-align: left;
                }
                &:last-of-type{
                    text-align: right;
                }
            }
        }
        &_option{
            width: 100%;
            height: auto;
            margin-top: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &-button{
                width: 100%;
                max-width: 180px;
                height: 30px;
                border: 1px solid $helper-color-blue;
                border-radius: 5px;

                color: $helper-color-blue;
                font-style: normal;
                font-weight: 900;
                font-size: 12px;
                line-height: 14px;
                text-align: center;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                transition: background ease 0.25s, color ease 0.25s;

                &:focus,&:hover{
                    outline: none;
                    color: #FFFFFF;
                    background: $helper-color-blue;
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
                    user-select: none;

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

    @media (max-width: 670px) {
        .item-cart{
            .item-image{
                flex-direction: row-reverse;
                justify-content: flex-end;
                align-items: flex-start;
                padding: 0 16px;
                button{
                    min-width: inherit;
                    width: auto;
                    img{
                        max-width: 120px;
                    }
                }
            }
            &_row{
                &-item-name{
                    margin-bottom: 0;
                    margin-left: 16px;
                    text-align: left;
                    max-width: 135px;
                    br{
                        display: none;
                    }
                }
            }
        }
    }
</style>
