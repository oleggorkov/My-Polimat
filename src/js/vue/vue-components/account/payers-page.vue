<template>
    <section class="account-content">
        <ul class="account-content_option">
            <li><button type="button">Активные</button></li>
            <li><button type="button">Все</button></li>
        </ul>
        <ul class="account-content_payers">
           <li class="payer" :class="{active: item.active}" v-for="item in payers">
                <div class="payer-title">
                    <p>Юридическое лицо</p>
                    <button type="button">Сделать неактивным</button>
                </div>
                <div class="payer-name">
                   <p>Полное название компании</p>
                   <p>OOO Название компании</p>
               </div>
                <ul class="payer-data">
                   <li><p>Номер банковского счета</p><p>12345678901234567890</p></li>
                   <li><p>ИНН</p><p>644901001</p></li>
                   <li><p>КПП</p><p>6449013711</p></li>
                   <li><p>БИК банка</p><p>044540132</p></li>
               </ul>
           </li>
       </ul>
    </section>
</template>

<script>
    export default {
        name: "payers-page",
        data: () => {
            return{
                payers: [
                    {
                        active: false,
                    },
                    {
                        active: true,
                    },
                    {
                        active: false,
                    },
                    {
                        active: false,
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/scss/utils/vars";

    .account-content_payers{
        width: 100%;
        height: auto;

        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;

        .active{
            border: 2px solid $main-color-blue!important;
        }

        .payer{
            width: calc(50% - 12px);
            height: auto;

            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;

            margin-top: 24px;
            padding: 32px 100px 48px 64px;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;

            &:nth-of-type(1){
                margin-top: 0;
            }
            &:nth-of-type(2){
                margin-top: 0;
            }

            &-title{
                width: 100%;
                height: auto;

                display: flex;
                justify-content: space-between;
                align-items: center;

                p{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 19px;

                    letter-spacing: 0.05em;
                    color: #D3D3D3;
                }

                button{
                    min-width: auto;
                    border: none;

                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 14px;
                    color: #000000;

                    &:focus{
                        outline: none;
                    }
                }
            }

            &-name{
                width: 100%;
                height: auto;

                text-align: left;

                margin-top: 24px;
                p{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 19px;
                    letter-spacing: 0.05em;

                    &:first-of-type{
                        color: #808080;
                    }
                    &:last-of-type{
                        color: #000000;
                    }
                }
            }

            &-data{
                width: 100%;
                height: auto;

                margin-top: 24px;

                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;

                li{
                    width: 100%;
                    height: auto;

                    margin-bottom: 12px;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    &:last-of-type{
                        margin-bottom: 0;
                    }

                    p{
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 19px;
                        letter-spacing: 0.05em;

                        &:first-of-type{
                            color: #808080;
                        }
                        &:last-of-type{
                            color: #000000;
                        }
                    }
                }
            }
        }
    }
</style>