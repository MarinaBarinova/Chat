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
                this.login.addMessage(nickname);
                this.login.render();
            }
        });
        
        this.el.append(this.chat.el,this.form.el,this.login.el);
        this.render();
    }
    render(){
        if (localStorage.getItem("nickname")){
            this.chat.render();
            this.form.render();
        } else {
            this.login.render ();
        }
                
        
       
    }

}