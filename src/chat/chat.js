class Chat {
    constructor ({el,data}){
       this.el = el;
       this.data = data || {messages: []};

    }
    render (){
        this.el.innerHTML=`
        <header class="chat__header"><span class="chat_title">Chat<span></header>
        <div class = "chat">
            ${this._getMessagesHtml()}
        </div>
          `;     
    }
    addMessage(messages){
        this.data.messages =[...this.data.messages,{author:"UNKNOWN",text:messages,date:new Date().toLocaleString()}];
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
        }).join('');
    }

}
        