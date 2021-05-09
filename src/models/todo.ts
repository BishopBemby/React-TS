import {v4 as uuidv4} from 'uuid';
class todo{
   id: string;
   text: string;

   constructor(todoText: string){
       this.text = todoText;
    //    this.id = Math.floor(Math.random() * 100).toString();
    // or
    this.id = uuidv4();
   }
}

export default todo;