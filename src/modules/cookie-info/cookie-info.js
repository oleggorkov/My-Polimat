export default class CookieInfo {
    constructor(options) {
        let divApp = document.querySelector('div#app');
        if (document.querySelector('.cookie-info')){
            this.cookieArea = document.querySelector('.cookie-info');
            this.cookieArea.classList.remove('cookie-info__none');
        } else {
            this.cookieArea = document.createElement('div');
            this.cookieArea.classList.add('cookie-info');
            this.cookieArea.innerHTML = `
            <div class="cookie-info__wrapper">
                <p class="cookie-info__text">Мы cохраняем файлы cookie: это помогает сайту работать лучше. Если Вы продолжите использовать сайт, мы будем считать, что Вас это устраивает.</p> 
                <div class="cookie-info__ok">Ок</div>
                <div class="cookie-info__close"></div>
            </div>
        `;
        }

        this.cookieArea.querySelector('.cookie-info__ok').addEventListener('click', ()=>{
            this.CloseCookie()
        });
        this.cookieArea.querySelector('.cookie-info__close').addEventListener('click', ()=>{
            this.CloseCookie()
        });
        divApp.appendChild(this.cookieArea);
    }

    CloseCookie(){
        this.cookieArea.classList.add('cookie-info__none');
        return 'cookie is close'
    };
}