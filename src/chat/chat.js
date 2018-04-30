class Chat {
    constructor ({el,data}){
       this.el = el;
       this.data = data || {messages: []};

    }
    render (){
        this.el.innerHTML=`
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
            ${messagesData.author}:${messagesData.text}:${messagesData.date}
            </div>`;
        }).join('');
    }

}
        