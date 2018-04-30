class App {
    constructor(el){
        this.el=el;
        
        this.chat=new Chat({
            el:document.createElement('div'),
            data:{
                messages:[
                    {text:'Привет!Как дела?',author:'Mary',date:'2018-04-30 17:00:00 '},
                    {text:'Привет!Хорошо',author:'Olga',date:'2018-04-30 17:02:00 '},
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