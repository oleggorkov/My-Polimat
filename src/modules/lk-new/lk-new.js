window.addEventListener('load',function () {
    let formLkNew = document.querySelector('form.lk-new');
    if (!formLkNew){
        return
    }
    let actualAddress = formLkNew.querySelector('.lk-new__form-flex--actual-address-js');
    let isSameAddress = formLkNew.querySelector('#lk-new__form-equal-legal-address');
    let inputs = actualAddress.querySelectorAll('.lk-new__inp');
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
    let radioIp = formLkNew.querySelector('#radio-private');
    radioIp.addEventListener('click', ()=>{
        setValidationLength(12)
    });

    let radioOOO = formLkNew.querySelector('#radio-company');
    radioOOO.addEventListener('click', ()=>setValidationLength(10));

    let setValidationLength = (numb)=>{
        let inputInn = formLkNew.querySelector('#lk-new__inp-inn');
        inputInn.dataset.requireLength = numb;
    };
});