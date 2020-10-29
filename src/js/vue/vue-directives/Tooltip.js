export default {
    bind(el,{value}){
        el.style.position = 'relative';

        const Tooltip = document.createElement('div');

        let CreateTimeout,
            RemoveTimeout;

        function CreateTooltip(){
            Tooltip.classList.add('helper-text-button-hover');
            Tooltip.innerHTML = value;

            el.appendChild(Tooltip);

            CreateTimeout = setTimeout(() => {
                Tooltip.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                Tooltip.style.color = 'rgba(121, 126, 135, 1)';
                Tooltip.style.border = '1px solid rgba(204, 205, 209, 1)';
            },500);
        }

        function RemoveTooltip(){
            Tooltip.removeAttribute('style');

            RemoveTimeout = setTimeout(() => {
                Tooltip.remove();
            },500);

            if (CreateTimeout){
                clearTimeout(CreateTimeout);
            }
            if (RemoveTimeout){
                clearTimeout(RemoveTimeout);
            }
        }

        el.addEventListener('mouseenter',function () {
            CreateTooltip();
            //console.log('over');
        });
        el.addEventListener('mouseleave',function () {
            RemoveTooltip();
            //console.log('leave');
        })
    }
}