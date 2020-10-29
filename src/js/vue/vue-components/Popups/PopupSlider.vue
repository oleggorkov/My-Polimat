<template>
    <transition name="popup-slider">
        <div class="popup popup-slider"  v-if="state" v-close-popup="true">
            <div class="popup_container">
                <div class="popup_container-close" v-close-popup>
                    <span />
                    <span />
                </div>

                <slider :slider-options="SliderOptions"/>
            </div>
        </div>
    </transition>
</template>

<script>
    import slider from '../slider.vue';

    export default {
        name: "PopupSlider",
        components: {slider},
        data: function(){
            return{
                currentSlide: 0,
                state: false,
                SliderOptions: {
                    CurrentSlide: 1,
                    ItemsToShow: 1,
                    Titles: [],
                    Images: [
                        'assets/img/main-images/carts-block-images/item-image-big-1.png',
                        'assets/img/main-images/carts-block-images/item-image-big-1.png',
                        'assets/img/main-images/carts-block-images/item-image-big-1.png',
                        'assets/img/main-images/carts-block-images/item-image-big-1.png',
                        'assets/img/main-images/carts-block-images/item-image-big-1.png',
                    ],
                    Vertical: false,
                    Arrows: false,
                    SliderNavigation: 'preview',
                    AutoPlay: false,
                }
            }
        },
        mounted: function(){
            this.state = true;
        },
    }
</script>

<style lang="scss">
    @import "../../../assets/scss/utils/vars";

    .popup{
        &-slider{
            .popup_container{
                .slider{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    .hooper{
                        width: 275px;
                        &-slide{
                            img{
                                width: 275px;
                                height: auto;
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
    }

    @media (max-width: 670px) {
        .popup{
            &-slider{
                .popup_container{
                    padding: 48px 12px;
                    .slider{
                        .hooper{
                            width: 145px;
                            &-slide{
                                img{
                                    width: 145px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
