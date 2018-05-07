import {Form} from "../form/form.js";
export class LoginView {
    constructor ({el,pageSubmit}){
        this.el = el;
        this.pageSubmit = pageSubmit;
        this.form = new Form ({
            el:document.createElement("div"),
            onSubmit: (nickname) => {
                if (nickname && nickname.length > 0 ){
                    this.pageSubmit("login",nickname);
                }
            },
            selector:".chat_login-nickname",
            tmpl:window.loginTmpl

        });
    }

    render(){
        this.el.innerHTML = window.loginheaderTmpl();
        this.el.append(this.form.el);
        this.form.render();
    }
}
