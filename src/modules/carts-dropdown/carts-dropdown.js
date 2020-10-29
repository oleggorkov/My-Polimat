window.addEventListener('load',function () {
    if (document.querySelector('.carts-dropdown')){
        document.querySelectorAll('.carts-dropdown').forEach(el => {
            const DropdownCase = el.querySelector('.carts-dropdown__wrapper');
            const DropdownButton = el.querySelector('.carts-dropdown__btn');
            const Carts = el.querySelectorAll('.cart');

            const CurrentHeight = 3 * 235;
            const MaxHeight = Carts.length * 235;

            if (DropdownButton){
                DropdownCase.style.maxHeight = `${CurrentHeight}px`;

                DropdownButton.addEventListener('click', () => {
                    DropdownCase.classList.toggle('carts-dropdown__wrapper--active');

                    if ( DropdownCase.classList.contains('carts-dropdown__wrapper--active')){
                        DropdownButton.innerHTML = 'Скрыть';
                        DropdownCase.style.maxHeight = `${MaxHeight}px`;
                    } else {
                        DropdownButton.innerHTML = 'Ещё товары';
                        DropdownCase.style.maxHeight = `${CurrentHeight}px`;
                    }
                })
            }
        })
    }
});