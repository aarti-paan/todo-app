import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, DatePipe } from '@angular/common';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, DatePipe, NgIf],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{
  id : number=0;
  todo: Todo = new Todo(this.id, '', false, new Date());

  constructor(
    private todoService : TodoDataService,
    private route : ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id!=-1){
    this.todoService.retriveTodo('aarti',this.id).subscribe(
      data => this.todo = data
    )
    }
  }
  saveTodo(){
    if(this.id==-1){
      this.todoService.createTodo('aarti',this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }else{
    this.todoService.updateTodo('aarti',this.id,this.todo).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['todos'])

      }
    )
    }
  }
 
}
