import {ChatView} from "../views/chatview.js";
import {LoginView} from "../views/loginview.js";

export class App {
    constructor(el){
        this.el = el;
        this.nickname = localStorage.getItem("nickname");
        this.viewContainer = document.createElement("div");
        this.chatView = new ChatView({
            el:this.viewContainer,
            nickname: this.nickname,
            pageSubmit: this.toggleView.bind(this)
        });
        this.loginView = new LoginView({
            el:this.viewContainer,
            pageSubmit: this.toggleView.bind(this)
        });
        this.el.append(this.viewContainer);
        this.render();
    }
    render(){
        if (this.nickname){
            this.chatView.render();
        } else {
            this.loginView.render();
        }
    }

    toggleView(view,nickname) {
        if(view == "chat") {
            localStorage.removeItem("nickname");
            this.chatView.clear();
            this.loginView.render();
        } else {
            localStorage.setItem("nickname",nickname);
            this.chatView.setNickname(nickname);
            this.chatView.render();
        }
    }



}