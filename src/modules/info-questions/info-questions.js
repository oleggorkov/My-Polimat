export default function initQuestionsTabs(){
    var triggers = document.querySelectorAll('.questions__nav-item');
    triggers.forEach(function(trigger) {
        trigger.addEventListener('click', (e) =>{
            let current = e.currentTarget;
            if (!current.classList.contains('questions__nav-item--active')){
                document.querySelector('.questions__nav-item--active').classList.remove('questions__nav-item--active');
                current.classList.add('questions__nav-item--active');
                let oldActiveContent = document.querySelector('.questions__content--active');
                oldActiveContent.classList.remove('questions__content--active');
                oldActiveContent.classList.add('visually-hidden');
                let newActiveContent = document.querySelector('.questions__content[data-tab="'+current.dataset.tab+'"]');
                newActiveContent.classList.remove('visually-hidden');
                newActiveContent.classList.add('questions__content--active');
            } else {
                return
            }
        });
    });

}