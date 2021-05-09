class todo{
   id: string;
   text: string;

   constructor(todoText: string){
       this.text = todoText;
       this.id = Math.floor(Math.random() * 100).toString();
   }
}

export default todo;