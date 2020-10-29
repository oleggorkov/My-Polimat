import PopUp from "../pop-up/pop-up";
export default function changeCountProduct() {
    let productRemCount;
    let productAddCount;
    
    if (document.querySelectorAll('.product-add-count')){
        productAddCount = document.querySelectorAll('.product-add-count');
        
        productAddCount.forEach(function(item){
            item.addEventListener('click', function(){
                let productCount = this.parentElement.querySelector('.product-count');
                
                if (productCount.value < 99999) {
                    productCount.value = +productCount.value + 1 
                }
            })
        })

    }
    if (document.querySelectorAll('.product-rem-count')){
        productRemCount = document.querySelectorAll('.product-rem-count');
        
        productRemCount.forEach(function(item){
            item.addEventListener('click', function(){
                let productCount = this.parentElement.querySelector('.product-count');
                
                if (productCount.value > 0) {
                    productCount.value = +productCount.value - 1 
                }
            })
        })
    }
}

window.addEventListener('load',function () {
    if (document.querySelector('.product-block__subscribe-btn-js')){
        let subscribleBtn = document.querySelector('.product-block__subscribe-btn-js');
        subscribleBtn.addEventListener('click', ()=>{
            new PopUp({
                typeOfContent: 'subscribe',
                email: '',
                isDiscount: 'checked',
                isInStock: 'checked',
                needQuan: 20,
                goodId: 12345,
                updateGoods: ''
            })
        });
    }

    const entrepreneurButton = document.querySelector('.js-entrepreneur-btn');
    const companyButton = document.querySelector('.js-company-btn');

    if (entrepreneurButton && companyButton) {
        const entrepreneurSlide = document.querySelector('.product-price__entrepreneur');
        const companySlide = document.querySelector('.product-price__company');

        entrepreneurButton.addEventListener('click', () => {
            companyButton.classList.remove('is-active');
            entrepreneurButton.classList.add('is-active');

            companySlide.classList.remove('is-shown');
            entrepreneurSlide.classList.add('is-shown');
        });

        companyButton.addEventListener('click', () => {
            entrepreneurButton.classList.remove('is-active');
            companyButton.classList.add('is-active');

            entrepreneurSlide.classList.remove('is-shown');
            companySlide.classList.add('is-shown');
        });
    }
});