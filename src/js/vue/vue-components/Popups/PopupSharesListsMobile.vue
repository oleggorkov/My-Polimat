<template>
    <transition name="popup-shares">
        <div class="popup popup-shares" v-if="state" v-close-popup="true">
            <div class="popup_container">
                <div class="popup_container-close" v-close-popup>
                    <span/>
                    <span/>
                </div>

                <div class="shares-list" v-if="$store.state.PopupSharesListsCurrentList === 0">
                    <h3>Календарные блоки</h3>
                    <ul>
                        <li><a href="#">Дизайнерские мелованные</a></li>
                        <li><a href="#">Офсетные</a></li>
                        <li><a href="#">3 в одном</a></li>
                        <li><a href="#">Тематические</a></li>
                        <li><a href="#">Домики</a></li>
                        <li><a href="#">4-блочные</a></li>
                        <li><a href="#">Блоки с перенесенными выходными</a></li>
                    </ul>
                </div>

                <div class="shares-list" v-if="$store.state.PopupSharesListsCurrentList === 1">
                    <h3>Комплектующие для календарей</h3>
                    <ul>
                        <li><a href="#">Пружина в бобинах 3:1</a></li>
                        <li><a href="#">Пружина в нарезке 3:1</a></li>
                        <li><a href="#">Пружина в бобинах 2:1</a></li>
                        <li><a href="#">Курсоры</a></li>
                        <li><a href="#">Пикколо (люверсы) / ригели</a></li>
                        <li><a href="#">Часовые механизмы / коробки</a></li>
                    </ul>
                </div>

                <div class="shares-list" v-if="$store.state.PopupSharesListsCurrentList === 2">
                    <h3>Каталог</h3>
                    <ul>
                        <li><a href="#">Курсоры</a></li>
                        <li><a href="#">Оборудование</a></li>
                        <li><a href="#">Ежедневники</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "PopupSharesListsMobile",
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

<style scoped lang="scss">
    @import "../../../assets/scss/utils/vars";

    .popup-shares{
        .popup_container{
            border-radius: 5px;
            padding: 48px 24px 24px 24px;
        }
        .shares-list{
            h3{
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 21px;
                letter-spacing: 0.05em;
                color: #000000;
                margin-bottom: 16px;
                max-width: 240px;
            }
            ul{
                width: 100%;
                max-width: 240px;
                height: auto;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: flex-start;
                li{
                    padding-left: 16px;
                    position: relative;
                    margin-bottom: 4px;
                    &:last-of-type{
                        margin-bottom: 0;
                    }
                    &:before{
                        content: '';
                        display: block;
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background: $main-color-blue;
                        position: absolute;
                        left: 6px;
                        top: 50%;
                        transform: translateX(-100%) translateY(-50%);
                    }
                    a{
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 20px;
                        color: #000000;
                        &:hover{
                            color: $main-color-blue;
                        }
                    }
                }
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
</style>
