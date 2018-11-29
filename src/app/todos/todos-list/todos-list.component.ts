import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import { Todo } from '../todo';
import { MessageBusService } from 'src/app/message-bus.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todos$:Observable<Todo[]>;
  
  displayedColumns = ['id','action','done','dueDate','buttons'];

  constructor(private todoService:TodoService,private messageBus:MessageBusService ) { }

  ngOnInit() {
    //this.todos$ = this.todoService.findAll();  
    
    this.messageBus.bus$.subscribe(msg=> 
      this.todos$ = this.todoService.findAll()
    );
    
    this.messageBus.fireRefresh();
    
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
