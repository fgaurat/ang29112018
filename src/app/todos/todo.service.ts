import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  findAll():Observable<Todo[]>{
    return this.http.get<Todo[]>(environment.url);
  }

  save(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(environment.url,todo,httpOptions);
  }

  delete(todo:Todo):Observable<Todo>{
    const url = `${environment.url}/${todo.id}`;
    return this.http.delete<Todo>(url);
  }

}
