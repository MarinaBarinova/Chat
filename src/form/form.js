
export class Form {
    constructor ({el,onSubmit,selector,tmpl}){
        this.el = el;
        this.callback = onSubmit;
        this.selector = selector;
        this.tmpl = tmpl;
        this._initEvents();
    }
    render (){
        this.el.innerHTML = this.tmpl();
    }

    _initEvents(){
        this.el.addEventListener("submit",this._onSubmit.bind(this));
    }
    _onSubmit(event){
        event.preventDefault();
        const el = event.target;
        const message = el.querySelector(this.selector).value;
        this.callback(message);
        el.reset();
    }

    hideForm() {
        this.el.innerHTML="";
    }

}