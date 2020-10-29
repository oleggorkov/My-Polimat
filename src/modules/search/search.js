import $ from "jquery";

export default function initSearchTabs(){
    var triggers = document.querySelectorAll('.search__nav-item');
    triggers.forEach(function(trigger) {
        trigger.addEventListener('click', (e) =>{
            let current = e.currentTarget;
            if (!current.classList.contains('search__nav-item--active')){
                document.querySelector('.search__nav-item--active').classList.remove('search__nav-item--active');
                current.classList.add('search__nav-item--active');
                let oldActiveContent = document.querySelector('.search__content--active');
                oldActiveContent.classList.remove('search__content--active');
                oldActiveContent.classList.add('visually-hidden');
                let newActiveContent = document.querySelector('.search__content[data-tab="'+current.dataset.tab+'"]');
                newActiveContent.classList.remove('visually-hidden');
                newActiveContent.classList.add('search__content--active');
            } else {
                return
            }
        });
    });

}

window.addEventListener('DOMContentLoaded',function () {

    //Voice Search
    /* setup vars for our trigger, form, text input and result elements */
    var $voiceSearch = $(".search-btn");
    var $searchForm = $(".search__input-area");
    var $searchInputField = $(".inp--default");
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
                $voiceSearch.removeClass('active');
                $searchInputField.attr("placeholder", "Поиск...");
            }
        }
    } else {
        $voiceSearch.remove();
    }

    $(document).ready(function(){

        /* Trigger listen event when our trigger is clicked */
        $voiceSearch.on('click touch', listenStart);
    });

    /* Our listen event */
    function listenStart(e){
        e.preventDefault();
        /* Update input and icon CSS to show that the browser is listening */
        $searchInputField.attr("placeholder", "Говорите...");
        $voiceSearch.addClass('active');
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
        $searchInputField.val(speechOutput);
        $result.html(speechOutput);
        if (e.results[0].isFinal) {
            $searchForm.submit();
        }
    }
});

