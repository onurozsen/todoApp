export class Model{
    user;
    items;

    constructor(){
        this.user = "Onur";
        this.items= [
                        new ToDoItem("Finish chapter 44", false),
                        new ToDoItem("Finish chapter 45", false),
                        new ToDoItem("Finish chapter 46", false),
                        new ToDoItem("Finish chapter 47", false),
                        new ToDoItem("Finish chapter 48 ", false),
                    ];
    }   
}


export class ToDoItem{
    description;
    status;

    constructor(description, status){
        this.description = description;
        this.status = status;
    }
}



