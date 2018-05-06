class ChatView {
    constructor ({el,nickname}){
        this.el = el;
        this.nickname = nickname;
        this.form = new Form ({
            el:document.createElement("div"),
            onSubmit: (message) => {
                this.chat.addMessage(message);
                this.chat.render();
            },
            selector:"[name =\"message\"]",
            tmpl:window.chatTmpl

        });
        this.render();
    }

    render(){
        this.el.innerHTML = window.chatheaderTmpl();
        this.el.append(this.form.el);
        this.form.render();
    }
}
