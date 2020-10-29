<template>
    <transition name="mobile-menu">
        <div class="mobile-menu" @click="closeMenu" v-if="state">
            <div class="mobile-menu_container">
                <button class="menu-close" type="button" @click="$store.commit('ShowPopup', null)">
                    <span></span>
                    <span></span>
                </button>


                <ul class="list-black">
                    <li><a href="catalogue.html">Каталог</a></li>
                    <li><a href="account-my_order.html">Личный кабинет</a></li>
                    <li><a href="#">Информация</a> </li>
                    <li><a href="#">Контакты</a></li>
                </ul>

                <hr>

                <ul class="list-gray">
                    <li><a href="#">Праздники</a></li>
                    <li><a href="viewed.html">Вы смотрели</a></li>
                    <li><a href="favorites.html">Избранное</a></li>
                    <li><a href="compare.html">Сравнить</a></li>
                    <li><a href="basket.html">Корзина</a></li>
                    <li><a href="account.html">Войти</a></li>
                </ul>

                <div class="contact">
                    <button><svg><use xlink:href="assets/img/sprite.svg#phone"></use></svg> +7 (495) 287-33-77</button>
                    <a href="mailto:info@polimat.ru">info@polimat.ru</a>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "mobile-menu",
        data: function(){
            return{
                state: false,
            }
        },
        mounted: function(){
            this.state = true;
        },
        methods: {
            closeMenu: function() {
                if (!document.querySelector('.mobile-menu_container').contains(event.target)){
                    this.$store.commit('ShowPopup', null)
                }
            },
        }
    }
</script>

<style lang="scss">
    @import "../../../assets/scss/utils/vars";

    .mobile-menu{
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 100;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        cursor: pointer;
        &_container{
            height: 100%;
            width: 100%;
            max-width: 420px;
            padding: 64px 75px;
            background: white;
            position: relative;
            cursor: auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            ul{
                width: auto;
                height: auto;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                li{
                    a{
                        font-style: normal;
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 21px;
                        &:hover{
                            text-decoration: underline;
                        }
                    }
                }
            }
            hr{
                margin: 24px 0;
                background: #C4C4C4;
                width: 100%;
                min-width: 200px;
            }
            .list-black{
                li{
                    margin-top: 24px;
                    &:first-of-type{
                        margin-top: 0;
                    }
                    a{
                        color: #000000;
                    }
                }
            }

            .list-gray{
                li{
                    margin-top: 18px;
                    &:first-of-type{
                        margin-top: 0;
                    }
                    a{
                        color: #7E818F;
                    }
                }
            }

            .menu-close{
                min-width: inherit;
                position: absolute;
                top: 24px;
                right: 64px;
                width: 32px;
                height: 32px;
                border: none;
                &:hover, &:focus{
                    outline: none;
                }
                span{
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 32px;
                    height: 4px;
                    border-radius: 2px;
                    background: $helper-color-blue;
                    &:first-of-type{
                        transform: translateY(-50%) translateX(-50%) rotate(45deg);
                    }
                    &:last-of-type{
                        transform: translateY(-50%) translateX(-50%) rotate(-45deg);
                    }
                }
            }

            .contact{
                flex: 1 0 auto;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex-direction: column;
                button{
                    width: 170px;
                    height: 30px;
                    border: 1px solid $helper-color-blue;
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: ease background 0.25s, ease color 0.25s;

                    font-style: normal;
                    font-weight: normal;
                    font-size: 10px;
                    line-height: 12px;
                    text-transform: uppercase;
                    color: #000000;

                    svg{
                        width: 14px;
                        height: 14px;
                        fill: $helper-color-blue;
                        margin-right: 8px;
                    }

                    &:hover, &:focus{
                        background: $helper-color-blue;
                        color: white;
                        outline: none;
                        svg{
                            fill: white;
                        }
                    }
                }
                a{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 14px;
                    color: #7E818F;
                    margin-top: 12px;
                }
            }
        }

        // ------------ vue animation classes ------------

        &-enter{
            background: rgba(0, 0, 0, 0);
            .mobile-menu_container{
                transform: translateX(100%);
            }
        };

        &-enter-active{
            transition: ease background 0.75s;
            .mobile-menu_container{
                transition: ease transform 0.75s;
            }
        }

        &-leave-active{
            transition: ease background 0.75s;
            background: rgba(0, 0, 0, 0);
            .mobile-menu_container{
                transition: ease transform 0.75s;
                transform: translateX(100%);
            }
        }

        // ------------ vue animation classes ------------
    }

    @media (max-width: 670px){
        .mobile-menu{
            &_container{
                padding: 48px 32px;
                max-width: 275px;

                hr{
                    min-width: 180px;
                }
                .menu-close{
                    top: 24px;
                    right: 24px;
                }

                .list-black{
                    li{
                        margin-top: 16px;
                        a{
                            font-size: 12px;
                            line-height: 14px;
                        }
                    }
                }

                .list-gray{
                    li{
                        margin-top: 12px;
                        a{
                            font-size: 12px;
                            line-height: 14px;
                        }
                    }
                }
            }
        }
    }
</style>
