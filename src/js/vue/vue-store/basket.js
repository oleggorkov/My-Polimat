export default {
    state:{
        WidthState: window.innerWidth > 950,
        BasketItems: [
            {
                id: 1,
            },
            {
                id: 2,
            },
            {
                id: 3,
            },
            {
                id: 4,
            },
            {
                id: 5,
            },
        ]
    },
    mutations: {
        RemoveBasketItem(data,id){
            data.BasketItems.splice(id,1);
        }
    },
    actions: {

    },
    getters: {

    },
}
