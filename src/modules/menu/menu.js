export default class Menu {
    constructor(options) {
        this.$el = options.$el;
        this.$toggles = options.$toggle;

        this.state = true;

        this.$toggles.addEventListener('click', () =>{
            this.ToggleMenu(this.state);
        });

        if (document.querySelector(`.${this.$el.getAttribute('data-name')}__toggles`)){
            document.querySelectorAll(`.${this.$el.getAttribute('data-name')}__toggles`).forEach(el => {
                el.addEventListener('click', () =>{
                    this.ToggleMenu(this.state);
                })
            })
        }

        /*
        document.addEventListener('click', event => {
            event.stopPropagation();

            if (this.state){
                console.log('toggle');
                if (!this.$el.contains(event.target)){
                    this.CloseMenu(this.state);
                }
            }
        })

         */
    }

    ToggleMenu(state){
        if (this.$el.classList.contains('menu--active')){
            this.CloseMenu(state);
        } else {
            this.OpenMenu(state)
        }

        setTimeout(() => {
            this.state = true;
        },500)
    }

    CloseMenu(state){
        if (state){
            this.state = false;
            this.$el.classList.remove('menu--active');

            document.body.classList.remove('stop-scrolling');

            setTimeout(() => {
                this.state = true;
            },500)
        }
    }

    OpenMenu(state){
        if (state){
            this.state = false;
            this.$el.classList.add('menu--active');

            document.body.classList.add('stop-scrolling');

            setTimeout(() => {
                this.state = true;
            },500)
        }
    }
}