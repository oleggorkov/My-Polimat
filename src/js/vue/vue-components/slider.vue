<template>
    <div class="slider">
        <div class="slider-stage">
            <hooper :settings="hooperSettings" ref="carousel" @slide="afterTouch">
                <slide v-for="(item,index) in this.SliderOptions.Images" v-bind:key="index">
                    <img :src="item">
                </slide>
            </hooper>
        </div>

        <ul v-if="this.SliderOptions.SliderNavigation === 'list'"  class="list">
            <li v-for="(item,index) in this.SliderOptions.Titles" v-bind:key="index">
                <button type="button" v-bind:class="currentSlideState === index ? 'active-slide' : ''"
                        @click="toSlideIndex(index)">{{item}}</button>
            </li>
        </ul>

        <div v-if="SliderOptions.SliderNavigation === 'progress'" class="slider_navigation progress">
            <div class="slider_navigation-row">
                <button @click.prevent="slidePrev">
                    <svg>
                        <use xlink:href="assets/img/sprite.svg#arrow"/>
                    </svg>
                </button>
                <p> {{this.SliderOptions.Titles[currentSlideState]}} </p>
                <button @click.prevent="slideNext">
                    <svg>
                        <use xlink:href="assets/img/sprite.svg#arrow"/>
                    </svg>
                </button>
            </div>
            <div class="slider_navigation-row">
                <span :style="progressState ? 'width: 100%;transition: width linear 7.5s;' : 'width: 0;transition: width linear 0s;'"/>
            </div>
        </div>

        <div v-if="SliderOptions.SliderNavigation === 'dots'" class="slider_navigation dots">
            <button @click.prevent="slidePrev">
                <svg>
                    <use xlink:href="assets/img/sprite.svg#arrow"/>
                </svg>
            </button>

            <div class="dots-case">
                <span v-bind:class="currentSlideState === index ? 'dot-active' : ''"
                      v-for="(item,index) in this.SliderOptions.Images">
                </span>
            </div>

            <button @click.prevent="slideNext">
                <svg>
                    <use xlink:href="assets/img/sprite.svg#arrow"/>
                </svg>
            </button>
        </div>

        <div v-if="SliderOptions.SliderNavigation === 'preview'" class="slider_navigation preview">
            <button type="button" class="preview_image-container"
                    :class="currentSlideState === index ? 'preview_image-container-active' : ''"
                    v-for="(item,index) in this.SliderOptions.Images" v-bind:key="index"
                    @click="toSlideIndex(index)">
                <img :src="item">
            </button>
        </div>

        <div v-if="SliderOptions.Arrows" class="slider_navigation arrows">
            <button @click.prevent="slidePrev">
                <svg>
                    <use xlink:href="assets/img/sprite.svg#arrow"/>
                </svg>
            </button>
            <button @click.prevent="slideNext">
                <svg>
                    <use xlink:href="assets/img/sprite.svg#arrow"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
    import { Hooper, Slide } from 'hooper';
    import 'hooper/dist/hooper.css';

    export default {
        name: "slider",
        components: {
            Hooper,
            Slide
        },
        data: function(){
          return{
              progressState: false,
              timeout: null,
              hooperSettings: {
                  autoPlay: this.SliderOptions.AutoPlay,
                  playSpeed: 8000,
                  transition: 500,
                  infiniteScroll: false,
                  vertical: this.SliderOptions.Vertical,
                  itemsToShow: this.SliderOptions.ItemsToShow,
                  centerMode: true,
                  initialSlide: this.SliderOptions.CurrentSlide,
                  mouseDrag: false,
                  wheelControl: false,
                  keysControl: false,
              },
              currentSlideState: 0,
          }
        },
        props: ['SliderOptions'],
        mounted: function () {
            if (this.SliderOptions.AutoPlay){
                this.progressInterval();
            }
        },
        methods: {
            slidePrev() {
                this.$refs.carousel.slidePrev();

                if (this.SliderOptions.AutoPlay){
                    clearTimeout(this.timeout);

                    this.progressInterval();
                    this.$refs.carousel.restartTimer();
                }
            },
            slideNext() {
                this.$refs.carousel.slideNext();

                if (this.SliderOptions.AutoPlay){
                    clearTimeout(this.timeout);

                    this.progressInterval();
                    this.$refs.carousel.restartTimer();
                }
            },
            progressInterval(){
                this.progressState = false;

                setTimeout(() => {
                    this.progressState = true;
                },250);

                this.timeout = setTimeout(() => {
                    this.progressInterval();
                },8000);
            },
            afterTouch(){
                this.currentSlideState = this.$refs.carousel.currentSlide;

                if (this.SliderOptions.AutoPlay){
                    clearTimeout(this.timeout);
                    this.progressInterval();
                    this.$refs.carousel.restartTimer();
                }
            },
            toSlideIndex(index){
                this.$refs.carousel.slideTo(index)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../../node_modules/hooper/dist/hooper.css";
    @import "../../assets/scss/utils/vars";

    .slider{
        width: 100%;
        height: auto;
        position: relative;
        &-stage{
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            .hooper{
                height: auto;
                z-index: 2;
                &:focus{
                    outline: none;
                }
                &-slide{
                    img{
                        width: 100%;
                        height: 100%;
                        pointer-events: none;
                        user-select: none;
                        object-fit: cover;
                    }
                }
            }
        }
        &_navigation{
            width: 100%;
            padding: 0 32px;
            margin-top: 16px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            &-row{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                button{
                    min-width: initial;
                    width: 32px;
                    height: 32px;
                    border: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: auto;
                    &:focus{
                        outline: none;
                    }
                    &:first-of-type{
                        transform: rotate(180deg);
                    }
                    svg{
                        width: 16px;
                        height: 12px;
                        fill: #CCCDD1;
                    }
                }
                p{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 10px;
                    line-height: 12px;
                    text-align: center;
                    color: #000000;
                    margin: 0 32px;
                }
                &:last-of-type{
                    margin-top: 24px;
                    height: 1px;
                    background: #CCCDD1;
                    span{
                        background: $main-color-blue;
                        height: 1px;
                        display: block;
                        width: 0;
                    }
                }
            }
        }
        .dots{
            flex-direction: row;
            padding: 0;
            button{
                width: 48px;
                min-width: 48px;
                height: 48px;
                border-radius: 50%;
                border: 1px solid #CCCDD1;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: auto;

                &:focus{
                    outline: none;
                }
                &:first-of-type{
                    transform: rotate(180deg);
                }
                svg{
                    width: 16px;
                    height: 12px;
                    fill: #CCCDD1;
                }
            }
            &-case{
                width: 100%;
                margin: 0 32px;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                span{
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    border: 1px solid #CCCDD1;
                    transition: border ease 0.25s, background ease 0.25s;
                }
                .dot-active{
                    border: 1px solid $main-color-blue;
                    background: $main-color-blue;
                }
            }
        }
        .progress{
            padding: 0;
        }
        .preview{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            &_image-container{
                width: 80px;
                min-width: initial;
                height: 80px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 24px;
                border: 2px solid #CCCDD1;
                transition: border ease 0.25s;
                &-active{
                    border: 2px solid $main-color-blue;
                }
                &:focus{
                    outline: none;
                }
                &:hover{
                    border: 2px solid $main-color-blue;
                }
                &:last-of-type{
                    margin-right: 0;
                }
                img{
                    height: 64px;
                    width: auto;
                }
            }
        }
        .arrows{
            width: 100%;
            height: auto;
            position: absolute;
            top: 50%;
            transform: translateY(-150%);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            button{
                min-width: initial;
                width: 48px;
                height: 48px;
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;
                &:focus{
                    outline: none;
                }
                &:first-of-type{
                    transform: rotate(180deg);
                }
                svg{
                    width: 32px;
                    height: 32px;
                    fill: #CCCDD1;
                }
            }
        }
        .list{
            position: absolute;
            left: 32px;
            top: 16px;
            bottom: 16px;
            z-index: 3;
            width: 280px;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            background: #FFFFFF;
            opacity: 0.85;
            padding: 12px 24px;
            li{
                border-bottom: 1px solid rgba(0, 0, 0, 0.21);
                width: 100%;
                height: 45px;
                transition: all ease 0.5s;
                position: relative;
                &:hover{
                    a{
                        color: $main-color-blue;
                    }
                }
                &:last-of-type{
                    border-bottom: none;
                }
                .active-slide{
                    color: #000000;
                    &:after{
                        opacity: 1;
                    }
                }
                button{
                    border: none;
                    min-width: initial;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 12px;
                    line-height: 14px;
                    height: 100%;
                    width: 100%;
                    padding: 6px 0 6px 0;
                    display: inline-block;
                    transition: color ease 0.25s;
                    text-align: left;
                    color: rgba(0, 0, 0, 0.51);

                    &:after{
                        content: '';
                        display: block;
                        position: absolute;
                        top: 50%;
                        left: -16px;
                        transform: translateY(-50%);
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background: #000000;
                        opacity: 0;
                    }

                    &:focus{
                        text-decoration: none;
                        outline: none;
                        &:after{
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1280px) {
        .slider{
            .list{
                min-width: 250px;
                overflow-y: scroll;
                margin-right: 24px;
                &::-webkit-scrollbar { width: 3px; height: 3px;}
                &::-webkit-scrollbar-track {  background-color: #999;}
                &::-webkit-scrollbar-track-piece { background-color: #ffffff;}
                &::-webkit-scrollbar-thumb { height: 0; background-color: #666; border-radius: 3px;}
                li{
                    min-height: 45px;
                }
            }
        }
    }

    @media (max-width: 670px) {
        .slider{
            &_navigation{
                padding: 0 8px;
            }
            .preview{
                &_image-container{
                    width: 48px;
                    height: 48px;
                    margin-right: 12px;
                    padding: 4px;
                    border: 1px solid #cccdd1;
                    &-active{
                        border: 1px solid #0019ff;
                    }
                    &:hover{
                        border: 1px solid #0019ff;
                    }
                    img{
                        height: 35px;
                        width: auto;
                    }
                }
            }
            .arrows{
                button{
                    svg{
                        width: 24px;
                        height: 24px;
                    }
                }
            }
        }
    }
</style>
