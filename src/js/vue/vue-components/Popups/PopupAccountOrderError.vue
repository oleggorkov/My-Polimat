<template>
    <transition name="popup_order-error">
        <div class="popup popup_order-error" v-close-popup="true" v-if="state">
            <div class="popup_container">
                <div class="popup_container-close" v-close-popup>
                    <span />
                    <span />
                </div>

                <div class="popup_container_order-error">
                    <h2>Проблемы с заказом</h2>
                    <span>№123456 от 26 июня</span>

                    <form action="">
                        <textarea name="error-description" placeholder="Опишите вашу проблему" />
                        <p>Прикрепите файл</p>
                        <div class="input-row">
                            <input type="file" id="file-1">
                            <label for="file-1"> <svg><use xlink:href="assets/img/sprite.svg#cross"/></svg></label>

                            <input type="file" id="file-2">
                            <label for="file-2"> <svg><use xlink:href="assets/img/sprite.svg#cross"/></svg></label>

                            <input type="file" id="file-3">
                            <label for="file-3"> <svg><use xlink:href="assets/img/sprite.svg#cross"/></svg></label>

                            <input type="file" id="file-4">
                            <label for="file-4"> <svg><use xlink:href="assets/img/sprite.svg#cross"/></svg></label>

                            <input type="file" id="file-5">
                            <label for="file-5"> <svg><use xlink:href="assets/img/sprite.svg#cross"/></svg></label>

                            <input type="file" id="file-6">
                            <label for="file-6"> <svg><use xlink:href="assets/img/sprite.svg#cross"/></svg></label>
                        </div>
                        <button type="button" class="btn-primary btn-blue">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "PopupAccountOrderError",
        mounted: function(){
            this.state = true;
        },
        data: () => {
            return{
                state: false,
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/scss/utils/vars";

    .popup_order-error{
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

    .popup_container_order-error{
     width: 100%;
     height: auto;

     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     align-items: center;

     h2{
         font-style: normal;
         font-weight: normal;
         font-size: 24px;
         line-height: 28px;
         color: #000000;
     }
     span{
         font-style: normal;
         font-weight: normal;
         font-size: 14px;
         line-height: 16px;
         text-align: center;
         color: #000000;
     }

     form{
         width: 500px;
         height: auto;

         display: flex;
         flex-direction: column;
         justify-content: flex-start;
         align-items: center;

         textarea{
             width: 100%;
             height: 160px;
             min-height: 160px;
             max-height: 320px;

             padding: 12px 24px;
             margin-top: 24px;

             font-style: normal;
             font-weight: normal;
             font-size: 14px;
             line-height: 16px;

             border: 1px solid #BEBEBE;
             box-sizing: border-box;
             border-radius: 5px;

             resize: vertical;

             &:focus{
                 outline: none;
             }

             &::placeholder{
                 font-style: normal;
                 font-weight: normal;
                 font-size: 14px;
                 line-height: 16px;
                 color: #B1B1B1;
             }
         }
         button{
             width: 100%;
             height: 40px;
             max-width: 330px;

             margin-top: 32px;

             background: $main-color-blue;
             border: 1px solid $main-color-blue;
             color: white;
         }
         p{
             width: 100%;

             font-style: normal;
             font-weight: normal;
             font-size: 14px;
             line-height: 16px;
             color: #000000;
             text-align: left;

             margin-top: 16px;
             margin-bottom: 16px;
         }
         .input-row{
             width: 100%;
             display: flex;
             justify-content: space-between;
             align-items: center;

             input{
                 width: 0;
                 height: 0;
                 display: none;
             }
             label{
                 width: calc((100% / 6) - 16px);
                 height: 40px;

                 display: flex;
                 justify-content: center;
                 align-items: center;

                 border: 1px solid #BEBEBE;
                 border-radius: 5px;

                 cursor: pointer;

                 svg{
                     width: 32px;
                     height: 32px;

                     fill: #BEBEBE;

                     transform: rotate(45deg);
                 }
             }
         }
     }
 }

    @media (max-width: 670px) {
        .popup_container_order-error{
            padding-top: 16px;
            form{
                width: 100%;

                .input-row{
                    label,input{
                        &:nth-last-of-type(1),&:nth-last-of-type(2),&:nth-last-of-type(3){
                            display: none;
                        }
                    }

                    label{
                        width: 48px;
                        height: 48px;
                    }
                }
            }
        }
    }
</style>