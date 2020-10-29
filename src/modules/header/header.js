import $ from "jquery";

window.addEventListener('DOMContentLoaded',function () {
    const header = document.querySelector('header');

    const MobileNavigation = header.querySelector('.header__container--sub-navigation-mobile');
    const MobileCatalogBtn = header.querySelector('.header-mobile-links__toggle');
    const toggle = header.querySelector('.header-mobile-links__menu');
    const SubLists = header.querySelectorAll('.filter-module__toggle');

    let ListMainHeight = (SubLists.length * 300) + 42 + 42;

    function ListMainHeightCalc(height) {
        header.querySelector('.header__container--sub-navigation-mobile').style.maxHeight = height + 'px';
    }

    function CloseSubLists() {
        SubLists.forEach(el => {
            let SubListHeight = (el.querySelectorAll('.filter-module__toggle').length * (12 + 8)) + 32 + 8;

            if (el.hasAttribute('style')) {
                el.removeAttribute('style');
                ListMainHeightCalc(ListMainHeight -= SubListHeight);
            }
        });
    }

    toggle.addEventListener('click', function () {

        const headerWrapper = document.querySelector('.header__container--sub-navigation-wrapper');
        let main = document.querySelector('main.main');

        // if (MobileNavigation.hasAttribute('style')) {
        //     headerWrapper.classList.remove('position--lock');
        // } else {
        //     headerWrapper.classList.add('position--lock');
        // }

        if (MobileNavigation.hasAttribute('style')) {
            CloseSubLists();
            MobileNavigation.removeAttribute('style');
            MobileCatalogBtn.removeAttribute('style');
        } else {
            MobileNavigation.style.maxHeight = ListMainHeightCalc(ListMainHeight) + 'px';
            MobileCatalogBtn.style.borderRadius = '0.5rem 0.5rem 0 0'
        }
    });

    SubLists.forEach(el => {
        el.addEventListener('click', function () {
            let SubListHeight = (el.querySelectorAll('.filter-module__toggle').length * (12 + 8)) + 32 + 8;

            if (el.hasAttribute('style')) {
                ListMainHeightCalc(ListMainHeight -= SubListHeight);
                el.removeAttribute('style');
            } else {
                CloseSubLists();
                ListMainHeightCalc(ListMainHeight += SubListHeight);
                el.style.maxHeight = SubListHeight + 'px';
            }
        })
    });
    const headerContentHeight = document.querySelector('.header__container');
    const headerWrapper = document.querySelector('.header__container--sub-navigation-wrapper');
    let main = document.querySelector('main.main');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= headerContentHeight.offsetHeight) {
            headerWrapper.classList.add('position--fixed');
            // main.style.marginTop = headerWrapper.offsetHeight + 'px';
        } else {
            headerWrapper.classList.remove('position--fixed');
            // main.style.marginTop = '';
        }
    });

    //Voice Search
    /* setup vars for our trigger, form, text input and result elements */
    var $voiceTrigger = $("#voice-button");
    var $headerSearch = $("#headerSearch");
    var $searchInput = $("#search-field");
    var $result = $("#result");

    /*  set Web Speech API for Chrome or Firefox */
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    /* Check if browser support Web Speech API, remove the voice trigger if not supported */
    if (window.SpeechRecognition) {

        /* setup Speech Recognition */
        var recognition = new SpeechRecognition();
        recognition.interimResults = true;
        recognition.lang = 'ru-RU';
        recognition.addEventListener('result', _transcriptHandler);

        recognition.onerror = function(event) {
            console.log(event.error);

            /* Revert input and icon CSS if no speech is detected */
            if(event.error === 'no-speech'){
                $voiceTrigger.removeClass('active');
                $searchInput.attr("placeholder", "Поиск...");
            }
        }
    } else {
        $voiceTrigger.remove();
    }

    $(document).ready(function(){

        /* Trigger listen event when our trigger is clicked */
        $voiceTrigger.on('click touch', listenStart);
    });

    /* Our listen event */
    function listenStart(e){
        e.preventDefault();
        /* Update input and icon CSS to show that the browser is listening */
        $searchInput.attr("placeholder", "Говорите...");
        $voiceTrigger.addClass('active');
        /* Start voice recognition */
        recognition.start();
    }

    /* Parse voice input */
    function _parseTranscript(e) {
        return Array.from(e.results).map(function (result) { return result[0] }).map(function (result) { return result.transcript }).join('');
    }

    /* Convert our voice input into text and submit the form */
    function _transcriptHandler(e) {
        var speechOutput = _parseTranscript(e);
        $searchInput.val(speechOutput);
        $result.html(speechOutput);
        if (e.results[0].isFinal) {
            $headerSearch.submit();
        }
    }
});

