export default {
    state:{
        ProductSliderOptions: {
            CurrentSlide: 0,
            ItemsToShow: 1,
            Titles: [ ],
            Images: [
                'assets/img/main-images/carts-block-images/item-image-big-1.png',
                'assets/img/main-images/carts-block-images/item-image-big-1.png',
                'assets/img/main-images/carts-block-images/item-image-big-1.png',
                'assets/img/main-images/carts-block-images/item-image-big-1.png',
                'assets/img/main-images/carts-block-images/item-image-big-1.png',
            ],
            Vertical: window.innerWidth > 1600,
            Arrows: false,
            SliderNavigation: 'preview',
            AutoPlay: window.innerWidth < 1024,
        },
        ItemCounter: 1,
        ItemPrice: {
            IP: [250,235,227,219],
            OOO: [264,242,234,225],
        }
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        GetProductSum: (state,getters) => type => {
            let Price = getters.GetProductPrice(type);

            return (state.ItemCounter * Price).toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        },
        GetProductPrice: state => type => {
            let Price;

            if (type === 'IP'){
                if (state.ItemCounter < 5){
                    Price = state.ItemPrice.IP[0];
                }
                if (state.ItemCounter >= 5 && state.ItemCounter <= 9){
                    Price = state.ItemPrice.IP[1];
                }
                if (state.ItemCounter >= 10 && state.ItemCounter <= 29){
                    Price = state.ItemPrice.IP[2];
                }
                if (state.ItemCounter >= 30){
                    Price = state.ItemPrice.IP[3];
                }
            }

            if (type === 'OOO'){
                if (state.ItemCounter < 5){
                    Price = state.ItemPrice.OOO[0];
                }
                if (state.ItemCounter >= 5 && state.ItemCounter <= 9){
                    Price = state.ItemPrice.OOO[1];
                }
                if (state.ItemCounter >= 10 && state.ItemCounter <= 29){
                    Price = state.ItemPrice.OOO[2];
                }
                if (state.ItemCounter >= 30){
                    Price = state.ItemPrice.OOO[3];
                }
            }

            return Price;
        }
    },
}
