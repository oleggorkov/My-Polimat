<template>
    <section class="account-content">
        <div class="account-content_contact">
            <div class="account-content_contact-form">
                <h3>Форма обратной связи</h3>
                <form action="">
                    <div class="input-primary">
                        <input type="text" id="name" placeholder="ФИО">
                    </div>
                    <div class="input-primary">
                        <input type="email" id="email" placeholder="Email">
                    </div>
                    <div class="input-primary">
                        <input type="tel" id="phone" placeholder="Телефон">
                    </div>
                    <textarea placeholder="Сообщение">

                    </textarea>
                    <button type="button" class="btn-blue btn-primary">отправить</button>
                </form>
            </div>
            <div class="account-content_contact-case">
                <h3>Наши контакты</h3>
                <a href="tel:+74952873377">Телефон: +7 (495) 287-33-77</a>
                <a href="mailto:info@polimat.ru">Электронная почта: info@polimat.ru</a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "contact_us-page"
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/scss/utils/vars";

    .account-content_contact{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        h3{
            margin-bottom: 24px;

            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 32px;
            color: #000000;
        }

        &-form{
            max-width: 400px;

            width: 100%;
            height: auto;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            form{
                width: 100%;
                height: auto;

                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-end;

                .input-primary{
                    max-width: inherit;
                    &:not(:last-of-type){
                        margin-bottom: 24px;
                    }
                }

                textarea{
                    width: 100%;
                    height: 64px;
                    max-height: 128px;
                    min-height: 64px;

                    margin-top: 24px;

                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 16px;
                    color: black;

                    padding-left: 12px;
                    padding-top: 8px;

                    border: 1px solid #A1A1A1;
                    border-radius: 5px;

                    resize: vertical;

                    &:focus{
                        outline: none;
                    }

                    transition: border ease 0.25s;

                    &::placeholder{
                        font-family: $font-Roboto;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 16px;
                        color: #808080;
                    }

                    &:focus{
                        border: 1px solid $main-color-blue;
                    }
                }

                button{
                    margin-top: 24px;
                }
            }
        }

        &-case{
            width: auto;
            height: auto;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            margin-left: 150px;

            a{
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                color: #000000;

                &:not(:last-of-type){
                    margin-bottom: 16px;
                }
            }
        }
    }
</style>