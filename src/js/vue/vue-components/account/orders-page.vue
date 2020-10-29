<template>
    <section class="account-content">
        <ul class="account-content_option">
            <li><button type="button" @click="SortOrders">По статусу</button></li>
            <li><button type="button" @click="SortOrders">По продавцу</button></li>
            <li><button type="button" @click="SortOrders">По плательщику</button></li>
            <li><button type="button" @click="SortOrders">По дате создания заказа</button></li>
            <li><button type="button" @click="SortOrders">Завершенные заказы</button></li>
        </ul>
        <transition-group name="list-animation" tag="ul" class="account-content_orders">
            <li v-for="item in orders" v-bind:key="item.number">
                <div class="account-order">
                    <h3>Заказ №{{item.number}}</h3>
                    <div class="account-order_main-content">
                        <div class="account-order_main-content-lists">
                            <ul>
                                <li>
                                    <span class="content-description">Дата заказа: </span>
                                    <span class="content-main">12.05.19</span>
                                </li>
                                <li>
                                    <span class="content-description">Предворительная дата доставки: </span>
                                    <span class="content-main">12.05.19</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span class="content-description">Продавец: </span>
                                    <span class="content-main">ООО Компания</span>
                                </li>
                                <li>
                                    <span class="content-description">Плательщик: </span>
                                    <span class="content-main">ИП Зарецкий А.В</span>
                                </li>
                                <li>
                                    <span class="content-description">Товары в заказе: </span>
                                    <span class="content-main">Календарный блок</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span class="content-description">Оплата: </span>
                                    <span class="content-main">Счёт при получении</span>
                                </li>
                                <li>
                                    <span class="content-description">Способ получения: </span>
                                    <span class="content-main">Доставка в офис</span>
                                </li>
                                <li>
                                    <span class="content-description">Адрес доставки: </span>
                                    <span class="content-main">г. Санкт-Петербург, ул. Петропавловской крепости, д. 2890, кв. 7513</span>
                                </li>
                            </ul>
                        </div>
                        <p class="current-price">
                            Общая стоимость: <span>60 000 руб.</span>
                        </p>
                    </div>
                    <div class="account-order_options">
                        <p class="btn-primary btn-blue status">Ожидает оплаты</p>
                        <div class="account-order_options-container">
                            <button type="button" >Редактировать</button>
                            <button type="button" >Повторить</button>
                            <button type="button" >Отменить заказ</button>
                            <button type="button" @click="$store.commit('ShowPopup', 'PopupAccountOrderError')">Проблемы с заказом?</button>
                        </div>
                        <button type="button" class="btn-primary btn-blue payment">Оплатить</button>
                    </div>
                </div>
            </li>
        </transition-group >
    </section>
</template>

<script>
    export default {
        name: "orders-page",
        data: () => {
            return{
                orders: [
                    {
                        number: 111111,
                    },
                    {
                        number: 222222,
                    },
                    {
                        number: 333333,
                    },
                ]
            }
        },
        methods: {
            SortOrders () {
                this.orders.sort(() => Math.random() - 0.5);
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/scss/utils/vars";

    .account-content_orders{
        width: 100%;
        height: auto;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        li{
            width: 100%;
            height: auto;

            margin-top: 24px;

            &:first-of-type{
                margin-top: 0;
            }
        }
    }

    .account-order{
        width: 100%;
        height: auto;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        padding-bottom: 24px;

        border-bottom: 1px solid #E0E0E0;

        h3{
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            color: #000000;

            margin-bottom: 16px;
        }

        &_main-content{
            width: 100%;
            height: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &-lists{
                width: 100%;
                height: auto;

                margin-right: 32px;

                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                flex-wrap: wrap;

                ul{
                    margin-right: 32px;
                    &:last-of-type{
                        margin-right: 0;
                    }
                    &:first-of-type{
                        min-width: 215px;
                    }
                    li{
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;

                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 21px;

                        margin-top: 8px;

                        &:first-of-type{
                            margin-top: 0;
                        }

                        .content-description{
                            width: 140px;
                            min-width: 140px;

                            display: inline-block;
                            margin-right: 24px;

                            color: #8D8D8D;
                        }
                        .content-main{
                            width: 100%;
                            height: auto;
                            max-width: 240px;

                            display: inline-block;

                            color: #000000;
                        }
                    }
                }
            }

            .current-price{
                width: 190px;
                min-width: 190px;

                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 20px;
                color: #000000;
                text-align: left;

                span{
                    display: block;

                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 21px;
                    text-transform: uppercase;
                    text-align: left;
                    color: #000000;
                }
            }
        }

        &_options{
            width: 100%;
            height: auto;

            display: flex;
            justify-content: space-between;
            align-items: center;

            margin-top: 24px;

            .status{
                border-radius: 0;
                background-color: $main-color-blue;
                border: 1px solid $main-color-blue;

                font-style: normal;
                font-weight: normal;
                font-size: 10px;
                line-height: 17px;
                color: #FFFFFF;
                cursor: auto;

                min-width: 115px;
            }

            .payment{
                width: 190px;
                max-width: 190px;
                min-width: 190px;
                height: 40px;
            }

            &-container{
                width: 100%;
                height: auto;

                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-wrap: wrap;

                padding: 0 32px;

                button{
                    width: auto;
                    min-width: auto;
                    border: none;

                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 16px;
                    text-align: center;
                    text-decoration-line: underline;
                    color: #BEBEBE;

                    margin-right: 24px;

                    &:last-of-type{
                        margin-right: 0;
                    }

                    &:focus{
                        outline: none;
                    }

                    &:hover{
                        text-decoration: none;
                    }
                }
            }
        }
    }

    @media (max-width: 980px){
        .account-order{
            &_main-content{
                flex-direction: column;
                .current-price{
                    text-align: center;
                    span{
                        text-align: center;
                    }
                }
                &-lists{
                    margin-bottom: 32px;
                    margin-right: 0;
                }
            }
            &_options{
                flex-direction: column;
                margin-top: 8px;
                &-container{
                    margin: 24px 0;
                    padding: 0;

                    justify-content: center;

                    button{
                        margin-left: 8px;
                        margin-right: 8px;
                        &:last-of-type{
                            margin-right: 8px;
                        }
                    }
                }
            }
        }
    }
</style>