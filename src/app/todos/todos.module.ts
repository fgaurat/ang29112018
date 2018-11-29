import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosFormComponent } from './todos-form/todos-form.component';
import { TodosMainComponent } from './todos-main/todos-main.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule,MatCheckboxModule,MatButtonModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodosMainComponent, TodosListComponent, TodosFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports:[TodosMainComponent]
})
export class TodosModule { }
