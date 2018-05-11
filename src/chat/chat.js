const tmpl = window.chatTmpl;
export class Chat {
    constructor ({el,data}){
        this.el = el;
        this.data = data || {messages: []};

    }
    render (){
        this.el.innerHTML=tmpl(this.data);
    }
    addMessage(message){
        this.data.messages =[...this.data.messages,message];
    }


    clearMessages() {
        this.data.messages=[];
    }

    setMessages(messages) {
        this.data.messages = messages;
    }

}
