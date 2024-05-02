import { Component, OnInit } from '@angular/core';
import {NgIf, NgFor, UpperCasePipe, DatePipe} from '@angular/common'; 
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';



export class Todo {
 constructor(
  public id : number,
  public description : string,
  public done : boolean,
  public targetDate : Date
 ){}
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit{

  todos:Todo[] = []
  message:string=''
    
  //   [new Todo(1, 'Learn to Dance', false, new Date()),
  //  new Todo(2, 'Become a expert at angular', false, new Date()), 
  //  new Todo(3, 'visit India', false, new Date())]

  constructor(
    private todoService : TodoDataService,
    private router: Router
  ){}

ngOnInit(): void {
 this.refreshTodos()
}

refreshTodos(){
  this.todoService.retriveAllTodos('aarti').subscribe(
    response=> {
      console.log(response);
      this.todos=response;
    }
  )
}

deleteTodo(id:number){
  console.log(`delete todo ${id}`);
  this.todoService.deleteTodo('aarti',id).subscribe(
    response => {
      console.log(response);
      this.message=`Delete of Todo ${id} Successful!`
      this.refreshTodos();
    }
  )
}

updateTodo(id:number){
console.log(`update ${id}`);
this.router.navigate(['todos',id])
}

addTodo(){
  this.router.navigate(['todos',-1])
}

}
