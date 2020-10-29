window.addEventListener('load',function () {
    let formLkNew = document.querySelector('form.lk-company');
    if (!formLkNew){
        return
    }
    let isSameAddress = formLkNew.querySelector('#lk-company__form-equal-legal-address');
    let actualAddress = formLkNew.querySelector('.lk-company__form-flex--actual-address-js');
    let inputs = actualAddress.querySelectorAll('.lk-company__inp');
    if (isSameAddress.checked){
        inputs.forEach(item=>{
            item.setAttribute('disabled', true)
        })
    }
    isSameAddress.addEventListener('change', (e)=>{
        toggleDisabled(e.currentTarget.checked)
    });
    let toggleDisabled = (is) => {
        if (is){
            inputs.forEach(item=>{
                item.parentNode.classList.remove('inp__wrapper--error');
                item.parentNode.classList.remove('inp__wrapper--valid');
                item.setAttribute('disabled', is)
            })
        } else {
            inputs.forEach(item=>{
                item.removeAttribute('disabled')
            })
        }
    };
});