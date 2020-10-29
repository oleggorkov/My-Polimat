window.addEventListener('load',function () {
   let subscribe = document.querySelectorAll('.subscribe-btn-on-main');
   subscribe.forEach(item=>{
       item.addEventListener('click', ()=>{
           new PopUp({
               typeOfContent: 'info',
               caption: 'Вы успешно подписаны на рассылку',
               text: ''
           })
       })
   })
});