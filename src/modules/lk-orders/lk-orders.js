import $ from 'jquery'
import PopUp from '../pop-up/pop-up';

export default function lkOrdersSeeAll() {
    let $hiddenItem = $('.lk-orders-item__product-item--hidden')
    let $seeAllBtn = $('.lk-orders-item__see-all')

    $seeAllBtn.on('click', function(){
        $hiddenItem.slideToggle({
            duration: 200,
            start: function() {
              $(this).css('display','flex');
            }
          });
        if ($(this).text() == 'Показать все товары'){
            $(this).text('Скрыть');
        } else {
            $(this).text('Показать все товары');
        }
    })
}
window.addEventListener('load',function () {
    let lkOrders = document.querySelector('.lk-orders');
    if (lkOrders) {
        let cancelOrders = lkOrders.querySelectorAll('.lk-orders-item__link--cancel');
        cancelOrders.forEach((item)=>{
            item.addEventListener('click', (e)=>{
                let orderNumber = e.currentTarget.parentNode.parentNode.parentNode.querySelector('.lk-orders-item__act-order-number');
                let orderDate = e.currentTarget.parentNode.parentNode.parentNode.querySelector('.lk-orders-item__act-order-date');
                new PopUp({
                    typeOfContent: 'cancel-order',
                    orderNumber: orderNumber.innerText,
                    orderDate: orderDate.innerText
                });
            })
        });
        let paidOrders = lkOrders.querySelectorAll('.lk-orders-item__btn--paid');
        paidOrders.forEach(item => {
            item.addEventListener('click', (e)=>{
                new PopUp({
                    typeOfContent: 'paid-order',
                    href: 'lk.html',
                    btnText: 'Личный кабинет'
                })
            })
        });
        let problemOrders = lkOrders.querySelectorAll('.lk-orders-item__link--problem');
        problemOrders.forEach(item => {
            item.addEventListener('click', (e)=>{
                let orderNumber = e.currentTarget.parentNode.parentNode.parentNode.querySelector('.lk-orders-item__act-order-number');
                let orderDate = e.currentTarget.parentNode.parentNode.parentNode.querySelector('.lk-orders-item__act-order-date');
                new PopUp({
                    typeOfContent: 'problem-order',
                    orderNumber: orderNumber.innerText,
                    orderDate: orderDate.innerText
                });
            });
        });
    }
});
