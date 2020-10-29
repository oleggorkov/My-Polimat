window.addEventListener('load',() => {
   if (document.querySelector('.filter-module')){
       const DropdownCases = document.querySelectorAll('.filter-module ul li');
       let FilterMenu = ()=>{
           DropdownCases.forEach(el => {
               const ToggleButton = el.querySelector('.filter-module__toggle');
               const DropdownWrapper = el.querySelector('.filter-module__wrapper');
               const DropdownCheckbox = el.querySelector('.filter-module__block');
               // debugger
               // const ShowQuan = DropdownWrapper.querySelector('.filter-module__show-quan-found');
               let DropdownWrapperHeight;


               function ToggleDropdownCase(AnimateState) {

                   if (el.querySelector('.filter-module__inner-js')){
                       DropdownWrapperHeight = el.querySelector('.filter-module__inner-js').clientHeight;
                   }
                   ToggleButton.classList.toggle('filter-module__toggle--active');
                   DropdownWrapper.classList.toggle('filter-module__wrapper--active');
                   DropdownWrapper.style.overflow = 'hidden';
                   if (AnimateState){
                       DropdownWrapper.style.transition = `max-height ease 0.5s, padding-bottom ease 0.5s`;
                   }

                   if (DropdownWrapper.classList.contains('filter-module__wrapper--active')){

                       DropdownWrapper.style.maxHeight = `${DropdownWrapperHeight}px`;
                       setTimeout(function () {
                           if (DropdownWrapper.classList.contains('filter-module__wrapper--active')){
                               DropdownWrapper.style.overflow = 'visible';
                           }
                       }, 500)
                   } else {
                       DropdownWrapper.style.transition = `max-height ease 0.35s, padding-bottom ease 0.35s`;
                       DropdownWrapper.style.maxHeight = `${0}px`;
                       DropdownWrapper.style.overflow = 'hidden';
                   }

                   DropdownCheckbox.classList.toggle('filter-module__block--active');
               }

               if (el.hasAttribute('data-opened')){
                   ToggleDropdownCase(false);
               }

               if (ToggleButton){
                   ToggleButton.addEventListener('click', () => {
                       ToggleDropdownCase(true);
                   })
               }
           })
       };
       FilterMenu()
   }
});