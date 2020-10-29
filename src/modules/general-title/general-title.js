import PopUp from "../pop-up/pop-up";
window.addEventListener('DOMContentLoaded',function () {
    if (document.querySelector('.general-title__video-js')){
        let playVideo = document.querySelector('.general-title__video-js');
        playVideo.addEventListener('click', (e)=>{
            new PopUp({
                typeOfContent: 'play-video',
                link: 'https://www.youtube.com/embed/D9D83HXeCp4'
            });
        });
    }
});