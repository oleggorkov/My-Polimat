
window.addEventListener('DOMContentLoaded',function () {
    if (document.querySelector('.lk-password')){
        let lkPassword = document.querySelector('.lk-password');
        let passwordWrappers = lkPassword.querySelectorAll('.lk-password__input-pass-js');
        for (let item of passwordWrappers){
            let passwordControl = item.querySelector('.inp__password-control');
            passwordControl.addEventListener('click', (e)=>{
                let passwordInput = e.currentTarget.parentNode.querySelector('.lk-password input');
                if (passwordInput.type == "password"){
                    passwordInput.type = 'text';
                } else {
                    passwordInput.type = 'password';
                }
            })
        }
    }
});