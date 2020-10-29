import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//import Vuex-modules
import MainPageStore from './main-page';
import ProductStore from './product';
import CatalogueListStore from './catalogue-list';
import BasketStore from './basket';
import RegistrationStore from './registration';
import AccountStore from './accaunt';

export default new Vuex.Store({
    modules: {
        MainPageStore,
        ProductStore,
        CatalogueListStore,
        BasketStore,
        RegistrationStore,
        AccountStore
    },
    state: {
        IsAuthorized: false,
        PopupName: null,
        PopupSharesListsCurrentList: 0,
        ItemType: 0,
        FavoritesItems: null,
        ViewedItems: null,
        CompareItems: null,
    },
    getters: {

    },
    mutations: {
        ShowPopup (state, data) {
            let name = null;

            if (data !== null){
                if (data.name){
                    name = data.name;
                    state.ItemType = data.ItemType;
                } else {
                    name = data;
                }
            }

            state.PopupName = name;
        },
        PopupSharesListsMobile (state, data){
            state.PopupName = 'PopupSharesListsMobile';
            state.PopupSharesListsCurrentList = data.index;
        }
    },
});
