<template>
    <transition tag="div" name="popup-options">
        <div class="popup popup-options" v-close-popup="true" v-if="state"
             @wheel="$store.commit('ShowPopup', null)">
            <div class="popup_container">
                <div class="popup-options_container">
                    <p class="popup-options_container-title">Инструмент для менеджера</p>
                    <p class="popup-options_container-sub-text">Быстрый заказ по категориям. При переходе по ссылкам ниже для вас
                        откроется самый популярный товар в выбранной категории, в котором вы сможете при необходимости
                        поменять параметры и сразу добавить его в корзину.</p>
                    <div class="popup-options_container-links">
                        <a href="">
                            <p>Календарные блоки</p>
                            <img src="assets/img/main-images/options-popup-images/calendars.png" alt="">
                        </a>
                        <a href="">
                            <p>Курсоры</p>
                            <img src="assets/img/main-images/options-popup-images/cursors.png" alt="">
                        </a>
                        <a href="">
                            <p>Проволка в нарезке</p>
                            <img src="assets/img/main-images/options-popup-images/wire.png" alt="">
                        </a>
                        <a href="">
                            <p>Бобина с проволокой 3:1</p>
                            <img src="assets/img/main-images/options-popup-images/bobbin.png" alt="">
                        </a>
                        <a href="">
                            <p>Пикколо</p>
                            <img src="assets/img/main-images/options-popup-images/piccolo.png" alt="">
                        </a>
                        <a href="">
                            <p>Ригель</p>
                            <img src="assets/img/main-images/options-popup-images/crossbar.png" alt="">
                        </a>
                        <a href="">
                            <p>Часовые механизны</p>
                            <img src="assets/img/main-images/options-popup-images/clockwork.png" alt="">
                        </a>
                        <a href="">
                            <p>Бобина с проволокой 2:1</p>
                            <img src="assets/img/main-images/options-popup-images/bobbin2.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "popupOptions",
        data: function(){
            return{
                state: false,
            }
        },
        mounted: function(){
          this.state = true;
        },
    }
</script>

<style lang="scss">
    @import "../../../assets/scss/utils/vars";

    .popup-options{
        .popup_container{
            position: absolute;
            right: calc(((100% - 1440px) / 2));
            top: calc(130px + 32px);
            .popup-options_container{
                background: white;
                width: 480px;

                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: flex-start;

                &-title{
                    font-size: 14px;
                    line-height: 16px;
                    color: #000000;
                }
                &-sub-text {
                    font-size: 10px;
                    line-height: 12px;
                    color: #A8A8A8;
                    margin-top: 12px;

                }
                &-links{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    margin-top: 24px;
                    a{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        width: 120px;
                        height: 82px;
                        margin-bottom: 16px;
                        &:hover{
                            p{
                                color: $main-color-red;
                            }
                        }
                        p{
                            white-space: nowrap;
                            font-size: 10px;
                            line-height: 12px;
                            color: #000000;
                            text-align: center;
                            transition: color ease 0.25s;
                        }
                    }
                }
            }

            &:before{
                content: "";
                display: block;
                position: absolute;
                top: 0;
                right: 18px;
                width: 0;
                height: 0;
                border-color: rgba(0,0,0,0) rgba(0,0,0,0) #fff;
                border-style: solid;
                border-width: 0 6px 8px;
                -webkit-transform: translateY(-100%);
                -ms-transform: translateY(-100%);
                transform: translateY(-100%);
            }
        }

        // ------------ vue animation classes ------------

        &-enter{
            opacity: 0;
            .popup_container{
                transform: translateY(32px);
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
                transform: translateY(-32px);
            }
        }

        // ------------ vue animation classes ------------
    }

    @media (max-width: 1600px) {
        .popup-options{
            .popup_container{
                right: calc(((100% - 1440px) / 2) + 50px);
                top: calc(190px + 32px);
            }
        }
    }

    @media (max-width: 1280px) {
        .popup-options{
            .popup_container{
                right: 50px;
                top: calc(130px + 32px);
            }
        }
    }

    @media (max-width: 980px) {
        .popup-options{
            .popup_container{
                top: calc(190px + 32px);
            }
        }
    }

    @media (max-width: 670px) {
        .popup-options{
            overflow-y: scroll;
            .popup_container{
                right: 16px;
                left: 16px;
                top: calc(138px);
                margin-bottom: 32px;
                padding: 24px 12px;
                .popup-options_container{
                    width: 100%;
                    &-links{
                        justify-content: space-evenly;
                    }
                }
            }
        }
    }
</style>
