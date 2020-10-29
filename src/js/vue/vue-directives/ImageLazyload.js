export default {
    bind: el => {
        function lazyLoadFunc (el){
            el.classList.add('image--loading');

            let loader = document.createElement('span');

            el.append(loader);

            loader.style.animation = 'loading linear 1.25s infinite';
            loader.style.webkitAnimation = 'loading linear 1.25s infinite!important';

            function LoadImage() {
                if (el.querySelector('img')){
                    let img = el.querySelector('img');

                    if (el.querySelector('source') && el.querySelector('source').dataset.srcset.length > 0){
                        el.querySelector('source').srcset = el.querySelector('source').dataset.srcset;
                        el.querySelector('source').removeAttribute('data-srcset');
                    }

                    if (img.getAttribute('data-srcset')){
                        img.srcset = img.dataset.srcset;
                        img.removeAttribute('data-srcset');
                    }

                    if (img.getAttribute('data-src')){
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }

                    img.onload = function () {
                        el.classList.remove('image--loading');
                        el.classList.add('image--loaded');
                        loader.remove();
                    };

                    img.onerror = function () {
                        console.log('Error, cannot load image');
                    }
                }

            }

            function callback(entries, observer) {
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                        LoadImage();
                        observer.unobserve(el);
                    }
                })
            }

            function CreateIntersectionObserver(){
                const options = {
                    root: null,
                    rootMargin: '100px 100px 100px 100px',
                    threshold: 0.1
                };

                const observer = new IntersectionObserver(callback, options);

                observer.observe(el);
            }

            if (!window['IntersectionObserver']){
                LoadImage();

            } else {
                CreateIntersectionObserver()
            }
        }
        lazyLoadFunc(el);
        function ProcessNewLazyLoadImg (){
            let imageNotProcessed = document.querySelectorAll('[v-image-lazy-load]');
            imageNotProcessed.forEach(item=>{
                lazyLoadFunc(item)
            })
        }
        window.ProcessNewLazyLoadImg = ProcessNewLazyLoadImg
    }
}