class App {
    constructor(el){
        this.el=el;
        
        this.chat=new Chat({
            el:document.createElement('div'),
            data:{
                messages:[/*сервер*/]
            }

        });
        this.form = new Form({
            el:document.createElement('div'),
            onSubmit: (message) => {
                this.chat.addMessage(message);
                this.chat.render();
            }
        });
        this.login = new Login ({
            el:document.createElement("div"),
            onSubmit: (nickname) => {
                if (nickname && nickname.length > 0 ){
                    localStorage.setItem("nickname",nickname);
                    this.login.hideform ();
                    this.render();
                }
            }
        });
        this.header = document.createElement('header');
        this.el.append(this.header,this.chat.el,this.form.el,this.login.el);
        this.render();
    }
    render(){
        
        if (localStorage.getItem("nickname")){
            
            this.renderHeader(true);
            this.chat.render();
            this.form.render();
        } else {
            
            this.renderHeader();
            this.login.render ();
        }
    }

    renderHeader(user){
        this.header.innerHTML='';
        this.header.classList.add('chat__header');
        let span = document.createElement('span');
        span.classList.add("chat_title");
        span.textContent = "Chat";
        this.header.append(span);
        if(user){
            let i = document.createElement("i");
            i.className="fa fa-3x fa-sign-in";
            i.setAttribute("aria-hidden","true");
            i.addEventListener("click",()=>{
                localStorage.removeItem("nickname");
                this.chat.hideChat();
                this.form.hideForm();
                this.render();
            });
            this.header.append(i);
        } 
    }

}