<template>
    <aside class="catalogue-list_main-aside">
        <ul>
            <li>
                <button class="list-toggle" type="button">
                    Цена
                    <span class="svg-case">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#arrow-small"></use>
                        </svg>
                    </span>
                </button>
                <div class="option-container option-price">
                    <div class="option-price_row">
                        <the-mask v-model="filter.price.current[0]" :mask="'###'"/>
                        <the-mask v-model="filter.price.current[1]" :mask="'###'"/>
                    </div>
                    <div class="option-price_row">
                        <vue-slider v-model="filter.price.current" :min="filter.price.min"
                                    :max="filter.price.max"
                                    :tooltip="'none'" :dotSize="10"/>
                    </div>
                </div>
            </li>
            <li>
                <button class="list-toggle" type="button">
                    Год
                    <span class="svg-case">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#arrow-small"></use>
                        </svg>
                    </span>
                </button>
                <div class="option-container option-age">
                    <button type="button" class="btn-primary btn-primary-active">
                        2020
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        2019
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                </div>
            </li>
            <li>
                <button class="list-toggle" type="button">
                    Вид
                    <span class="svg-case">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#arrow-small"></use>
                        </svg>
                    </span>
                </button>
                <div class="option-container option-type">
                    <div class="option-type_container active">
                        <button type="button">
                            <span>Трио 1-сп</span>
                            <svg>
                                <use xlink:href="assets/img/sprite.svg#catalogue-filter_size-type-1"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="option-type_container">
                        <button type="button">
                            <span>Трио 3-сп</span>
                            <svg>
                                <use xlink:href="assets/img/sprite.svg#catalogue-filter_size-type-2"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="option-type_container">
                        <button type="button">
                            <span>Quattro</span>
                            <svg>
                                <use xlink:href="assets/img/sprite.svg#catalogue-filter_size-type-3"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="option-type_container">
                        <button type="button">
                            <span>«3 в 1»</span>
                            <svg>
                                <use xlink:href="assets/img/sprite.svg#catalogue-filter_size-type-4"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </li>
            <li>
                <button class="list-toggle" type="button">
                    Размер
                    <span class="svg-case">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#arrow-small"></use>
                        </svg>
                    </span>
                </button>
                <div class="option-container option-size">
                    <button type="button" class="btn-primary btn-primary-active">
                        Мини 1-сп (297*445)
                        <span class="btn-primary_cross">
                            <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Микро (175*265)
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Миди 1-сп (335*490)
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Ангстрем (1 х 110*170)
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Мини 1-сп ( 297*342)
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                </div>
            </li>
            <li>
                <button class="list-toggle" type="button">
                    Цветовая гамма
                    <span class="svg-case">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#arrow-small"></use>
                        </svg>
                    </span>
                </button>
                <div class="option-container option-color">
                    <button class="option-color_btn" type="button"
                            v-for="(item, index) in filter.color.colors"
                            @click="filter.color.current = index">
                        <span :style="'background: ' + item"></span>
                    </button>
                </div>
            </li>
            <li>
                <button class="list-toggle" type="button">
                    Цвет
                    <span class="svg-case">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#arrow-small"></use>
                        </svg>
                    </span>
                </button>
                <div class="option-container option-gamma">
                    <button type="button"
                            v-for="(item, index) in 38"
                            @click="filter.gamma = index">
                        <span></span>
                    </button>
                </div>
            </li>
            <li>
                <button class="list-toggle" type="button">
                    Серия
                    <span class="svg-case">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#arrow-small"></use>
                        </svg>
                    </span>
                </button>
                <div class="option-container option-series">
                    <button type="button" class="btn-primary btn-primary-active">
                        Европа металлик
                        <span class="btn-primary_cross">
                            <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Классика s-металлик
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Европа арт
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Классика мелованные
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Европа s-металлик
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                </div>
            </li>
            <li>
                <button class="list-toggle" type="button">
                    Кол-во спиралей
                    <span class="svg-case">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#arrow-small"></use>
                        </svg>
                    </span>
                </button>
                <div class="option-container option-spirals">
                    <button type="button" class="btn-primary btn-primary-active">
                        1
                        <span class="btn-primary_cross">
                            <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        2
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        3
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        4
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                </div>
            </li>
            <li>
                <button class="list-toggle" type="button">
                    Бумага
                    <span class="svg-case">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#arrow-small"></use>
                        </svg>
                    </span>
                </button>
                <div class="option-container option-paper">
                    <button type="button" class="btn-primary btn-primary-active">
                        Офсетная 80 г/м2
                        <span class="btn-primary_cross">
                            <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Мелованная 90 г/м2
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                </div>
            </li>
            <li>
                <button class="list-toggle" type="button">
                    Шрифт
                   <span class="svg-case">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#arrow-small"></use>
                        </svg>
                    </span>
                </button>
                <div class="option-container option-font">
                    <button type="button" class="btn-primary btn-primary-active">
                        Клас
                        <span class="btn-primary_cross">
                            <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Европа
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Болд
                        <span class="btn-primary_cross">
                            <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Verdana
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Stencil
                        <span class="btn-primary_cross">
                            <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Гарамонд
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Rodchenko
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Adver Gotic
                        <span class="btn-primary_cross">
                            <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Jatran
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Bauhaus
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                </div>
            </li>
            <li>
                <button class="list-toggle" type="button">
                    Красные выходные
                    <span class="svg-case">
                        <svg>
                            <use xlink:href="assets/img/sprite.svg#arrow-small"></use>
                        </svg>
                    </span>
                </button>
                <div class="option-container option-weekends">
                    <button type="button" class="btn-primary">
                        Только воскресения
                        <span class="btn-primary_cross">
                            <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                    <button type="button" class="btn-primary">
                        Субботы и воскресения
                        <span class="btn-primary_cross">
                             <svg>
                                <use xlink:href="assets/img/sprite.svg#cross"></use>
                            </svg>
                        </span>
                        <span class="btn-primary_counter">21</span>
                    </button>
                </div>
            </li>
        </ul>
        <div class="catalogue-list_main-aside-row">
            <!--
            <button type="button" @click="$store.commit('ShowPopup', null)">
                Показать
            </button>
            -->
            <button type="button" @click="$store.commit('ShowPopup', null)">
                Сбросить фильтры
            </button>
        </div>
        <div class="catalogue-list_main-aside-links">
            <a href="#">Полистать каталог</a>
            <a href="#">Скачать каталог</a>
            <a href="#">Скачать все дизайны</a>
        </div>
    </aside>
</template>

<script>
    import VueSlider from 'vue-slider-component';
    import {TheMask} from 'vue-the-mask'

    export default {
        name: "catalogue-list-filter",
        components: {
            VueSlider,
            TheMask
        },
        mounted: function(){
            [].forEach.call(this.$el.querySelectorAll('ul li'), (el) => {
                el.querySelector('.list-toggle').addEventListener('click',function () {
                    el.classList.toggle('list-active');
                });
            });

            this.$el.querySelectorAll('.option-container .btn-primary').forEach(function (el) {
                el.addEventListener('click',function () {
                    el.classList.toggle('btn-primary-active')
                })
            });

            this.$el.querySelectorAll('.option-type_container').forEach(function (el) {
                el.addEventListener('click',function () {
                    el.classList.toggle('active')
                })
            });

            this.$el.querySelectorAll('.option-color button').forEach(function (el) {
                el.addEventListener('click',function () {
                    el.classList.toggle('active')
                })
            });

            this.$el.querySelectorAll('.option-gamma button').forEach(function (el) {
                el.addEventListener('click',function () {
                    el.classList.toggle('active')
                })
            });
        },
        data: function () {
            return{
                filter: {
                    price: {
                        min: 0,
                        max: 999,
                        current: ['50', '949']
                    },
                    age: null,
                    type: null,
                    size: null,
                    color: {
                        current: 0,
                        colors: [
                            '#FFFFFF', '#4D9EF8', '#969696', '#F4C28A', '#5CBD37', '#FCF050', '#54ADA0', '#C594F8', '#EC87C5', '#EC8783',
                            'linear-gradient(224.36deg, #8C8A8B 18.54%, #DDDDDD 52.68%, #8B898A 84.36%)',
                            'linear-gradient(224.36deg, #DB9D37 18.54%, #FFFFFF 52.68%, #DB9C37 84.36%)',
                            'linear-gradient(224.36deg, #14183C 18.54%, #FFFFFF 52.68%, #14183C 84.36%)',
                        ]
                    },
                    gamma: 4,
                    series: null,
                    spirals: null,
                    paper: null,
                    font: null,
                    weekends: null,
                },
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss">
    @import "../../assets/scss/utils/vars";

    .catalogue-list_main-aside{
        width: 100%;
        max-width: 300px;
        height: auto;
        flex-grow: 1;
        padding-right: 50px;
        border-top: 1px solid #CCCDD1;
        &-row{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: auto;
            margin-top: 24px;
            button{
                max-width: 125px;

                min-width: inherit;
                border-radius: 5px;
                width: 50%;
                height: 32px;

                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                text-align: center;
                transition: color ease 0.25s, background ease 0.25s;
                &:first-of-type{
                    border: 1px solid $main-color-blue;
                    margin-right: 24px;
                    color: $main-color-blue;
                    &:hover,&:focus{
                        color: white;
                        background: $main-color-blue;
                        outline: none;
                    }
                }
                &:last-of-type{
                    border: 1px solid #8E9099;
                    color: #8E9099;
                    &:hover,&:focus{
                        color: white;
                        background: #8E9099;
                        outline: none;
                    }
                }
            }
        }
        &-links{
            margin-top: 24px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            a{
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                text-decoration-line: underline;
                color: #828282;
                margin-top: 12px;
                transition: color ease 0.25s;
                &:hover,&:focus{
                    color: $main-color-blue;
                }
                &:first-of-type{
                    margin-top: 0;
                }
            }
        }
        ul{
            width: 100%;
            height: 100%;
            .list-active{
                .list-toggle{
                    svg{
                        stroke: $main-color-blue;
                        transform: rotate(180deg);
                    }
                }
                .option-container{
                    margin-top: 12px;
                }
                .option{
                    &-age{
                        max-height: calc(24px + 8px);
                    }
                    &-series{
                        max-height: calc((24px * 5) + (8px * 4))
                    }
                    &-spirals{
                        max-height: calc(24px + 8px);
                    }
                    &-paper{
                        max-height: calc((24px * 2) + (8px * 1))
                    }
                    &-font{
                        max-height: calc((24px * 5) + (8px * 4))
                    }
                    &-weekends{
                        max-height: calc((24px * 2) + (8px * 1))
                    }
                    &-price{
                        max-height: calc(24px + 14px + 16px);
                    }
                    &-type{
                        max-height: calc(12px + 16px + 141px)
                    }
                    &-size{
                        max-height: calc(((24px * 5) + (8px * 4)));
                    }
                    &-color{
                        max-height: calc((36px * 3) + (8px * 2));
                    }
                    &-gamma{
                        max-height: calc((24px * 5) + (8px * 4));
                    }
                }
            }
            li{
                width: 100%;
                height: 100%;
                border-bottom: 1px solid #E2E2E2;
                padding-top: 12px;
                padding-bottom: 12px;
                button{
                    width: 100%;
                    height: 100%;
                    min-height: inherit;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border: none;
                    min-width: inherit;
                    .svg-case{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        border: 1px solid #E2E2E2;
                        svg{
                            width: 16px;
                            height: 8px;
                            stroke: #606060;
                            fill: rgba(0,0,0,0);
                        }
                    }

                    &:focus{
                        outline: none;
                    }
                }
                .option-container{
                    width: 100%;
                    height: 100%;
                    max-height: 0;
                    margin-top: 0;
                    transition: max-height ease 0.5s, margin-top ease 0.5s;
                    overflow: hidden;

                    .btn-primary{
                        min-width: inherit;
                        width: auto;
                        height: 24px;
                        min-height: inherit;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 5px;
                        border: 1px solid $main-color-blue;
                        margin-right: 4px;
                        margin-bottom: 8px;
                        padding: 0 8px;
                        transition: background ease 0.25s, color ease 0.25s;

                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        letter-spacing: 0.05em;
                        color: black;

                        &-active{
                            background: $main-color-blue;
                            color: white;
                            .btn-primary_counter{
                                display: none;
                            }
                            .btn-primary_cross{
                                display: flex;
                            }
                        }
                        &_counter{
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10px;
                            line-height: 12px;
                            letter-spacing: 0.05em;
                            color: #8E9099;
                            min-width: 16px;
                        }
                        &_cross{
                            display: none;
                            svg{
                                width: 16px;
                                height: 16px;
                                fill: white;
                            }
                        }

                        span{
                            margin-left: 6px;
                            justify-content: center;
                            align-items: center;
                        }

                        &:last-of-type{
                            margin-right: 0;
                        }
                    }
                }

                .option{
                    &-age{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                    }
                    &-series{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        flex-wrap: wrap;
                    }
                    &-spirals{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        flex-wrap: wrap;
                    }
                    &-paper{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        flex-wrap: wrap;
                    }
                    &-font{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        flex-wrap: wrap;
                    }
                    &-weekends{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        flex-wrap: wrap;
                    }
                    &-price{
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                        width: 100%;
                        &_row{
                            &:first-of-type{
                                width: 100%;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                margin-bottom: 16px;
                                input{
                                    width: 80px;
                                    height: 24px;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    border: 1px solid $main-color-blue;
                                    border-radius: 5px;
                                    text-align: center;

                                    font-style: normal;
                                    font-weight: normal;
                                    font-size: 14px;
                                    line-height: 16px;
                                    letter-spacing: 0.05em;
                                    color: #000000;
                                }
                            }
                            &:last-of-type{
                                padding: 0 10px;
                                width: 100%;
                                height: auto;
                            }
                        }
                    }
                    &-type{
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        width: 100%;
                        height: auto;
                        .active{
                            button{
                                svg{
                                    fill: $main-color-blue;
                                }
                            }
                        }
                        &_container{
                            button{
                                display: flex;
                                flex-direction: column;
                                justify-content: flex-start;
                                align-items: center;
                                min-width: inherit;
                                border: none;
                                &:hover{
                                    outline: none;
                                    svg{
                                        fill: $main-color-blue;
                                    }
                                }
                                span{
                                    font-style: normal;
                                    font-weight: normal;
                                    font-size: 10px;
                                    line-height: 12px;
                                    letter-spacing: 0.05em;
                                    color: #000000;
                                }
                                svg{
                                    margin-top: 12px;
                                    fill: #E2E2E2;
                                }
                            }
                            &:nth-of-type(1){
                                button{
                                    svg{
                                        width: 51px;
                                        height: 109px;
                                    }
                                }
                            }
                            &:nth-of-type(2){
                                button{
                                    svg{
                                        width: 52px;
                                        height: 116px;
                                    }
                                }
                            }
                            &:nth-of-type(3){
                                button{
                                    svg{
                                        width: 50px;
                                        height: 141px;
                                    }
                                }
                            }
                            &:nth-of-type(4){
                                button{
                                    svg{
                                        width: 50px;
                                        height: 57px;
                                    }
                                }
                            }
                        }
                    }
                    &-size{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        flex-wrap: wrap;
                    }
                    &-color{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        flex-wrap: wrap;
                        .active{
                            border: 1px solid $main-color-blue;
                        }
                        &_btn{
                            width: 32px;
                            height: 32px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background: white;
                            border-radius: 50%;
                            margin-right: 4px;
                            margin-bottom: 8px;
                            &:last-of-type{
                                margin-right: 0;
                            }
                            &:nth-of-type(7n + 7){
                                margin-right: 0;
                            }
                            span{
                                width: 24px;
                                height: 24px;
                                border-radius: 50%;
                            }
                            &:nth-of-type(1){
                                span{
                                    border: 1px solid #E2E2E2;
                                }
                            }
                        }
                    }
                    &-gamma{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        flex-wrap: wrap;
                        .active{
                            border:  1px solid $main-color-blue;
                        }
                        button{
                            min-width: inherit;
                            min-height: inherit;
                            border-radius: 50%;
                            width: 24px;
                            height: 24px;
                            border: none;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-right: 4px;
                            margin-bottom: 8px;
                            background: white;
                            &:nth-of-type(9n + 9){
                                margin-right: 0;
                            }
                            span{
                                width: 16px;
                                height: 16px;
                                border-radius: 50%;
                                background: #C4C4C4;
                            }
                        }
                    }
                }
            }
        }
    }

    //---- range slider styles ----

    $dotShadow: none !default;
    $dotShadowFocus: none !default;
    $dotBgColor: $main-color-blue !default;
    $stepBgColor: #CCCDD1 !default;
    $bgColor: #CCCDD1 !default;
    $themeColor: #CCCDD1 !default;

    @import '../../../../node_modules/vue-slider-component/lib/theme/default';

    //---- range slider styles ----


    @media (max-width: 1024px){
        .catalogue-list_main-aside{
            display: none;
        }
    }
</style>
