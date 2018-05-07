import {Form} from "../form/form.js";
import {Chat} from "../chat/chat.js";
export class ChatView {
    constructor ({el,nickname,pageSubmit}){
        this.el = el;
        this.nickname = nickname;
        this.pageSubmit = pageSubmit;
        this.form = new Form ({
            el:document.createElement("div"),
            onSubmit: (message) => {
                this.chat.addMessage(message,this.nickname);
                this.chat.render();
            },
            selector:"[name =\"message\"]",
            tmpl:window.sendMsgTmpl

        });
        this.chat= new Chat( {
            el:document.createElement("div")
        });
    }

    render(){
        this.el.innerHTML = window.chatheaderTmpl();
        this.el.append(this.chat.el,this.form.el);
        this.el.querySelector(".fa-sign-in").addEventListener("click",()=>{this.pageSubmit("chat");});
        this.chat.render();
        this.form.render();
    }

    setNickname(nickname) {
        this.nickname = nickname;
    }

    clear() {
        this.nickname = null;
        this.chat.clearMessages();
    }

}
