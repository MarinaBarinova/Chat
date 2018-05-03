class Login {
    constructor({el,onSubmit}){
        this.el = el;
        this.callback = onSubmit;
        this._initEvents();
        
    }

    render (){
        this.el.innerHTML = `
        <form class="logintext">
        <h4>Sign in</h4>
            <input class ="chat_login-nickname" type = "text" placeholder="please,enter your name">
            <input class = "chat_login-btn" type = "submit" value = "login">
         
        </form>
        `;
    }
    _initEvents(){
        this.el.addEventListener('submit',this._onSubmit.bind(this));
    }
    _onSubmit(event){
        event.preventDefault();
        const el=event.target;
        const nickname = el.querySelector('.chat_login-nickname').value;
        this.callback(nickname);
        el.reset();
    }
    hideform(){
        this.el.innerHTML = "";
    }

}