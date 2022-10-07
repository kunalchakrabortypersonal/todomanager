import { LightningElement , track } from 'lwc';

export default class Todomanager extends LightningElement {
@track time = "00";
@track greeting ="Good Evening ";
whatsup ="What is your main focus today?";
@track todos =[];

connectedCallback(){
    this.getTime();

    setInterval( () =>{
        this.getTime();
    },1000)
}


getTime(){
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    
    this.time = `${this.setHour(hour)}:${this.setDoubledigit(min)}:${this.setSeconds(sec)} ${this.setMidday(hour)}`;
    this.setGreeting(hour);
}

setHour(hour){
if(hour < 12)
        return "0"+hour;
else if (hour == 0)
        return "00";
else 
        return hour-12;


}

setSeconds(sec){
 return sec < 10? "0"+sec : sec;
}

setMidday(hour){
    return hour >=12 ? "PM" : "AM" ;
}

setDoubledigit(digit){
    return digit < 10 ? "0"+digit : digit ;
}

setGreeting(hour){
    if(hour < 12){
            this.greeting = "Good Morning";
    }
    else if(hour>=12 && hour < 17){
        this.greeting = "Good Aftrernoon";
    }
    else 
        this.greeting = "Good Evening";
}
addtodohandler(){
    const input = this.template.querySelector("lightning-input");
    console.log('input text', input.value);
    
    const todo ={
        todoid: this.todos.length,
        todoName: input.value,
        done: false,
        todoDate : new Date() 
    };
    this.todos.push(todo);
    
    input.value ="";
}
get upcomingTask(){
   return this.todos && this.todos.length ? this.todos.filter(todo => !todo.done) : [];
}
get completedTask(){
    return this.todos && this.todos.length ? this.todos.filter(todo => todo.done) : [];
}
updatehandler(){
    const ID =get(todo.todoid);
    for ( const obj of todos)
    {
        if(obj.todoid == ID){
            obj.done = true;
            break;
        }
    }

}
}