export default class FormErrorHandler {
    constructor(options){
        this.form = options.form;
        if (!this.form.querySelector('.btn-form-submit')){
            return console.error('on handlers has not submit btn with ')
        }
        this.actionAfter = options.actionAfter;
        this.submitBtn = this.form.querySelector('.btn-form-submit');
        this.emailRegValid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        this.submitBtn.addEventListener('click', (e)=>{
            this.requireInputs = this.form.querySelectorAll('[data-require]');
            if (this.requireInputs.length == 0){
                console.log('has not attributes "input[data-require]" on this form')
            }
            this.requireInputs.forEach(item=>{
                if (item.offsetWidth > 0 && item.offsetHeight > 0 && !item.hasAttribute('disabled')){
                    this.isInputValid(item);
                    item.addEventListener('blur', (e)=>{
                        this.isInputValid(e.currentTarget)
                    })
                }
            });
            this.isValidateForm();
        })
    }
    isInputValid(input){
        if (input.hasAttribute('data-email')){
            if (this.emailRegValid.test(input.value) == false){ //email validation check
                input.parentNode.classList.remove('inp__wrapper--valid');
                input.parentNode.classList.add('inp__wrapper--error');
            } else {
                input.parentNode.classList.remove('inp__wrapper--error');
                input.parentNode.classList.add('inp__wrapper--valid');
            }
            return
        }
        if (input.value == '' || (input.getAttribute('data-require-length') > input.value.length && input.hasAttribute('data-require-length'))){
            input.parentNode.classList.add('inp__wrapper--error');
            input.parentNode.classList.remove('inp__wrapper--valid');

        } else {
            input.parentNode.classList.remove('inp__wrapper--error');
            input.parentNode.classList.add('inp__wrapper--valid');
            return true
        }

    };
    isValidateForm(){
        if (!this.form.querySelector('.inp__wrapper--error')){
            this.form.submit();
            if (this.actionAfter != undefined){
                this.actionAfter();
            }
        }
    }
}