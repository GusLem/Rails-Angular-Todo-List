import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl:string = 'http://localhost:3000/todos';

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  toggleCompleted(todo: Todo):Observable<any> {
    const url = this.todosUrl+'/'+todo.id;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo: Todo):Observable<any> {
    const url = this.todosUrl+'/'+todo.id;
    return this.http.delete<Todo>(url, httpOptions);
  }

  addTodo (todo: Todo):Observable<any> {
    return this.http.post(this.todosUrl, todo, httpOptions);
  }
}
