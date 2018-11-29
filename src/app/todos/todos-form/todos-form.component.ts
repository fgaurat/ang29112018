import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../todo.service';
import { MessageBusService } from 'src/app/message-bus.service';


@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css']
})
export class TodosFormComponent implements OnInit {
  
  todoForm = this.fb.group({
    action:[''],
    dueDate:[''],
    done:['']
  });

  constructor(
      private fb: FormBuilder, 
      private todoService:TodoService,
      private messageBus: MessageBusService
      ) { }
  
  
  
  ngOnInit() {
/*
    this.todoForm.valueChanges.subscribe(data => {
      console.log(data);
    });*/
    this.todoForm.patchValue({action:"tutu"});
  }
  
  onSubmit() {

    const formValue = this.todoForm.value;
    const theDate = new Date(formValue.dueDate);

    const todo = {
      action:formValue.action,
      dueDate:theDate.getTime(),
      done:formValue.done
    }    

    this.todoService.save(todo)
            .subscribe(_ => this.messageBus.fireRefresh());
    
  }
}
