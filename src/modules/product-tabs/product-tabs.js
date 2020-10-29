export default function initProductTabs(){
    var triggers = document.querySelectorAll('.tab-btn');

    triggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            var id = this.getAttribute('data-tab'),
                content = document.querySelector('.tab-content[data-tab="'+id+'"]'),
                activeTrigger = document.querySelector('.tab-btn.active'),
                activeContent = document.querySelector('.tab-content.active');
            
            activeTrigger.classList.remove('active');
            trigger.classList.add('active');
            
            activeContent.classList.remove('active');
            content.classList.add('active');
        });
    });
}