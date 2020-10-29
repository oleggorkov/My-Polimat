export default function followLkMenuMobile(){
    let lkMenuMobile = document.querySelector('.lk-menu-mobile select');
    if (lkMenuMobile){
        lkMenuMobile.onchange = function(){
            document.location=this.options[this.selectedIndex].value
        }
    }
}