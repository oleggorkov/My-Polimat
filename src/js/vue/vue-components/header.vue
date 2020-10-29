<template>
    <header class="header" id="top">
        <div class="header_row">
            <a href="index.html" class="header_row-logo">
                <img src="assets/img/header-logo.svg" alt="">
            </a>
            <nav>
                <ul class="links-list">
                    <li>
                        <a href="catalogue.html">Каталог</a>
                    </li>
                    <li>
                        <a href="#">Информация</a>
                    </li>
                    <li>
                        <a href="account.html">Личный кабинет</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                </ul>
            </nav>
            <form class="input-gray">
                <input id="header-search" type="text"  placeholder="Поиск">
                <button type="submit">
                    <svg>
                        <use xlink:href="assets/img/sprite.svg#search"></use>
                    </svg>
                </button>
            </form>
            <ul class="icons-list">
                <li>
                    <a href="#">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#gift"></use>
                        </svg>
                        <span>Праздники</span>
                    </a>
                </li>
                <li>
                    <a href="viewed.html">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#binoculars"></use>
                        </svg>
                        <span>Вы смотрели</span>
                    </a>
                </li>
                <li>
                    <a href="favorites.html">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#heart"></use>
                        </svg>
                        <span>Избранное</span>
                    </a>
                </li>
                <li>
                    <a href="compare.html">
                        <svg >
                            <use xlink:href="assets/img/sprite.svg#graph"></use>
                        </svg>
                        <span>Сравнить</span>
                    </a>
                </li>
                <li>
                    <a href="basket.html">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#shopping-cart"></use>
                        </svg>
                        <span>Корзина</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#enter"></use>
                        </svg>
                        <span>Войти</span>
                    </a>
                </li>
            </ul>
            <div class="contact">
                <a class="contact-tel" href="tel:+7 (495) 287-33-77">+7 (495) 287-33-77</a>
                <a class="contact-mail" href="mailto:info@polimat.ru">info@polimat.ru</a>
            </div>
            <div @click="$store.commit('ShowPopup', 'mobile-menu')" class="mobile-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="header_row mobile-search">
            <form class="input-gray">
                <input id="header-search-mobile" type="text"  placeholder="Поиск">
                <button type="submit">
                    <svg>
                        <use xlink:href="assets/img/sprite.svg#search"></use>
                    </svg>
                </button>
            </form>
        </div>
        <div class="header_row nav-list">
            <nav>
                <ul>
                    <li class="active-link">
                        <a href="#">Блоки для календарей</a>
                    </li>
                    <li>
                        <a href="#">Курсоры</a>
                    </li>
                    <li>
                        <a href="#">Комплектующие для календарей</a>
                    </li>
                    <li>
                        <a href="#">Для ежедневников</a>
                    </li>
                    <li>
                        <a href="#">Расходные материалы</a>
                    </li>
                    <li>
                        <a href="#">Оборудование</a>
                    </li>
                    <li>
                        <a href="#">Создать календарь</a>
                    </li>
                    <li class="dots"  @click="$store.commit('ShowPopup', 'PopupOptions')" >
                        <button type="button">
                            <svg>
                                <use xlink:href="assets/img/sprite.svg#dots"></use>
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="header_row nav-list_mobile">
            <div class="nav-list_mobile-buttons">
                <button type="button">Каталог <svg><use xlink:href="assets/img/sprite.svg#arrow-small"></use></svg></button>
                <button type="button"  @click="$store.commit('ShowPopup', 'PopupOptions')">
                    <svg><use xlink:href="assets/img/sprite.svg#dots"></use></svg>
                </button>
            </div>

            <div class="nav-list_mobile-case">
                <ul>
                    <li class="main-list">
                        <span>Блоки для календарей</span>
                        <ul class="sub-list">
                            <li><a href="catalogue.html">Все календари</a></li>
                            <li><a href="catalogue.html">Мелованные трио</a></li>
                            <li><a href="catalogue.html">Офсетные трио</a></li>
                            <li><a href="catalogue.html">Блочные</a></li>
                            <li><a href="catalogue.html">Три в одном</a></li>
                        </ul>
                    </li>
                    <li class="main-list">
                        <span>Курсоры</span>
                        <ul class="sub-list">
                            <li><a href="catalogue.html">Все календари</a></li>
                            <li><a href="catalogue.html">Мелованные трио</a></li>
                            <li><a href="catalogue.html">Офсетные трио</a></li>
                            <li><a href="catalogue.html">Блочные</a></li>
                            <li><a href="catalogue.html">Три в одном</a></li>
                        </ul>
                    </li>
                    <li class="main-list">
                        <span>Для ежедневников</span>
                        <ul class="sub-list">
                            <li><a href="catalogue.html">Все календари</a></li>
                            <li><a href="catalogue.html">Мелованные трио</a></li>
                            <li><a href="catalogue.html">Офсетные трио</a></li>
                            <li><a href="catalogue.html">Блочные</a></li>
                            <li><a href="catalogue.html">Три в одном</a></li>
                        </ul>
                    </li>
                    <li class="main-list">
                        <span>Комплектующие для календарей</span>
                        <ul class="sub-list">
                            <li><a href="catalogue.html">Все календари</a></li>
                            <li><a href="catalogue.html">Мелованные трио</a></li>
                            <li><a href="catalogue.html">Офсетные трио</a></li>
                            <li><a href="catalogue.html">Блочные</a></li>
                            <li><a href="catalogue.html">Три в одном</a></li>
                        </ul>
                    </li>
                    <li class="main-list">
                        <span>Оборудование</span>
                        <ul class="sub-list">
                            <li><a href="catalogue.html">Все календари</a></li>
                            <li><a href="catalogue.html">Мелованные трио</a></li>
                            <li><a href="catalogue.html">Офсетные трио</a></li>
                            <li><a href="catalogue.html">Блочные</a></li>
                            <li><a href="catalogue.html">Три в одном</a></li>
                        </ul>
                    </li>
                    <li class="main-list">
                        <span>Создать календарь</span>
                        <ul class="sub-list">
                            <li><a href="catalogue.html">Все календари</a></li>
                            <li><a href="catalogue.html">Мелованные трио</a></li>
                            <li><a href="catalogue.html">Офсетные трио</a></li>
                            <li><a href="catalogue.html">Блочные</a></li>
                            <li><a href="catalogue.html">Три в одном</a></li>
                        </ul>
                    </li>
                    <li class="main-list">
                        <span>Расходные материалы</span>
                        <ul class="sub-list">
                            <li><a href="catalogue.html">Все календари</a></li>
                            <li><a href="catalogue.html">Мелованные трио</a></li>
                            <li><a href="catalogue.html">Офсетные трио</a></li>
                            <li><a href="catalogue.html">Блочные</a></li>
                            <li><a href="catalogue.html">Три в одном</a></li>
                        </ul>
                    </li>
                    <li class="main-list">
                        <span>Инструмент менеджера</span>
                        <ul class="sub-list">
                            <li><a href="catalogue.html">Все календари</a></li>
                            <li><a href="catalogue.html">Мелованные трио</a></li>
                            <li><a href="catalogue.html">Офсетные трио</a></li>
                            <li><a href="catalogue.html">Блочные</a></li>
                            <li><a href="catalogue.html">Три в одном</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "header-component"
    }
</script>

<style lang="scss">
    @import "../../assets/scss/utils/vars";

    .header{
        width: 100%;
        height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: white;
        z-index: 10;
        transition: transform ease 0.5s;
        &-hidden{
            transform: translateY(-100%);
        }
        &_row{
            width: 100%;
            max-width: 1440px;
            height: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 0;

            .links-list{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 0 20px;
                li{
                    a{
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 16px;
                        color: #000000;
                        transition: color ease 0.25s;
                        &:focus{
                            color: $main-color-blue;
                        }
                        &:hover{
                            color: $main-color-blue;
                        }
                    }
                    margin-right: 24px;
                    &:last-of-type{
                        margin-right: 0;
                    }
                }
            }
            .icons-list{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 40px;
                margin: 0 12px;
                li{
                    height: 100%;
                    margin-right: 24px;

                    &:last-of-type{
                        margin-right: 0;
                    }

                    a{
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;

                        .stroke{
                            fill: none;
                            stroke: $main-color-blue;
                        }

                        svg{
                            width: 20px;
                            height: 20px;
                            fill: $main-color-blue;
                        }

                        span{
                            font-style: normal;
                            font-weight: 400;
                            font-size: 10px;
                            line-height: 12px;
                            letter-spacing: 0.05em;
                            color: #8E9099;
                            transition: color ease 0.25s;
                        }

                        &:hover{
                            .stroke{
                                fill: none;
                                stroke: black;
                            }
                            svg{
                                fill: black;
                            }
                            span{
                                color: #000000;
                            }
                        }

                        &:focus{
                            svg{
                                fill: $main-color-blue;
                            }
                            span{
                                color: $main-color-blue;
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
            .contact{
                height: 40px;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-start;
                padding-left: 24px;
                border-left: 1px solid #C4C4C4;
                &-tel{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 16px;
                    color: $main-color-blue;
                    margin-bottom: 8px;
                }
                &-mail{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 16px;
                    color: #8D9099;
                }
            }
        }

        .nav-list{
            width: 100%;
            height: 50px;
            max-width: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
            background: $main-color-blue;
            nav{
                max-width: 1440px;
                width: 100%;
                height: 50px;
                ul{
                    width: 100%;
                    height: 50px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .active-link{
                        background: #0618c0;
                    }
                    .dots{
                        min-width: 48px;
                        max-width: 48px;
                        position: relative;
                        button{
                            padding: 0 8px;
                            min-width: inherit;
                            border: none;
                            height: 50px;
                            svg{
                                width: 20px;
                                height: 20px;
                                fill: white;
                            }
                            &:focus{
                                outline: none;
                                svg{
                                    fill: rgba(255, 255, 255, 0.51);
                                }
                            }
                        }
                    }
                    li{
                        height: 50px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        transition: background ease 0.5s;
                        &:hover{
                            background:  #0618c0;
                        }
                        &:nth-of-type(3){
                            min-width: 280px;
                        }
                        a{
                            font-style: normal;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 16px;
                            text-align: center;
                            color: #FFFFFF;
                            width: auto;
                            height: 50px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: 0 12px;
                            white-space: nowrap;
                            &:hover{
                                svg{
                                    fill: rgba(255, 255, 255, 0.5);
                                }
                            }
                        }
                    }
                }
            }
            &_mobile{
                display: none;
            }
        }
        .mobile-search{
            display: none;
        }
        .mobile-btn{
            display: none;
        }
    }

    @media (max-width: 1600px){
        .header{
            height: 190px;
            &_row{
                padding: 16px 50px;
                &:first-of-type{
                    padding: 16px 50px 0 50px;
                    nav{
                        width: 100%;
                        margin: 0 32px;
                    }
                }
                .input-gray{
                    display: none;
                }
                .links-list{
                    li{
                        margin-right: 12px;
                        a{
                            white-space: nowrap;
                        }
                    }
                }
                .icons-list{
                    width: auto;
                    margin: 0 32px 0 0;
                    li{
                        margin-right: 16px;
                        width: auto;
                        a{
                            span{
                                white-space: nowrap;
                            }
                        }
                    }
                }
                .contact{
                    min-width: 160px;
                }
            }
            .mobile-search{
                padding: 0 50px;
                margin: 16px 0;
                display: block;
                .input-gray{
                    display: block;
                    width: 100%;
                }
            }
            .nav-list{
                padding: 0;
                nav{
                    max-width: 1440px;
                    padding: 0 50px;
                }
            }
        }
    }

    @media (max-width: 1280px){
        .header{
            height: 130px;
            nav{
                display: none;
            }
            .mobile-search{
                display: none;
            }
            .mobile-btn{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-left: 32px;
                min-width: 48px;
                cursor: pointer;
                span{
                    width: 32px;
                    height: 4px;
                    background: $main-color-blue;
                    border-radius: 2px;
                    &:nth-of-type(2){
                        margin: 6px 0;
                    }
                }
            }
            .nav-list{
                margin-top: 16px;
                nav{
                    display: flex;
                    width: 100%;
                    ul{
                        li{
                            a{
                                white-space: initial;
                                font-size: 12px;
                            }
                            &:nth-of-type(3){
                                min-width: 150px;
                            }
                        }
                    }
                }
            }
            .icons-list{
                margin: 0;
            }
            &_row{
                .input-gray{
                    display: block;
                    width: 100%;
                    margin: 0 24px;
                    min-width: inherit;
                }
                .contact{
                    display: none;
                }
            }
        }
    }

    @media (max-width: 980px){
        .header{
            height: 214px;
            padding-bottom: 24px;
            nav{
                display: none;
            }
            .nav-list{
                display: none;
            }
            .icons-list{
                display: none;
            }
            .mobile-search{
                display: block;
                padding: 0 50px;
            }
            &_row{
                .input-gray{
                    display: none;
                    margin: 0;
                }
                .contact{
                    display: none;
                }
                &:first-of-type{
                    padding: 24px 50px 0 50px;
                }
            }
            .nav-list_mobile{
                width: calc(100% - 100px);
                height: 48px;
                padding: 0;
                margin: 0 auto;
                background: $main-color-blue;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                z-index: 25;

                &-buttons{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    button{
                        font-style: normal;
                        font-weight: 500;
                        font-size: 12px;
                        line-height: 14px;
                        text-align: center;
                        color: #FFFFFF;
                        min-width: inherit;
                        border: none;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        cursor: auto;
                        &:first-of-type{
                            justify-content: center;
                            padding: 0 48px 0 96px;
                            svg{
                                width: 16px;
                                height: 8px;
                                stroke: white;
                                fill: transparent;
                                margin-left: 8px;
                            }
                        }
                        &:last-of-type{
                            max-width: 48px;
                            justify-content: center;
                            svg{
                                width: 24px;
                                height: 24px;
                                fill: white;
                            }
                        }
                        &:focus{
                            outline: none;
                        }
                    }
                }

                .open{
                    border-top: 1px solid white;
                    transition: max-height ease 0.5s, border-top ease 0s 0s;
                }
                &-case{
                    position: absolute;
                    top: 46px;
                    left: 0;
                    right: 0;
                    width: 100%;
                    height: auto;
                    max-height: 0;
                    background: $main-color-blue;
                    border-top: 1px solid transparent;
                    transition: max-height ease 0.5s, border-top ease 0s 0.5s;
                    padding: 0 48px 0 96px;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    overflow: hidden;
                    ul{
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: flex-start;
                        padding: 12px 0;
                        width: 100%;
                        .active{
                            span{
                                svg{
                                    transform: rotate(180deg);
                                    opacity: 1;
                                }
                            }
                        }
                        li{
                            margin-top: 8px;
                            padding-bottom: 8px;
                            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                            width: 100%;
                            height: auto;
                            &:last-of-type{
                                margin-bottom: 8px;
                            }
                            span{
                                width: 100%;
                                height: auto;

                                display: flex;
                                justify-content: space-between;
                                align-items: center;

                                font-style: normal;
                                font-weight: 500;
                                font-size: 14px;
                                line-height: 24px;
                                color: #FFFFFF;
                                cursor: pointer;
                                svg{
                                    width: 16px;
                                    height: 16px;
                                    stroke: #fff;
                                    fill: rgba(0,0,0,0);
                                    opacity: 0.5;

                                    transition: transform ease 0.25s, opacity ease 0.25s;
                                }
                            }
                            .sub-list{
                                padding: 0 0 0 16px;
                                overflow: hidden;
                                height: auto;
                                max-height: 0;
                                transition: max-height ease 0.75s;
                                li{
                                    margin-top: 4px;
                                    margin-bottom: 4px;
                                    padding-bottom: 0;
                                    height: 16px;

                                    display: flex;
                                    justify-content: flex-start;
                                    align-items: center;

                                    border-bottom: none;
                                    a{
                                        font-style: normal;
                                        font-weight: normal;
                                        font-size: 10px;
                                        line-height: 16px;
                                        letter-spacing: 0.05em;
                                        color: #FFFFFF;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 670px){
        .header{
            height: 138px;
            padding-bottom: 16px;
            &_row{
                &-logo{
                    width: auto;
                    height: 32px;
                    img{
                        width: auto;
                        height: 100%;
                    }
                }
                &:first-of-type{
                    padding: 8px 16px 0 16px;
                }
                .mobile-btn{
                    min-width: 24px;
                    margin-left: 0;
                    margin-right: 12px;
                    span{
                        width: 24px;
                        height: 3px;
                        &:nth-of-type(2){
                            margin: 4px 0;
                        }
                    }
                }
            }
            .mobile-search{
                padding: 0 16px;
                margin: 8px 0;
                .input-gray{
                    min-height: 32px;
                    input{
                        min-height: 32px
                    }
                    button{
                        right: 12px;
                        svg{
                            width: 16px;
                            height: 16px;
                        }
                    }
                }
            }
            .nav-list_mobile{
                width: calc(100% - 32px);
                height: 32px;
                &-case{
                    padding: 0 16px;
                    top: 32px;
                }
                &-buttons{
                    button{
                        &:last-of-type{
                            svg{
                                width: 16px;
                                height: 16px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>