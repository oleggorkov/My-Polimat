<template>
    <section class="account-content">
        <div class="user-data_title">
            <div>
                <button type="button" class="active">Юридическое лицо</button>
                <button type="button">Физическое лицо</button>
            </div>
            <button type="button">Добавить плательщика</button>
        </div>
        <div class="user-data">
            <ul>

            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        name: "personal_data-page",
    }
</script>

<style scoped lang="scss">
    .user-data{
        &_title{
            width: 100%;
            height: auto;

            display: flex;
            justify-content: space-between;
            align-items: center;

            & > button{
                max-width: 300px;
                min-height: 48px;

                width: 100%;
                height: auto;

                background: #C4C4C4;
                border-radius: 5px;
                border: 1px solid #C4C4C4;

                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                line-height: 16px;
                color: white;
            }

            button:focus{
                outline: none;
            }

            & > div{
                width: auto;
                height: auto;

                display: flex;
                justify-content: flex-start;
                align-items: center;

                .active{
                    background-color: #E8E8E8;
                }

                button{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 16px;
                    color: #000000;

                    border-radius: 5px;
                    border: 1px solid #E8E8E8;

                    margin-right: 32px;

                    &:last-of-type{
                        margin-right: 0;
                    }
                }
            }
        }
    }
</style>