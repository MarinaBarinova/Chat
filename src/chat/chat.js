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
    _getMessagesHtml(){
        return this.data.messages.map((messagesData) => {
            return `<div class="chat_messages">
            <div class = "chat_messages-flex">
            <div class = "chat_messages-author"> ${messagesData.author}</div>
            <div class = "chat_messages-data">${messagesData.date}</div>
            </div>
           <div class = "chat_messages-text">${messagesData.text}</div>
            </div>`;
        }).join("");
    }

    clearMessages() {
        this.data.messages=[];
    }

}
