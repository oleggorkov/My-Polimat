<template>
    <transition name="popup-catalogue_filter">
        <div class="popup popup-catalogue_filter" v-close-popup="true" v-if="state">
            <div class="popup_container">
                <p class="popup_container-title">Фильтр</p>
                <catalogue-list-filter />
            </div>
        </div>
    </transition>
</template>

<script>
    import CatalogueListFilter from '../catalogue-list-filter.vue';

    export default {
        name: "PopupFilter",
        components: {
            CatalogueListFilter: CatalogueListFilter
        },
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

<style lang="scss">
    .popup-catalogue_filter{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.2);
        z-index: 25;
        align-items: flex-start;
        justify-content: flex-start;

        .popup_container{
            position: absolute;
            top: calc(214px + 110px + 12px);
            right: 24px;
            margin-left: 24px;
            padding: 16px 0;
            min-width: 180px;
            min-height: 150px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
            &-title{
                font-size: 12px;
                line-height: 14px;
                letter-spacing: 0.05em;
                color: #000000;
                text-align: left;
                margin: 0 24px 12px 24px;
                font-weight: 500;
            }
            .catalogue-list_main-aside{
                display: block;
                padding: 0 24px;
                border-top: none;
            }
            &:before{
                content: '';
                display: block;
                position: absolute;
                top: 0;
                right: 64px;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0 6px 8px 6px;
                border-color: transparent transparent #ffffff transparent;
                transform: translateY(-100%);
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

    @media (max-width: 670px) {
        .popup-catalogue_filter{
            .popup_container{
                top: calc(138px + 52px + 16px);
            }
        }
    }
</style>
