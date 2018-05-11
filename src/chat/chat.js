const tmpl = window.chatTmpl;
export class Chat {
    constructor ({el,data}){
        this.el = el;
        this.data = data || {messages: []};

    }
    render (){
        this.el.innerHTML=tmpl(this.data);
    }
    addMessage(messages,nickname){
        this.data.messages =[...this.data.messages,{author:nickname,text:messages,date:new Date().toLocaleString()}];
    }


    clearMessages() {
        this.data.messages=[];
    }

}
