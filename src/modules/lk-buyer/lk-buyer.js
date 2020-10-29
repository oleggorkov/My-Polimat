import FormErrorHandler from "../../modules/form-error-handler/form-error-handler"
window.addEventListener('load',function () {
    if (document.querySelector('.lk-buyer')){
        new FormErrorHandler({
            form: document.querySelector('.lk-buyer')
        })
    }
});