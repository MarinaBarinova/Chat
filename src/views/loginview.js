class LoginView {
    constructor ({el}){
        this.el = el;
        this.form = new Form ({
            el:document.createElement("div"),
            onSubmit: (nickname) => {
                if (nickname && nickname.length > 0 ){
                    localStorage.setItem("nickname",nickname);
                    this.login.hideform ();
                    this.render();
                }
            },
            selector:".chat_login-nickname",
            tmpl:window.loginTmpl

        });
        this.render();
    }

    render(){
        this.el.innerHTML = window.loginheaderTmpl();
        this.el.append(this.form.el);
        this.form.render();
    }
}
