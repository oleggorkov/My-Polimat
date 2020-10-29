export default function initProductAccordions(){
    const accordions = document.querySelectorAll('.js-product-accordion');
    const accordionHeaders = document.querySelectorAll('.js-product-accordion-header');
    const accordionContents = document.querySelectorAll('.js-product-accordion-content');

    accordions.forEach(accordion => {
        const accordionHeader = accordion.querySelector('.js-product-accordion-header');
        const accordionContent = accordion.querySelector('.js-product-accordion-content');

        accordionHeader.addEventListener('click', () => {
            if (window.innerWidth < 900) {
                if (!accordionHeader.classList.contains('is-open')) {
                    accordionHeader.classList.add('is-open');
                    accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
                    accordionContent.style.opacity = 1;
                } else {
                    accordionHeader.classList.remove('is-open');
                    accordionContent.removeAttribute('style');
                }
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 900) {
            accordionHeaders.forEach(accordionHeader => {
                accordionHeader.classList.remove('is-open');
            });

            accordionContents.forEach(accordionContent => {
                accordionContent.removeAttribute('style');
            });
        }
    });
}