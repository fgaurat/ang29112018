import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todos$:Observable<Todo[]>;
  
  displayedColumns = ['id','action','done','dueDate','buttons'];

  constructor(private todoService:TodoService ) { }

  ngOnInit() {
    this.todos$ = this.todoService.findAll();
  }

  setDone(todo:Todo){
    this.todoService.save(todo).subscribe();
    
  }

  doDelete(todo:Todo) {
    this.todos$ = this.todoService.delete(todo).pipe(
      switchMap(_=>this.todoService.findAll())
    );
    
  }


}
