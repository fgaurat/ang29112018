import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css']
})
export class TodosFormComponent implements OnInit {
  
  todo:Todo = {
    action:"toto",
    dueDate:123,
    done:true
  }

  constructor() { }

  ngOnInit() {
  }

}
