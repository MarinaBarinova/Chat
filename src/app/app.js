class App {
    constructor(el){
        this.el=el;
        
        this.chat=new Chat({
            el:document.createElement('div'),
            data:{
                messages:[
                    {text:'Привет!Как дела?',author:'Mary',date:new Date().toLocaleString()},
                    {text:'Привет!Хорошо',author:'Olga',date:new Date().toLocaleString()},
                ]
            }

        });
        this.form = new Form({
            el:document.createElement('div'),
            onSubmit: (message) => {
                this.chat.addMessage(message);
                this.chat.render();
            }
        });
        
        this.el.append(this.chat.el,this.form.el);
        this.render();
    }
    render(){
        this.chat.render();
        this.form.render();
    }

}